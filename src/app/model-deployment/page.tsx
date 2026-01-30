import { Metadata } from "next";
import {
  DeploymentHero,
  DeploymentArchitecture,
  DeploymentSDK,
  DeploymentScaling,
  DeploymentFeatures,
  DeploymentCTA,
} from "@/components/model-deployment";

export const metadata: Metadata = {
  title: "Model Deployment",
  description: "Deploy computer vision models to cloud or edge. Auto-scaling serverless infrastructure with 99.9% uptime.",
};

export default function ModelDeploymentPage() {
  return (
    <>
      <DeploymentHero />
      <DeploymentArchitecture />
      <DeploymentSDK />
      <DeploymentScaling />
      <DeploymentFeatures />
      <DeploymentCTA />
    </>
  );
}
