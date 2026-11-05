// Client-side lead attribution.
//
// Records where a visitor came from in a first-party cookie (`pcs_attr`) so
// the source survives until they convert, then rides along with every form
// submission to Twenty. Runs on its own, independent of PostHog's deferred
// init, so attribution still works when PostHog is blocked.
//
// Cookie shape: { first: Touch, last: Touch }
//   first: written once, never overwritten.
//   last:  the last NON-direct touch. Only replaced when a visit carries an
//          external signal (UTM, click ID, or a referrer that isn't ours).

import posthog from "posthog-js";

export type Channel =
  | "paid"
  | "email"
  | "social"
  | "ai"
  | "organic_search"
  | "utm_other"
  | "referral"
  | "direct";

export type Touch = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  clickId?: string;
  referrer?: string;
  landingPage?: string;
  channel?: Channel;
  at?: string;
};

export type Attribution = {
  first?: Touch;
  last?: Touch;
  /** First page of the current browser session (sessionStorage). */
  landingPage?: string;
  posthogDistinctId?: string;
};

const COOKIE_NAME = "pcs_attr";
const COOKIE_MAX_AGE_S = 180 * 24 * 60 * 60;
const SESSION_LANDING_KEY = "pcs_landing";
const MAX_LEN = 200;

const OWN_HOSTS = new Set([
  "picsellia.com",
  "www.picsellia.com",
  "app.picsellia.com",
  "documentation.picsellia.com",
  "picsellia.fr",
]);

const AI_HOSTS = new Set([
  "chatgpt.com",
  "chat.openai.com",
  "gemini.google.com",
  "perplexity.ai",
  "www.perplexity.ai",
  "claude.ai",
  "copilot.microsoft.com",
  "duck.ai",
  "www.doubao.com",
  "chat.mistral.ai",
]);

/** Matches `domain` itself or any subdomain of it. */
function isDomain(host: string, domain: string): boolean {
  return host === domain || host.endsWith(`.${domain}`);
}

/** Matches `name.<any tld>` and its subdomains, e.g. google.com, www.google.co.uk. */
function isBrand(host: string, name: string): boolean {
  return new RegExp(`(^|\\.)${name}\\.[a-z.]+$`).test(host);
}

function isSearchEngine(host: string): boolean {
  return (
    isBrand(host, "google") ||
    isBrand(host, "yahoo") ||
    isBrand(host, "yandex") ||
    ["bing.com", "duckduckgo.com", "ecosia.org", "qwant.com", "baidu.com"].some((d) => isDomain(host, d))
  );
}

function isSocialNetwork(host: string): boolean {
  return (
    host === "l.instagram.com" ||
    ["linkedin.com", "lnkd.in", "facebook.com", "x.com", "t.co", "reddit.com", "youtube.com"].some((d) =>
      isDomain(host, d),
    )
  );
}

function isOwnHost(host: string): boolean {
  if (OWN_HOSTS.has(host) || host.endsWith(".translate.goog")) return true;
  // The current host (preview deployments, localhost) is always internal.
  return typeof window !== "undefined" && host === window.location.hostname;
}

const trunc = (value: string | null | undefined): string | undefined =>
  value ? value.slice(0, MAX_LEN) : undefined;

function externalReferrerHost(): string | undefined {
  if (!document.referrer) return undefined;
  try {
    const host = new URL(document.referrer).hostname.toLowerCase();
    return host && !isOwnHost(host) ? host : undefined;
  } catch {
    return undefined;
  }
}

/** Builds the touch for the current page load. `external` is false for direct/internal visits. */
function currentTouch(): { touch: Touch; external: boolean } {
  const params = new URLSearchParams(window.location.search);
  const utmSource = trunc(params.get("utm_source"));
  const medium = trunc(params.get("utm_medium"));
  const campaign = trunc(params.get("utm_campaign"));
  const content = trunc(params.get("utm_content"));
  const term = trunc(params.get("utm_term"));
  const clickId = trunc(params.get("gclid") || params.get("msclkid") || params.get("li_fat_id"));
  const referrer = trunc(externalReferrerHost());

  const touch: Touch = {
    source: utmSource ?? referrer,
    medium,
    campaign,
    content,
    term,
    clickId,
    referrer,
    landingPage: trunc(window.location.pathname),
    at: new Date().toISOString(),
  };
  touch.channel = channelFor(touch, Boolean(utmSource || medium || campaign || content || term));

  const external = Boolean(utmSource || medium || campaign || content || term || clickId || referrer);
  return { touch, external };
}

