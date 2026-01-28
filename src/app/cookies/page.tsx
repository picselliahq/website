'use client';

import Link from 'next/link';
import { useState } from 'react';

// Cookie categories with details
const cookieCategories = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'Required for the website to function properly. These cannot be disabled.',
    required: true,
    cookies: [
      {
        name: 'session_id',
        purpose: 'Maintains your session state across page requests',
        duration: 'Session',
        provider: 'Picsellia',
      },
      {
        name: 'csrf_token',
        purpose: 'Protects against cross-site request forgery attacks',
        duration: 'Session',
        provider: 'Picsellia',
      },
      {
        name: 'cookie_consent',
        purpose: 'Stores your cookie consent preferences',
        duration: '1 year',
        provider: 'Picsellia',
      },
      {
        name: '__cf_bm',
        purpose: 'Cloudflare bot management - distinguishes humans from bots',
        duration: '30 minutes',
        provider: 'Cloudflare',
      },
    ],
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    description: 'Enable personalized features and remember your preferences.',
    required: false,
    cookies: [
      {
        name: 'theme_preference',
        purpose: 'Remembers your preferred color theme (light/dark)',
        duration: '1 year',
        provider: 'Picsellia',
      },
      {
        name: 'language',
        purpose: 'Stores your preferred language setting',
        duration: '1 year',
        provider: 'Picsellia',
      },
      {
        name: 'sidebar_collapsed',
        purpose: 'Remembers sidebar state in the platform',
        duration: '1 year',
        provider: 'Picsellia',
      },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website to improve user experience.',
    required: false,
    cookies: [
      {
        name: '_ga',
        purpose: 'Google Analytics - distinguishes unique users',
        duration: '2 years',
        provider: 'Google',
      },
      {
        name: '_ga_*',
        purpose: 'Google Analytics 4 - maintains session state',
        duration: '2 years',
        provider: 'Google',
      },
      {
        name: '_gid',
        purpose: 'Google Analytics - distinguishes users',
        duration: '24 hours',
        provider: 'Google',
      },
      {
        name: '_gat',
        purpose: 'Google Analytics - throttles request rate',
        duration: '1 minute',
        provider: 'Google',
      },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'Used to track visitors across websites for advertising purposes.',
    required: false,
    cookies: [
      {
        name: '__hssc',
        purpose: 'HubSpot - tracks sessions for analytics',
        duration: '30 minutes',
        provider: 'HubSpot',
      },
      {
        name: '__hssrc',
        purpose: 'HubSpot - determines if user has restarted browser',
        duration: 'Session',
        provider: 'HubSpot',
      },
      {
        name: '__hstc',
        purpose: 'HubSpot - tracks visitors across visits',
        duration: '6 months',
        provider: 'HubSpot',
      },
      {
        name: 'hubspotutk',
        purpose: 'HubSpot - tracks visitor identity',
        duration: '6 months',
        provider: 'HubSpot',
      },
      {
        name: '_fbp',
        purpose: 'Facebook Pixel - tracks visits across websites',
        duration: '3 months',
        provider: 'Meta',
      },
      {
        name: '_li_fat_id',
        purpose: 'LinkedIn - member indirect identifier for conversion tracking',
        duration: '30 days',
        provider: 'LinkedIn',
      },
    ],
  },
];

