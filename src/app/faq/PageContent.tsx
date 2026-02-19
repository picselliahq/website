'use client';

import Link from 'next/link';
import { useState } from 'react';
import { faqCategories } from './faq-data';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  const activeData = faqCategories.find((c) => c.id === activeCategory);

  // Filter questions across all categories when searching
  const searchResults = searchQuery.trim()
    ? faqCategories.flatMap((category) =>
        category.questions
          .map((q, index) => ({ ...q, category, index }))
          .filter(
            (item) =>
              item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.a.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : [];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--picsellia-green)]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--system-blue)]/5 rounded-full blur-[100px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(var(--label) 1px, transparent 1px), linear-gradient(90deg, var(--label) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">Help Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              Frequently Asked{' '}
              <span className="text-[var(--picsellia-green)]">Questions</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] max-w-2xl mx-auto mb-8">
              Everything you need to know about Picsellia. Can&apos;t find what you&apos;re looking for?{' '}
              <Link href="/contact" className="text-[var(--picsellia-green)] hover:underline">
                Contact our team
              </Link>
              .
            </p>

            {/* Search input */}
            <div className="relative max-w-md mx-auto">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--tertiary-label)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] placeholder:text-[var(--tertiary-label)] focus:outline-none focus:ring-2 focus:ring-[var(--picsellia-green)]/30 focus:border-[var(--picsellia-green)] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--quaternary-system-fill)] flex items-center justify-center text-[var(--tertiary-label)] hover:bg-[var(--tertiary-system-fill)] transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Navigation - Sticky on desktop */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--tertiary-label)] mb-4">
                  Categories
                </h2>
                <nav className="flex flex-wrap lg:flex-col gap-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-all ${
                        activeCategory === category.id
                          ? 'bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)] border border-[var(--picsellia-green)]/20'
                          : 'text-[var(--secondary-label)] hover:bg-[var(--tertiary-system-background)] hover:text-[var(--label)] border border-transparent'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        {category.name}
                        <span className="ml-auto text-xs text-[var(--tertiary-label)]">
                          {category.questions.length}
                        </span>
                      </span>
                    </button>
                  ))}
                </nav>

                {/* Quick links */}
                <div className="mt-8 pt-8 border-t border-[var(--border)]">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--tertiary-label)] mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="https://documentation.picsellia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--secondary-label)] hover:text-[var(--picsellia-green)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Documentation
                    </Link>
                    <Link
                      href="/pricing"
                      className="flex items-center gap-2 text-sm text-[var(--secondary-label)] hover:text-[var(--picsellia-green)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pricing
                    </Link>
                    <Link
                      href="/demo"
                      className="flex items-center gap-2 text-sm text-[var(--secondary-label)] hover:text-[var(--picsellia-green)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Request Demo
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Questions */}
            <main className="flex-1 min-w-0">
              {/* Search Results */}
              {searchQuery.trim() ? (
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
                    </h2>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-sm text-[var(--picsellia-green)] hover:underline"
                    >
                      Clear search
                    </button>
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="space-y-3">
                      {searchResults.map((item) => {
                        const questionId = `search-${item.category.id}-${item.index}`;
                        const isExpanded = expandedQuestions.has(questionId);

                        return (
                          <div
                            key={questionId}
                            className={`card p-0 overflow-hidden transition-all ${
                              isExpanded ? 'ring-1 ring-[var(--picsellia-green)]/20' : ''
                            }`}
                          >
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full px-6 py-5 text-left flex items-start gap-4 hover:bg-[var(--tertiary-system-background)]/50 transition-colors"
                            >
                              <span
                                className="flex-shrink-0 px-2 py-1 rounded text-xs font-medium"
                                style={{
                                  backgroundColor: `color-mix(in srgb, ${item.category.color} 15%, transparent)`,
                                  color: item.category.color,
                                }}
                              >
                                {item.category.name}
                              </span>
                              <span className="flex-1 font-medium text-[var(--label)]">
                                {item.q}
                              </span>
                              <svg
                                className={`w-5 h-5 text-[var(--tertiary-label)] flex-shrink-0 transition-transform ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            <div
                              className={`overflow-hidden transition-all ${
                                isExpanded ? 'max-h-96' : 'max-h-0'
                              }`}
                            >
                              <div className="px-6 pb-5 pt-0">
                                <div className="pl-0 text-[var(--secondary-label)] leading-relaxed">
                                  {item.a}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-[var(--tertiary-system-background)] flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-[var(--secondary-label)] mb-2">No questions found</p>
                      <p className="text-sm text-[var(--tertiary-label)]">
                        Try different keywords or{' '}
                        <Link href="/contact" className="text-[var(--picsellia-green)] hover:underline">
                          contact us
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Category View */
                activeData && (
                  <div>
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: activeData.color }}
                        />
                        <h2 className="text-2xl font-semibold">{activeData.name}</h2>
                      </div>
                      <p className="text-[var(--secondary-label)]">
                        {activeData.questions.length} questions in this category
                      </p>
                    </div>

                    <div className="space-y-3">
                      {activeData.questions.map((item, index) => {
                        const questionId = `${activeData.id}-${index}`;
                        const isExpanded = expandedQuestions.has(questionId);

                        return (
                          <div
                            key={questionId}
                            className={`card p-0 overflow-hidden transition-all ${
                              isExpanded ? 'ring-1 ring-[var(--picsellia-green)]/20' : ''
                            }`}
                          >
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full px-6 py-5 text-left flex items-start gap-4 hover:bg-[var(--tertiary-system-background)]/50 transition-colors"
                            >
                              <span
                                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mt-0.5"
                                style={{
                                  backgroundColor: `color-mix(in srgb, ${activeData.color} 15%, transparent)`,
                                  color: activeData.color,
                                }}
                              >
                                {index + 1}
                              </span>
                              <span className="flex-1 font-medium text-[var(--label)]">
                                {item.q}
                              </span>
                              <svg
                                className={`w-5 h-5 text-[var(--tertiary-label)] flex-shrink-0 transition-transform ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            <div
                              className={`overflow-hidden transition-all ${
                                isExpanded ? 'max-h-96' : 'max-h-0'
                              }`}
                            >
                              <div className="px-6 pb-5 pt-0">
                                <div className="pl-10 text-[var(--secondary-label)] leading-relaxed">
                                  {item.a}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="card p-10 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--picsellia-green)]/5 to-transparent pointer-events-none" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Still have questions?
              </h2>

              <p className="text-[var(--secondary-label)] mb-8 max-w-md mx-auto">
                Our team is here to help. Reach out and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary px-6 py-3">
                  Contact Sales
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="https://documentation.picsellia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-3"
                >
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
