'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Product menu organized by workflow stages
const productMenu = {
  groups: [
    {
      title: 'Data',
      description: 'Collect & organize',
      color: 'var(--picsellia-blue)',
      items: [
        {
          label: 'Datalake',
          href: '/datalake',
          description: 'Centralized visual data repository',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          ),
        },
        {
          label: 'Dataset Management',
          href: '/dataset-management',
          description: 'Version and organize datasets',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Annotate',
      description: 'Label & review',
      color: 'var(--picsellia-blue)',
      items: [
        {
          label: 'Labeling Tool',
          href: '/labeling-tool',
          description: 'AI-assisted annotation interface',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          ),
        },
        {
          label: 'Annotation Campaigns',
          href: '/annotation-campaigns',
          description: 'Team workflows & quality control',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Train',
      description: 'Build & experiment',
      color: 'var(--picsellia-green)',
      items: [
        {
          label: 'AI Laboratory',
          href: '/ai-laboratory',
          description: 'Build and train models',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          ),
        },
        {
          label: 'Experiment Tracking',
          href: '/experiment-tracking',
          description: 'Track metrics & compare runs',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
        {
          label: 'Automated Pipelines',
          href: '/automated-pipelines',
          description: 'CI/CD for machine learning',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Deploy',
      description: 'Ship & monitor',
      color: 'var(--system-red)',
      items: [
        {
          label: 'Model Deployment',
          href: '/model-deployment',
          description: 'Deploy models at scale',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          ),
        },
        {
          label: 'Model Monitoring',
          href: '/model-monitoring',
          description: 'Track production performance',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
        },
      ],
    },
  ],
  footer: {
    label: 'Platform Overview',
    href: '/product-overview',
    description: 'See the complete MLOps platform',
  },
};

// Solutions menu
const solutionsMenu = {
  industries: [
    {
      label: 'Manufacturing',
      href: '/industry/manufacturing',
      description: 'Quality control & defect detection',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      label: 'Energy',
      href: '/industry/energy',
      description: 'Infrastructure inspection & maintenance',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: 'Agriculture',
      href: '/industry/agriculture',
      description: 'Crop monitoring & yield optimization',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Waste Management',
      href: '/industry/waste-management',
      description: 'Sorting automation & recycling',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ],
  useCases: [
    { label: 'Defect Detection', href: '/use-cases/defects-detection' },
    { label: 'Document Processing', href: '/use-cases/document-processing' },
    { label: 'Live Sport Analysis', href: '/use-cases/live-sport-analysis' },
  ],
};

// Resources menu
const resourcesMenu = [
  {
    label: 'Documentation',
    href: 'https://documentation.picsellia.com',
    description: 'Guides, API reference & tutorials',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    external: true,
  },
  {
    label: 'Blog',
    href: '/blog',
    description: 'Latest news & insights',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    label: 'Community',
    href: '/community',
    description: 'Join our Slack & GitHub',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: 'White Papers',
    href: '/white-papers',
    description: 'In-depth technical resources',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-[var(--system-grouped-background)]/95 backdrop-blur-xl border-b border-[var(--border)]' : ''
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/Full_logo_white.svg" alt="Picsellia" className="h-7" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('platform')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors flex items-center gap-1.5">
                Platform
                <svg className={`w-3 h-3 transition-transform ${openDropdown === 'platform' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === 'platform' && (
                <div className="absolute top-full left-0 pt-4">
                  <div className="bg-[var(--secondary-system-background)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden w-[900px]">
                    {/* Groups grid */}
                    <div className="grid grid-cols-4 divide-x divide-[var(--border)]">
                      {productMenu.groups.map((group) => (
                        <div key={group.title} className="p-6">
                          {/* Group header */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: group.color }} />
                              <span className="text-xs font-semibold text-[var(--label)] uppercase tracking-wider">{group.title}</span>
                            </div>
                            <span className="text-[10px] text-[var(--tertiary-label)]">{group.description}</span>
                          </div>
                          {/* Items */}
                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="block p-2 -mx-2 rounded-lg hover:bg-[var(--tertiary-system-background)] transition-colors group"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="text-[var(--tertiary-label)] group-hover:text-[var(--label)] transition-colors mt-0.5" style={{ color: openDropdown === 'platform' ? undefined : group.color }}>
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-[var(--label)] group-hover:text-[var(--picsellia-green)] transition-colors">{item.label}</div>
                                    <div className="text-[11px] text-[var(--tertiary-label)] leading-tight mt-0.5">{item.description}</div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Footer */}
                    <div className="px-6 py-4 bg-[var(--tertiary-system-background)] border-t border-[var(--border)]">
                      <Link
                        href={productMenu.footer.href}
                        className="flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                          <span className="text-sm font-medium text-[var(--label)] group-hover:text-[var(--picsellia-green)] transition-colors">{productMenu.footer.label}</span>
                        </div>
                        <svg className="w-4 h-4 text-[var(--tertiary-label)] group-hover:text-[var(--picsellia-green)] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors flex items-center gap-1.5">
                Solutions
                <svg className={`w-3 h-3 transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 pt-4">
                  <div className="bg-[var(--secondary-system-background)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden w-[640px]">
                    <div className="grid grid-cols-2 divide-x divide-[var(--border)]">
                      {/* Industries */}
                      <div className="p-6">
                        <div className="text-xs font-semibold text-[var(--tertiary-label)] uppercase tracking-wider mb-3">By Industry</div>
                        <div className="space-y-1">
                          {solutionsMenu.industries.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block p-2 -mx-2 rounded-lg hover:bg-[var(--tertiary-system-background)] transition-colors group"
                            >
                              <div className="flex items-start gap-3">
                                <div className="text-[var(--tertiary-label)] group-hover:text-[var(--label)] transition-colors mt-0.5">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-[var(--label)] group-hover:text-[var(--picsellia-green)] transition-colors">{item.label}</div>
                                  <div className="text-[11px] text-[var(--tertiary-label)] leading-tight mt-0.5">{item.description}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* Use Cases */}
                      <div className="p-6">
                        <div className="text-xs font-semibold text-[var(--tertiary-label)] uppercase tracking-wider mb-4">Use Cases</div>
                        <div className="space-y-1">
                          {solutionsMenu.useCases.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block p-2.5 -mx-2 rounded-lg hover:bg-[var(--tertiary-system-background)] transition-colors group"
                            >
                              <div className="text-sm font-medium text-[var(--label)] group-hover:text-[var(--picsellia-green)] transition-colors">{item.label}</div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-[var(--border)]">
                          <Link
                            href="/use-cases"
                            className="flex items-center gap-2 text-sm text-[var(--picsellia-green)] hover:underline"
                          >
                            View all use cases
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('resources')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors flex items-center gap-1.5">
                Resources
                <svg className={`w-3 h-3 transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === 'resources' && (
                <div className="absolute top-full right-0 pt-4">
                  <div className="bg-[var(--secondary-system-background)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden w-[320px]">
                    <div className="p-5">
                      {resourcesMenu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[var(--tertiary-system-background)] transition-colors group"
                        >
                          <div className="text-[var(--tertiary-label)] group-hover:text-[var(--label)] transition-colors mt-0.5">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-medium text-[var(--label)] group-hover:text-[var(--picsellia-green)] transition-colors">{item.label}</span>
                              {item.external && (
                                <svg className="w-3 h-3 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                            </div>
                            <div className="text-[11px] text-[var(--tertiary-label)] leading-tight mt-0.5">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/security"
              className="px-4 py-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors"
            >
              Security
            </Link>
            <Link
              href="/about-us"
              className="px-4 py-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors"
            >
              About
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/demo" className="text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors px-3 py-2">
              Contact Sales
            </Link>
            <Link href="/trial" className="btn-primary text-sm py-2.5 px-5">
              Start Free
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--border)] py-4 bg-[var(--system-grouped-background)]">
            {/* Platform */}
            <div className="py-3">
              <div className="text-xs font-semibold text-[var(--tertiary-label)] uppercase tracking-wider mb-3 px-2">Platform</div>
              {productMenu.groups.map((group) => (
                <div key={group.title} className="mb-4">
                  <div className="flex items-center gap-2 px-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: group.color }} />
                    <span className="text-xs font-medium text-[var(--secondary-label)]">{group.title}</span>
                  </div>
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-2 px-4 text-sm text-[var(--label)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Solutions */}
            <div className="py-3 border-t border-[var(--border)]">
              <div className="text-xs font-semibold text-[var(--tertiary-label)] uppercase tracking-wider mb-3 px-2">Solutions</div>
              {solutionsMenu.industries.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 px-4 text-sm text-[var(--label)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Resources */}
            <div className="py-3 border-t border-[var(--border)]">
              <div className="text-xs font-semibold text-[var(--tertiary-label)] uppercase tracking-wider mb-3 px-2">Resources</div>
              {resourcesMenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  className="block py-2 px-4 text-sm text-[var(--label)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Direct Links */}
            <div className="py-3 border-t border-[var(--border)]">
              <Link
                href="/pricing"
                className="block py-2 px-4 text-sm text-[var(--label)]"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/security"
                className="block py-2 px-4 text-sm text-[var(--label)]"
                onClick={() => setMobileOpen(false)}
              >
                Security
              </Link>
              <Link
                href="/about-us"
                className="block py-2 px-4 text-sm text-[var(--label)]"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </div>

            {/* CTA */}
            <div className="pt-4 px-2">
              <Link
                href="/trial"
                className="btn-primary text-center block"
                onClick={() => setMobileOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
