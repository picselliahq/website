import { permanentRedirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace(/\.mdx$/, '') }));
}

export default async function BlogPostRedirect({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/post/${slug}`);
}
