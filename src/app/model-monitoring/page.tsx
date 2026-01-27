import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Model Monitoring",
  description: "Monitor model performance in production with real-time insights. Detect drift, track metrics, and trigger automatic retraining.",
};

export default function ModelMonitoringPage() {
  return (
    <PlaceholderPage
      title="Model Monitoring"
      description="Track model performance in production with real-time insights. Detect drift, alert on anomalies, and trigger automatic retraining."
      badge="Observability"
    />
  );
}
