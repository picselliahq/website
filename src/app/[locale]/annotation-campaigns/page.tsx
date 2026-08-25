import { getTranslations, setRequestLocale } from 'next-intl/server';
import AnnotationCampaignsPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "mlops-for-computer-vision-complete-guide",
  "picsellia-annotation-campaign",
  "mastering-data-annotation-for-ai-projects-in-2025",
  "build-high-performing-teams-for-computer-vision-projects",
  "onboarding-new-collaborators-easily",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'annotationCampaigns.metadata' });
  const canonical = localizedUrl("/annotation-campaigns", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/annotation-campaigns"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
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
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}
