/**
 * FAQ block shared by the compare, industry and enterprise pages.
 * Pair it with faqJsonLd(faqs, locale) so the visible Q&A and the
 * FAQPage structured data always come from the same source.
 */
export default function FaqSection({
  title,
  faqs,
}: {
  title: string;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section className="py-24 border-b border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="card p-6">
              <h3 className="text-sm font-semibold text-[var(--label)] mb-2">{faq.question}</h3>
              <p className="text-sm text-[var(--secondary-label)] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
