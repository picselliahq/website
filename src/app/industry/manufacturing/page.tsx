import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing",
  description: "Computer vision solutions for manufacturing. Automated visual inspection, defect detection, and quality control at scale.",
};

export default function ManufacturingPage() {
  return (
    <PlaceholderPage
      title="Manufacturing"
      description="Transform quality control with AI-powered visual inspection. Detect defects with 99.5% accuracy and reduce manual inspection time by 80%."
      badge="Industry"
    />
  );
}
