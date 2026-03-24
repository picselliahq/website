import { getTranslations, setRequestLocale } from 'next-intl/server';
import AILaboratoryPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aiLaboratory.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/ai-laboratory",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/ai-laboratory",
    },
  };
}

export default async function AILaboratoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'AI Laboratory', url: '/ai-laboratory' }], locale)} />
      <AILaboratoryPageContent />
    </>
  );
}
