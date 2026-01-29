import { z } from 'zod';

export const BLOG_CATEGORIES = [
  'Computer Vision',
  'Customer Story',
  'Data Management',
  'Data Science',
  'Edge AI',
  'Manufacturing',
  'MLOps',
  'Model Monitoring',
  'News',
  'Onboarding',
  'Product',
  'Tutorial',
  'YOLO',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

const AuthorSchema = z.object({
  name: z.string(),
  role: z.string().optional(),
  avatar: z.string().optional(),
});

export const FrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: AuthorSchema,
  category: z.string(),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  published: z.boolean().default(true),
});

export type Frontmatter = z.infer<typeof FrontmatterSchema>;

export type BlogPost = {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
  readingTime: string;
};

export type BlogPostMeta = Omit<BlogPost, 'content'>;

export type TableOfContentsItem = {
  id: string;
  text: string;
  level: number;
};
