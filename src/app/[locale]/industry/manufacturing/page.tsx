import { getTranslations, setRequestLocale } from 'next-intl/server';
import ManufacturingPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";
import FaqSection from "@/components/ui/FaqSection";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-11-05";

const relatedSlugs = [
  "anomaly-detection-manufacturing",
  "manufacturing-datasets",
  "computer-vision-in-production-lines-manufacturing",
  "industrie-4-0-revolutionizing-manufacturing-with-computer-vision",
  "synthetic-data-for-manufacturing-datasets",
  "how-scortex-is-shaping-automated-visual-inspection",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.manufacturing.metadata' });
  const canonical = localizedUrl("/industry/manufacturing", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/industry/manufacturing"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function ManufacturingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFaq = await getTranslations({ locale, namespace: 'industry.manufacturing.faq' });
  const faqs = tFaq.raw('items') as Array<{ question: string; answer: string }>;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Manufacturing', url: '/industry/manufacturing' }], locale)} />
      <JsonLd data={faqJsonLd(faqs, locale)} />
      <JsonLd data={webPageJsonLd("/industry/manufacturing", PAGE_LAST_UPDATED, locale)} />
      <ManufacturingPageContent />
      <FaqSection title={tFaq('title')} faqs={faqs} />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
