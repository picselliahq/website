import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy",
  description: "Computer vision for energy infrastructure. Remote inspection, predictive maintenance, and asset monitoring at scale.",
};

export default function EnergyPage() {
  return (
    <PlaceholderPage
      title="Energy"
      description="Scale infrastructure inspection with AI. Analyze drone and satellite imagery for predictive maintenance and asset monitoring."
      badge="Industry"
    />
  );
}
