import Link from "next/link";
import { Link as LocaleLink } from "@/i18n/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, itemListJsonLd } from "@/lib/json-ld";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { localizedUrl, localizedAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'compare.hub.metadata' });
  const canonical = localizedUrl("/compare", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/compare"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

const competitorKeys = ["roboflow", "labelbox", "encord"] as const;
const competitorLogos: Record<(typeof competitorKeys)[number], string> = {
  roboflow: "/images/compare/roboflow.svg",
  labelbox: "/images/compare/labelbox.svg",
  encord: "/images/compare/encord.png",
};
const competitorHrefs: Record<(typeof competitorKeys)[number], string> = {
  roboflow: "/compare/roboflow",
  labelbox: "/compare/labelbox",
  encord: "/compare/encord",
};

export default async function CompareHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'compare.hub' });
  const tNav = await getTranslations({ locale, namespace: 'nav.compareItems' });

  const competitors = competitorKeys.map((key) => ({
    key,
    label: tNav(`${key}.label`),
    description: tNav(`${key}.description`),
    tagline: t(`competitors.${key}.tagline`),
    stages: t(`competitors.${key}.stages`),
    logo: competitorLogos[key],
    href: competitorHrefs[key],
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Compare", url: "/compare" }], locale)}
      />
      <JsonLd
        data={itemListJsonLd(
          competitors.map((c) => ({
            name: c.label,
            description: c.description,
            url: c.href,
          })),
          locale,
        )}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--picsellia-green)]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--system-blue)]/8 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <span className="text-sm font-medium text-[var(--picsellia-green)]">
                {t('badge')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              {t('heroTitle')}
              <span className="text-[var(--picsellia-green)]">{t('heroHighlight')}</span>
            </h1>

            <p className="text-lg text-[var(--secondary-label)] mb-4 max-w-2xl mx-auto">
              {t('heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Criteria table */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('criteriaLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('criteriaTitle')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              {t('criteriaDescription')}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-4 px-4 text-xs font-medium text-[var(--tertiary-label)] uppercase tracking-wider">
                    {t('criteriaHeader')}
                  </th>
                  <th className="text-left py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded overflow-hidden">
                        <Image src="/images/Icon_white.svg" alt="Picsellia" width={24} height={24} className="w-full h-full" />
                      </div>
                      <span className="text-sm font-semibold text-[var(--picsellia-green)]">Picsellia</span>
                    </div>
                  </th>
                  {competitors.map((c) => (
                    <th key={c.key} className="text-left py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded overflow-hidden">
                          <Image src={c.logo} alt={c.label.replace('Picsellia vs ', '')} width={24} height={24} className="w-full h-full" />
                        </div>
                        <span className="text-sm font-semibold text-[var(--label)]">
                          {c.label.replace('Picsellia vs ', '')}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 px-4 text-sm font-medium text-[var(--label)]">
                    {t('platformTypeLabel')}
                  </td>
                  <td className="py-4 px-4 text-sm text-[var(--picsellia-green)] font-medium">
                    {t('picselliaTagline')}
                  </td>
                  {competitors.map((c) => (
                    <td key={c.key} className="py-4 px-4 text-sm text-[var(--secondary-label)]">
                      {c.tagline}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 px-4 text-sm font-medium text-[var(--label)]">
                    {t('pipelineCoverageLabel')}
                  </td>
                  <td className="py-4 px-4 text-sm text-[var(--picsellia-green)] font-medium">
                    {t('picselliaStages')}
                  </td>
                  {competitors.map((c) => (
                    <td key={c.key} className="py-4 px-4 text-sm text-[var(--secondary-label)]">
                      {c.stages}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-medium text-[var(--label)] align-top">
                    {t('bestForLabel')}
                  </td>
                  <td className="py-4 px-4 align-top" />
                  {competitors.map((c) => (
                    <td key={c.key} className="py-4 px-4 text-sm text-[var(--secondary-label)] align-top">
                      {c.description}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison cards */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {competitors.map((c) => (
              <Link
                key={c.key}
                href={c.href}
                className="card p-6 group hover:border-[var(--picsellia-green)]/30 transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-[var(--tertiary-system-background)] flex items-center justify-center p-2">
                    <Image src={c.logo} alt={c.label.replace('Picsellia vs ', '')} width={24} height={24} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--label)]">
                    {c.label}
                  </h3>
                </div>
                <p className="text-sm text-[var(--secondary-label)] mb-6 flex-1">
                  {c.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--picsellia-green)]">
                  {t('readComparison')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--picsellia-green)]/10 via-transparent to-[var(--system-blue)]/10" />
            <div className="card p-0 border-[var(--picsellia-green)]/20 relative">
              <div className="relative z-10 p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  {t('ctaTitle')}
                </h2>
                <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                  {t('ctaDescription')}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <LocaleLink href="/demo" className="btn-primary px-8 py-3">
                    {t('bookDemo')}
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </LocaleLink>
                  <LocaleLink href="/trial" className="btn-secondary px-8 py-3">
                    {t('startFreeTrial')}
                  </LocaleLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
