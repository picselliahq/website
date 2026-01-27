import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for teams of all sizes. Start with our free Community Edition or choose a plan that scales with your needs.",
};

export default function PricingPage() {
  return (
    <PlaceholderPage
      title="Pricing"
      description="Transparent pricing for teams of all sizes. Start with our free Community Edition or choose a plan that scales with your needs."
      badge="Plans & Pricing"
    />
  );
}
