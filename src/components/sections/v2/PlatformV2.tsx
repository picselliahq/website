"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PlatformV2() {
  const t = useTranslations("home.platform");
  const [active, setActive] = useState(0);

  // Defer the (below-the-fold, multi-MB) video download until the section
  // is near the viewport, so it doesn't compete with the initial page load.
  const sectionRef = useRef<HTMLElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || videoReady) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVideoReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [videoReady]);

  const stages = [
    {
      id: "data",
      number: "01",
      label: t("stageDataLabel"),
      tagline: t("stageDataTagline"),
      headline: t("stageDataHeadline"),
      description: t("stageDataDescription"),
      pain: t("stageDataPain"),
      color: "#43a3ff",
      video: "/videos/datalake-home.webm",
      features: [
        { name: t("stageDataFeatureDatalake"), href: "/datalake" },
        { name: t("stageDataFeatureDatasetManagement"), href: "/dataset-management" },
      ],
      stat: { value: t("stageDataStatValue"), label: t("stageDataStatLabel") },
    },
    {
      id: "annotate",
      number: "02",
      label: t("stageAnnotateLabel"),
      tagline: t("stageAnnotateTagline"),
      headline: t("stageAnnotateHeadline"),
      description: t("stageAnnotateDescription"),
      pain: t("stageAnnotatePain"),
      color: "#ff9f0a",
      video: "/videos/labeling-home.webm",
      features: [
        { name: t("stageAnnotateFeatureLabelingTool"), href: "/labeling-tool" },
        { name: t("stageAnnotateFeatureAnnotationCampaigns"), href: "/annotation-campaigns" },
      ],
      stat: { value: t("stageAnnotateStatValue"), label: t("stageAnnotateStatLabel") },
    },
    {
      id: "train",
      number: "03",
      label: t("stageTrainLabel"),
      tagline: t("stageTrainTagline"),
      headline: t("stageTrainHeadline"),
      description: t("stageTrainDescription"),
      pain: t("stageTrainPain"),
      color: "#33ab68",
      video: "/videos/experiment-home.webm",
      features: [
        { name: t("stageTrainFeatureAILaboratory"), href: "/ai-laboratory" },
        { name: t("stageTrainFeatureExperimentTracking"), href: "/experiment-tracking" },
        { name: t("stageTrainFeatureAutomatedPipelines"), href: "/automated-pipelines" },
      ],
      stat: { value: t("stageTrainStatValue"), label: t("stageTrainStatLabel") },
    },
    {
      id: "deploy",
      number: "04",
      label: t("stageDeployLabel"),
      tagline: t("stageDeployTagline"),
      headline: t("stageDeployHeadline"),
      description: t("stageDeployDescription"),
      pain: t("stageDeployPain"),
      color: "#ff453a",
      video: "/videos/deployment-home.webm",
      features: [
        { name: t("stageDeployFeatureModelDeployment"), href: "/model-deployment" },
        { name: t("stageDeployFeatureModelMonitoring"), href: "/model-monitoring" },
      ],
      stat: { value: t("stageDeployStatValue"), label: t("stageDeployStatLabel") },
    },
  ];

  const stage = stages[active];

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex items-center gap-8 mb-4">
          <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
            {t("sectionLabel")}
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            {t("headlinePart1")}
            <br />
            <span className="text-[var(--secondary-label)]">
              {t("headlinePart2")}
            </span>
          </h2>
          <Link
            href="/product-overview"
            className="btn-secondary text-sm group"
          >
            {t("explorePlatform")}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </div>

        {/* Pipeline diagram — horizontal steps */}
        <div className="flex items-stretch border border-[var(--border)] rounded-xl overflow-hidden mb-10">
          {stages.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex-1 relative py-4 px-3 md:px-5 transition-all cursor-pointer group ${
                i < stages.length - 1 ? "border-r border-[var(--border)]" : ""
              } ${
                active === i
                  ? "bg-[var(--secondary-system-background)]"
                  : "hover:bg-[var(--secondary-system-background)]/50"
              }`}
            >
              {/* Active top bar */}
              {active === i && (
                <motion.div
                  layoutId="pipelineBar"
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: s.color }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <div className="flex items-center gap-2 md:gap-3">
                <span
                  className="text-[11px] font-mono font-bold transition-colors"
                  style={{
                    color: active === i ? s.color : "var(--system-gray)",
                  }}
                >
                  {s.number}
                </span>
                <div className="text-left">
                  <div
                    className="text-sm font-medium transition-colors"
                    style={{
                      color:
                        active === i
                          ? "var(--label)"
                          : "var(--secondary-label)",
                    }}
                  >
                    {s.label}
                  </div>
                  <div className="text-[10px] text-[var(--tertiary-label)] hidden md:block font-mono">
                    {s.tagline}
                  </div>
                </div>
              </div>
              {/* Arrow connector */}
              {i < stages.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-[var(--border)] hidden md:block">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M4 2l4 4-4 4V2z" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-12 gap-6"
          >
            {/* Left — description */}
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--label)] mb-4 leading-tight">
                  {stage.headline}
                </h3>

                {/* Pain — monospace label style */}
                <div className="mb-4 p-3 rounded-lg border border-[var(--border)] bg-[var(--secondary-system-background)]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--system-red)] block mb-1">
                    {t("problemLabel")}
                  </span>
                  <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                    {stage.pain}
                  </p>
                </div>

                <div className="mb-6 p-3 rounded-lg border border-[var(--border)] bg-[var(--secondary-system-background)]">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider block mb-1"
                    style={{ color: stage.color }}
                  >
                    {t("solutionLabel")}
                  </span>
                  <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {stage.features.map((f) => (
                    <Link
                      key={f.name}
                      href={f.href}
                      className="text-xs font-mono px-3 py-1.5 rounded-md bg-[var(--tertiary-system-background)] text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors border border-transparent hover:border-[var(--border)] cursor-pointer"
                    >
                      {f.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Stat */}
              <div className="border-t border-[var(--border)] pt-4">
                <div
                  className="text-3xl font-bold font-mono tracking-tight"
                  style={{ color: stage.color }}
                >
                  {stage.stat.value}
                </div>
                <div className="text-xs text-[var(--tertiary-label)] font-mono uppercase tracking-wider">
                  {stage.stat.label}
                </div>
              </div>
            </div>

            {/* Right — video */}
            <div className="md:col-span-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-[var(--tertiary-label)]">
                  fig.0{active + 2} — {stage.label}
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                <video
                  key={stage.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={stage.video
                    .replace("/videos/", "/images/posters/")
                    .replace(".webm", ".jpg")}
                  className="w-full h-auto block"
                  src={videoReady ? stage.video : undefined}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
