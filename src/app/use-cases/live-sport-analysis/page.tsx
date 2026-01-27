import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Sport Analysis",
  description: "Real-time player tracking and game analytics. Transform raw footage into actionable insights for sports performance.",
};

export default function LiveSportAnalysisPage() {
  return (
    <PlaceholderPage
      title="Live Sport Analysis"
      description="Real-time player tracking and game analytics. Transform raw footage into actionable insights with sub-50ms latency."
      badge="Use Case"
    />
  );
}
