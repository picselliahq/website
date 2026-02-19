import type { Metadata } from "next";
import AutomatedPipelinesPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Automated Pipelines - CI/CD for Computer Vision",
  description:
    "Automate your computer vision workflow with continuous training and deployment pipelines. Pre-built and custom pipeline support with full orchestration.",
  alternates: {
    canonical: "/automated-pipelines",
  },
  openGraph: {
    title: "Automated Pipelines - CI/CD for Computer Vision",
    description:
      "Automate your computer vision workflow with continuous training and deployment pipelines.",
    url: "/automated-pipelines",
  },
};

export default function AutomatedPipelinesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Automated Pipelines', url: '/automated-pipelines' }])} />
      <AutomatedPipelinesPageContent />
    </>
  );
}
