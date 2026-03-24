"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import PlatformLifecycle from "@/components/sections/PlatformLifecycle";

// Customer logos
const customerLogos = [
  { name: "SGS", src: "/images/customers/sgs.svg" },
  { name: "RTE", src: "/images/customers/rte.svg" },
  { name: "Pellenc", src: "/images/customers/pellenc.svg" },
  { name: "Skillcorner", src: "/images/customers/skillcorner.svg" },
  { name: "Fortil", src: "/images/customers/fortil.svg" },
  { name: "Isarsoft", src: "/images/customers/isarsoft.svg" },
];

// Business outcomes
const outcomeKeys = [
  { metric: "80%", labelKey: "fasterProduction" as const },
  { metric: "60%", labelKey: "lowerCosts" as const },
  { metric: "10x", labelKey: "moreExperiments" as const },
  { metric: "0", labelKey: "noFailures" as const },
];

// Enterprise features
const enterpriseFeatureKeys = [
  { titleKey: "iso27001" as const, descKey: "iso27001Desc" as const },
  { titleKey: "deployAnywhere" as const, descKey: "deployAnywhereDesc" as const },
  { titleKey: "rbac" as const, descKey: "rbacDesc" as const },
  { titleKey: "uptime" as const, descKey: "uptimeDesc" as const },
  { titleKey: "apiFirst" as const, descKey: "apiFirstDesc" as const },
  { titleKey: "infiniteScale" as const, descKey: "infiniteScaleDesc" as const },
];

export default function ProductOverviewPage() {
  const t = useTranslations('productOverview');
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--picsellia-green)]"></span>
              {t('hero.badge')}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
            {t('hero.title')}{" "}
            <span className="text-[var(--picsellia-green)]">{t('hero.titleHighlight')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/trial" className="btn-primary px-6 py-3">
              {t('hero.startTrial')}
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
            <Link href="/demo" className="btn-secondary px-6 py-3">
              {t('hero.seeLiveDemo')}
            </Link>
          </div>

          {/* Video */}
          <div className="mb-16">
            <div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                src="/videos/homepage.webm"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 pb-16 border-b border-[var(--border)]">
            {outcomeKeys.map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-[var(--picsellia-green)] mb-1">
                  {stat.metric}
                </div>
                <div className="text-sm text-[var(--tertiary-label)]">
                  {t(`outcomes.${stat.labelKey}`)}
                </div>
              </div>
            ))}
          </div>

          {/* Logos */}
          <div className="text-center">
            <p className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-8">
              {t('usedBy')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
              {customerLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="relative h-8 w-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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

      <PlatformLifecycle />

      {/* Enterprise Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
                {t('enterprise.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {t('enterprise.title')}
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                {t('enterprise.subtitle')}
              </p>
            </div>
            <Link href="/demo" className="btn-secondary">
              {t('enterprise.talkToSales')}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enterpriseFeatureKeys.map((feature) => (
              <div key={feature.titleKey} className="card p-6">
                <div className="flex items-center gap-2 mb-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="text-base font-medium text-[var(--label)]">
                    {t(`enterprise.${feature.titleKey}`)}
                  </h3>
                </div>
                <p className="text-sm text-[var(--secondary-label)] pl-7">
                  {t(`enterprise.${feature.descKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.08]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-green)]"></span>
                </span>
                <span className="text-xs font-mono text-[var(--picsellia-green)]">
                  READY_TO_SHIP
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
                {t('cta.title')}
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                {t('cta.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link href="/trial" className="btn-primary px-8 py-3 text-base">
                  {t('cta.startTrial')}
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
                  href="/demo"
                  className="btn-secondary px-8 py-3 text-base"
                >
                  {t('cta.scheduleDemo')}
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--tertiary-label)]">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[var(--picsellia-green)]"
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
                  <span>{t('cta.noCreditCard')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[var(--picsellia-green)]"
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
                  <span>{t('cta.trialDuration')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[var(--picsellia-green)]"
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
                  <span>{t('cta.isoCertified')}</span>
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="relative z-10 border-t border-[var(--border)] bg-[var(--secondary-system-background)]/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
                {[
                  { value: "50M+", label: t('cta.imagesProcessed') },
                  { value: "<100ms", label: t('cta.inferenceLatency') },
                  { value: "99.9%", label: t('cta.uptimeSla') },
                  { value: "24/7", label: t('cta.support') },
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
