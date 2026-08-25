import { permanentRedirect } from "@/i18n/navigation";

export default async function SecurityRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  permanentRedirect({ href: "/enterprise", locale });
}
