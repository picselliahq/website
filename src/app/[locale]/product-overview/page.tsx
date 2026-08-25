import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import ProductOverviewPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, softwareApplicationJsonLd } from "@/lib/json-ld";
import { localizedUrl } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'productOverview.metadata' });
  const canonical = localizedUrl("/product-overview", locale);
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

export default async function ProductOverviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }], locale)} />
      <JsonLd data={softwareApplicationJsonLd(locale)} />
      <ProductOverviewPageContent />
    </>
  );
}
