import type { Metadata } from "next";
import CommunityPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Community - Open Source & Partnerships",
  description:
    "Join the Picsellia community. Open-source tools, framework integrations, and partnerships for computer vision development.",
  alternates: {
    canonical: "/community",
  },
  openGraph: {
    title: "Community - Open Source & Partnerships",
    description:
      "Join the Picsellia community. Open-source tools, framework integrations, and partnerships for computer vision development.",
    url: "/community",
  },
};

export default function CommunityPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Community', url: '/community' }])} />
      <CommunityPageContent />
    </>
  );
}
