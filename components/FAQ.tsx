import FAQItem from './FAQItem'

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes, enjoy every feature free for 14 days—no credit card required.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. Downgrade or cancel right from your dashboard.',
  },
  {
    q: 'Do you offer discounts for startups?',
    a: 'Early-stage startups (<$1M ARR) receive 50% off for 12 months.',
  },
  {
    q: 'Is my data secure?',
    a: 'We’re SOC 2 Type II compliant and encrypt data at rest and in transit.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl font-bold md:text-5xl text-center">
          Frequently asked
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
