import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-24 text-center">
      <p
        className="text-sm font-semibold uppercase tracking-wider mb-4"
        style={{ color: 'var(--picsellia-green)' }}
      >
        404
      </p>
      <h1
        className="text-4xl md:text-5xl font-semibold text-label mb-4"
        style={{ letterSpacing: '-0.02em' }}
      >
        Page not found
      </h1>
      <p className="text-secondary text-lg mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="btn-primary">
          Go home
        </Link>
        <Link href="/blog" className="btn-secondary">
          Read the blog
        </Link>
      </div>
    </div>
  );
}
