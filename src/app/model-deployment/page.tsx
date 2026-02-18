import { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import {
  DeploymentHero,
  DeploymentArchitecture,
  DeploymentSDK,
  DeploymentScaling,
  DeploymentFeatures,
  DeploymentCTA,
} from "@/components/model-deployment";

export const metadata: Metadata = {
  title: "Model Deployment - Cloud & Edge Inference",
  description:
    "Deploy computer vision models to cloud or edge with Picsellia. Auto-scaling serverless infrastructure, one-click deployment, and 99.9% uptime guarantee.",
  alternates: {
    canonical: "/model-deployment",
  },
  openGraph: {
    title: "Model Deployment - Cloud & Edge Inference",
    description:
      "Deploy computer vision models to cloud or edge with Picsellia. Auto-scaling serverless infrastructure, one-click deployment, and 99.9% uptime guarantee.",
    url: "/model-deployment",
  },
};

export default function ModelDeploymentPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Model Deployment', url: '/model-deployment' }])} />
      <DeploymentHero />
      <DeploymentArchitecture />
      <DeploymentSDK />
      <DeploymentScaling />
      <DeploymentFeatures />
      <DeploymentCTA />
    </>
  );
}
