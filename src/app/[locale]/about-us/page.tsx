import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import AboutUsPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutUs.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/about-us",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/about-us",
    },
  };
}

export default async function AboutUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'About Us', url: '/about-us' }], locale)} />
      <AboutUsPageContent />
    </>
  );
}
