"use client";

import Image from "next/image";
import Link from "next/link";

// Aerospace-specific use cases
const useCases = [
  {
    title: "Aircraft Surface Inspection",
    description:
      "Detect cracks, dents, corrosion, and paint damage on fuselage and wing surfaces. Replace time-consuming walkarounds with automated visual analysis.",
    image: "/images/use-cases/aerospace/inspection.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    stats: { value: "98%", label: "Detection accuracy" },
  },
  {
    title: "Component Wear Analysis",
    description:
      "Monitor turbine blades, landing gear, and hydraulic systems for signs of fatigue or wear. Predict maintenance needs before failures occur.",
    image: "/images/use-cases/aerospace/turbine.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    stats: { value: "50%", label: "Less downtime" },
  },
  {
    title: "Foreign Object Debris (FOD)",
    description:
      "Detect debris on runways, taxiways, and in hangars that could cause damage to engines or airframes. Real-time alerts for ground crews.",
    image: "/images/use-cases/aerospace/object.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    stats: { value: "24/7", label: "Monitoring" },
  },
  {
    title: "Assembly Verification",
    description:
      "Verify correct assembly of complex components, wiring harnesses, and fastener patterns. Ensure compliance with engineering specifications.",
    image: "/images/use-cases/aerospace/inspection-part.png",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    stats: { value: "99.5%", label: "Compliance rate" },
  },
];

