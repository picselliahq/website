import { getTranslations, setRequestLocale } from 'next-intl/server';
import AerospacePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.aerospace.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/industry/aerospace",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/industry/aerospace",
    },
  };
}

export default async function AerospacePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Aerospace', url: '/industry/aerospace' }], locale)} />
      <AerospacePageContent />
    </>
  );
}
