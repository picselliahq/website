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
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://static.hsappstatic.net https://eu.i.posthog.com https://eu-assets.i.posthog.com https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://uploads-ssl.webflow.com https://cdn.prod.website-files.com",
      "font-src 'self' data:",
      "connect-src 'self' https://eu.i.posthog.com https://eu-assets.i.posthog.com",
      "frame-src 'self' https://meetings.hubspot.com https://meetings-eu1.hubspot.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self' https://api.hsforms.com",
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
