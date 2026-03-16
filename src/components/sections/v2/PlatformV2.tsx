"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const stages = [
  {
    id: "data",
    number: "01",
    label: "Data",
    tagline: "Collect & organize",
    headline: "Stop drowning in unorganized data",
    description:
      "One source of truth for all your visual data. Connect any storage, auto-organize with AI, and find exactly what you need in seconds.",
    pain: "Images scattered across cloud buckets, hard drives, and legacy systems.",
    color: "#43a3ff",
    video: "/videos/datalake-home.webm",
    features: [
      { name: "Datalake", href: "/datalake" },
      { name: "Dataset Management", href: "/dataset-management" },
    ],
    stat: { value: "10B+", label: "images managed" },
  },
  {
    id: "annotate",
    number: "02",
    label: "Annotate",
    tagline: "Label & review",
    headline: "Labeling shouldn't be your bottleneck",
    description:
      "AI-assisted labeling cuts annotation time by 10x. Built-in quality control ensures consistent, high-quality training data.",
    pain: "Manual annotation is slow, expensive, and error-prone.",
    color: "#ff9f0a",
    video: "/videos/labeling-home.webm",
    features: [
      { name: "Labeling Tool", href: "/labeling-tool" },
      { name: "Annotation Campaigns", href: "/annotation-campaigns" },
    ],
    stat: { value: "10x", label: "faster labeling" },
  },
  {
    id: "train",
    number: "03",
    label: "Train",
    tagline: "Build & experiment",
    headline: "Experiments shouldn't disappear",
    description:
      "Every experiment tracked, every model versioned, every result reproducible. Compare runs side-by-side and never lose work again.",
    pain: "Hundreds of experiments but you can't reproduce your best results.",
    color: "#33ab68",
    video: "/videos/experiment-home.webm",
    features: [
      { name: "AI Laboratory", href: "/ai-laboratory" },
      { name: "Experiment Tracking", href: "/experiment-tracking" },
      { name: "Automated Pipelines", href: "/automated-pipelines" },
    ],
    stat: { value: "100%", label: "reproducibility" },
  },
  {
    id: "deploy",
    number: "04",
    label: "Deploy",
    tagline: "Ship & monitor",
    headline: "Production shouldn't be a black box",
    description:
      "Deploy with confidence. Real-time monitoring catches drift before it impacts users. One click from lab to production.",
    pain: "Your model works in the lab but fails in production.",
    color: "#ff453a",
    video: "/videos/deployment-home.webm",
    features: [
      { name: "Model Deployment", href: "/model-deployment" },
      { name: "Model Monitoring", href: "/model-monitoring" },
    ],
    stat: { value: "99.9%", label: "uptime SLA" },
  },
];

export default function PlatformV2() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex items-center gap-8 mb-4">
          <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
            Platform
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            One platform.
            <br />
            <span className="text-[var(--secondary-label)]">
              Zero friction.
            </span>
          </h2>
          <Link
            href="/product-overview"
            className="btn-secondary text-sm group"
          >
            Explore platform
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
                    Problem
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
                    Solution
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
                  className="w-full h-auto block"
                  src={stage.video}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
