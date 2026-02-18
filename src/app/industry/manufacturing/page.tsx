import type { Metadata } from "next";
import ManufacturingPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Manufacturing - Visual Inspection & Quality Control",
  description:
    "Deploy computer vision for manufacturing quality control, defect detection, and visual inspection. Automate production line monitoring with Picsellia's MLOps platform.",
  alternates: {
    canonical: "/industry/manufacturing",
  },
  openGraph: {
    title: "Manufacturing - Visual Inspection & Quality Control",
    description:
      "Deploy computer vision for manufacturing quality control, defect detection, and visual inspection.",
    url: "/industry/manufacturing",
  },
};

export default function ManufacturingPage() {
  return <ManufacturingPageContent />;
}
