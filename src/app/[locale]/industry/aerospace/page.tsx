import { getTranslations, setRequestLocale } from 'next-intl/server';
import AerospacePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";
import FaqSection from "@/components/ui/FaqSection";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-11-05";

const relatedSlugs = [
  "the-confluence-of-computer-vision-and-drone-technology",
  "optimize-computer-vision-models-on-the-edge",
  "anomaly-detection-computer-vision",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.aerospace.metadata' });
  const canonical = localizedUrl("/industry/aerospace", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/industry/aerospace"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function AerospacePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFaq = await getTranslations({ locale, namespace: 'industry.aerospace.faq' });
  const faqs = tFaq.raw('items') as Array<{ question: string; answer: string }>;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Aerospace', url: '/industry/aerospace' }], locale)} />
      <JsonLd data={faqJsonLd(faqs, locale)} />
      <JsonLd data={webPageJsonLd("/industry/aerospace", PAGE_LAST_UPDATED, locale)} />
      <AerospacePageContent />
      <FaqSection title={tFaq('title')} faqs={faqs} />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
