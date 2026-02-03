import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "white-papers" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function WhitePapersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "white-papers" });

  return (
    <PlaceholderPage
      title={t("title")}
      description={t("description")}
      badge={t("badge")}
    />
  );
}
