import type { Metadata } from "next";
import PricingPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Pricing - Modular Usage-Based Plans",
  description:
    "Transparent, usage-based pricing for Picsellia's MLOps platform. Pay for what you use with Data Engine, VisionAI Factory, and Reliability Engine modules.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing - Modular Usage-Based Plans",
    description:
      "Transparent, usage-based pricing for Picsellia's MLOps platform. Pay for what you use with modular pricing and volume discounts.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Pricing', url: '/pricing' }])} />
      <PricingPageContent />
    </>
  );
}
