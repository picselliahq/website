import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#0F1117",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.picsellia.com"),
  title: {
    default: "Picsellia - MLOps Platform for Computer Vision",
    template: "%s | Picsellia",
  },
  description:
    "The complete MLOps platform for computer vision. Build, deploy, and monitor vision AI applications at scale with Picsellia.",
  keywords: [
    "MLOps",
    "Computer Vision",
    "Machine Learning",
    "AI Platform",
    "Model Deployment",
    "Data Management",
    "Model Monitoring",
    "Image Annotation",
    "Deep Learning",
  ],
  authors: [{ name: "Picsellia" }],
  creator: "Picsellia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.picsellia.com",
    siteName: "Picsellia",
    title: "Picsellia - MLOps Platform for Computer Vision",
    description:
      "The complete MLOps platform for computer vision. Build, deploy, and monitor vision AI applications at scale.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@picsellia",
    creator: "@picsellia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
