import { getTranslations, setRequestLocale } from 'next-intl/server';
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import {
  DeploymentHero,
  DeploymentArchitecture,
  DeploymentSDK,
  DeploymentScaling,
  DeploymentFeatures,
  DeploymentCTA,
} from "@/components/model-deployment";
import { localizedUrl } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "optimize-computer-vision-models-on-the-edge",
  "integrating-picsellia-in-your-databricks-mlflow-environment",
  "how-to-integrate-picsellia-into-a-hugging-face-training-workflow",
  "train-and-integrate-yolov8-with-picsellia-in-just-a-few-minutes",
  "mlops-platform-build-vs-buy-what-you-must-know",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'modelDeployment.metadata' });
  const canonical = localizedUrl("/model-deployment", locale);
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

export default async function ModelDeploymentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Model Deployment', url: '/model-deployment' }], locale)} />
      <DeploymentHero />
      <DeploymentArchitecture />
      <DeploymentSDK />
      <DeploymentScaling />
      <DeploymentFeatures />
      <DeploymentCTA />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}
