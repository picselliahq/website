import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dataset Management",
  description: "Organize, version, and collaborate on datasets with ease. Full lineage tracking and reproducibility built-in.",
};

export default function DatasetManagementPage() {
  return (
    <PlaceholderPage
      title="Dataset Management"
      description="Organize, version, and collaborate on datasets with ease. Track lineage and ensure reproducibility across your ML lifecycle."
      badge="Data Management"
    />
  );
}
