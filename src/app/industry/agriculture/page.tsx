import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agriculture",
  description: "Computer vision for precision farming. Crop monitoring, disease detection, and yield optimization with AI.",
};

export default function AgriculturePage() {
  return (
    <PlaceholderPage
      title="Agriculture"
      description="Enable precision farming with computer vision. Monitor crops, detect diseases early, and optimize yields with AI-powered insights."
      badge="Industry"
    />
  );
}
