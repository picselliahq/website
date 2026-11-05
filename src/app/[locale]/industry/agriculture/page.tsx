import { getTranslations, setRequestLocale } from 'next-intl/server';
import AgriculturePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";
import FaqSection from "@/components/ui/FaqSection";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-11-05";

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
  const tFaq = await getTranslations({ locale, namespace: 'industry.agriculture.faq' });
  const faqs = tFaq.raw('items') as Array<{ question: string; answer: string }>;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Agriculture', url: '/industry/agriculture' }], locale)} />
      <JsonLd data={faqJsonLd(faqs, locale)} />
      <JsonLd data={webPageJsonLd("/industry/agriculture", PAGE_LAST_UPDATED, locale)} />
      <AgriculturePageContent />
      <FaqSection title={tFaq('title')} faqs={faqs} />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
