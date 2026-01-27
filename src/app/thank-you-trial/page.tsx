import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trial Started",
  description: "Your free trial has been activated. Start exploring Picsellia today.",
};

export default function ThankYouTrialPage() {
  return (
    <PlaceholderPage
      title="Trial Activated!"
      description="Your 14-day free trial is now active. Check your email for login instructions and get started building!"
      badge="Success"
    />
  );
}
