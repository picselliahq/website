import { getTranslations, setRequestLocale } from 'next-intl/server';
import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'thankYou.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/thank-you",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/thank-you",
    },
    robots: { index: false, follow: false },
  };
}

export default async function ThankYouPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'thankYou' });
  return (
    <PlaceholderPage
      title={t('title')}
      description={t('description')}
      badge={t('badge')}
    />
  );
}
