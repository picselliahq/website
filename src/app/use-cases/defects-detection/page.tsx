import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
export const metadata: Metadata = {
  title: "Defects Detection - Automated Visual Inspection",
  description: "Automated visual inspection for quality control. Detect micro-defects with 99.5% accuracy and reduce manual inspection time.",
  alternates: {
    canonical: '/use-cases/defects-detection',
  },
  openGraph: {
    title: "Defects Detection - Automated Visual Inspection",
    description: "Automated visual inspection for quality control. Detect micro-defects with 99.5% accuracy and reduce manual inspection time.",
    url: '/use-cases/defects-detection',
  },
};

export default function DefectsDetectionPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }, { name: 'Defects Detection', url: '/use-cases/defects-detection' }])} />
      <PlaceholderPage
      title="Defects Detection"
      description="Automate quality control with AI-powered visual inspection. Detect micro-defects with 99.5% accuracy and reduce manual inspection time by 80%."
      badge="Use Case"
    />
    </>);
}
