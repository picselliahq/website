import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/thank-you-demo', '/thank-you-trial', '/thank-you-pricing'],
      },
    ],
    sitemap: 'https://www.picsellia.com/sitemap.xml',
  };
}
