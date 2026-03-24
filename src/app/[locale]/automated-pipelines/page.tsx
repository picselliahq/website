import { getTranslations, setRequestLocale } from 'next-intl/server';
import AutomatedPipelinesPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'automatedPipelines.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/automated-pipelines",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/automated-pipelines",
    },
  };
}

export default async function AutomatedPipelinesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Automated Pipelines', url: '/automated-pipelines' }], locale)} />
      <AutomatedPipelinesPageContent />
    </>
  );
}
