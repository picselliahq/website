import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/labeling-tool/HeroSection';
import AnnotationTypesSection from '@/components/labeling-tool/AnnotationTypesSection';
import ToolsAndFeaturesSection from '@/components/labeling-tool/ToolsAndFeaturesSection';
import AIAssistedSection from '@/components/labeling-tool/AIAssistedSection';
import QualityControlSection from '@/components/labeling-tool/QualityControlSection';
import ComparisonFAQSection from '@/components/labeling-tool/ComparisonFAQSection';
import CTASection from '@/components/labeling-tool/CTASection';

import { JsonLd, breadcrumbJsonLd, softwareApplicationJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-08-25";

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
  const tFaq = await getTranslations({ locale, namespace: 'labelingTool.faq' });
  const faqs = ['q1', 'q2', 'q3'].map((key) => ({
    question: tFaq(`${key}.question`),
    answer: tFaq(`${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Labeling Tool', url: '/labeling-tool' }], locale)} />
      <JsonLd
        data={softwareApplicationJsonLd(locale, {
          name: "Picsellia Labeling Tool",
          url: "/labeling-tool",
          description:
            "Professional image and video annotation tool for computer vision. Bounding boxes, polygons, segmentation, keypoints, and AI-assisted labeling with built-in quality control.",
          featureList: [
            "Bounding box, polygon, segmentation, keypoint, and polyline annotation",
            "AI-assisted labeling",
            "Built-in review workflow with accept/reject and full traceability",
            "Support for images, video, satellite, medical, and multispectral data",
          ],
        })}
      />
      <JsonLd data={faqJsonLd(faqs, locale)} />
      <JsonLd data={webPageJsonLd("/labeling-tool", PAGE_LAST_UPDATED, locale)} />
      <HeroSection />
      <AnnotationTypesSection />
      <ToolsAndFeaturesSection />
      <AIAssistedSection />
      <QualityControlSection />
      <ComparisonFAQSection />
      <CTASection />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
