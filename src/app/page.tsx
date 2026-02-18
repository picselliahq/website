import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PlatformLifecycle from "@/components/sections/PlatformLifecycle";
import UseCases from "@/components/sections/UseCases";
import Integrations from "@/components/sections/Integrations";
import CTA from "@/components/sections/CTA";
import { JsonLd, organizationJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Picsellia - MLOps Platform for Computer Vision",
  description:
    "The complete MLOps platform for computer vision. Build, deploy, and monitor vision AI applications at scale with Picsellia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Picsellia - MLOps Platform for Computer Vision",
    description:
      "The complete MLOps platform for computer vision. Build, deploy, and monitor vision AI applications at scale.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Hero />
      <PlatformLifecycle />
      <UseCases />
      <Integrations />
      <CTA />
    </>
  );
}
