"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { captureEvent } from "@/lib/posthog";
import { track } from "@vercel/analytics";

export default function BlogStickyBanner({ blogSlug }: { blogSlug: string }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    if (sessionStorage.getItem("blog_banner_dismissed")) {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent >= 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("blog_banner_dismissed", "1");
  };

  const handleClick = () => {
    captureEvent("blog_cta_demo_clicked", {
      blog_slug: blogSlug,
      cta_position: "sticky_banner",
      cta_variant: "sticky_bottom_banner",
      cta_type: "secondary",
      destination_url: "/demo",
      page_url: window.location.href,
    });
    track("blog_cta_demo_clicked", {
      blog_slug: blogSlug,
      cta_position: "sticky_banner",
    });
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 flex items-center justify-center gap-4 text-sm"
      style={{
        backgroundColor: "var(--secondary-system-background)",
        borderTop: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
      }}
    >
      <span className="text-secondary hidden sm:inline">
        <strong className="text-label font-semibold">Picsellia</strong> — The
        MLOps platform for computer vision
      </span>
      <Link
        href="/demo"
        onClick={handleClick}
        className="btn-primary px-4 py-1.5 text-xs whitespace-nowrap"
      >
        Book a Demo
      </Link>
      <button
        onClick={handleDismiss}
        className="text-tertiary hover:text-secondary transition-colors p-1"
        aria-label="Dismiss banner"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 4l8 8M12 4l-8 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
