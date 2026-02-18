import type { Metadata } from "next";
import ModelMonitoringPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Model Monitoring - Track ML in Production",
  description:
    "Monitor computer vision models in production. Detect data drift, performance degradation, and anomalies with real-time dashboards and automated alerts.",
  alternates: {
    canonical: "/model-monitoring",
  },
  openGraph: {
    title: "Model Monitoring - Track ML in Production",
    description:
      "Monitor computer vision models in production. Detect data drift, performance degradation, and anomalies in real-time.",
    url: "/model-monitoring",
  },
};

export default function ModelMonitoringPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Model Monitoring', url: '/model-monitoring' }])} />
      <ModelMonitoringPageContent />
    </>
  );
}
