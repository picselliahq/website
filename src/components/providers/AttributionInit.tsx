"use client";

import { useEffect } from "react";
import { initAttribution } from "@/lib/attribution";

/** Records the visit's source on every full page load. Independent of PostHog. */
export default function AttributionInit() {
  useEffect(() => {
    initAttribution();
  }, []);
  return null;
}
