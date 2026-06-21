const COMMITMENTS = [
  {
    title: 'Quality Assurance',
    text: 'Products are sourced from vetted suppliers, with sampling and pre-shipment checks where the engagement requires it.',
  },
  {
    title: 'Timely Delivery',
    text: 'Realistic timelines agreed at the outset, with proactive updates if any stage of trade is at risk of delay.',
  },
  {
    title: 'Transparent Communication',
    text: 'Written confirmations at each milestone — order, dispatch, customs, delivery — with a single point of contact.',
  },
  {
    title: 'Competitive Pricing',
    text: 'Itemised quotations with no hidden charges. Landed cost is shared upfront wherever the trade structure allows.',
  },
  {
    title: 'End-to-End Support',
    text: 'From initial enquiry through post-delivery reconciliation — one team coordinating every aspect of the trade.',
  },
]

export default function OurCommitment() {
  return (
    <section id="commitment" className="section bg-white">
      <div className="container-x">
        <div className="max-w-2xl reveal">
          <span className="eyebrow">Our Commitment</span>
          <h2 className="section-heading">
            What we promise our{' '}
            <span className="gold-mark">clients.</span>
          </h2>
          <div className="section-divider" />
          <p className="section-text">
            Five operating principles we hold ourselves to in every trade
            engagement — from first enquiry to final delivery.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-x-7 gap-y-9">
          {COMMITMENTS.map((c, i) => (
            <div
              key={c.title}
              className="reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="font-serif text-gold text-base font-medium">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-6 h-px bg-gold" />
              </div>
              <h3 className="mt-3 font-serif text-navy text-[1.02rem] font-medium leading-snug">
                {c.title}
              </h3>
              <p className="mt-1.5 text-navy/70 text-[0.88rem] leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
