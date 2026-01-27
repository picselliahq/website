import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Laboratory",
  description: "Train state-of-the-art computer vision models with zero infrastructure setup. From no-code to custom PyTorch.",
};

export default function AILaboratoryPage() {
  return (
    <PlaceholderPage
      title="AI Laboratory"
      description="Train state-of-the-art models with zero infrastructure setup. From no-code training to custom PyTorch, choose your level of control."
      badge="Model Training"
    />
  );
}
