import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Free Trial",
  description: "Start your 14-day free trial of Picsellia. No credit card required. Full access to all features.",
};

export default function TrialPage() {
  return (
    <PlaceholderPage
      title="Start Free Trial"
      description="Experience the full power of Picsellia with a 14-day free trial. No credit card required."
      badge="14-Day Free Trial"
    />
  );
}
