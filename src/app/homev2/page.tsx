import type { Metadata } from "next";
import HeroV2 from "@/components/sections/v2/HeroV2";
import PlatformV2 from "@/components/sections/v2/PlatformV2";
import UseCasesV2 from "@/components/sections/v2/UseCasesV2";
import EnterpriseV2 from "@/components/sections/v2/EnterpriseV2";
import IntegrationsV2 from "@/components/sections/v2/IntegrationsV2";
import CTAV2 from "@/components/sections/v2/CTAV2";
import BackgroundV2 from "@/components/sections/v2/BackgroundV2";
import { JsonLd, organizationJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Picsellia - MLOps Platform for Computer Vision",
  description:
    "The complete MLOps platform for computer vision. Build, deploy, and monitor vision AI applications at scale with Picsellia.",
  alternates: {
    canonical: "/homev2",
  },
  openGraph: {
    title: "Picsellia - MLOps Platform for Computer Vision",
    description:
      "The complete MLOps platform for computer vision. Build, deploy, and monitor vision AI applications at scale.",
    url: "/homev2",
  },
};

export default function HomeV2() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <BackgroundV2 />
      <HeroV2 />
      <PlatformV2 />
      <UseCasesV2 />
      <EnterpriseV2 />
      <IntegrationsV2 />
      <CTAV2 />
    </>
  );
}
