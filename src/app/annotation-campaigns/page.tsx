import type { Metadata } from "next";
import AnnotationCampaignsPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Annotation Campaigns - Labeling at Scale",
  description:
    "Manage annotation projects at scale with structured labeling campaigns, quality control, reviewer workflows, and team collaboration tools.",
  alternates: {
    canonical: "/annotation-campaigns",
  },
  openGraph: {
    title: "Annotation Campaigns - Labeling at Scale",
    description:
      "Manage annotation projects at scale with structured labeling campaigns, quality control, and team collaboration.",
    url: "/annotation-campaigns",
  },
};

export default function AnnotationCampaignsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Annotation Campaigns', url: '/annotation-campaigns' }])} />
      <AnnotationCampaignsPageContent />
    </>
  );
}
