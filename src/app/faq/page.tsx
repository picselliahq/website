import type { Metadata } from "next";
import FAQPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Find answers to common questions about Picsellia's MLOps platform, pricing, deployment options, and computer vision capabilities.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - Frequently Asked Questions",
    description:
      "Find answers to common questions about Picsellia's MLOps platform, pricing, deployment, and computer vision capabilities.",
    url: "/faq",
  },
};

export default function FAQPage() {
  return <FAQPageContent />;
}
