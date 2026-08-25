import { getTranslations, setRequestLocale } from 'next-intl/server';
import AgriculturePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "precision-agriculture-computer-vision-crop-health-monitoring",
  "ai-livestock-monitoring-animal-welfare-farm-productivity",
  "companies-agriculture-tech",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.agriculture.metadata' });
  const canonical = localizedUrl("/industry/agriculture", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/industry/agriculture"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function AgriculturePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Agriculture', url: '/industry/agriculture' }], locale)} />
      <AgriculturePageContent />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}
