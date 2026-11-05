import { getTranslations, setRequestLocale } from 'next-intl/server';
import DefensePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";
import FaqSection from "@/components/ui/FaqSection";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-11-05";

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
      languages: localizedAlternates("/industry/defense"),
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
  const tFaq = await getTranslations({ locale, namespace: 'industry.defense.faq' });
  const faqs = tFaq.raw('items') as Array<{ question: string; answer: string }>;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Defense', url: '/industry/defense' }], locale)} />
      <JsonLd data={faqJsonLd(faqs, locale)} />
      <JsonLd data={webPageJsonLd("/industry/defense", PAGE_LAST_UPDATED, locale)} />
      <DefensePageContent />
      <FaqSection title={tFaq('title')} faqs={faqs} />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
