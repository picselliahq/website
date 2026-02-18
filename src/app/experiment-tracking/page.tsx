import type { Metadata } from "next";
import ExperimentTrackingPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Experiment Tracking - ML Experiment Management",
  description:
    "Track, compare, and reproduce machine learning experiments. Log metrics, parameters, and artifacts for complete experiment lineage and reproducibility.",
  alternates: {
    canonical: "/experiment-tracking",
  },
  openGraph: {
    title: "Experiment Tracking - ML Experiment Management",
    description:
      "Track, compare, and reproduce machine learning experiments with complete experiment lineage and reproducibility.",
    url: "/experiment-tracking",
  },
};

export default function ExperimentTrackingPage() {
  return <ExperimentTrackingPageContent />;
}
