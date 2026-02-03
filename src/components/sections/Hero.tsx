"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

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

export default function Hero() {
  const t = useTranslations("home.hero");

  const stats = [
    { value: t("stats.imagesIndexed.value"), label: t("stats.imagesIndexed.label") },
    { value: t("stats.onPrem.value"), label: t("stats.onPrem.label") },
    { value: t("stats.modelsTrained.value"), label: t("stats.modelsTrained.label") },
    { value: t("stats.predictions.value"), label: t("stats.predictions.label") },
  ];

  return (
    <section className="pt-32 pb-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--picsellia-green)]"></span>
            {t("badge")}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
          {t("headline")}{" "}
          <span className="text-[var(--picsellia-green)]">{t("headlineHighlight")}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
          {t("subheadline")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/trial" className="btn-primary px-6 py-3">
            {t("startFreeTrial")}
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
            {t("requestDemo")}
          </Link>
        </div>

        {/* Hero Image */}
        <div
          className="mb-16 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid var(--border)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src="/images/hero homepage.png"
            alt={t("heroImageAlt")}
            width={1920}
            height={1080}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 pb-16 border-b border-[var(--border)]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-[var(--label)] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--tertiary-label)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="text-center">
          <p className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-8">
            {t("usedByTeams")}
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
  );
}
