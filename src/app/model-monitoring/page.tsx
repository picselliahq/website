import type { Metadata } from "next";
import ModelMonitoringPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Model Monitoring - Production ML Monitoring",
  description:
    "Monitor computer vision models in production. Detect data drift, performance degradation, and anomalies with real-time dashboards and automated alerts.",
  alternates: {
    canonical: "/model-monitoring",
  },
  openGraph: {
    title: "Model Monitoring - Production ML Monitoring",
    description:
      "Monitor computer vision models in production. Detect data drift, performance degradation, and anomalies in real-time.",
    url: "/model-monitoring",
  },
};

export default function ModelMonitoringPage() {
  return <ModelMonitoringPageContent />;
}
