import type { Metadata } from "next";
import AgriculturePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Agriculture - Precision Farming & Crop Analysis",
  description:
    "Apply computer vision to agriculture for crop monitoring, disease detection, and precision farming. Build and deploy agricultural AI with Picsellia.",
  alternates: {
    canonical: "/industry/agriculture",
  },
  openGraph: {
    title: "Agriculture - Precision Farming & Crop Analysis",
    description:
      "Apply computer vision to agriculture for crop monitoring, disease detection, and precision farming.",
    url: "/industry/agriculture",
  },
};

export default function AgriculturePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Agriculture', url: '/industry/agriculture' }])} />
      <AgriculturePageContent />
    </>
  );
}
