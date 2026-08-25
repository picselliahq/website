"use client";

import { useEffect, useRef } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { flushQueuedEvents } from "@/lib/posthog";

let initialized = false;

/**
 * Deferred until after page load: PostHog's recorder/surveys/dead-clicks/
 * web-vitals scripts were measured 47-81% unused on initial load, competing
 * with real page content for bandwidth during first paint. Session
 * recording still starts within a moment of load — just not during it.
 */
function initPostHog() {
  if (initialized || typeof window === "undefined" || !process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return;
  }
  initialized = true;
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
    defaults: "2026-01-30",
    person_profiles: "identified_only",
    loaded: () => {
      const locale = document.documentElement.lang || "en";
      posthog.register({ locale });
      posthog.setPersonPropertiesForFlags({ locale });
      flushQueuedEvents();
    },
  });
}

function PostHogInit() {
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    if (document.readyState === "complete") {
      initPostHog();
      return;
    }
    window.addEventListener("load", initPostHog, { once: true });
    return () => window.removeEventListener("load", initPostHog);
  }, []);

  return null;
}

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  return (
    <PHProvider client={posthog}>
      <PostHogInit />
      {children}
    </PHProvider>
  );
}
