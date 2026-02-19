"use client";

import Link from "next/link";

const platformStages = [
  {
    id: "data",
    category: "Data",
    tagline: "Collect & organize",
    headline: "Stop drowning in unorganized data",
    problem:
      "Your images are scattered across cloud buckets, hard drives, and legacy systems. Finding the right data for training takes days, not minutes.",
    solution:
      "One source of truth for all your visual data. Connect any storage, auto-organize with AI, and find exactly what you need in seconds.",
    color: "var(--picsellia-blue)",
    video: "/videos/data ingestion.webm",
    features: [
      { name: "Datalake", href: "/datalake" },
      { name: "Dataset Management", href: "/dataset-management" },
    ],
    stats: { value: "10B+", label: "Images managed" },
  },
  {
    id: "annotate",
    category: "Annotate",
    tagline: "Label & review",
    headline: "Labeling shouldn't be your bottleneck",
    problem:
      "Manual annotation is slow, expensive, and error-prone. Your ML team is wasting time on labeling instead of building models.",
    solution:
      "AI-assisted labeling cuts annotation time by 10x. Built-in quality control ensures consistent, high-quality training data.",
    color: "var(--picsellia-blue)",
    video: "/videos/labeling tool animation.webm",
    features: [
      { name: "Labeling Tool", href: "/labeling-tool" },
      { name: "Annotation Campaigns", href: "/annotation-campaigns" },
    ],
    stats: { value: "10x", label: "Faster labeling" },
  },
  {
    id: "train",
    category: "Train",
    tagline: "Build & experiment",
    headline: "Experiments shouldn't disappear",
    problem:
      "You've run hundreds of experiments but can't reproduce your best results. Model versions are scattered across notebooks.",
    solution:
      "Every experiment tracked, every model versioned, every result reproducible. Compare runs side-by-side.",
    color: "var(--picsellia-green)",
    video: "/videos/experiment tracking animation.webm",
    features: [
      { name: "AI Laboratory", href: "/ai-laboratory" },
      { name: "Experiment Tracking", href: "/experiment-tracking" },
      { name: "Automated Pipelines", href: "/automated-pipelines" },
    ],
    stats: { value: "100%", label: "Reproducibility" },
  },
  {
    id: "deploy",
    category: "Deploy",
    tagline: "Ship & monitor",
    headline: "Production shouldn't be a black box",
    problem:
      "Your model works in the lab but fails in production. You only find out when customers complain.",
    solution:
      "Deploy with confidence. Real-time monitoring catches drift before it impacts users.",
    color: "var(--system-red)",
    video: "/videos/deployment monitoring .webm",
    features: [
      { name: "Model Deployment", href: "/model-deployment" },
      { name: "Model Monitoring", href: "/model-monitoring" },
    ],
    stats: { value: "99.9%", label: "Uptime SLA" },
  },
];

