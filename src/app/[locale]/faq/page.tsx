import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import FAQPageContent from "./PageContent";
import { faqCategories } from "./faq-data";
import { JsonLd, faqJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/faq",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/faq",
    },
  };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const allQuestions = faqCategories.flatMap((cat) =>
    cat.questions.map((q) => ({ question: q.q, answer: q.a }))
  );

  return (
    <>
      <JsonLd data={faqJsonLd(allQuestions, locale)} />
      <FAQPageContent />
    </>
  );
}
