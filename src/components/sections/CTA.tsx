import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="card p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to get started?
          </h2>
          <p className="text-[var(--gray-400)] max-w-xl mx-auto mb-8">
            Start building computer vision applications today. Free 14-day trial with full access to all features.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/trial" className="btn-primary px-8 py-3">
              Start Free Trial
            </Link>
            <Link href="/demo" className="btn-secondary px-8 py-3">
              Talk to Sales
            </Link>
          </div>
          <p className="text-xs text-[var(--gray-500)] mt-6">
            No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
