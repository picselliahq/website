import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Scheduled",
  description: "Your demo has been scheduled. We look forward to showing you Picsellia.",
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
