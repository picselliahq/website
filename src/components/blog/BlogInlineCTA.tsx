"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { captureEvent } from "@/lib/posthog";
import { track } from "@vercel/analytics";

interface BlogInlineCTAProps {
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  blogSlug: string;
  position: "mid" | "end";
}

export default function BlogInlineCTA({
  headline,
  description,
  ctaText,
  ctaLink,
  blogSlug,
  position,
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
            cta_position: position,
            cta_variant: headline,
            page_url: window.location.href,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [blogSlug, position, headline]);

  const handlePrimaryClick = () => {
    const props = {
      blog_slug: blogSlug,
      cta_position: position,
      cta_variant: headline,
      destination_url: ctaLink,
      page_url: window.location.href,
    };
    captureEvent("blog_cta_demo_clicked", props);
    track("blog_cta_demo_clicked", props);
  };

  const handleSecondaryClick = () => {
    const props = {
      blog_slug: blogSlug,
      cta_position: position,
      cta_variant: headline,
      cta_type: "secondary",
      destination_url: "/demo",
      page_url: window.location.href,
    };
    captureEvent("blog_cta_demo_clicked", props);
    track("blog_cta_demo_clicked", props);
  };

  return (
    <div
      ref={ref}
      className="not-prose rounded-2xl p-6 sm:p-8 my-10"
      style={{
        backgroundColor: "var(--tertiary-system-background)",
        borderLeft: "4px solid var(--picsellia-green)",
        borderTop: "1px solid var(--border)",
        borderRight: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: "var(--picsellia-green)" }}
      >
        From Picsellia
      </p>
      <h4 className="text-lg font-semibold text-label mb-2">{headline}</h4>
      <p className="text-sm text-secondary mb-5 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center items-start gap-3">
        <Link
          href={ctaLink}
          onClick={handlePrimaryClick}
          className="btn-primary px-5 py-2.5 text-sm"
        >
          {ctaText}
        </Link>
        <Link
          href="/demo"
          onClick={handleSecondaryClick}
          className="inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: "var(--picsellia-green)" }}
        >
          Book a Demo
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
