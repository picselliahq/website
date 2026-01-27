import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Picsellia team. We'd love to hear from you about your computer vision projects.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Have questions about Picsellia? Our team is here to help you succeed with your computer vision projects."
      badge="Get in Touch"
    />
  );
}
