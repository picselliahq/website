import type { Metadata } from "next";
import DemoPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "See Picsellia's MLOps platform in action. Schedule a personalized demo to learn how to streamline your computer vision workflow.",
  alternates: {
    canonical: "/demo",
  },
  openGraph: {
    title: "Request a Demo",
    description:
      "See Picsellia's MLOps platform in action. Schedule a personalized demo to learn how to streamline your computer vision workflow.",
    url: "/demo",
  },
};

export default function DemoPage() {
  return <DemoPageContent />;
}
