import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Picsellia's mission to democratize computer vision and the team behind the platform.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About Us"
      description="We're on a mission to make computer vision accessible to every team. Learn about our story, values, and the people building Picsellia."
      badge="Our Story"
    />
  );
}
