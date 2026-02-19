import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
export const metadata: Metadata = {
  title: "Live Sport Analysis - Real-Time Player Tracking",
  description: "Real-time player tracking and game analytics. Transform raw footage into actionable insights for sports performance.",
  alternates: {
    canonical: '/use-cases/live-sport-analysis',
  },
  openGraph: {
    title: "Live Sport Analysis - Real-Time Player Tracking",
    description: "Real-time player tracking and game analytics. Transform raw footage into actionable insights for sports performance.",
    url: '/use-cases/live-sport-analysis',
  },
};

export default function LiveSportAnalysisPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }, { name: 'Live Sport Analysis', url: '/use-cases/live-sport-analysis' }])} />
      <PlaceholderPage
      title="Live Sport Analysis"
      description="Real-time player tracking and game analytics. Transform raw footage into actionable insights with sub-50ms latency."
      badge="Use Case"
    />
    </>);
}
