import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import TrialPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'trial.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/trial",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/trial",
    },
  };
}

export default async function TrialPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Start Free Trial', url: '/trial' }], locale)} />
      <TrialPageContent />
    </>
  );
}
