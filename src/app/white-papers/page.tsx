import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
export const metadata: Metadata = {
  title: "White Papers - Computer Vision & MLOps Research",
  description:
    "In-depth research and technical guides on computer vision, MLOps best practices, and AI implementation strategies.",
  alternates: {
    canonical: "/white-papers",
  },
  openGraph: {
    title: "White Papers - Computer Vision & MLOps Research",
    description:
      "In-depth research and technical guides on computer vision, MLOps best practices, and AI implementation strategies.",
    url: "/white-papers",
  },
};

export default function WhitePapersPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'White Papers', url: '/white-papers' }])} />
      <PlaceholderPage
      title="White Papers"
      description="Deep-dive into computer vision best practices, MLOps strategies, and technical implementation guides from our experts."
      badge="Research"
    />
    </>);
}