// Policy sections
const sections = [
  {
    id: 'what-are-cookies',
    title: 'What Are Cookies?',
    content: `Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.

Cookies can be "first-party" (set by the website you're visiting) or "third-party" (set by other services used on the website, such as analytics or advertising platforms).`,
  },
  {
    id: 'how-we-use',
    title: 'How We Use Cookies',
    content: `Picsellia uses cookies and similar technologies for several purposes:

- **Essential Functions:** To enable core website functionality, security, and accessibility
- **Preferences:** To remember your settings and personalize your experience
- **Analytics:** To understand how visitors use our website and improve our services
- **Marketing:** To deliver relevant content and measure the effectiveness of our campaigns

We are committed to transparency about the cookies we use and giving you control over your preferences.`,
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis',
    content: `Under the GDPR and ePrivacy Directive, we process cookie data based on:

**Strictly Necessary Cookies**
These cookies are essential for the website to function and do not require consent. They are placed automatically when you access our services.

**Optional Cookies**
For all non-essential cookies (functional, analytics, and marketing), we rely on your explicit consent. You can manage your preferences at any time using the cookie settings panel or by adjusting your browser settings.

We only activate optional cookies after you have provided consent, and we respect your right to withdraw consent at any time.`,
  },
  {
    id: 'your-choices',
    title: 'Your Choices',
    content: `You have several options to control cookies:

**Cookie Consent Banner**
When you first visit our website, you'll see a cookie banner allowing you to accept or decline optional cookies. You can change these preferences at any time.

**Browser Settings**
Most browsers allow you to:
- View cookies stored on your device
- Delete individual or all cookies
- Block third-party cookies
- Block all cookies from specific sites
- Clear cookies when you close the browser

**Do Not Track**
We respect Do Not Track (DNT) browser signals. When enabled, we disable non-essential tracking.

**Opt-Out Links**
- Google Analytics: [tools.google.com/dlpage/gaoptout](https://tools.google.com/dlpage/gaoptout)
- HubSpot: Manage via our cookie settings
- Facebook: [facebook.com/settings?tab=ads](https://www.facebook.com/settings?tab=ads)
- LinkedIn: [linkedin.com/psettings/advertising](https://www.linkedin.com/psettings/advertising)

Note: Blocking certain cookies may impact website functionality.`,
  },
  {
    id: 'third-parties',
    title: 'Third-Party Cookies',
    content: `Some cookies on our website are placed by third-party services we use. These services have their own privacy policies:

- **Google Analytics:** [privacy.google.com](https://privacy.google.com)
- **HubSpot:** [legal.hubspot.com/privacy-policy](https://legal.hubspot.com/privacy-policy)
- **Cloudflare:** [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/)
- **Meta (Facebook):** [facebook.com/privacy](https://www.facebook.com/privacy/policy)
- **LinkedIn:** [linkedin.com/legal/privacy-policy](https://www.linkedin.com/legal/privacy-policy)

We carefully select third-party services that comply with GDPR and maintain appropriate data protection standards.`,
  },
  {
    id: 'retention',
    title: 'Cookie Retention',
    content: `Cookies have varying lifespans:

**Session Cookies**
Temporary cookies deleted when you close your browser. Used for essential functions like maintaining your session.

**Persistent Cookies**
Remain on your device for a set period or until manually deleted. Used for remembering preferences and analytics.

We regularly review the cookies we use and remove any that are no longer necessary. See the detailed cookie table below for specific retention periods.`,
  },
  {
    id: 'updates',
    title: 'Updates to This Policy',
    content: `We may update this Cookie Policy to reflect changes in our practices, the cookies we use, or legal requirements. When we make significant changes, we will:

- Update the "Last Updated" date at the top of this page
- Reset your cookie consent preferences if we add new cookie categories
- Notify you via a banner on your next visit

We recommend reviewing this policy periodically to stay informed about our cookie practices.`,
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: `If you have questions about our use of cookies or this policy:

**Email:** privacy@picsellia.com
**Data Protection Officer:** dpo@picsellia.com

**Postal Address:**
Picsellia SAS
Toulouse, France

You can also manage your cookie preferences using the button below.`,
  },
];

