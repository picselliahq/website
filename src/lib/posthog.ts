import posthog from "posthog-js";

function getLocale(): string {
  if (typeof document !== "undefined") {
    return document.documentElement.lang || "en";
  }
  return "en";
}

export function captureEvent(
  event: string,
  properties?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window !== "undefined" && posthog.__loaded) {
    posthog.capture(event, {
      locale: getLocale(),
      ...properties,
    });
  }
}
