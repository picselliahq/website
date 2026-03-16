"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { captureEvent } from "@/lib/posthog";
import { track } from "@vercel/analytics";

interface BlogInlineCTAProps {
  headline: string;
  description: string;
  socialProof?: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryLinkText?: string;
  secondaryLinkUrl?: string;
  blogSlug: string;
  ctaPosition: "mid" | "end";
}

export default function BlogInlineCTA({
  headline,
  description,
  socialProof = "Join hundreds of CV engineers who ship models faster with Picsellia",
  primaryButtonText,
  primaryButtonUrl,
  secondaryLinkText = "or book a 15-min demo",
  secondaryLinkUrl = "/demo",
  blogSlug,
  ctaPosition,
}: BlogInlineCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasFiredImpression = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFiredImpression.current) {
          hasFiredImpression.current = true;
          captureEvent("blog_cta_viewed", {
            blog_slug: blogSlug,
            cta_position: ctaPosition,
            cta_variant: headline,
            cta_version: "v2",
            page_url: window.location.href,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [blogSlug, ctaPosition, headline]);

  const handlePrimaryClick = () => {
    const props = {
      blog_slug: blogSlug,
      cta_position: ctaPosition,
      cta_variant: headline,
      destination_url: primaryButtonUrl,
      cta_version: "v2",
      page_url: window.location.href,
    };
    captureEvent("blog_cta_demo_clicked", props);
    track("blog_cta_demo_clicked", props);
  };

  const handleSecondaryClick = () => {
    const props = {
      blog_slug: blogSlug,
      cta_position: ctaPosition,
      cta_variant: headline,
      cta_type: "secondary",
      destination_url: secondaryLinkUrl,
      cta_version: "v2",
      page_url: window.location.href,
    };
    captureEvent("blog_cta_demo_clicked", props);
    track("blog_cta_demo_clicked", props);
  };

  return (
    <div
      ref={ref}
      className="not-prose rounded-2xl p-6 sm:p-8 my-10 sm:my-12"
      style={{
        backgroundColor: "rgba(81, 86, 214, 0.06)",
        borderLeft: "4px solid var(--system-indigo)",
        borderTop: "1px solid rgba(81, 86, 214, 0.15)",
        borderRight: "1px solid rgba(81, 86, 214, 0.15)",
        borderBottom: "1px solid rgba(81, 86, 214, 0.15)",
      }}
    >
      <h4 className="text-xl sm:text-2xl font-bold text-label mb-2 leading-tight">
        {headline}
      </h4>
      <p className="text-sm sm:text-base text-secondary mb-3 leading-relaxed">
        {description}
      </p>
      {socialProof && (
        <p
          className="text-xs font-medium mb-5 tracking-wide"
          style={{ color: "var(--system-gray)" }}
        >
          {socialProof}
        </p>
      )}

      <div className="flex flex-col gap-3">
        <Link
          href={primaryButtonUrl}
          onClick={handlePrimaryClick}
          className="btn-primary w-full sm:w-auto sm:inline-flex px-8 text-center"
          style={{
            paddingTop: "14px",
            paddingBottom: "14px",
            fontSize: "0.9375rem",
            fontWeight: 600,
          }}
        >
          {primaryButtonText}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link
          href={secondaryLinkUrl}
          onClick={handleSecondaryClick}
          className="text-sm underline underline-offset-2 transition-opacity hover:opacity-80 w-fit"
          style={{ color: "var(--system-gray)" }}
        >
          {secondaryLinkText}
        </Link>
      </div>
    </div>
  );
}
