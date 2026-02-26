"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ConversionCopy } from "@/lib/blog-cta";

export default function BlogConversionCTA({ copy }: { copy: ConversionCopy }) {
  return (
    <div
      className="rounded-2xl p-8 mb-12"
      style={{
        backgroundColor: "var(--tertiary-system-background)",
        borderLeft: "4px solid var(--picsellia-green)",
        borderTop: "1px solid var(--border)",
        borderRight: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <h3 className="text-xl font-semibold text-label mb-2">{copy.headline}</h3>
      <p className="text-sm text-secondary mb-6">{copy.subtext}</p>

      <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
        <Link
          href="/trial"
          onClick={() => track("blog_cta_trial_clicked")}
          className="btn-primary px-5 py-2.5 text-sm"
        >
          Start Free Trial
        </Link>
        <Link
          href="/demo"
          onClick={() => track("blog_cta_demo_clicked")}
          className="btn-secondary px-5 py-2.5 text-sm"
        >
          Schedule Demo
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs text-tertiary">
        <span className="flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5"
            style={{ color: "var(--picsellia-green)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          No credit card required
        </span>
        <span className="flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5"
            style={{ color: "var(--picsellia-green)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          14-day free trial
        </span>
      </div>
    </div>
  );
}
