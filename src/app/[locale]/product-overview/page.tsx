import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import ProductOverviewPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, softwareApplicationJsonLd, webPageJsonLd, faqJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-08-25";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'productOverview.metadata' });
  const canonical = localizedUrl("/product-overview", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/product-overview"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function ProductOverviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFaq = await getTranslations({ locale, namespace: 'productOverview.faq' });
  const faqs = ['q1', 'q2', 'q3', 'q4'].map((key) => ({
    question: tFaq(`${key}.question`),
    answer: tFaq(`${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }], locale)} />
      <JsonLd data={softwareApplicationJsonLd(locale)} />
      <JsonLd data={faqJsonLd(faqs, locale)} />
      <JsonLd data={webPageJsonLd("/product-overview", PAGE_LAST_UPDATED, locale)} />
      <ProductOverviewPageContent />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
