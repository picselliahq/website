import { Link as LocaleLink } from "@/i18n/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { localizedUrl, localizedAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'compare.encord.metadata' });
  const canonical = localizedUrl("/compare/encord", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/compare/encord"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

// Pipeline stages - visual coverage map
const pipelineStageKeys = ['dataManagement', 'annotation', 'training', 'deployment', 'monitoring', 'compliance'] as const;
const pipelineStageIcons = [
  "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
  "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
];
const picselliaStatuses = ["full", "full", "full", "full", "full", "full"] as const;
const competitorStatuses: string[] = ["full", "full", "none", "none", "none", "none"];

const categoryKeys = ['dataManagement', 'annotationLabeling', 'trainingExperimentation', 'deploymentMonitoring', 'enterpriseCompliance'] as const;
const categoryIcons = [
  "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
  "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
];
const categoryColors = ["var(--system-blue)", "var(--picsellia-green)", "var(--system-orange)", "var(--system-indigo)", "var(--system-red)"];
const featurePicselliaStatuses: Record<string, string[]> = {
  dataManagement: ["full","full","full","full","full"],
  annotationLabeling: ["full","full","full","full"],
  trainingExperimentation: ["full","full","full","full"],
  deploymentMonitoring: ["full","full","full","full"],
  enterpriseCompliance: ["full","full","full","full","full"],
};
const featureCompetitorStatuses: Record<string, string[]> = {
  dataManagement: ["partial","full","full","full","full"],
  annotationLabeling: ["full","full","full","none","full"],
  trainingExperimentation: ["none","none","none","partial","full"],
  deploymentMonitoring: ["none","none","none","none","none"],
  enterpriseCompliance: ["partial","none","partial","partial","partial"],
};

function StatusIcon({ status }: { status: string }) {
  if (status === "full") {
    return (
      <div className="w-7 h-7 rounded-full bg-[var(--picsellia-green)]/15 flex items-center justify-center">
        <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (status === "partial") {
    return (
      <div className="w-7 h-7 rounded-full bg-[var(--system-orange)]/15 flex items-center justify-center">
        <div className="w-2.5 h-0.5 rounded-full bg-[var(--system-orange)]" />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 rounded-full bg-[var(--system-red)]/10 flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-[var(--system-red)]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
}

export default async function CompareEncordPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'compare.encord' });

  const pipelineStages = pipelineStageKeys.map((key, i) => ({
    name: t(`pipelineStages.${key}`),
    icon: pipelineStageIcons[i],
    picsellia: picselliaStatuses[i],
    competitor: competitorStatuses[i],
  }));

  const comparisonCategories = categoryKeys.map((key, i) => ({
    name: t(`categories.${key}`),
    icon: categoryIcons[i],
    color: categoryColors[i],
    features: (t.raw(`comparison.${key}.features`) as Array<{feature: string; picselliaNote: string; competitorNote: string}>).map((f, fi) => ({
      feature: f.feature,
      picsellia: featurePicselliaStatuses[key][fi],
      picselliaNote: f.picselliaNote,
      competitor: featureCompetitorStatuses[key][fi],
      competitorNote: f.competitorNote,
    })),
  }));

  const faqs = t.raw('faqs') as Array<{question: string; answer: string}>;
  const stats = [
    { value: t('stats.stat1Value'), label: t('stats.stat1Label'), sublabel: t('stats.stat1Sublabel') },
    { value: t('stats.stat2Value'), label: t('stats.stat2Label'), sublabel: t('stats.stat2Sublabel') },
    { value: t('stats.stat3Value'), label: t('stats.stat3Label'), sublabel: t('stats.stat3Sublabel') },
    { value: t('stats.stat4Value'), label: t('stats.stat4Label'), sublabel: t('stats.stat4Sublabel') },
  ];
  const choosePicselliaItems = t.raw('choosePicselliaItems') as string[];
  const considerCompetitorItems = t.raw('considerCompetitorItems') as string[];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Compare", url: "/compare" },
          { name: "Picsellia vs Encord", url: "/compare/encord" },
        ], locale)}
      />
      <JsonLd data={faqJsonLd(faqs, locale)} />

      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--picsellia-green)]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--system-indigo)]/8 rounded-full blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(var(--label) 1px, transparent 1px), linear-gradient(90deg, var(--label) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-10">
              <span className="text-sm font-medium text-[var(--picsellia-green)]">
                {t('badge')}
              </span>
            </div>

            <div className="flex items-center justify-center gap-6 md:gap-10 mb-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mb-3 shadow-lg shadow-[var(--picsellia-green)]/10">
                  <Image src="/images/Icon_white.svg" alt="Picsellia" width={80} height={80} className="w-full h-full" />
                </div>
                <span className="text-sm font-semibold text-[var(--label)]">Picsellia</span>
                <span className="text-[11px] text-[var(--tertiary-label)]">{t('picselliaTagline')}</span>
              </div>

              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--tertiary-system-background)] border border-[var(--border)] flex items-center justify-center">
                  <span className="text-sm md:text-base font-bold text-[var(--tertiary-label)]">VS</span>
                </div>
                <div className="absolute top-1/2 -left-6 md:-left-10 w-6 md:w-10 h-px bg-gradient-to-r from-[var(--picsellia-green)]/40 to-transparent" />
                <div className="absolute top-1/2 -right-6 md:-right-10 w-6 md:w-10 h-px bg-gradient-to-l from-[var(--system-indigo)]/40 to-transparent" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mb-3 shadow-lg shadow-[var(--system-indigo)]/10">
                  <Image src="/images/compare/encord.svg" alt="Encord" width={80} height={80} className="w-full h-full" />
                </div>
                <span className="text-sm font-semibold text-[var(--label)]">Encord</span>
                <span className="text-[11px] text-[var(--tertiary-label)]">{t('competitorTagline')}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              {t('heroTitle')}{" "}
              <span className="text-[var(--system-indigo)]">{t('heroHighlight')}</span>
            </h1>

            <p className="text-lg text-[var(--secondary-label)] mb-10 max-w-2xl mx-auto">
              {t('heroDescription')}
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
      </section>

      {/* Pipeline Coverage */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('keyDifferenceLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('keyDifferenceTitle')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              {t('keyDifferenceDescription')}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--picsellia-green)]" />
              <span className="text-xs text-[var(--secondary-label)]">{t('fullSupport')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--system-orange)]" />
              <span className="text-xs text-[var(--secondary-label)]">{t('partial')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--system-red)]" />
              <span className="text-xs text-[var(--secondary-label)]">{t('notAvailable')}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {pipelineStages.map((stage) => {
              const pColor = stage.picsellia === "full" ? "var(--picsellia-green)" : stage.picsellia === "partial" ? "var(--system-orange)" : "var(--system-red)";
              const rColor = stage.competitor === "full" ? "var(--picsellia-green)" : stage.competitor === "partial" ? "var(--system-orange)" : "var(--system-red)";
              return (
                <div key={stage.name} className="card p-4 text-center group hover:border-[var(--picsellia-green)]/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[var(--tertiary-system-background)] flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-[var(--secondary-label)] group-hover:text-[var(--picsellia-green)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stage.icon} />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-[var(--label)] mb-3 whitespace-pre-line leading-tight min-h-[2rem] flex items-center justify-center">
                    {stage.name}
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pColor }} />
                      <span className="text-[10px] text-[var(--tertiary-label)]">P</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: rColor }} />
                      <span className="text-[10px] text-[var(--tertiary-label)]">R</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 max-w-2xl mx-auto space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded overflow-hidden">
                    <Image src="/images/Icon_white.svg" alt="Picsellia" width={20} height={20} className="w-full h-full" />
                  </div>
                  <span className="text-sm font-medium text-[var(--label)]">Picsellia</span>
                </div>
                <span className="text-sm font-semibold text-[var(--picsellia-green)]">{t('picselliaStages')}</span>
              </div>
              <div className="h-3 rounded-full bg-[var(--tertiary-system-background)] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--picsellia-green)] to-[var(--picsellia-green)]/70" style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded overflow-hidden">
                    <Image src="/images/compare/encord.svg" alt="Encord" width={20} height={20} className="w-full h-full" />
                  </div>
                  <span className="text-sm font-medium text-[var(--label)]">Encord</span>
                </div>
                <span className="text-sm font-semibold text-[var(--system-indigo)]">{t('competitorStages')}</span>
              </div>
              <div className="h-3 rounded-full bg-[var(--tertiary-system-background)] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--system-indigo)] to-[var(--system-indigo)]/70" style={{ width: "33%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key numbers */}
      <section className="py-16 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--picsellia-green)] mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-[var(--label)]">{stat.label}</div>
                <div className="text-xs text-[var(--tertiary-label)]">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed comparisons */}
      {comparisonCategories.map((category) => (
        <section key={category.name} className="py-20 border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `color-mix(in srgb, ${category.color} 15%, transparent)` }}
              >
                <svg className="w-5 h-5" style={{ color: category.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--label)]">{category.name}</h2>
            </div>

            <div className="space-y-3">
              <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-4 px-4 pb-2">
                <div className="text-xs font-medium text-[var(--tertiary-label)] uppercase tracking-wider">{t('featureHeader')}</div>
                <div className="text-xs font-medium text-[var(--picsellia-green)] uppercase tracking-wider">Picsellia</div>
                <div className="text-xs font-medium text-[var(--system-indigo)] uppercase tracking-wider">Encord</div>
              </div>

              {category.features.map((row) => (
                <div
                  key={row.feature}
                  className="card-static p-4 md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-4 md:items-center"
                >
                  <div className="text-sm font-semibold text-[var(--label)] mb-3 md:mb-0">
                    {row.feature}
                  </div>
                  <div className="flex items-center gap-2.5 mb-2 md:mb-0">
                    <StatusIcon status={row.picsellia} />
                    <span className="text-sm text-[var(--secondary-label)]">{row.picselliaNote}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <StatusIcon status={row.competitor} />
                    <span className="text-sm text-[var(--tertiary-label)]">{row.competitorNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Recommendation */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('recommendationLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('recommendationTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--picsellia-green)]/10 to-transparent" />
              <div className="card p-8 border-[var(--picsellia-green)]/30 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl overflow-hidden">
                    <Image src="/images/Icon_white.svg" alt="Picsellia" width={40} height={40} className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">{t('choosePicsellia')}</h3>
                    <p className="text-xs text-[var(--picsellia-green)]">{t('choosePicselliaSub')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {choosePicselliaItems.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[var(--picsellia-green)]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--secondary-label)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl overflow-hidden">
                  <Image src="/images/compare/encord.svg" alt="Encord" width={40} height={40} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)]">{t('considerCompetitor')}</h3>
                  <p className="text-xs text-[var(--system-indigo)]">{t('considerCompetitorSub')}</p>
                </div>
              </div>
              <div className="space-y-3">
                {considerCompetitorItems.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[var(--system-indigo)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--secondary-label)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('faqTitle')}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="text-sm font-semibold text-[var(--label)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--picsellia-green)]/10 via-transparent to-[var(--system-indigo)]/10" />
            <div className="absolute inset-0 opacity-[0.04]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle, var(--label) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <div className="card p-0 border-[var(--picsellia-green)]/20 relative">
              <div className="relative z-10 p-12 md:p-16 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[var(--picsellia-green)]/15 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
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
