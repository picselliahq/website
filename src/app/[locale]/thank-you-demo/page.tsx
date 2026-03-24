import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from "next";
import { Suspense } from "react";
import ThankYouDemoContent from "./PageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'thankYouDemo.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/thank-you-demo",
    },
    robots: { index: false, follow: false },
  };
}

export default async function ThankYouDemoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const meetingsUrl = process.env.HUBSPOT_MEETINGS_URL || "";
  return (
    <Suspense>
      <ThankYouDemoContent meetingsUrl={meetingsUrl} />
    </Suspense>
  );
}
