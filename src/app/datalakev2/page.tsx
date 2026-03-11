import type { Metadata } from "next";
import DatalakeHeroV2 from "@/components/datalake/v2/DatalakeHeroV2";
import DatalakeCapabilitiesV2 from "@/components/datalake/v2/DatalakeCapabilitiesV2";
import DatalakeQueryLanguageV2 from "@/components/datalake/v2/DatalakeQueryLanguageV2";
import DatalakeVisualSearchV2 from "@/components/datalake/v2/DatalakeVisualSearchV2";
import DatalakeTagsMetadataV2 from "@/components/datalake/v2/DatalakeTagsMetadataV2";
import DatalakeCTAV2 from "@/components/datalake/v2/DatalakeCTAV2";
import BackgroundV2 from "@/components/sections/v2/BackgroundV2";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Datalake - Centralized Data Management | Picsellia",
  description:
    "Centralize and manage all your computer vision data. Visual similarity search, smart curation, CLIP embeddings, and multi-format support.",
  alternates: {
    canonical: "/datalakev2",
  },
  openGraph: {
    title: "Datalake - Centralized Data Management | Picsellia",
    description:
      "Centralize and manage all your computer vision data with visual similarity search and smart curation.",
    url: "/datalakev2",
  },
};

export default function DatalakeV2Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Platform", url: "/product-overview" },
          { name: "Datalake", url: "/datalakev2" },
        ])}
      />
      <BackgroundV2 />
      <DatalakeHeroV2 />
      <DatalakeCapabilitiesV2 />
      <DatalakeQueryLanguageV2 />
      <DatalakeVisualSearchV2 />
      <DatalakeTagsMetadataV2 />
      <DatalakeCTAV2 />
    </>
  );
}
