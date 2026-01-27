import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Overview",
  description: "Discover Picsellia's complete MLOps platform for computer vision. Data management, model training, deployment, and monitoring in one place.",
};

export default function ProductOverviewPage() {
  return (
    <PlaceholderPage
      title="Product Overview"
      description="The complete MLOps stack for computer vision. Manage data, train models, deploy at scale, and monitor in production."
      badge="Platform"
    />
  );
}
