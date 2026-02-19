import type { Metadata } from "next";
import TrialPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Start Free Trial - Try Picsellia for 14 Days",
  description:
    "Try Picsellia's MLOps platform free. Get started with computer vision data management, model training, and deployment in minutes.",
  alternates: {
    canonical: "/trial",
  },
  openGraph: {
    title: "Start Free Trial - Try Picsellia for 14 Days",
    description:
      "Try Picsellia's MLOps platform free. Get started with computer vision data management, model training, and deployment in minutes.",
    url: "/trial",
  },
};

export default function TrialPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Start Free Trial', url: '/trial' }])} />
      <TrialPageContent />
    </>
  );
}
