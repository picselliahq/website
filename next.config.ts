import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    '*': [
      './content/**',
      './public/videos/**',
      './public/images/**',
      './node_modules/@shikijs/langs/**',
      './node_modules/@shikijs/themes/**',
      './node_modules/oniguruma-parser/**',
      './node_modules/oniguruma-to-es/**',
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads-ssl.webflow.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
  },
  async redirects() {
    return [
      // Legacy Webflow blog URLs redirect to new blog paths
      // Individual post redirects are handled by /post/[slug]/page.tsx
      {
        source: '/security',
        destination: '/enterprise',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
