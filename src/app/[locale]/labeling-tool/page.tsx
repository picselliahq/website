import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/labeling-tool/HeroSection';
import AnnotationTypesSection from '@/components/labeling-tool/AnnotationTypesSection';
import ToolsAndFeaturesSection from '@/components/labeling-tool/ToolsAndFeaturesSection';
import AIAssistedSection from '@/components/labeling-tool/AIAssistedSection';
import QualityControlSection from '@/components/labeling-tool/QualityControlSection';
import CTASection from '@/components/labeling-tool/CTASection';

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'labelingTool.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/labeling-tool',
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: '/labeling-tool',
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
    </>
  );
}
