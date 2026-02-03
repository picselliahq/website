import Hero from "@/components/sections/Hero";
import PlatformLifecycle from "@/components/sections/PlatformLifecycle";
import UseCases from "@/components/sections/UseCases";
import Integrations from "@/components/sections/Integrations";
import CTA from "@/components/sections/CTA";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <PlatformLifecycle />
      <UseCases />
      <Integrations />
      <CTA />
    </>
  );
}
