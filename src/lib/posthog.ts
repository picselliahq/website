import posthog from "posthog-js";

function getLocale(): string {
  if (typeof document !== "undefined") {
    return document.documentElement.lang || "en";
  }
  return "en";
}

type QueuedEvent = {
  event: string;
  properties?: Record<string, string | number | boolean | undefined>;
};

// PostHog init is deferred until after page load (see PostHogProvider) to
// keep it off the critical path. Events fired before it's loaded — e.g. a
// CTA clicked in the first second on a page — are queued here instead of
// silently dropped, then flushed once init completes.
const queue: QueuedEvent[] = [];

export function captureEvent(
  event: string,
  properties?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined") return;

  if (posthog.__loaded) {
    posthog.capture(event, {
      locale: getLocale(),
      ...properties,
    });
  } else {
    queue.push({ event, properties });
  }
}

/** Called once by PostHogProvider right after posthog.init() completes. */
export function flushQueuedEvents() {
  while (queue.length > 0) {
    const next = queue.shift();
    if (!next) continue;
    posthog.capture(next.event, {
      locale: getLocale(),
      ...next.properties,
    });
  }
}
