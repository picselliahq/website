import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

export default nextConfig;
