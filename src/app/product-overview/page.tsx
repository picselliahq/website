import type { Metadata } from "next";
import ProductOverviewPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd, softwareApplicationJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Product Overview - Complete MLOps Platform",
  description:
    "Explore Picsellia's end-to-end MLOps platform for computer vision. From data management and annotation to model training, deployment, and monitoring.",
  alternates: {
    canonical: "/product-overview",
  },
  openGraph: {
    title: "Product Overview - Complete MLOps Platform",
    description:
      "Explore Picsellia's end-to-end MLOps platform for computer vision. From data management to model deployment and monitoring.",
    url: "/product-overview",
  },
};

export default function ProductOverviewPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }])} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <ProductOverviewPageContent />
    </>
  );
}
