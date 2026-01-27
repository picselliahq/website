import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases",
  description: "Discover how leading companies use Picsellia to build and deploy computer vision applications at scale.",
};

export default function UseCasesPage() {
  return (
    <PlaceholderPage
      title="Use Cases"
      description="See how industry leaders use Picsellia to solve real-world computer vision challenges across manufacturing, energy, agriculture, and more."
      badge="Success Stories"
    />
  );
}
