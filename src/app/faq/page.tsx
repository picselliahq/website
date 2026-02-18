import type { Metadata } from "next";
import FAQPageContent from "./PageContent";
import { faqCategories } from "./faq-data";
import { JsonLd, faqJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "FAQ - Picsellia MLOps Platform Questions",
  description:
    "Find answers to common questions about Picsellia's MLOps platform, pricing, deployment options, and computer vision capabilities.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - Picsellia MLOps Platform Questions",
    description:
      "Find answers to common questions about Picsellia's MLOps platform, pricing, deployment, and computer vision capabilities.",
    url: "/faq",
  },
};

export default function FAQPage() {
  const allQuestions = faqCategories.flatMap((cat) =>
    cat.questions.map((q) => ({ question: q.q, answer: q.a }))
  );

  return (
    <>
      <JsonLd data={faqJsonLd(allQuestions)} />
      <FAQPageContent />
    </>
  );
}
