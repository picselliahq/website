import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/labeling-tool/HeroSection';
import AnnotationTypesSection from '@/components/labeling-tool/AnnotationTypesSection';
import ToolsAndFeaturesSection from '@/components/labeling-tool/ToolsAndFeaturesSection';
import AIAssistedSection from '@/components/labeling-tool/AIAssistedSection';
import QualityControlSection from '@/components/labeling-tool/QualityControlSection';
import CTASection from '@/components/labeling-tool/CTASection';

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "mlops-for-computer-vision-complete-guide",
  "best-image-annotation-tools-for-machine-learning",
  "mastering-data-annotation-for-ai-projects-in-2025",
  "video-annotation",
  "picsellia-annotation-campaign",
  "image-data-quality-for-image-classification",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'labelingTool.metadata' });
  const canonical = localizedUrl("/labeling-tool", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/labeling-tool"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function LabelingToolPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Labeling Tool', url: '/labeling-tool' }], locale)} />
      <HeroSection />
      <AnnotationTypesSection />
      <ToolsAndFeaturesSection />
      <AIAssistedSection />
      <QualityControlSection />
      <CTASection />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}
