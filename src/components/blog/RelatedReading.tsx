import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import { getTranslations } from "next-intl/server";

/**
 * Curated "related reading" block for product/industry pages — pulls specific,
 * hand-picked post slugs rather than auto-matching by category, since the blog
 * taxonomy is too flat (mostly "Computer Vision") for automatic matching to be
 * topically accurate here.
 */
export default async function RelatedReading({
  slugs,
  locale,
}: {
  slugs: string[];
  locale: string;
}) {
  const allPosts = getAllPosts(locale);
  const postsBySlug = new Map(allPosts.map((p) => [p.slug, p]));
  const posts = slugs
    .map((slug) => postsBySlug.get(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  if (posts.length === 0) return null;

  const t = await getTranslations({ locale, namespace: "relatedReading" });

  return (
    <section className="py-20 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
          {t('label')}
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--label)] mb-8">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
