"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
    defaults: "2026-01-30",
    person_profiles: "identified_only",
  });
}

function LocaleTracker() {
  useEffect(() => {
    if (typeof window === "undefined" || !posthog.__loaded) return;

    const locale = document.documentElement.lang || "en";

    // Register locale as a super property (sent with every event)
    posthog.register({ locale });

    // Set as a person property for segmentation
    posthog.setPersonPropertiesForFlags({ locale });
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
      <LocaleTracker />
      {children}
    </PHProvider>
  );
}
