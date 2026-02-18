import type { Metadata } from 'next';
import HeroSection from '@/components/labeling-tool/HeroSection';
import AnnotationTypesSection from '@/components/labeling-tool/AnnotationTypesSection';
import ToolsAndFeaturesSection from '@/components/labeling-tool/ToolsAndFeaturesSection';
import AIAssistedSection from '@/components/labeling-tool/AIAssistedSection';
import QualityControlSection from '@/components/labeling-tool/QualityControlSection';
import CTASection from '@/components/labeling-tool/CTASection';

export const metadata: Metadata = {
  title: 'Labeling Tool - Image & Video Annotation',
  description:
    'Professional image and video annotation tool for computer vision. Support for bounding boxes, polygons, segmentation, keypoints, and AI-assisted labeling.',
  alternates: {
    canonical: '/labeling-tool',
  },
  openGraph: {
    title: 'Labeling Tool - Image & Video Annotation',
    description:
      'Professional image and video annotation tool for computer vision with AI-assisted labeling.',
    url: '/labeling-tool',
  },
};

export default function LabelingToolPage() {
  return (
    <>
      <HeroSection />
      <AnnotationTypesSection />
      <ToolsAndFeaturesSection />
      <AIAssistedSection />
      <QualityControlSection />
      <CTASection />
    </>
  );
}
