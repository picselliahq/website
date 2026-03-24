import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'useCases.defectsDetection.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/use-cases/defects-detection',
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: '/use-cases/defects-detection',
    },
  };
}

export default async function DefectsDetectionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const td = await getTranslations({ locale, namespace: 'useCases.defectsDetection.data' });
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }, { name: 'Defects Detection', url: '/use-cases/defects-detection' }], locale)} />
      <PlaceholderPage
      title={td('title')}
      description={td('description')}
      badge={td('badge')}
    />
    </>);
}
