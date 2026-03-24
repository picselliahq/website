import { getTranslations, setRequestLocale } from 'next-intl/server';
import ManufacturingPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.manufacturing.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/industry/manufacturing",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/industry/manufacturing",
    },
  };
}

export default async function ManufacturingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Manufacturing', url: '/industry/manufacturing' }], locale)} />
      <ManufacturingPageContent />
    </>
  );
}
