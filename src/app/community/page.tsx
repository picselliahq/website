import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Edition",
  description: "Get started with Picsellia's free Community Edition. Perfect for individuals and small teams exploring computer vision.",
};

export default function CommunityPage() {
  return (
    <PlaceholderPage
      title="Community Edition"
      description="Start building computer vision applications for free. The Community Edition includes everything you need to get started."
      badge="Free Forever"
    />
  );
}
