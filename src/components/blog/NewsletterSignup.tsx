'use client';

import { useState, type FormEvent } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div
      className="rounded-2xl p-8"
      style={{
        backgroundColor: 'var(--secondary-system-background)',
        border: '1px solid var(--border)',
      }}
    >
      <h3 className="text-lg font-semibold text-label mb-2">Stay up to date</h3>
      <p className="text-sm text-secondary mb-4">
        Get the latest posts on computer vision, MLOps, and AI delivered to your inbox.
      </p>

      {status === 'success' ? (
        <p className="text-sm font-medium" style={{ color: 'var(--picsellia-green)' }}>
          You&apos;re subscribed! Check your inbox.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="flex-1 px-4 py-2.5 rounded-lg text-sm text-label placeholder:text-tertiary focus:outline-none focus:ring-2"
            style={{
              backgroundColor: 'var(--tertiary-system-background)',
              border: '1px solid var(--border)',
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary whitespace-nowrap"
            style={{ backgroundColor: 'var(--picsellia-green)' }}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-sm mt-2" style={{ color: 'var(--system-red)' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
