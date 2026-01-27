import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for your interest in Picsellia. We'll be in touch soon.",
};

export default function ThankYouPage() {
  return (
    <PlaceholderPage
      title="Thank You!"
      description="We've received your request. Our team will be in touch shortly to help you get started with Picsellia."
      badge="Success"
    />
  );
}
