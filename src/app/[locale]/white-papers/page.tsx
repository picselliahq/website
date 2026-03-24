import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'whitePapers.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/white-papers",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/white-papers",
    },
  };
}

export default async function WhitePapersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'whitePapers' });
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'White Papers', url: '/white-papers' }], locale)} />
      <PlaceholderPage
        title={t('title')}
        description={t('description')}
        badge={t('badge')}
      />
    </>
  );
}
