import { getTranslations, setRequestLocale } from 'next-intl/server';
import ModelMonitoringPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'modelMonitoring.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/model-monitoring",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/model-monitoring",
    },
  };
}

export default async function ModelMonitoringPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Model Monitoring', url: '/model-monitoring' }], locale)} />
      <ModelMonitoringPageContent />
    </>
  );
}
