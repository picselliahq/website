import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Defects Detection",
  description: "Automated visual inspection for quality control. Detect micro-defects with 99.5% accuracy and reduce manual inspection time.",
};

export default function DefectsDetectionPage() {
  return (
    <PlaceholderPage
      title="Defects Detection"
      description="Automate quality control with AI-powered visual inspection. Detect micro-defects with 99.5% accuracy and reduce manual inspection time by 80%."
      badge="Use Case"
    />
  );
}
