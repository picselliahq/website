import posthog from "posthog-js";

function getLocale(): string {
  if (typeof document !== "undefined") {
    return document.documentElement.lang || "en";
  }
  return "en";
}

type Properties = Record<string, string | number | boolean | undefined>;

type QueuedCall =
  | { kind: "capture"; event: string; properties?: Properties }
  | { kind: "identify"; distinctId: string; properties?: Properties };

// PostHog init is deferred until after page load (see PostHogProvider) to
// keep it off the critical path. Calls made before it's loaded (a CTA clicked
// in the first second, a form submitted right away) are queued here instead
// of silently dropped, then replayed in order once init completes.
const queue: QueuedCall[] = [];

function run(call: QueuedCall) {
  if (call.kind === "identify") {
    posthog.identify(call.distinctId, call.properties);
  } else {
    posthog.capture(call.event, { locale: getLocale(), ...call.properties });
  }
}

function dispatch(call: QueuedCall) {
  if (typeof window === "undefined") return;
  if (posthog.__loaded) run(call);
  else queue.push(call);
}

export function captureEvent(event: string, properties?: Properties) {
  dispatch({ kind: "capture", event, properties });
}

/**
 * Identifies the visitor by email so their pre-conversion browsing is
 * attached to a person profile. Never pass phone numbers or message bodies.
 */
export function identifyUser(email: string, properties?: { company?: string; job_title?: string }) {
  const props: Properties = { email };
  if (properties?.company) props.company = properties.company;
  if (properties?.job_title) props.job_title = properties.job_title;
  dispatch({ kind: "identify", distinctId: email, properties: props });
}

/** Called once by PostHogProvider right after posthog.init() completes. */
export function flushQueuedEvents() {
  while (queue.length > 0) {
    const next = queue.shift();
    if (next) run(next);
  }
}
