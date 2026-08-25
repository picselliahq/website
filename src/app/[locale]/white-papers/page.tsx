import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'whitePapers.metadata' });
  const canonical = localizedUrl("/white-papers", locale);
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
