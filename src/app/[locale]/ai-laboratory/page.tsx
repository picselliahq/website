import { getTranslations, setRequestLocale } from 'next-intl/server';
import AILaboratoryPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "best-practices-for-fine-tuning-computer-vision-models",
  "a-dive-into-yolo-object-detection",
  "dinov2-steps-by-steps-explanations-picsellia",
  "pisam-picsellia-segment-anything-model",
  "vlms-vs-cnns-a-new-era-dawning-in-computer-vision-performance",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aiLaboratory.metadata' });
  const canonical = localizedUrl("/ai-laboratory", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/ai-laboratory"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
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
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}
