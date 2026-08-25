"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function UseCasesV2() {
  const t = useTranslations("home.useCases");
  const [active, setActive] = useState(0);

  const useCases = [
    {
      id: "defect",
      title: t("caseDefectTitle"),
      industry: t("caseDefectIndustry"),
      description: t("caseDefectDescription"),
      href: "/industry/manufacturing",
      stat: t("caseDefectStatValue"),
      statLabel: t("caseDefectStatLabel"),
      image: "/images/use-cases/manufacturing/anomaly-detection.jpg",
    },
    {
      id: "crop",
      title: t("caseCropTitle"),
      industry: t("caseCropIndustry"),
      description: t("caseCropDescription"),
      href: "/industry/agriculture",
      stat: t("caseCropStatValue"),
      statLabel: t("caseCropStatLabel"),
      image: "/images/use-cases/agriculture/crop-monitoring.jpg",
    },
    {
      id: "infra",
      title: t("caseInfraTitle"),
      industry: t("caseInfraIndustry"),
      description: t("caseInfraDescription"),
      href: "/industry/energy",
      stat: t("caseInfraStatValue"),
      statLabel: t("caseInfraStatLabel"),
      image: "/images/use-cases/energy/infrastructure-inspection.jpg",
    },
    {
      id: "assembly",
      title: t("caseAssemblyTitle"),
      industry: t("caseAssemblyIndustry"),
      description: t("caseAssemblyDescription"),
      href: "/industry/manufacturing",
      stat: t("caseAssemblyStatValue"),
      statLabel: t("caseAssemblyStatLabel"),
      image: "/images/use-cases/manufacturing/assembly-verification.jpg",
    },
    {
      id: "waste",
      title: t("caseWasteTitle"),
      industry: t("caseWasteIndustry"),
      description: t("caseWasteDescription"),
      href: "/industry/waste-management",
      stat: t("caseWasteStatValue"),
      statLabel: t("caseWasteStatLabel"),
      image: "/images/use-cases/waste-management/automated-segregation.jpg",
    },
  ];

  const current = useCases[active];

  return (
    <section className="py-28 border-t border-[var(--border)] relative overflow-hidden">
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
            <span className="text-[var(--secondary-label)]">{t("headlinePart2")}</span>
          </h2>
          <Link
            href="/use-cases"
            className="btn-secondary text-sm group self-start md:self-auto"
          >
            {t("allUseCases")}
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

        {/* Table-like case selector (stacked cards below md, table at md+) */}
        <div className="border border-[var(--border)] rounded-xl overflow-hidden mb-8">
          {/* Header row — md+ only, the mobile card layout below has its own inline labels */}
          <div className="hidden md:grid grid-cols-12 px-5 py-2.5 border-b border-[var(--border)] bg-[var(--secondary-system-background)] text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider">
            <div className="col-span-1">{t("tableHeaderNumber")}</div>
            <div className="col-span-3">{t("tableHeaderIndustry")}</div>
            <div className="col-span-4">{t("tableHeaderApplication")}</div>
            <div className="col-span-2 text-right">{t("tableHeaderMetric")}</div>
            <div className="col-span-2 text-right">{t("tableHeaderValue")}</div>
          </div>

          {useCases.map((uc, i) => (
            <button
              key={uc.id}
              onClick={() => setActive(i)}
              className={`flex flex-col gap-2 px-5 py-4 md:grid md:grid-cols-12 md:items-center md:gap-0 md:py-3.5 w-full text-left transition-colors cursor-pointer ${
                i < useCases.length - 1 ? "border-b border-[var(--border)]" : ""
              } ${
                active === i
                  ? "bg-[var(--picsellia-green)]/[0.04]"
                  : "hover:bg-[var(--secondary-system-background)]/50"
              }`}
            >
              {/* Mobile: industry + number on one line */}
              <div className="flex items-center justify-between md:hidden">
                <span
                  className={`text-sm font-medium ${active === i ? "text-[var(--label)]" : "text-[var(--secondary-label)]"}`}
                >
                  {uc.industry}
                </span>
                <span
                  className={`text-xs font-mono ${active === i ? "text-[var(--picsellia-green)]" : "text-[var(--tertiary-label)]"}`}
                >
                  0{i + 1}
                </span>
              </div>
              {/* Mobile: application title */}
              <span
                className={`md:hidden text-sm ${active === i ? "text-[var(--label)] font-medium" : "text-[var(--secondary-label)]"}`}
              >
                {uc.title}
              </span>
              {/* Mobile: metric + value */}
              <div className="flex items-center justify-between md:hidden">
                <span className="text-xs font-mono text-[var(--tertiary-label)]">
                  {uc.statLabel}
                </span>
                <span
                  className={`text-sm font-mono font-bold ${active === i ? "text-[var(--picsellia-green)]" : "text-[var(--label)]"}`}
                >
                  {uc.stat}
                </span>
              </div>

              {/* Desktop table row */}
              <div className="hidden md:block md:col-span-1 min-w-0">
                <span
                  className={`text-xs font-mono ${active === i ? "text-[var(--picsellia-green)]" : "text-[var(--tertiary-label)]"}`}
                >
                  0{i + 1}
                </span>
              </div>
              <div className="hidden md:block md:col-span-3 min-w-0 pr-2">
                <span
                  className={`text-sm break-words ${active === i ? "text-[var(--label)] font-medium" : "text-[var(--secondary-label)]"}`}
                >
                  {uc.industry}
                </span>
              </div>
              <div className="hidden md:block md:col-span-4 min-w-0 pr-2">
                <span
                  className={`text-sm break-words ${active === i ? "text-[var(--label)] font-medium" : "text-[var(--secondary-label)]"}`}
                >
                  {uc.title}
                </span>
              </div>
              <div className="hidden md:block md:col-span-2 min-w-0 text-right pr-2">
                <span className="text-xs font-mono text-[var(--tertiary-label)] break-words">
                  {uc.statLabel}
                </span>
              </div>
              <div className="hidden md:block md:col-span-2 min-w-0 text-right">
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
                    {t("readCaseStudy")}
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
