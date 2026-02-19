import { Metadata } from "next";
import { Suspense } from "react";
import ThankYouTrialContent from "./PageContent";

export const metadata: Metadata = {
  title: "Trial Activated - Welcome to Picsellia",
  description:
    "Your free trial is active. Book an onboarding call to get started faster.",
  alternates: {
    canonical: "/thank-you-trial",
  },
  robots: { index: false, follow: false },
};

export default function ThankYouTrialPage() {
  const meetingsUrl = process.env.HUBSPOT_MEETINGS_URL || "";
  return (
    <Suspense>
      <ThankYouTrialContent meetingsUrl={meetingsUrl} />
    </Suspense>
  );
}
