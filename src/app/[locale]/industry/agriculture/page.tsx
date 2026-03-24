import { getTranslations, setRequestLocale } from 'next-intl/server';
import AgriculturePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.agriculture.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/industry/agriculture",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/industry/agriculture",
    },
  };
}

export default async function AgriculturePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Agriculture', url: '/industry/agriculture' }], locale)} />
      <AgriculturePageContent />
    </>
  );
}
