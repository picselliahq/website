import { getTranslations, setRequestLocale } from 'next-intl/server';
import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";
import { localizedUrl } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'thankYouPricing.metadata' });
  const canonical = localizedUrl("/thank-you-pricing", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
    robots: { index: false, follow: false },
  };
}

export default async function ThankYouPricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'thankYouPricing' });
  return (
    <PlaceholderPage
      title={t('title')}
      description={t('description')}
      badge={t('badge')}
    />
  );
}
