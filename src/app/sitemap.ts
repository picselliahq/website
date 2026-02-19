import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.picsellia.com';

  // Static pages with their approximate priority
  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    // Core
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/product-overview', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/demo', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/trial', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/enterprise', priority: 0.8, changeFrequency: 'monthly' },

    // Platform features
    { path: '/datalake', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/dataset-management', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/labeling-tool', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/annotation-campaigns', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/ai-laboratory', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/experiment-tracking', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/automated-pipelines', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/model-deployment', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/model-monitoring', priority: 0.8, changeFrequency: 'monthly' },

    // Industry
    { path: '/industry/manufacturing', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industry/agriculture', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industry/energy', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industry/waste-management', priority: 0.7, changeFrequency: 'monthly' },

    // Use cases
    { path: '/use-cases', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/use-cases/abelio', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/use-cases/altaroad', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/use-cases/pellencst', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/use-cases/sgs', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/use-cases/ficha', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/use-cases/defects-detection', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/use-cases/document-processing', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/use-cases/live-sport-analysis', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/use-cases/remote-visual-inspection', priority: 0.6, changeFrequency: 'yearly' },

    // Supporting
    { path: '/blog', priority: 0.7, changeFrequency: 'daily' },
    { path: '/about-us', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/community', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/white-papers', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/cookies', priority: 0.2, changeFrequency: 'yearly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date('2026-02-01'),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Blog posts
  const posts = getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
