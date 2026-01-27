import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about how Picsellia uses cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return (
    <PlaceholderPage
      title="Cookie Policy"
      description="Information about how we use cookies and similar technologies to improve your experience."
      badge="Legal"
    />
  );
}
