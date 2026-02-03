import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "use-cases" });
  return {
    title: t("remoteVisualInspection.title"),
    description: t("remoteVisualInspection.description"),
  };
}

export default async function RemoteVisualInspectionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "use-cases" });

  return (
    <PlaceholderPage
      title={t("remoteVisualInspection.title")}
      description={t("remoteVisualInspection.description")}
      badge={t("remoteVisualInspection.badge")}
    />
  );
}
