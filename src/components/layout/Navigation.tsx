'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navigation = [
  {
    label: 'Product',
    items: [
      { label: 'Overview', href: '/product-overview' },
      { label: 'Datalake', href: '/datalake' },
      { label: 'Dataset Management', href: '/dataset-management' },
      { label: 'Labeling Tool', href: '/labeling-tool' },
      { label: 'AI Laboratory', href: '/ai-laboratory' },
      { label: 'Model Deployment', href: '/model-deployment' },
      { label: 'Model Monitoring', href: '/model-monitoring' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { label: 'Manufacturing', href: '/industry/manufacturing' },
      { label: 'Energy', href: '/industry/energy' },
      { label: 'Agriculture', href: '/industry/agriculture' },
      { label: 'Waste Management', href: '/industry/waste-management' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Use Cases', href: '/use-cases' },
      { label: 'Documentation', href: 'https://docs.picsellia.com' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about-us' },
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
        scrolled ? 'bg-[var(--system-grouped-background)]/90 backdrop-blur-md border-b border-[var(--border)]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/Full_logo_white.svg"
              alt="Picsellia"
              className="h-7"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.items && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-3 py-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {item.items && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-[var(--secondary-system-background)] border border-[var(--border)] rounded-lg py-2 min-w-[200px] shadow-xl">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] hover:bg-[var(--tertiary-system-background)] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/demo" className="text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors">
              Contact Sales
            </Link>
            <Link href="/trial" className="btn-primary text-sm py-2 px-4">
              Start Free
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
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
          <div className="md:hidden border-t border-[var(--border)] py-4">
            {navigation.map((item) => (
              <div key={item.label} className="py-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-2 text-[var(--secondary-label)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div className="py-2 text-[var(--label)] font-medium">{item.label}</div>
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-2 pl-4 text-sm text-[var(--tertiary-label)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Link href="/trial" className="btn-primary text-center" onClick={() => setMobileOpen(false)}>
                Start Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
