import type { Metadata } from "next";
import EnergyPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Energy - Infrastructure Inspection & Monitoring",
  description:
    "Deploy computer vision for energy infrastructure inspection, predictive maintenance, and asset monitoring. Automate visual inspections with Picsellia's MLOps platform.",
  alternates: {
    canonical: "/industry/energy",
  },
  openGraph: {
    title: "Energy - Infrastructure Inspection & Monitoring",
    description:
      "Deploy computer vision for energy infrastructure inspection, predictive maintenance, and asset monitoring.",
    url: "/industry/energy",
  },
};

export default function EnergyPage() {
  return <EnergyPageContent />;
}
