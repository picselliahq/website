import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest insights, tutorials, and news about computer vision, MLOps, and AI. Learn from the Picsellia team and community.",
};

export default function BlogPage() {
  return (
    <PlaceholderPage
      title="Blog"
      description="Explore the latest insights, tutorials, and news about computer vision, MLOps, and AI from the Picsellia team."
      badge="Resources"
    />
  );
}
