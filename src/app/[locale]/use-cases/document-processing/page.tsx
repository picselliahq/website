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
    title: t("documentProcessing.title"),
    description: t("documentProcessing.description"),
  };
}

export default async function DocumentProcessingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "use-cases" });

  return (
    <PlaceholderPage
      title={t("documentProcessing.title")}
      description={t("documentProcessing.description")}
      badge={t("documentProcessing.badge")}
    />
  );
}
