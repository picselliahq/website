import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Picsellia",
  description:
    "Get in touch with the Picsellia team for questions about our MLOps platform, computer vision projects, or partnership opportunities. We'd love to hear from you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us - Get in Touch with Picsellia",
    description:
      "Get in touch with the Picsellia team for questions about our MLOps platform, computer vision projects, or partnership opportunities. We'd love to hear from you.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Contact', url: '/contact' }])} />
      <PlaceholderPage
      title="Contact Us"
      description="Have questions about Picsellia? Our team is here to help you succeed with your computer vision projects."
      badge="Get in Touch"
    />
    </>);
}
