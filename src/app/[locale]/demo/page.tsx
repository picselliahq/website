import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import DemoPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'demo.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/demo",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/demo",
    },
  };
}

export default async function DemoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Request a Demo', url: '/demo' }], locale)} />
      <DemoPageContent />
    </>
  );
}
