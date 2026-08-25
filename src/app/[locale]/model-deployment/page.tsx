import { getTranslations, setRequestLocale } from 'next-intl/server';
import { JsonLd, breadcrumbJsonLd, softwareApplicationJsonLd } from "@/lib/json-ld";
import {
  DeploymentHero,
  DeploymentArchitecture,
  DeploymentSDK,
  DeploymentScaling,
  DeploymentFeatures,
  DeploymentCTA,
} from "@/components/model-deployment";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "mlops-for-computer-vision-complete-guide",
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
      languages: localizedAlternates("/model-deployment"),
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
      <JsonLd
        data={softwareApplicationJsonLd(locale, {
          name: "Picsellia Model Deployment",
          url: "/model-deployment",
          description:
            "Deploy computer vision models to production with autoscaling, ONNX Runtime and TensorRT acceleration, GPU or CPU inference, and built-in monitoring — cloud, edge, or on-premise.",
          featureList: [
            "Autoscaled inference serving (cloud, edge, on-premise)",
            "ONNX Runtime & TensorRT acceleration",
            "GPU and CPU inference targets",
            "Python SDK and REST API deployment",
            "Model registry with versioned artifacts",
            "Production monitoring on every prediction",
          ],
        })}
      />
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
