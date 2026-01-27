import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Papers",
  description: "In-depth research and technical guides on computer vision, MLOps best practices, and AI implementation strategies.",
};

export default function WhitePapersPage() {
  return (
    <PlaceholderPage
      title="White Papers"
      description="Deep-dive into computer vision best practices, MLOps strategies, and technical implementation guides from our experts."
      badge="Research"
    />
  );
}
