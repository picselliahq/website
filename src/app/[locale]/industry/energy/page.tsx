import { getTranslations, setRequestLocale } from 'next-intl/server';
import EnergyPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.energy.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/industry/energy",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/industry/energy",
    },
  };
}

export default async function EnergyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Energy', url: '/industry/energy' }], locale)} />
      <EnergyPageContent />
    </>
  );
}
