import { getTranslations, setRequestLocale } from 'next-intl/server';
import ModelMonitoringPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-08-25";

const relatedSlugs = [
  "mlops-for-computer-vision-complete-guide",
  "model-monitoring-for-machine-learning-in-production",
  "key-metrics-to-monitor-computer-vision-solutions",
  "what-is-data-drift-and-how-to-detect-it-with-mlops",
  "the-fastest-way-to-analyze-models-for-object-detection",
  "understanding-the-f1-score-in-machine-learning-the-harmonic-mean-of-precision-and-recall",
  "understanding-overfitting-in-machine-learning",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'modelMonitoring.metadata' });
  const canonical = localizedUrl("/model-monitoring", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/model-monitoring"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function ModelMonitoringPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Model Monitoring', url: '/model-monitoring' }], locale)} />
      <JsonLd data={webPageJsonLd("/model-monitoring", PAGE_LAST_UPDATED, locale)} />
      <ModelMonitoringPageContent />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
