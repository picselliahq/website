import type { Metadata } from "next";
import DefensePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Defense - Surveillance & Threat Detection AI",
  description:
    "Deploy computer vision for defense surveillance, threat detection, and situational awareness. Secure, on-premise AI with Picsellia's MLOps platform.",
  alternates: {
    canonical: "/industry/defense",
  },
  openGraph: {
    title: "Defense - Surveillance & Threat Detection AI",
    description:
      "Deploy computer vision for defense surveillance, threat detection, and situational awareness.",
    url: "/industry/defense",
  },
};

export default function DefensePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Defense', url: '/industry/defense' }])} />
      <DefensePageContent />
    </>
  );
}
