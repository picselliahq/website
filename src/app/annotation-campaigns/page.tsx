import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annotation Campaigns",
  description: "Manage labeling workflows at scale. Assign tasks, track progress, and ensure quality across your annotation team.",
};

export default function AnnotationCampaignsPage() {
  return (
    <PlaceholderPage
      title="Annotation Campaigns"
      description="Orchestrate labeling workflows at scale. Assign tasks, track progress, and ensure quality across distributed teams."
      badge="Workflow"
    />
  );
}