function channelFor(touch: Touch, hasUtm: boolean): Channel {
  const medium = touch.medium?.toLowerCase() ?? "";
  const ref = touch.referrer ?? "";

  if (touch.clickId || /cpc|ppc|paid|display/.test(medium)) return "paid";
  if (/email|newsletter/.test(medium)) return "email";
  if (/social|dm/.test(medium)) return "social";
  if (ref && AI_HOSTS.has(ref)) return "ai";
  if (ref && isSearchEngine(ref)) return "organic_search";
  if (ref && isSocialNetwork(ref)) return "social";
  if (hasUtm) return "utm_other";
  if (ref) return "referral";
  return "direct";
}

function readCookie(): { first?: Touch; last?: Touch } {
  if (typeof document === "undefined") return {};
  const raw = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
    ?.slice(COOKIE_NAME.length + 1);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

const MAX_COOKIE_BYTES = 3800;

function shrink(touch: Touch | undefined, max: number): Touch | undefined {
  if (!touch) return touch;
  return Object.fromEntries(
    Object.entries(touch).map(([k, v]) => [k, typeof v === "string" ? v.slice(0, max) : v]),
  ) as Touch;
}

function writeCookie(value: { first?: Touch; last?: Touch }) {
  let encoded = encodeURIComponent(JSON.stringify(value));
  // Browsers drop cookies over ~4KB. Only reachable with absurdly long UTMs.
  if (encoded.length > MAX_COOKIE_BYTES) {
    encoded = encodeURIComponent(JSON.stringify({ first: shrink(value.first, 60), last: shrink(value.last, 60) }));
  }
  // Secure is dropped on plain-http dev servers, where the browser would
  // otherwise refuse the cookie.
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${encoded}; Max-Age=${COOKIE_MAX_AGE_S}; Path=/; SameSite=Lax${secure}`;
}

function isReload(): boolean {
  const nav = performance.getEntriesByType?.("navigation")[0] as PerformanceNavigationTiming | undefined;
  return nav?.type === "reload";
}

let initialized = false;

/**
 * Records the current visit. Call once per full page load (client-side
 * navigations keep the original document.referrer and carry no new signal).
 */
export function initAttribution() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  try {
    if (!sessionStorage.getItem(SESSION_LANDING_KEY)) {
      sessionStorage.setItem(SESSION_LANDING_KEY, trunc(window.location.pathname) ?? "/");
    }
  } catch {
    // sessionStorage unavailable (privacy mode, sandboxed iframe): skip.
  }

  try {
    // A refresh replays the same referrer and URL; it is not a new touch.
    if (isReload()) return;

    const stored = readCookie();
    const { touch, external } = currentTouch();
    let changed = false;

    if (!stored.first) {
      stored.first = touch;
      // Seed `last` too, so a lead whose only visit was direct still has one.
      stored.last = touch;
      changed = true;
    } else if (external) {
      stored.last = touch;
      changed = true;
    }

    if (changed) writeCookie(stored);
  } catch (error) {
    console.warn("Attribution capture failed:", error);
  }
}

/** Attribution payload sent with every form submission. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  const { first, last } = readCookie();
  let landingPage: string | undefined;
  try {
    landingPage = sessionStorage.getItem(SESSION_LANDING_KEY) ?? undefined;
  } catch {
    landingPage = undefined;
  }

  let posthogDistinctId: string | undefined;
  try {
    posthogDistinctId = posthog.__loaded ? posthog.get_distinct_id() : undefined;
  } catch {
    posthogDistinctId = undefined;
  }

  return { first, last, landingPage, posthogDistinctId };
}
