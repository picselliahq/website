import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Scheduled - Picsellia Platform Demo",
  description: "Your demo has been scheduled. We look forward to showing you Picsellia.",
  alternates: {
    canonical: "/thank-you-demo",
  },
  openGraph: {
    title: "Demo Scheduled - Picsellia Platform Demo",
    description: "Your demo has been scheduled. We look forward to showing you Picsellia.",
    url: "/thank-you-demo",
  },
  robots: { index: false, follow: false },
};

export default function ThankYouDemoPage() {
  return (
    <PlaceholderPage
      title="Demo Scheduled!"
      description="Thank you for booking a demo. You'll receive a calendar invite shortly with all the details."
      badge="Success"
    />
  );
}
