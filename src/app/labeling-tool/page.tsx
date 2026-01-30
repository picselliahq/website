import HeroSection from '@/components/labeling-tool/HeroSection';
import AnnotationTypesSection from '@/components/labeling-tool/AnnotationTypesSection';
import ToolsAndFeaturesSection from '@/components/labeling-tool/ToolsAndFeaturesSection';
import AIAssistedSection from '@/components/labeling-tool/AIAssistedSection';
import QualityControlSection from '@/components/labeling-tool/QualityControlSection';
import CTASection from '@/components/labeling-tool/CTASection';

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
