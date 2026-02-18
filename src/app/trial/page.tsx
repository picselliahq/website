import type { Metadata } from "next";
import TrialPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Start Free Trial",
  description:
    "Try Picsellia's MLOps platform free. Get started with computer vision data management, model training, and deployment in minutes.",
  alternates: {
    canonical: "/trial",
  },
  openGraph: {
    title: "Start Free Trial",
    description:
      "Try Picsellia's MLOps platform free. Get started with computer vision data management, model training, and deployment in minutes.",
    url: "/trial",
  },
};

export default function TrialPage() {
  return <TrialPageContent />;
}
