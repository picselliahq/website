"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
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
  socialProof,
  primaryButtonText,
  primaryButtonUrl,
  secondaryLinkText,
  secondaryLinkUrl,
  blogSlug,
  ctaPosition,
}: BlogInlineCTAProps) {
  const t = useTranslations("blogCta");
  const locale = useLocale();

  // On FR articles, override the MDX-supplied English copy with a French
  // variant chosen by position: mid = demo, end = trial.
  const variant: "demo" | "trial" =
    locale === "fr" && ctaPosition === "end" ? "trial" : "demo";
  const useLocalizedVariant = locale === "fr";

  const resolvedHeadline = useLocalizedVariant
    ? t(`inlineCTA.variants.${variant}.headline`)
    : headline;
  const resolvedDescription = useLocalizedVariant
    ? t(`inlineCTA.variants.${variant}.description`)
    : description;
  const resolvedPrimaryButtonText = useLocalizedVariant
    ? t(`inlineCTA.variants.${variant}.primaryButtonText`)
    : primaryButtonText;
  const resolvedPrimaryButtonUrl = useLocalizedVariant
    ? t(`inlineCTA.variants.${variant}.primaryButtonUrl`)
    : primaryButtonUrl;
  const resolvedSecondaryLinkUrl =
    secondaryLinkUrl ?? (locale === "fr" ? "/fr/demo" : "/demo");
  const resolvedSocialProof = socialProof ?? t("inlineCTA.socialProof");
  const resolvedSecondaryLinkText =
    secondaryLinkText ?? t("inlineCTA.secondaryLinkText");

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
            cta_variant: resolvedHeadline,
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
  }, [blogSlug, ctaPosition, resolvedHeadline]);

  const primaryEvent =
    useLocalizedVariant && variant === "trial"
      ? "blog_cta_trial_clicked"
      : "blog_cta_demo_clicked";

  const handlePrimaryClick = () => {
    const props = {
      blog_slug: blogSlug,
      cta_position: ctaPosition,
      cta_variant: resolvedHeadline,
      destination_url: resolvedPrimaryButtonUrl,
      cta_version: "v2",
      page_url: window.location.href,
    };
    captureEvent(primaryEvent, props);
    track(primaryEvent, props);
  };

  const handleSecondaryClick = () => {
    const props = {
      blog_slug: blogSlug,
      cta_position: ctaPosition,
      cta_variant: resolvedHeadline,
      cta_type: "secondary",
      destination_url: resolvedSecondaryLinkUrl,
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
        {resolvedHeadline}
      </h4>
      <p className="text-sm sm:text-base text-secondary mb-3 leading-relaxed">
        {resolvedDescription}
      </p>
      {resolvedSocialProof && (
        <p
          className="text-xs font-medium mb-5 tracking-wide"
          style={{ color: "var(--system-gray)" }}
        >
          {resolvedSocialProof}
        </p>
      )}

      <div className="flex flex-col gap-3">
        <Link
          href={resolvedPrimaryButtonUrl}
          onClick={handlePrimaryClick}
          className="btn-primary w-full sm:w-auto sm:inline-flex px-8 text-center"
          style={{
            paddingTop: "14px",
            paddingBottom: "14px",
            fontSize: "0.9375rem",
            fontWeight: 600,
          }}
        >
          {resolvedPrimaryButtonText}
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
          href={resolvedSecondaryLinkUrl}
          onClick={handleSecondaryClick}
          className="text-sm underline underline-offset-2 transition-opacity hover:opacity-80 w-fit"
          style={{ color: "var(--system-gray)" }}
        >
          {resolvedSecondaryLinkText}
        </Link>
      </div>
    </div>
  );
}
