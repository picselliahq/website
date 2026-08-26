import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import PricingPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, pricingServiceJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-08-25";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pricing.metadata' });
  const canonical = localizedUrl("/pricing", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/pricing"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tModules = await getTranslations({ locale, namespace: 'pricing.modules' });
  const modules = ['dataEngine', 'visionaiFactory', 'reliabilityEngine'].map((key) => ({
    name: tModules(`${key}.name`),
    description: tModules(`${key}.description`),
  }));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Pricing', url: '/pricing' }], locale)} />
      <JsonLd data={pricingServiceJsonLd(modules, locale)} />
      <JsonLd data={webPageJsonLd("/pricing", PAGE_LAST_UPDATED, locale)} />
      <PricingPageContent />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
