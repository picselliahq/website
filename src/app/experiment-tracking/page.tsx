import type { Metadata } from "next";
import ExperimentTrackingPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Experiment Tracking - Compare & Reproduce ML Runs",
  description:
    "Track, compare, and reproduce machine learning experiments. Log metrics, parameters, and artifacts for complete experiment lineage and reproducibility.",
  alternates: {
    canonical: "/experiment-tracking",
  },
  openGraph: {
    title: "Experiment Tracking - Compare & Reproduce ML Runs",
    description:
      "Track, compare, and reproduce machine learning experiments with complete experiment lineage and reproducibility.",
    url: "/experiment-tracking",
  },
};

export default function ExperimentTrackingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Experiment Tracking', url: '/experiment-tracking' }])} />
      <ExperimentTrackingPageContent />
    </>
  );
}
