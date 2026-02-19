import { Metadata } from "next";
import { Suspense } from "react";
import ThankYouDemoContent from "./PageContent";

export const metadata: Metadata = {
  title: "Book Your Demo - Picsellia",
  description:
    "Pick a time that works for you. We look forward to showing you Picsellia.",
  alternates: {
    canonical: "/thank-you-demo",
  },
  robots: { index: false, follow: false },
};

export default function ThankYouDemoPage() {
  const meetingsUrl = process.env.HUBSPOT_MEETINGS_URL || "";
  return (
    <Suspense>
      <ThankYouDemoContent meetingsUrl={meetingsUrl} />
    </Suspense>
  );
}
