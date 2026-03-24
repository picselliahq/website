import { getTranslations, setRequestLocale } from 'next-intl/server';
import DatalakeHero from '@/components/datalake/DatalakeHero';
import DatalakeCapabilities from '@/components/datalake/DatalakeCapabilities';
import DatalakeQueryLanguage from '@/components/datalake/DatalakeQueryLanguage';
import DatalakeVisualSearch from '@/components/datalake/DatalakeVisualSearch';
import DatalakeTagsMetadata from '@/components/datalake/DatalakeTagsMetadata';
import DatalakeCTA from '@/components/datalake/DatalakeCTA';

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'datalake.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/datalake',
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: '/datalake',
    },
  };
}

export default async function DatalakePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Datalake', url: '/datalake' }], locale)} />
      <DatalakeHero />
      <DatalakeCapabilities />
      <DatalakeQueryLanguage />
      <DatalakeVisualSearch />
      <DatalakeTagsMetadata />
      <DatalakeCTA />
    </>
  );
}
