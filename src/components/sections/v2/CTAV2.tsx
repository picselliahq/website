"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const detections = [
  { id: 1, label: "model", confidence: 98.5, x: 8, y: 15, w: 25, h: 30 },
  { id: 2, label: "dataset", confidence: 95.2, x: 65, y: 10, w: 28, h: 25 },
  { id: 3, label: "pipeline", confidence: 97.8, x: 10, y: 55, w: 24, h: 35 },
  { id: 4, label: "deploy", confidence: 99.1, x: 70, y: 50, w: 22, h: 28 },
];

export default function CTAV2() {
  const t = useTranslations("home.cta");
  const [activeDetection, setActiveDetection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDetection((prev) => (prev + 1) % detections.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const badges = [t("noCreditCard"), t("trialDuration"), t("isoCertified")];

  const stats = [
    { value: t("statLatencyValue"), label: t("statLatencyLabel") },
    { value: t("statUptimeValue"), label: t("statUptimeLabel") },
    { value: t("statIntegrationsValue"), label: t("statIntegrationsLabel") },
    { value: t("statSupportValue"), label: t("statSupportLabel") },
  ];

  return (
    <section className="py-28 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative border border-[var(--border)] rounded-xl overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(var(--picsellia-green) 1px, transparent 1px),
                  linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--picsellia-green)] to-transparent opacity-50"
              style={{
                animation: "ctaScan 3s ease-in-out infinite",
                top: "0%",
              }}
            />
          </div>

          {/* Detection boxes */}
          <div className="absolute inset-0 pointer-events-none">
            {detections.map((det, index) => (
              <div
                key={det.id}
                className={`absolute transition-all duration-500 ${
                  index === activeDetection ? "opacity-100" : "opacity-20"
                }`}
                style={{
                  left: `${det.x}%`,
                  top: `${det.y}%`,
                  width: `${det.w}%`,
                  height: `${det.h}%`,
                }}
              >
                <div className="absolute inset-0 border border-[var(--picsellia-green)]/40">
                  <div className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-[var(--picsellia-green)]" />
                  <div className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-[var(--picsellia-green)]" />
                  <div className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-[var(--picsellia-green)]" />
                  <div className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-[var(--picsellia-green)]" />
                </div>
                <div
                  className={`absolute -top-5 left-0 flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-mono rounded-sm transition-all duration-500 ${
                    index === activeDetection
                      ? "bg-[var(--picsellia-green)] text-black"
                      : "bg-[var(--picsellia-green)]/15 text-[var(--picsellia-green)]"
                  }`}
                >
                  <span>{det.label}</span>
                  <span className="opacity-60">{det.confidence}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--picsellia-green)]/5 border border-[var(--picsellia-green)]/15 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--picsellia-green)]" />
              </span>
              <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
                {t("statusReady")}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold mb-5 tracking-tight">
              {t("headlinePart1")}
              <br />
              {t("headlinePart2")}
            </h2>

            <p className="text-[var(--secondary-label)] max-w-md mx-auto mb-10 text-lg leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Link
                href="/trial"
                className="btn-primary px-10 py-3.5 text-[15px] group"
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="btn-secondary px-10 py-3.5 text-[15px]"
              >
                {t("requestDemo")}
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[var(--tertiary-label)] font-mono">
              {badges.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg
                    className="w-3 h-3 text-[var(--picsellia-green)]"
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
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="relative z-10 border-t border-[var(--border)]">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
              {stats.map((stat) => (
                <div key={stat.label} className="p-5 text-center">
                  <div className="text-lg font-bold text-[var(--label)] font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[var(--tertiary-label)] font-mono uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ctaScan {
          0%,
          100% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          50% {
            top: 100%;
            opacity: 0.4;
          }
          60% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
