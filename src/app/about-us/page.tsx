import type { Metadata } from "next";
import AboutUsPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "About Us - The Team Behind Picsellia",
  description:
    "Learn about Picsellia, the team behind the MLOps platform for computer vision. Our mission to make vision AI accessible and reliable for every organization.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us - The Team Behind Picsellia",
    description:
      "Learn about Picsellia, the team behind the MLOps platform for computer vision.",
    url: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'About Us', url: '/about-us' }])} />
      <AboutUsPageContent />
    </>
  );
}
