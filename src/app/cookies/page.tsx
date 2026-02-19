import type { Metadata } from "next";
import CookiesPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Cookie Policy - How We Use Cookies",
  description:
    "Learn about how Picsellia uses cookies and similar technologies on our website.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Cookie Policy - How We Use Cookies",
    description:
      "Learn about how Picsellia uses cookies and similar technologies on our website.",
    url: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Cookie Policy', url: '/cookies' }])} />
      <CookiesPageContent />
    </>
  );
}
