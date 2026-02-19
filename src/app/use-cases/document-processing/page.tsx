import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
export const metadata: Metadata = {
  title: "Document Processing - Intelligent Data Extraction",
  description: "Intelligent document analysis and data extraction. Process thousands of documents automatically with computer vision.",
  alternates: {
    canonical: '/use-cases/document-processing',
  },
  openGraph: {
    title: "Document Processing - Intelligent Data Extraction",
    description: "Intelligent document analysis and data extraction. Process thousands of documents automatically with computer vision.",
    url: '/use-cases/document-processing',
  },
};

export default function DocumentProcessingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }, { name: 'Document Processing', url: '/use-cases/document-processing' }])} />
      <PlaceholderPage
      title="Document Processing"
      description="Transform document workflows with AI. Extract data automatically, classify documents, and reduce manual processing by 95%."
      badge="Use Case"
    />
    </>);
}
