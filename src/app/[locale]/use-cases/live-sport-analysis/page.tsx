import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'useCases.liveSportAnalysis.metadata' });
  const canonical = localizedUrl("/use-cases/live-sport-analysis", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/use-cases/live-sport-analysis"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function LiveSportAnalysisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const td = await getTranslations({ locale, namespace: 'useCases.liveSportAnalysis.data' });
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }, { name: 'Live Sport Analysis', url: '/use-cases/live-sport-analysis' }], locale)} />
      <PlaceholderPage
      title={td('title')}
      description={td('description')}
      badge={td('badge')}
    />
    </>);
}
