import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remote Visual Inspection",
  description: "Drone and satellite imagery analysis for infrastructure inspection. Scale remote inspection with computer vision.",
};

export default function RemoteVisualInspectionPage() {
  return (
    <PlaceholderPage
      title="Remote Visual Inspection"
      description="Scale infrastructure inspection with AI. Analyze drone and satellite imagery to detect issues before they become problems."
      badge="Use Case"
    />
  );
}
