const STEPS = [
  {
    title: 'Consultation',
    text: 'A discussion of your requirement, target market, product specifications and budget.',
  },
  {
    title: 'Sourcing & Quotation',
    text: 'Identify and verify suppliers, negotiate commercial terms and share a detailed proposal.',
  },
  {
    title: 'Order & Documentation',
    text: 'Order confirmation, sampling, contract paperwork and complete trade documentation.',
  },
  {
    title: 'Trade Execution',
    text: 'Payment, dispatch coordination, customs formalities and shipment tracking until delivery.',
  },
  {
    title: 'Delivery & Support',
    text: 'Final delivery confirmation, post-shipment documentation and support for repeat cycles.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section bg-cream">
      <div className="container-x">
        <div className="max-w-2xl reveal">
          <span className="eyebrow">Our Process</span>
          <h2 className="section-heading">
            How we{' '}
            <span className="gold-mark">engage.</span>
          </h2>
          <div className="section-divider" />
          <p className="section-text">
            A simple five-step process designed for clarity and accountability
            at every stage of trade.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="reveal relative"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute top-3 left-[3.5rem] right-[-0.75rem] h-px bg-gold/30"
                />
              )}
              <div className="flex items-center gap-3">
                <span className="font-serif text-gold text-lg font-medium leading-none w-7">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-gold" />
              </div>
              <h3 className="mt-4 font-serif text-navy text-[1.05rem] font-medium leading-snug">
                {s.title}
              </h3>
              <p className="mt-1.5 text-navy/70 text-[0.88rem] leading-relaxed">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
