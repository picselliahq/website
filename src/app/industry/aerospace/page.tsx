import type { Metadata } from "next";
import AerospacePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Aerospace - Aircraft Inspection & Maintenance AI",
  description:
    "Deploy computer vision for aircraft inspection, component wear analysis, and FOD detection. Accelerate MRO workflows with Picsellia's MLOps platform.",
  alternates: {
    canonical: "/industry/aerospace",
  },
  openGraph: {
    title: "Aerospace - Aircraft Inspection & Maintenance AI",
    description:
      "Deploy computer vision for aircraft inspection, component wear analysis, and FOD detection.",
    url: "/industry/aerospace",
  },
};

export default function AerospacePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Aerospace', url: '/industry/aerospace' }])} />
      <AerospacePageContent />
    </>
  );
}
