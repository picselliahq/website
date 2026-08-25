import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from "next";
import { Suspense } from "react";
import ThankYouTrialContent from "./PageContent";
import { localizedUrl } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'thankYouTrial.metadata' });
  const canonical = localizedUrl("/thank-you-trial", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
    },
    robots: { index: false, follow: false },
  };
}

export default async function ThankYouTrialPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const meetingsUrl = process.env.HUBSPOT_MEETINGS_URL || "";
  return (
    <Suspense>
      <ThankYouTrialContent meetingsUrl={meetingsUrl} />
    </Suspense>
  );
}
