import type { Metadata } from "next";
import AILaboratoryPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "AI Laboratory - Model Training & Experimentation",
  description:
    "Train and experiment with computer vision models. Support for PyTorch, TensorFlow, Ultralytics, and custom frameworks with one-click GPU compute.",
  alternates: {
    canonical: "/ai-laboratory",
  },
  openGraph: {
    title: "AI Laboratory - Model Training & Experimentation",
    description:
      "Train and experiment with computer vision models with one-click GPU compute and full framework support.",
    url: "/ai-laboratory",
  },
};

export default function AILaboratoryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'AI Laboratory', url: '/ai-laboratory' }])} />
      <AILaboratoryPageContent />
    </>
  );
}
