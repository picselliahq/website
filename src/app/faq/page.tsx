import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Picsellia. Find answers to common questions about our platform, pricing, and features.",
};

export default function FAQPage() {
  return (
    <PlaceholderPage
      title="Frequently Asked Questions"
      description="Find answers to common questions about Picsellia, our platform capabilities, pricing, and getting started."
      badge="Support"
    />
  );
}
