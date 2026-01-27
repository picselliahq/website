import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Pipelines",
  description: "Build and orchestrate ML pipelines with ease. Automate training, evaluation, and deployment workflows.",
};

export default function AutomatedPipelinesPage() {
  return (
    <PlaceholderPage
      title="Automated Pipelines"
      description="Build and orchestrate ML pipelines with ease. Automate training, evaluation, and deployment workflows at scale."
      badge="Automation"
    />
  );
}
