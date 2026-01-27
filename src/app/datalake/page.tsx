import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datalake",
  description: "Centralize all your computer vision data in one secure, searchable repository. Support for images, videos, and 3D data.",
};

export default function DatalakePage() {
  return (
    <PlaceholderPage
      title="Datalake"
      description="Your unified hub for all vision data. Import, store, and manage billions of images and videos in a centralized, searchable repository."
      badge="Data Management"
    />
  );
}
