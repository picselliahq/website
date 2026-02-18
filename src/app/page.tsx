import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PlatformLifecycle from "@/components/sections/PlatformLifecycle";
import UseCases from "@/components/sections/UseCases";
import Integrations from "@/components/sections/Integrations";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Picsellia - MLOps Platform for Computer Vision",
  description:
    "The complete MLOps platform for computer vision. Build, deploy, and monitor vision AI applications at scale. Centralize data, streamline model training, and deploy with confidence.",
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
      <Hero />
      <PlatformLifecycle />
      <UseCases />
      <Integrations />
      <CTA />
    </>
  );
}