export default function PlatformLifecycle() {
  return (
    <section className="py-24 border-t border-[var(--border)] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(51, 171, 104, 0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(97, 135, 226, 0.03) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              One platform. Zero friction.
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              One platform instead of five tools duct-taped together. Built for
              computer vision from day one.
            </p>
          </div>
          <Link href="/product-overview" className="btn-secondary">
            Explore platform
          </Link>
        </div>

        {/* Lifecycle Visual */}
        <div className="mb-12 p-6 rounded-2xl border border-[var(--border)] bg-[var(--secondary-system-background)]">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
            {platformStages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <div className="flex items-center gap-3 px-4 py-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: stage.color }}
                  >
                    0{index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--label)]">
                      {stage.category}
                    </div>
                    <div className="text-xs text-[var(--tertiary-label)]">
                      {stage.tagline}
                    </div>
                  </div>
                </div>
                {index < platformStages.length - 1 && (
                  <svg
                    className="w-6 h-6 text-[var(--border)] hidden md:block mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {platformStages.map((stage, index) => (
            <Link
              key={stage.id}
              href={stage.features[0].href}
              className={`group ${index === 0 ? "md:row-span-2" : ""}`}
            >
              <div
                className={`card p-0 overflow-hidden h-full ${index === 0 ? "min-h-[500px]" : ""}`}
              >
                {index === 0 ? (
                  // Featured card - Data
                  <div className="h-full flex flex-col">
                    <div
                      className="p-8 flex-1 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, ${stage.color} 10%, transparent), color-mix(in srgb, ${stage.color} 5%, transparent))`,
                      }}
                    >
                      {/* Decorative grid */}
                      <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                          backgroundImage: `linear-gradient(${stage.color} 1px, transparent 1px), linear-gradient(90deg, ${stage.color} 1px, transparent 1px)`,
                          backgroundSize: "32px 32px",
                        }}
                      />

                      <div className="relative">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6"
                          style={{ backgroundColor: stage.color }}
                        >
                          01
                        </div>
                        <div
                          className="text-xs uppercase tracking-wider mb-2"
                          style={{ color: stage.color }}
                        >
                          {stage.tagline}
                        </div>
                        <h3 className="text-2xl font-semibold text-[var(--label)] mb-3 group-hover:text-[var(--picsellia-green)] transition-colors">
                          {stage.headline}
                        </h3>
                        <p className="text-[var(--secondary-label)] mb-4 text-sm">
                          {stage.problem}
                        </p>
                        <p className="text-[var(--label)] text-sm">
                          <span
                            className="font-medium"
                            style={{ color: stage.color }}
                          >
                            With Picsellia:
                          </span>{" "}
                          {stage.solution}
                        </p>
                      </div>

                      {/* Decorative circles */}
                      <div
                        className="absolute -bottom-16 -right-16 w-48 h-48 border rounded-full opacity-20"
                        style={{ borderColor: stage.color }}
                      />
                      <div
                        className="absolute -bottom-8 -right-8 w-32 h-32 border rounded-full opacity-30"
                        style={{ borderColor: stage.color }}
                      />
                    </div>

                    {/* Video */}
                    <div className="h-48 overflow-hidden border-t border-[var(--border)]">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={stage.video}
                      />
                    </div>

                    <div className="p-6 border-t border-[var(--border)]">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {stage.features.map((f) => (
                            <span
                              key={f.name}
                              className="text-xs px-2 py-1 rounded-md bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]"
                            >
                              {f.name}
                            </span>
                          ))}
                        </div>
                        <div className="text-right">
                          <div
                            className="text-xl font-bold"
                            style={{ color: stage.color }}
                          >
                            {stage.stats.value}
                          </div>
                          <div className="text-xs text-[var(--tertiary-label)]">
                            {stage.stats.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular cards
                  <div className="h-full flex flex-col">
                    {/* Video */}
                    <div className="h-40 overflow-hidden">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={stage.video}
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-all group-hover:scale-110"
                          style={{ backgroundColor: stage.color }}
                        >
                          0{index + 1}
                        </div>
                        <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--picsellia-green)] group-hover:bg-[var(--picsellia-green)] transition-all">
                          <svg
                            className="w-4 h-4 text-[var(--secondary-label)] group-hover:text-white transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      </div>

                      <div
                        className="text-xs uppercase tracking-wider mb-1"
                        style={{ color: stage.color }}
                      >
                        {stage.tagline}
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                        {stage.headline}
                      </h3>
                      <p className="text-sm text-[var(--secondary-label)] mb-4 flex-1">
                        {stage.solution}
                      </p>

                      <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {stage.features.map((f) => (
                            <span
                              key={f.name}
                              className="text-xs px-2 py-1 rounded-md bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]"
                            >
                              {f.name}
                            </span>
                          ))}
                        </div>
                        <div className="text-right">
                          <div
                            className="text-lg font-bold"
                            style={{ color: stage.color }}
                          >
                            {stage.stats.value}
                          </div>
                          <div className="text-[10px] text-[var(--tertiary-label)]">
                            {stage.stats.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
