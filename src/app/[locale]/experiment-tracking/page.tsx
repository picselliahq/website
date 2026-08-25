import { getTranslations, setRequestLocale } from 'next-intl/server';
import ExperimentTrackingPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "top-5-experiment-tracking-tools-for-computer-vision",
  "road-to-mlops-part-2",
  "road-to-mlops-part-3",
  "hyperparameters-in-computer-vision",
  "coco-evaluation-metrics-explained",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'experimentTracking.metadata' });
  const canonical = localizedUrl("/experiment-tracking", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/experiment-tracking"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function ExperimentTrackingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Experiment Tracking', url: '/experiment-tracking' }], locale)} />
      <ExperimentTrackingPageContent />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}
