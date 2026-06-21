const REASONS = [
  {
    title: 'Hands-on import-export expertise',
    text: 'Years of practical experience navigating cross-border trade, documentation and supplier negotiations.',
  },
  {
    title: 'Verified supplier network',
    text: 'Working relationships with vetted manufacturers and trade partners across multiple sourcing markets.',
  },
  {
    title: 'Compliance-first approach',
    text: 'DGFT, customs, GST and trade record requirements are handled carefully and proactively.',
  },
  {
    title: 'Single point of contact',
    text: 'A dedicated coordinator for every engagement — no being passed between teams or call centres.',
  },
  {
    title: 'Transparent trade pricing',
    text: 'Itemised quotations with clear cost breakdown — landed price is shared upfront wherever feasible.',
  },
  {
    title: 'Long-term partnerships',
    text: 'We prefer steady, repeat engagements over one-off transactions and structure our service accordingly.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-cream">
      <div className="container-x">
        <div className="max-w-2xl reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-heading">
            How we work with{' '}
            <span className="gold-mark">our clients.</span>
          </h2>
          <div className="section-divider" />
          <p className="section-text">
            Six commitments we hold ourselves to in every trade engagement.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-7">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="reveal flex gap-4"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-serif text-gold text-base font-medium shrink-0 pt-0.5 w-7">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-navy text-[1.05rem] font-medium leading-snug">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-navy/70 text-[0.9rem] leading-relaxed">
                  {r.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
