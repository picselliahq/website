"use client";

import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { captureEvent } from "@/lib/posthog";
import { track } from "@vercel/analytics";
import { useTranslations } from "next-intl";

const customerLogos: { name: string; src: string }[] = [
  { name: "SGS", src: "/images/customers/sgs.svg" },
  { name: "RTE", src: "/images/customers/rte.svg" },
  { name: "Pellenc", src: "/images/customers/pellenc.svg" },
  { name: "Skillcorner", src: "/images/customers/skillcorner.svg" },
  { name: "Fortil", src: "/images/customers/fortil.svg" },
  { name: "Isarsoft", src: "/images/customers/isarsoft.svg" },
  { name: "Upstride", src: "/images/customers/upstride.svg" },
  { name: "Abelio", src: "/images/customers/abelio.png" },
  { name: "Altaroad", src: "/images/customers/altaroad.png" },
  { name: "Ficha", src: "/images/customers/ficha.png" },
  { name: "Roc4t", src: "/images/customers/roc4t.png" },
  { name: "SupAirVision", src: "/images/customers/supairvision.png" },
];

export default function HeroV2() {
  const t = useTranslations("home.hero");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Defer fetching/playing the hero video until after first paint so it
    // never competes with the LCP text and metrics row for bandwidth.
    // (Calling .load() here would race with .play() and can silently abort
    // playback, so we rely on .play() alone to trigger the fetch.)
    const startPlayback = () => {
      video.play().catch(() => {});
    };

    if (document.readyState === "complete") {
      startPlayback();
      return;
    }

    window.addEventListener("load", startPlayback, { once: true });
    return () => window.removeEventListener("load", startPlayback);
  }, []);

  const metrics = [
    { value: t("metricImagesValue"), label: t("metricImagesLabel"), mono: true },
    { value: t("metricModelsValue"), label: t("metricModelsLabel"), mono: true },
    { value: t("metricPredictionsValue"), label: t("metricPredictionsLabel"), mono: true },
    { value: t("metricTeamsValue"), label: t("metricTeamsLabel"), mono: true },
  ];

  return (
    <section className="relative pt-32 pb-0 overflow-hidden">
      {/* Axis labels — scientific reference markers */}
      <div className="absolute top-32 left-6 flex flex-col gap-16 text-[10px] font-mono text-[var(--tertiary-label)] opacity-30 pointer-events-none hidden xl:flex">
        <span>y:000</span>
        <span>y:064</span>
        <span>y:128</span>
        <span>y:192</span>
        <span>y:256</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Top bar — status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-12 pb-4 border-b border-[var(--border)]"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-green)]" />
            </span>
            <span className="text-xs font-mono text-[var(--tertiary-label)]">
              PLATFORM_STATUS: OPERATIONAL
            </span>
          </div>
          <span className="text-xs font-mono text-[var(--tertiary-label)] hidden sm:block">
            v4.2.1 &middot; EU-WEST-1
          </span>
        </motion.div>

        {/* Headline — LCP element, rendered visible immediately (no fade-in) */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08]">
            {t("headlinePart1")}
            <br />
            {t("headlinePart2")}{" "}
            <span className="text-[var(--picsellia-green)]">
              {t("headlineHighlight")}
            </span>{" "}
            {t("headlinePart3")}
          </h1>
        </div>

        {/* Subheadline + CTAs — two column */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <p className="text-lg text-[var(--secondary-label)] leading-relaxed max-w-lg">
            {t("subheadline")}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <LocaleLink
              href="/trial"
              className="btn-primary px-7 py-3.5 text-[15px] group"
              onClick={() => {
                captureEvent("homepage_cta_trial_clicked", {
                  cta_position: "hero",
                  destination_url: "/trial",
                });
                track("homepage_cta_trial_clicked", {
                  cta_position: "hero",
                });
              }}
            >
              {t("startTrial")}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </LocaleLink>
            <LocaleLink
              href="/demo"
              className="btn-secondary px-7 py-3.5 text-[15px]"
              onClick={() => {
                captureEvent("homepage_cta_demo_clicked", {
                  cta_position: "hero",
                  destination_url: "/demo",
                });
                track("homepage_cta_demo_clicked", {
                  cta_position: "hero",
                });
              }}
            >
              {t("requestDemo")}
            </LocaleLink>
          </div>
        </motion.div>

        {/* Metrics row — data-dense, monospace */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-[var(--border)] rounded-xl overflow-hidden mb-16"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`p-5 ${i < metrics.length - 1 ? "border-r border-[var(--border)]" : ""} ${i < 2 ? "border-b md:border-b-0 border-[var(--border)]" : ""}`}
            >
              <div className="text-2xl md:text-3xl font-bold text-[var(--label)] font-mono tracking-tight">
                {m.value}
              </div>
              <div className="text-xs text-[var(--tertiary-label)] mt-1 font-mono uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Video — clean frame, no chrome gimmicks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative"
        >
          {/* Reference frame label */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider">
              {t("figLabel")}
            </span>
            <span className="text-[10px] font-mono text-[var(--tertiary-label)]">
              1920 &times; 1080
            </span>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--border)]">
            <video
              ref={videoRef}
              src="/videos/homepage.webm"
              poster="/images/posters/homepage.webp"
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-auto block"
            />
          </div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent rounded-b-xl" />
        </motion.div>
      </div>

      {/* Logos */}
      <div className="border-t border-[var(--border)] mt-0">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-center gap-8 mb-0">
            <span className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider whitespace-nowrap">
              {t("deployedAt")}
            </span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <div className="flex flex-wrap justify-start items-center gap-x-10 gap-y-5 mt-6">
            {customerLogos.map((logo) => (
              <div
                key={logo.name}
                className="relative h-7 w-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
