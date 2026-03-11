"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const useCases = [
  {
    id: "defect",
    title: "Defect Detection",
    industry: "Manufacturing",
    description:
      "Spot surface defects and assembly errors on the production line. Cameras check every part, every time.",
    href: "/industry/manufacturing",
    stat: "99.5%",
    statLabel: "Detection accuracy",
    image: "/images/use-cases/manufacturing/anomaly-detection.jpg",
  },
  {
    id: "crop",
    title: "Crop Monitoring",
    industry: "Agriculture",
    description:
      "Fly a drone over your fields, feed the images to a model, and know which plots need attention before it is visible to the eye.",
    href: "/industry/agriculture",
    stat: "30%",
    statLabel: "Yield increase",
    image: "/images/use-cases/agriculture/crop-monitoring.jpg",
  },
  {
    id: "infra",
    title: "Infrastructure Inspection",
    industry: "Energy",
    description:
      "Inspect pipelines, power lines, and solar panels from drone footage instead of sending people out.",
    href: "/industry/energy",
    stat: "80%",
    statLabel: "Cost reduction",
    image: "/images/use-cases/energy/infrastructure-inspection.jpg",
  },
  {
    id: "assembly",
    title: "Assembly Verification",
    industry: "Manufacturing",
    description:
      "Check that every component is in the right place, in real time, on the line.",
    href: "/industry/manufacturing",
    stat: "60fps",
    statLabel: "Real-time tracking",
    image: "/images/use-cases/manufacturing/assembly-verification.jpg",
  },
  {
    id: "waste",
    title: "Waste Sorting",
    industry: "Sustainability",
    description:
      "Tell plastic from cardboard on a conveyor belt. Sorting facilities use this to automate what used to be manual.",
    href: "/industry/waste-management",
    stat: "95%",
    statLabel: "Sorting accuracy",
    image: "/images/use-cases/waste-management/automated-segregation.jpg",
  },
];

export default function UseCasesV2() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section className="py-28 border-t border-[var(--border)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex items-center gap-8 mb-4">
          <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
            Use Cases
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            What people build
            <br />
            <span className="text-[var(--secondary-label)]">with it</span>
          </h2>
          <Link
            href="/use-cases"
            className="btn-secondary text-sm group self-start md:self-auto"
          >
            All use cases
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

        {/* Table-like case selector */}
        <div className="border border-[var(--border)] rounded-xl overflow-hidden mb-8">
          {/* Header row */}
          <div className="grid grid-cols-12 px-5 py-2.5 border-b border-[var(--border)] bg-[var(--secondary-system-background)] text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Industry</div>
            <div className="col-span-4">Application</div>
            <div className="col-span-2 text-right">Metric</div>
            <div className="col-span-2 text-right">Value</div>
          </div>

          {useCases.map((uc, i) => (
            <button
              key={uc.id}
              onClick={() => setActive(i)}
              className={`grid grid-cols-12 items-center px-5 py-3.5 w-full text-left transition-colors cursor-pointer ${
                i < useCases.length - 1 ? "border-b border-[var(--border)]" : ""
              } ${
                active === i
                  ? "bg-[var(--picsellia-green)]/[0.04]"
                  : "hover:bg-[var(--secondary-system-background)]/50"
              }`}
            >
              <div className="col-span-1">
                <span
                  className={`text-xs font-mono ${active === i ? "text-[var(--picsellia-green)]" : "text-[var(--tertiary-label)]"}`}
                >
                  0{i + 1}
                </span>
              </div>
              <div className="col-span-3">
                <span
                  className={`text-sm ${active === i ? "text-[var(--label)] font-medium" : "text-[var(--secondary-label)]"}`}
                >
                  {uc.industry}
                </span>
              </div>
              <div className="col-span-4">
                <span
                  className={`text-sm ${active === i ? "text-[var(--label)] font-medium" : "text-[var(--secondary-label)]"}`}
                >
                  {uc.title}
                </span>
              </div>
              <div className="col-span-2 text-right">
                <span className="text-xs font-mono text-[var(--tertiary-label)]">
                  {uc.statLabel}
                </span>
              </div>
              <div className="col-span-2 text-right">
                <span
                  className={`text-sm font-mono font-bold ${active === i ? "text-[var(--picsellia-green)]" : "text-[var(--label)]"}`}
                >
                  {uc.stat}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Link href={current.href} className="group block">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Image */}
                <div className="md:col-span-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[var(--tertiary-label)]">
                      fig.0{active + 6} — {current.industry}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* Stat overlay */}
                    <div className="absolute bottom-5 left-5">
                      <div className="text-4xl md:text-5xl font-bold text-white font-mono tracking-tight leading-none">
                        {current.stat}
                      </div>
                      <div className="text-xs text-white/60 font-mono uppercase tracking-wider mt-1">
                        {current.statLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--picsellia-green)]" />
                    <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
                      {current.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-[var(--label)] mb-4 group-hover:text-[var(--picsellia-green)] transition-colors leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-[var(--secondary-label)] leading-relaxed mb-8">
                    {current.description}
                  </p>

                  <span className="inline-flex items-center text-sm text-[var(--secondary-label)] group-hover:text-[var(--picsellia-green)] transition-colors font-medium">
                    Read case study
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
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
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
