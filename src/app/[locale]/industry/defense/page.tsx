import { getTranslations, setRequestLocale } from 'next-intl/server';
import DefensePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.defense.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/industry/defense",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/industry/defense",
    },
  };
}

export default async function DefensePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Defense', url: '/industry/defense' }], locale)} />
      <DefensePageContent />
    </>
  );
}