export default function CookiesPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('essential');

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider">
              Legal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-tight">
            Cookie Policy
          </h1>

          <p className="text-lg text-[var(--secondary-label)] mb-8 max-w-2xl">
            This policy explains how Picsellia uses cookies and similar technologies,
            and how you can control them.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--tertiary-label)]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Last Updated: January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>GDPR & ePrivacy Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-[var(--label)] mb-6">Quick Summary</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cookieCategories.map((category) => (
              <div key={category.id} className="card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${category.required ? 'bg-[var(--system-green)]' : 'bg-[var(--system-blue)]'}`} />
                  <span className="text-sm font-medium text-[var(--label)]">{category.name}</span>
                </div>
                <p className="text-xs text-[var(--tertiary-label)]">
                  {category.cookies.length} cookie{category.cookies.length !== 1 ? 's' : ''} · {category.required ? 'Required' : 'Optional'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--system-orange)]/10 text-[var(--system-orange)] flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-semibold text-[var(--label)] pt-0.5">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-12">
                  {section.content.split('\n\n').map((paragraph, i) => {
                    // Handle markdown-style bold text
                    const formattedText = paragraph.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-[var(--label)] font-semibold">$1</strong>'
                    );

                    // Handle markdown-style links
                    const withLinks = formattedText.replace(
                      /\[(.*?)\]\((.*?)\)/g,
                      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[var(--system-orange)] hover:underline">$1</a>'
                    );

                    // Handle list items
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').map(line => line.replace(/^- /, ''));
                      return (
                        <ul key={i} className="list-disc list-inside space-y-2 my-4 text-[var(--secondary-label)]">
                          {items.map((item, li) => (
                            <li key={li} dangerouslySetInnerHTML={{ __html: item.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-[var(--label)]">$1</strong>'
                            )}} />
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p
                        key={i}
                        className="text-[var(--secondary-label)] leading-relaxed my-4"
                        dangerouslySetInnerHTML={{ __html: withLinks }}
                      />
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Cookie Table */}
      <section className="py-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[var(--label)] mb-8">
            Cookies We Use
          </h2>

          <div className="space-y-4">
            {cookieCategories.map((category) => (
              <div key={category.id} className="card overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[var(--tertiary-system-background)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${category.required ? 'bg-[var(--system-green)]' : 'bg-[var(--system-blue)]'}`} />
                    <div>
                      <h3 className="font-semibold text-[var(--label)]">{category.name}</h3>
                      <p className="text-sm text-[var(--tertiary-label)]">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {category.required && (
                      <span className="text-xs px-2 py-1 rounded bg-[var(--system-green)]/10 text-[var(--system-green)]">
                        Required
                      </span>
                    )}
                    <svg
                      className={`w-5 h-5 text-[var(--tertiary-label)] transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedCategory === category.id && (
                  <div className="border-t border-[var(--border)]">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[var(--tertiary-system-background)]">
                            <th className="text-left py-3 px-4 font-semibold text-[var(--label)]">Cookie Name</th>
                            <th className="text-left py-3 px-4 font-semibold text-[var(--label)]">Purpose</th>
                            <th className="text-left py-3 px-4 font-semibold text-[var(--label)]">Duration</th>
                            <th className="text-left py-3 px-4 font-semibold text-[var(--label)]">Provider</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.cookies.map((cookie, index) => (
                            <tr key={cookie.name} className={index % 2 === 0 ? '' : 'bg-[var(--tertiary-system-background)]/50'}>
                              <td className="py-3 px-4 font-mono text-xs text-[var(--system-orange)]">{cookie.name}</td>
                              <td className="py-3 px-4 text-[var(--secondary-label)]">{cookie.purpose}</td>
                              <td className="py-3 px-4 text-[var(--tertiary-label)]">{cookie.duration}</td>
                              <td className="py-3 px-4 text-[var(--tertiary-label)]">{cookie.provider}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manage Preferences */}
      <section className="py-16 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--system-orange)]/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-[var(--label)] mb-4">
            Manage Your Cookie Preferences
          </h2>
          <p className="text-[var(--secondary-label)] mb-8 max-w-lg mx-auto">
            You can update your cookie preferences at any time. Changes will take effect immediately.
          </p>
          <button className="btn-primary px-8 py-3">
            Open Cookie Settings
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-[var(--label)] mb-8">Related Policies</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/privacy"
              className="card p-6 hover:border-[var(--system-orange)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">Privacy Policy</h3>
              <p className="text-sm text-[var(--tertiary-label)]">How we collect and use your personal data</p>
            </Link>

            <Link
              href="/security"
              className="card p-6 hover:border-[var(--system-orange)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">Security</h3>
              <p className="text-sm text-[var(--tertiary-label)]">Our security practices and certifications</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
