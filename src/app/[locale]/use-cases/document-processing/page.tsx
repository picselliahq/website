import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'useCases.documentProcessing.metadata' });
  const canonical = localizedUrl("/use-cases/document-processing", locale);
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
  };
}

export default async function DocumentProcessingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const td = await getTranslations({ locale, namespace: 'useCases.documentProcessing.data' });
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }, { name: 'Document Processing', url: '/use-cases/document-processing' }], locale)} />
      <PlaceholderPage
      title={td('title')}
      description={td('description')}
      badge={td('badge')}
    />
    </>);
}
