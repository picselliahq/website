import { getTranslations, setRequestLocale } from 'next-intl/server';
import ExperimentTrackingPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'experimentTracking.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/experiment-tracking",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/experiment-tracking",
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
    </>
  );
}
