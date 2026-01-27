import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiment Tracking",
  description: "Track every experiment with full reproducibility. Compare runs, log metrics, and version your models automatically.",
};

export default function ExperimentTrackingPage() {
  return (
    <PlaceholderPage
      title="Experiment Tracking"
      description="Track every experiment with full reproducibility. Compare runs, log metrics, and version your models automatically."
      badge="MLOps"
    />
  );
}
