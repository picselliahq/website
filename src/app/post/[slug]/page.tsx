import { redirect } from 'next/navigation';
import { getAllSlugs } from '@/lib/blog';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PostRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
