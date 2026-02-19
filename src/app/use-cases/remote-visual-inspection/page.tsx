import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
export const metadata: Metadata = {
  title: "Remote Visual Inspection - Infrastructure Analysis",
  description: "Drone and satellite imagery analysis for infrastructure inspection. Scale remote inspection with computer vision.",
  alternates: {
    canonical: '/use-cases/remote-visual-inspection',
  },
  openGraph: {
    title: "Remote Visual Inspection - Infrastructure Analysis",
    description: "Drone and satellite imagery analysis for infrastructure inspection. Scale remote inspection with computer vision.",
    url: '/use-cases/remote-visual-inspection',
  },
};

export default function RemoteVisualInspectionPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }, { name: 'Remote Visual Inspection', url: '/use-cases/remote-visual-inspection' }])} />
      <PlaceholderPage
      title="Remote Visual Inspection"
      description="Scale infrastructure inspection with AI. Analyze drone and satellite imagery to detect issues before they become problems."
      badge="Use Case"
    />
    </>);
}
