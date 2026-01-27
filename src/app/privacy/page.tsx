import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Picsellia collects, uses, and protects your data. Our commitment to privacy and data security.",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="Learn how we collect, use, and protect your data. Our commitment to your privacy and security."
      badge="Legal"
    />
  );
}
