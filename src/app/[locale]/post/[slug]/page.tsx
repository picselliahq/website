import { redirect } from 'next/navigation';
import { getAllSlugs } from '@/lib/blog';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export default async function PostRedirect({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  redirect(`/${locale}/blog/${slug}`);
}
