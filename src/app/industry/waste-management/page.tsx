import type { Metadata } from "next";
import WasteManagementPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Waste Management - Sorting & Recycling Automation",
  description:
    "Automate waste sorting and recycling with computer vision. Deploy AI-powered waste classification and material recognition with Picsellia's MLOps platform.",
  alternates: {
    canonical: "/industry/waste-management",
  },
  openGraph: {
    title: "Waste Management - Sorting & Recycling Automation",
    description:
      "Automate waste sorting and recycling with computer vision. Deploy AI-powered waste classification and material recognition.",
    url: "/industry/waste-management",
  },
};

export default function WasteManagementPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Waste Management', url: '/industry/waste-management' }])} />
      <WasteManagementPageContent />
    </>
  );
}
