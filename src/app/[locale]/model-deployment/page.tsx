import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "platform" });
  return {
    title: t("modelDeployment.title"),
    description: t("modelDeployment.description"),
  };
}

export default async function ModelDeploymentPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "platform" });

  return (
    <PlaceholderPage
      title={t("modelDeployment.title")}
      description={t("modelDeployment.description")}
      badge={t("modelDeployment.badge")}
    />
  );
}
