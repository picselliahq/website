import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.picsellia.com"),
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
