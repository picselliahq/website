// Hands the lead's name and email from the demo/trial forms to the thank-you
// pages (Cal.com prefill) through sessionStorage instead of the URL, so no
// personal data ends up in analytics, logs or referrers.

import { useSyncExternalStore } from "react";

const KEY = "pcs_lead_prefill";

export type LeadPrefill = { firstName?: string; lastName?: string; email?: string };

export function saveLeadPrefill(prefill: LeadPrefill) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(prefill));
  } catch {
    // sessionStorage unavailable: the thank-you page just won't prefill.
  }
}

function takeLeadPrefill(): LeadPrefill {
  try {
    const raw = sessionStorage.getItem(KEY);
    sessionStorage.removeItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    const str = (v: unknown) => (typeof v === "string" && v ? v : undefined);
    return { firstName: str(parsed.firstName), lastName: str(parsed.lastName), email: str(parsed.email) };
  } catch {
    return {};
  }
}

// The key is deleted as soon as it's read, so the value is cached here for
// the rest of the page's life. A newer submission in the same tab replaces it.
let cached: LeadPrefill | null = null;

function getSnapshot(): LeadPrefill {
  try {
    if (sessionStorage.getItem(KEY) !== null) cached = takeLeadPrefill();
  } catch {
    // sessionStorage unavailable: fall through to the cached/empty value.
  }
  cached ??= {};
  return cached;
}

const getServerSnapshot = (): LeadPrefill | null => null;
const subscribe = () => () => {};

/**
 * Reads the prefill once, then deletes the key. `ready` is false during SSR
 * and hydration and true right after, so callers can wait before mounting the
 * Cal.com embed. Renders fine without the key (direct visit, refresh, new tab).
 */
export function useLeadPrefill(): { ready: boolean; prefill: LeadPrefill } {
  const prefill = useSyncExternalStore<LeadPrefill | null>(subscribe, getSnapshot, getServerSnapshot);
  return { ready: prefill !== null, prefill: prefill ?? {} };
}
