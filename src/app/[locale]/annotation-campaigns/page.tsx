import { getTranslations, setRequestLocale } from 'next-intl/server';
import AnnotationCampaignsPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'annotationCampaigns.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/annotation-campaigns",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/annotation-campaigns",
    },
  };
}

export default async function AnnotationCampaignsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Annotation Campaigns', url: '/annotation-campaigns' }], locale)} />
      <AnnotationCampaignsPageContent />
    </>
  );
}
