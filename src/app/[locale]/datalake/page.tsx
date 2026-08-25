import { getTranslations, setRequestLocale } from 'next-intl/server';
import DatalakeHero from '@/components/datalake/DatalakeHero';
import DatalakeCapabilities from '@/components/datalake/DatalakeCapabilities';
import DatalakeQueryLanguage from '@/components/datalake/DatalakeQueryLanguage';
import DatalakeVisualSearch from '@/components/datalake/DatalakeVisualSearch';
import DatalakeTagsMetadata from '@/components/datalake/DatalakeTagsMetadata';
import DatalakeCTA from '@/components/datalake/DatalakeCTA';

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "choosing-an-image-dataset-management-platform",
  "data-management-in-ai-key-success-factor",
  "computer-vision-dataset-slicing",
  "how-we-built-a-dataset-visual-similarity-search-feature",
  "feedback-loops-and-versioning-in-computer-vision",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'datalake.metadata' });
  const canonical = localizedUrl("/datalake", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
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
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}
