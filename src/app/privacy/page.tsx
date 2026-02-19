import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, breadcrumbJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & GDPR Compliance',
  description:
    'Learn how Picsellia collects, uses, and protects your personal data. Our commitment to privacy, security, and GDPR compliance.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Data Protection & GDPR Compliance',
    description:
      'Learn how Picsellia collects, uses, and protects your personal data. Our commitment to privacy, security, and GDPR compliance.',
    url: '/privacy',
  },
};

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `Picsellia SAS ("Picsellia", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our MLOps platform for computer vision, visit our website, or interact with our services.

We process personal data in compliance with the General Data Protection Regulation (GDPR), the French Data Protection Act (Loi Informatique et Libertés), and other applicable data protection laws.`,
  },
  {
    id: 'data-controller',
    title: 'Data Controller',
    content: `Picsellia SAS is the data controller for the personal data collected through our services.

**Contact Information:**
Picsellia SAS
Toulouse, France
Email: privacy@picsellia.com

For any privacy-related inquiries, please contact our Data Protection Officer at dpo@picsellia.com.`,
  },
  {
    id: 'data-collected',
    title: 'Information We Collect',
    content: `**Account Information**
When you create an account, we collect:
- Name and email address
- Organization name
- Job title and role
- Password (encrypted)
- Profile preferences

**Usage Data**
We automatically collect:
- Log data (IP address, browser type, device information)
- Platform usage analytics (features used, session duration)
- Performance metrics

**Platform Data**
When using our services, you may upload:
- Images and datasets for computer vision tasks
- Model configurations and training parameters
- Annotations and labels
- API tokens and integration credentials

**Communication Data**
When you contact us, we collect:
- Email correspondence
- Support tickets
- Feedback and survey responses

**Payment Information**
For paid plans, we collect:
- Billing address
- Payment method (processed by our payment provider Stripe)
- Invoice history`,
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis for Processing',
    content: `We process your personal data based on the following legal grounds:

**Contract Performance**
Processing necessary to provide our services, manage your account, and fulfill our contractual obligations.

**Legitimate Interests**
Processing for our legitimate business interests, such as improving our services, ensuring security, and conducting analytics—balanced against your rights and freedoms.

**Consent**
Where required, we obtain your explicit consent for specific processing activities, such as marketing communications.

**Legal Obligations**
Processing required to comply with applicable laws, regulations, and legal processes.`,
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: `We use collected information to:

- **Provide Services:** Operate and maintain the Picsellia platform
- **Improve Products:** Analyze usage patterns to enhance features and user experience
- **Customer Support:** Respond to inquiries and provide technical assistance
- **Security:** Detect, prevent, and address technical issues and security threats
- **Communications:** Send important updates, newsletters (with consent), and service notifications
- **Billing:** Process payments and manage subscriptions
- **Compliance:** Meet legal obligations and enforce our terms of service`,
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing and Disclosure',
    content: `We do not sell your personal data. We may share information with:

**Service Providers**
Trusted third parties who assist in operating our platform:
- Cloud infrastructure (OVHcloud, AWS)
- Payment processing (Stripe)
- Email services (HubSpot)
- Analytics (privacy-focused tools)

**Legal Requirements**
When required by law, court order, or governmental authority.

**Business Transfers**
In connection with a merger, acquisition, or sale of assets, with appropriate confidentiality protections.

**With Your Consent**
When you explicitly authorize sharing with specific third parties.

All service providers are bound by data processing agreements ensuring GDPR compliance and adequate data protection.`,
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: `We retain personal data only as long as necessary for the purposes described:

| Data Type | Retention Period |
|-----------|-----------------|
| Account data | Duration of account + 3 years |
| Usage logs | 12 months |
| Platform data | Duration of account + 30 days |
| Support tickets | 5 years |
| Invoices | 10 years (legal requirement) |

When data is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.`,
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: `Under GDPR and applicable laws, you have the right to:

**Access**
Request a copy of your personal data we hold.

**Rectification**
Request correction of inaccurate or incomplete data.

**Erasure ("Right to be Forgotten")**
Request deletion of your personal data under certain circumstances.

**Restriction**
Request limitation of processing in specific situations.

**Data Portability**
Receive your data in a structured, commonly used format.

**Object**
Object to processing based on legitimate interests or direct marketing.

**Withdraw Consent**
Withdraw consent at any time where processing is based on consent.

**Lodge a Complaint**
File a complaint with your local data protection authority (in France: CNIL).

To exercise these rights, contact us at privacy@picsellia.com. We will respond within 30 days.`,
  },
  {
    id: 'security',
    title: 'Data Security',
    content: `We implement robust technical and organizational measures to protect your data:

- **Encryption:** AES-256 encryption at rest, TLS 1.3 in transit
- **Access Controls:** Role-based access with multi-factor authentication
- **Infrastructure:** ISO 27001 certified data centers in the EU
- **Monitoring:** 24/7 security monitoring and intrusion detection
- **Audits:** Regular security assessments and penetration testing
- **Certifications:** ISO/IEC 27001:2022 certified

For more details, see our [Security page](/security).`,
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    content: `Picsellia primarily stores data in European Union data centers. When we transfer data outside the EU/EEA, we ensure appropriate safeguards:

- Standard Contractual Clauses (SCCs) approved by the European Commission
- Adequacy decisions where applicable
- Additional technical and organizational measures

We do not transfer data to countries without adequate protection unless appropriate safeguards are in place.`,
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking',
    content: `We use cookies and similar technologies to enhance your experience:

**Essential Cookies**
Required for platform functionality (authentication, security).

**Analytics Cookies**
Help us understand how visitors interact with our website (with consent).

**Preference Cookies**
Remember your settings and preferences.

You can manage cookie preferences through our cookie banner or your browser settings. For details, see our [Cookie Policy](/cookies).`,
  },
  {
    id: 'children',
    title: 'Children\'s Privacy',
    content: `Picsellia services are not directed to individuals under 16 years of age. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information.`,
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or a prominent notice on our platform.

The "Last Updated" date at the top of this policy indicates when it was last revised. Continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: `For questions about this Privacy Policy or our data practices:

**Email:** privacy@picsellia.com
**Data Protection Officer:** dpo@picsellia.com

**Postal Address:**
Picsellia SAS
Toulouse, France

We aim to respond to all inquiries within 30 days.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Privacy Policy', url: '/privacy' }])} />
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider">
              Legal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-lg text-[var(--secondary-label)] mb-8 max-w-2xl">
            Your privacy matters to us. This policy explains how Picsellia collects, uses,
            and protects your personal information.
          </p>

          <div className="flex items-center gap-6 text-sm text-[var(--tertiary-label)]">
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
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-semibold text-[var(--secondary-label)] uppercase tracking-wider mb-4">
            Table of Contents
          </h2>
          <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-[var(--secondary-label)] hover:text-[var(--system-blue)] transition-colors py-1"
              >
                <span className="text-[var(--tertiary-label)] mr-2">{index + 1}.</span>
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--system-blue)]/10 text-[var(--system-blue)] flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-semibold text-[var(--label)] pt-0.5">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-12 prose prose-invert max-w-none">
                  {section.content.split('\n\n').map((paragraph, i) => {
                    // Handle markdown-style bold text
                    const formattedText = paragraph.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-[var(--label)] font-semibold">$1</strong>'
                    );

                    // Handle markdown-style links
                    const withLinks = formattedText.replace(
                      /\[(.*?)\]\((.*?)\)/g,
                      '<a href="$2" class="text-[var(--system-blue)] hover:underline">$1</a>'
                    );

                    // Handle tables
                    if (paragraph.includes('|--------')) {
                      const lines = paragraph.split('\n');
                      const headers = lines[0].split('|').filter(Boolean).map(h => h.trim());
                      const rows = lines.slice(2).map(line =>
                        line.split('|').filter(Boolean).map(cell => cell.trim())
                      );

                      return (
                        <div key={i} className="overflow-x-auto my-6">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-[var(--border)]">
                                {headers.map((header, hi) => (
                                  <th key={hi} className="text-left py-3 pr-4 font-semibold text-[var(--label)]">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, ri) => (
                                <tr key={ri} className="border-b border-[var(--border)]">
                                  {row.map((cell, ci) => (
                                    <td key={ci} className="py-3 pr-4 text-[var(--secondary-label)]">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }

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

      {/* Related Pages */}
      <section className="py-16 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-[var(--label)] mb-8">Related Policies</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/cookies"
              className="card p-6 hover:border-[var(--system-blue)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">Cookie Policy</h3>
              <p className="text-sm text-[var(--tertiary-label)]">Learn about our cookie usage</p>
            </Link>

            <Link
              href="/enterprise"
              className="card p-6 hover:border-[var(--system-blue)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">Security</h3>
              <p className="text-sm text-[var(--tertiary-label)]">Our security practices</p>
            </Link>

            <Link
              href="/contact"
              className="card p-6 hover:border-[var(--system-blue)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">Contact Us</h3>
              <p className="text-sm text-[var(--tertiary-label)]">Privacy questions?</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
