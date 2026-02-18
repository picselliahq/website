import type { Metadata } from "next";
import ManufacturingPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Manufacturing - Visual Inspection & Quality Control",
  description:
    "Deploy computer vision for manufacturing quality control, defect detection, and visual inspection. Automate production line monitoring with Picsellia.",
  alternates: {
    canonical: "/industry/manufacturing",
  },
  openGraph: {
    title: "Manufacturing - Visual Inspection & Quality Control",
    description:
      "Deploy computer vision for manufacturing quality control, defect detection, and visual inspection.",
    url: "/industry/manufacturing",
  },
};

export default function ManufacturingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Manufacturing', url: '/industry/manufacturing' }])} />
      <ManufacturingPageContent />
    </>
  );
}
