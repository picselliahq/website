import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Schedule a personalized demo of Picsellia. See how our MLOps platform can accelerate your computer vision projects.",
};

export default function DemoPage() {
  return (
    <PlaceholderPage
      title="Book a Demo"
      description="Get a personalized walkthrough of Picsellia. Our team will show you how to accelerate your computer vision projects."
      badge="Schedule Demo"
    />
  );
}
