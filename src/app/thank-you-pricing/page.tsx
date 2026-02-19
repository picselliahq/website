import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Received - Custom Quote Coming",
  description: "Your pricing request has been received. Our team will prepare a custom quote for you.",
  alternates: {
    canonical: "/thank-you-pricing",
  },
  openGraph: {
    title: "Request Received - Custom Quote Coming",
    description: "Your pricing request has been received. Our team will prepare a custom quote for you.",
    url: "/thank-you-pricing",
  },
  robots: { index: false, follow: false },
};

export default function ThankYouPricingPage() {
  return (
    <PlaceholderPage
      title="Request Received!"
      description="Thank you for your interest. Our team will prepare a custom quote and reach out within 24 hours."
      badge="Success"
    />
  );
}
