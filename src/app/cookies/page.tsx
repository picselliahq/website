import type { Metadata } from "next";
import CookiesPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how Picsellia uses cookies and similar technologies on our website.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Cookie Policy",
    description:
      "Learn about how Picsellia uses cookies and similar technologies on our website.",
    url: "/cookies",
  },
};

export default function CookiesPage() {
  return <CookiesPageContent />;
}
