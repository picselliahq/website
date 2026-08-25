import { getTranslations, setRequestLocale } from 'next-intl/server';
import DefensePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "ai-video-analytics-smart-city-surveillance",
  "the-confluence-of-computer-vision-and-drone-technology",
  "optimize-computer-vision-models-on-the-edge",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.defense.metadata' });
  const canonical = localizedUrl("/industry/defense", locale);
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

export default async function DefensePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Defense', url: '/industry/defense' }], locale)} />
      <DefensePageContent />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}
