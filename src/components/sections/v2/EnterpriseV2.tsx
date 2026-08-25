import { Link as LocaleLink } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function EnterpriseV2() {
  const t = useTranslations("home.enterprise");

  const features = [
    {
      title: t("featureIsoTitle"),
      description: t("featureIsoDescription"),
      tag: t("featureIsoTag"),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      ),
    },
    {
      title: t("featureDeployTitle"),
      description: t("featureDeployDescription"),
      tag: t("featureDeployTag"),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      ),
    },
    {
      title: t("featureRbacTitle"),
      description: t("featureRbacDescription"),
      tag: t("featureRbacTag"),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
        />
      ),
    },
    {
      title: t("featureUptimeTitle"),
      description: t("featureUptimeDescription"),
      tag: t("featureUptimeTag"),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      ),
    },
    {
      title: t("featureApiTitle"),
      description: t("featureApiDescription"),
      tag: t("featureApiTag"),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      ),
    },
    {
      title: t("featureScaleTitle"),
      description: t("featureScaleDescription"),
      tag: t("featureScaleTag"),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      ),
    },
  ];

  return (
    <section className="py-28 border-t border-[var(--border)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex items-center gap-8 mb-4">
          <span className="text-[10px] font-mono text-[var(--system-blue)] uppercase tracking-wider">
            {t("sectionLabel")}
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08] mb-4">
              {t("headlinePart1")}
              <br />
              <span className="text-[var(--secondary-label)]">
                {t("headlinePart2")}
              </span>
            </h2>
            <p className="text-[var(--secondary-label)] max-w-lg">
              {t("description")}
            </p>
          </div>
          <LocaleLink href="/demo" className="btn-primary group self-start md:self-auto">
            {t("talkToSales")}
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
        </div>

        {/* Feature grid — structured, labeled */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[var(--background)] p-6 hover:bg-[var(--secondary-system-background)] transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--secondary-system-background)] text-[var(--system-blue)] group-hover:bg-[var(--system-blue)]/10 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <span className="text-[9px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--secondary-system-background)] group-hover:bg-[var(--tertiary-system-background)]">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[var(--label)] mb-1.5">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
