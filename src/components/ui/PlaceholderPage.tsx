import Link from 'next/link';

interface PlaceholderPageProps {
  title: string;
  description: string;
  badge?: string;
}

export default function PlaceholderPage({ title, description, badge }: PlaceholderPageProps) {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {badge && (
          <span className="badge mb-6 inline-flex">{badge}</span>
        )}
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          {title}
        </h1>
        <p className="text-lg text-[var(--gray-400)] max-w-xl mx-auto mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/demo" className="btn-primary">
            Request Demo
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
