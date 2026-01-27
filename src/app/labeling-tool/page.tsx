import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labeling Tool",
  description: "Industry-leading annotation tools with AI-assisted labeling. Support for bounding boxes, polygons, segmentation, and more.",
};

export default function LabelingToolPage() {
  return (
    <PlaceholderPage
      title="Labeling Tool"
      description="Annotate with precision using AI-assisted labeling. Support for bounding boxes, polygons, semantic segmentation, and keypoints."
      badge="Annotation"
    />
  );
}
