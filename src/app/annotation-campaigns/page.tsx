import type { Metadata } from "next";
import AnnotationCampaignsPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Annotation Campaigns - Collaborative Labeling Workflows",
  description:
    "Manage annotation projects at scale with structured labeling campaigns, quality control, reviewer workflows, and team collaboration tools.",
  alternates: {
    canonical: "/annotation-campaigns",
  },
  openGraph: {
    title: "Annotation Campaigns - Collaborative Labeling Workflows",
    description:
      "Manage annotation projects at scale with structured labeling campaigns, quality control, and team collaboration.",
    url: "/annotation-campaigns",
  },
};

export default function AnnotationCampaignsPage() {
  return <AnnotationCampaignsPageContent />;
}