export default function AerospacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--system-blue)]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--system-indigo)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge">
              <svg
                className="w-4 h-4 text-[var(--system-blue)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span className="text-sm font-medium text-[var(--system-blue)]">
                Aerospace
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
            Computer vision for{" "}
            <span className="text-[var(--system-blue)]">
              aircraft inspection & navigation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
            From surface defect detection to assembly verification. Build,
            deploy, and monitor vision AI models that meet aerospace-grade
            requirements.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/demo" className="btn-primary px-6 py-3">
              Request Demo
              <svg
                className="w-4 h-4"
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
            </Link>
            <Link href="/use-cases" className="btn-secondary px-6 py-3">
              See Use Cases
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-16 relative">
            <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
              <div className="relative h-[400px]">
                <Image
                  src="/images/use-cases/aerospace/banner.jpg"
                  alt="Aircraft inspection with computer vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/60 via-transparent to-transparent" />

                {/* Floating cards */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-[var(--system-blue)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">
                          Defects Detected
                        </div>
                        <div className="text-lg font-bold text-[var(--label)]">
                          12,400+
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-[var(--picsellia-green)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">
                          Model Accuracy
                        </div>
                        <div className="text-lg font-bold text-[var(--picsellia-green)]">
                          98.2%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
            {[
              { value: "5M+", label: "Inspection images processed" },
              { value: "98%", label: "Defect detection accuracy" },
              { value: "70%", label: "Faster inspections" },
              { value: "0", label: "Missed critical defects" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-[var(--system-blue)] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--tertiary-label)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              One platform for your entire inspection AI stack
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Picsellia connects hangar floor cameras, drone feeds, and
              borescope imagery with centralized data management, model
              training, and deployment.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="card p-8 md:p-12">
            {/* Picsellia Platform - Top Layer */}
            <div className="mb-8">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[var(--system-blue)]/10 via-[var(--picsellia-green)]/10 to-[var(--system-indigo)]/10 border-2 border-[var(--system-blue)]/30 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--system-blue)] flex items-center justify-center">
                        <Image
                          src="/images/Icon_white.svg"
                          alt="Picsellia"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--label)]">
                          Picsellia MLOps Platform
                        </h3>
                        <p className="text-xs text-[var(--tertiary-label)]">
                          Centralized orchestration layer
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20">
                      <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
                      <span className="text-xs font-medium text-[var(--picsellia-green)]">
                        ACTIVE
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      {
                        name: "Data Management",
                        desc: "Centralize & version",
                        color: "var(--system-blue)",
                        icon: "/images/community/icons/datalake.svg",
                      },
                      {
                        name: "Annotation",
                        desc: "Label & review",
                        color: "var(--system-orange)",
                        icon: "/images/community/icons/labeling-tool.svg",
                      },
                      {
                        name: "Training",
                        desc: "Build & experiment",
                        color: "var(--system-indigo)",
                        icon: "/images/community/icons/experiment-tracking.svg",
                      },
                      {
                        name: "Deployment",
                        desc: "Ship & monitor",
                        color: "var(--picsellia-green)",
                        icon: "/images/community/icons/model-monitoring.svg",
                      },
                    ].map((module) => (
                      <div
                        key={module.name}
                        className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{
                              backgroundColor: `color-mix(in srgb, ${module.color} 20%, transparent)`,
                            }}
                          >
                            <Image
                              src={module.icon}
                              alt={module.name}
                              width={18}
                              height={18}
                            />
                          </div>
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: module.color }}
                          />
                        </div>
                        <div className="text-sm font-medium text-[var(--label)]">
                          {module.name}
                        </div>
                        <div className="text-[10px] text-[var(--tertiary-label)]">
                          {module.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="flex justify-around mb-4 px-8">
              {[
                {
                  label: "Data Upload",
                  color: "var(--system-blue)",
                  direction: "up",
                },
                {
                  label: "Inference",
                  color: "var(--picsellia-green)",
                  direction: "down",
                },
                {
                  label: "Visualization",
                  color: "var(--system-indigo)",
                  direction: "up",
                },
                {
                  label: "Human Feedback",
                  color: "var(--system-orange)",
                  direction: "up",
                },
              ].map((connection) => (
                <div
                  key={connection.label}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="flex flex-col items-center">
                    {connection.direction === "up" ? (
                      <svg
                        className="w-4 h-4"
                        style={{ color: connection.color }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        style={{ color: connection.color }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    )}
                    <div
                      className="w-px h-8"
                      style={{ backgroundColor: connection.color }}
                    />
                  </div>
                  <span className="text-[9px] text-[var(--tertiary-label)] text-center whitespace-nowrap">
                    {connection.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Field Applications - Bottom Layer */}
            <div className="p-6 rounded-2xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)]">
                    Inspection Sources
                  </h3>
                  <p className="text-xs text-[var(--tertiary-label)]">
                    Connected devices running inference at the edge
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20">
                  <span className="text-xs font-medium text-[var(--system-blue)]">
                    4 CONNECTED
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    name: "Hangar Cameras",
                    desc: "Fixed high-res inspection stations",
                    status: "Running",
                    metric: "< 30ms",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[var(--system-blue)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Drone Inspection",
                    desc: "Autonomous surface scanning",
                    status: "Running",
                    metric: "< 50ms",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[var(--system-blue)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 5l2 2m0 0l-2 2m2-2H3m15-2l2 2m0 0l-2 2m2-2h-5M9 12a3 3 0 106 0 3 3 0 00-6 0zm3 3v4m-2 0h4"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Borescope Feeds",
                    desc: "Engine internal inspection",
                    status: "Running",
                    metric: "Real-time",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[var(--system-blue)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Satellite Imagery",
                    desc: "Airfield & facility surveys",
                    status: "Running",
                    metric: "On-demand",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[var(--system-blue)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                ].map((device) => (
                  <div
                    key={device.name}
                    className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center">
                        {device.icon}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
                        <span className="text-[9px] text-[var(--picsellia-green)]">
                          {device.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-[var(--label)] mb-1">
                      {device.name}
                    </div>
                    <div className="text-[10px] text-[var(--tertiary-label)] mb-2">
                      {device.desc}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                      <span className="text-[9px] text-[var(--tertiary-label)]">
                        Latency
                      </span>
                      <span className="text-xs font-mono text-[var(--picsellia-green)]">
                        {device.metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback Loop Indicator */}
            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--system-orange)]/10 border border-[var(--system-orange)]/20">
                <svg
                  className="w-4 h-4 text-[var(--system-orange)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="text-xs text-[var(--system-orange)]">
                  Continuous improvement: Inspection data → Annotation →
                  Retraining → Deployment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Built for aerospace operations
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                From MRO hangars to production lines, Picsellia powers visual
                inspection workflows across the aerospace industry.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="card p-0 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-[var(--black)]/20 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-white">
                      {useCase.stats.value}
                    </div>
                    <div className="text-xs text-white/70">
                      {useCase.stats.label}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[var(--system-blue)] flex items-center justify-center text-white">
                    {useCase.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--label)] mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-[var(--secondary-label)]">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              From raw imagery to certified AI
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Four steps to transform inspection data into automated defect
              detection with full traceability.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 - Collect */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--system-blue)] flex items-center justify-center text-white text-xl font-bold">
                    1
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--system-blue)]">
                      Collect
                    </span>
                    <h3 className="text-2xl font-semibold text-[var(--label)]">
                      Centralize all inspection imagery
                    </h3>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6 text-lg">
                  Aggregate images from hangar cameras, drones, borescopes, and
                  manual inspections into a single versioned repository with
                  full metadata.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "Connect any storage (S3, Azure, GCS)",
                    "Auto-extract metadata & tail numbers",
                    "Search by aircraft, zone, or date",
                    "Version your datasets automatically",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[var(--system-blue)] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[var(--label)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/datalake"
                  className="inline-flex items-center gap-2 text-[var(--system-blue)] font-medium hover:underline"
                >
                  Learn about Datalake
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[var(--system-blue)] text-white text-xs font-medium">
                    Datalake
                  </div>
                  <Image
                    src="/images/use-cases/energy/energy-infrastructure-inspection.jpg"
                    alt="Data collection"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-12 bg-gradient-to-b from-[var(--system-blue)] to-[var(--system-orange)]" />
            </div>

            {/* Step 2 - Annotate */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[var(--system-orange)] text-white text-xs font-medium">
                    Labeling Tool
                  </div>
                  <Image
                    src="/images/use-cases/energy/energy-predictive-maintenance.jpg"
                    alt="Annotation"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--system-orange)] flex items-center justify-center text-white text-xl font-bold">
                    2
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--system-orange)]">
                      Annotate
                    </span>
                    <h3 className="text-2xl font-semibold text-[var(--label)]">
                      Label defects with your engineers
                    </h3>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6 text-lg">
                  Your MRO engineers know what a fatigue crack looks like.
                  Capture that expertise by labeling defects in images. AI
                  pre-annotation accelerates the process by 10x.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "AI pre-labels common defects",
                    "Engineers review and correct",
                    "Custom defect taxonomies",
                    "Quality control workflows",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[var(--system-orange)] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[var(--label)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/labeling-tool"
                  className="inline-flex items-center gap-2 text-[var(--system-orange)] font-medium hover:underline"
                >
                  Learn about Labeling Tool
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-12 bg-gradient-to-b from-[var(--system-orange)] to-[var(--system-indigo)]" />
            </div>

            {/* Step 3 - Train */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--system-indigo)] flex items-center justify-center text-white text-xl font-bold">
                    3
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--system-indigo)]">
                      Train
                    </span>
                    <h3 className="text-2xl font-semibold text-[var(--label)]">
                      Build traceable detection models
                    </h3>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6 text-lg">
                  Turn labeled inspection data into AI models with full
                  experiment tracking. Every dataset version, hyperparameter,
                  and result is logged for auditability.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "One-click model training",
                    "Compare model architectures",
                    "Full experiment lineage",
                    "Reproducible results",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[var(--system-indigo)] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[var(--label)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/experiment-tracking"
                  className="inline-flex items-center gap-2 text-[var(--system-indigo)] font-medium hover:underline"
                >
                  Learn about Experiment Tracking
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[var(--system-indigo)] text-white text-xs font-medium">
                    Training
                  </div>
                  <Image
                    src="/images/use-cases/energy/energy-security-surveilance.jpg"
                    alt="Model training"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-12 bg-gradient-to-b from-[var(--system-indigo)] to-[var(--picsellia-green)]" />
            </div>

            {/* Step 4 - Deploy */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[var(--picsellia-green)] text-white text-xs font-medium">
                    Deployment
                  </div>
                  <Image
                    src="/images/use-cases/energy/energy-safety-protocols.jpg"
                    alt="Model deployment"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--picsellia-green)] flex items-center justify-center text-white text-xl font-bold">
                    4
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--picsellia-green)]">
                      Deploy
                    </span>
                    <h3 className="text-2xl font-semibold text-[var(--label)]">
                      Deploy to hangars and airfields
                    </h3>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6 text-lg">
                  Ship models to edge devices in hangars, on drones, or via
                  cloud APIs. Monitor performance in real-time and retrain when
                  accuracy drifts.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "Deploy to edge or cloud",
                    "Real-time monitoring",
                    "Automatic drift detection",
                    "One-click retraining",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[var(--picsellia-green)] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[var(--label)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/model-deployment"
                  className="inline-flex items-center gap-2 text-[var(--picsellia-green)] font-medium hover:underline"
                >
                  Learn about Deployment
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 p-8 rounded-2xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-[var(--label)]">
                The result? Inspection AI that meets aerospace standards.
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "10x", label: "Faster labeling with AI assistance" },
                { value: "98%", label: "Defect detection accuracy" },
                { value: "< 50ms", label: "Edge inference latency" },
                { value: "100%", label: "Audit traceability" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[var(--picsellia-green)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--tertiary-label)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Requirements */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Enterprise Ready
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Built for aerospace-grade requirements
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Aerospace operations demand the highest levels of security,
                traceability, and compliance. Picsellia is designed to meet
                these standards from day one.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "ISO 27001 Certified",
                    description:
                      "Enterprise-grade security and data protection",
                  },
                  {
                    title: "On-Premise Deployment",
                    description:
                      "Keep sensitive inspection data within your network",
                  },
                  {
                    title: "Air-Gapped Support",
                    description: "Operate in fully disconnected environments",
                  },
                  {
                    title: "Full Audit Trail",
                    description:
                      "Every action logged for regulatory compliance",
                  },
                  {
                    title: "Role-Based Access",
                    description:
                      "Fine-grained permissions for teams and contractors",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--system-blue)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-[var(--system-blue)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[var(--label)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--secondary-label)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--system-blue)]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[var(--system-blue)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--label)] mb-2">
                  Security First
                </h3>
                <p className="text-sm text-[var(--secondary-label)]">
                  Your inspection data stays protected
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Encryption", value: "AES-256" },
                  { label: "Uptime SLA", value: "99.9%" },
                  { label: "Data Residency", value: "EU/US" },
                  { label: "Backup", value: "Daily" },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 rounded-lg bg-[var(--tertiary-system-background)] text-center"
                  >
                    <div className="text-lg font-bold font-mono text-[var(--label)]">
                      {spec.value}
                    </div>
                    <div className="text-xs text-[var(--tertiary-label)]">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.08]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--system-blue)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--system-blue)]"></span>
                </span>
                <span className="text-xs font-mono text-[var(--system-blue)]">
                  AEROSPACE_AI
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
                Ready to automate your inspection workflows?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                See how aerospace companies use Picsellia to detect defects
                faster and reduce aircraft downtime.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo" className="btn-primary px-8 py-3 text-base">
                  Request Demo
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary px-8 py-3 text-base"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="relative z-10 border-t border-[var(--border)] bg-[var(--secondary-system-background)]/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
                {[
                  { value: "5M+", label: "Images analyzed" },
                  { value: "<50ms", label: "Edge inference" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "ISO 27001", label: "Certified" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 md:p-6 text-center">
                    <div className="text-lg md:text-xl font-bold text-[var(--label)] font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--tertiary-label)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
