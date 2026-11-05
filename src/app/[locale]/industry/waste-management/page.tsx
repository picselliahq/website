import { getTranslations, setRequestLocale } from 'next-intl/server';
import WasteManagementPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";
import FaqSection from "@/components/ui/FaqSection";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-11-05";

const relatedSlugs = [
  "how-computer-vision-is-changing-waste-management",
  "anomaly-detection-computer-vision",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.wasteManagement.metadata' });
  const canonical = localizedUrl("/industry/waste-management", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/industry/waste-management"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function WasteManagementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFaq = await getTranslations({ locale, namespace: 'industry.wasteManagement.faq' });
  const faqs = tFaq.raw('items') as Array<{ question: string; answer: string }>;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Waste Management', url: '/industry/waste-management' }], locale)} />
      <JsonLd data={faqJsonLd(faqs, locale)} />
      <JsonLd data={webPageJsonLd("/industry/waste-management", PAGE_LAST_UPDATED, locale)} />
      <WasteManagementPageContent />
      <FaqSection title={tFaq('title')} faqs={faqs} />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
