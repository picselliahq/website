import type { Metadata } from "next";
import AboutUsPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Picsellia, the team behind the MLOps platform for computer vision. Our mission to make vision AI accessible and reliable for every organization.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us",
    description:
      "Learn about Picsellia, the team behind the MLOps platform for computer vision.",
    url: "/about-us",
  },
};

export default function AboutUsPage() {
  return <AboutUsPageContent />;
}
