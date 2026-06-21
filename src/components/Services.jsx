const SERVICES = [
  {
    title: 'Import & Export',
    text: 'End-to-end execution of cross-border trade — order placement, documentation, customs and delivery coordination across sea and air freight.',
  },
  {
    title: 'International Trading',
    text: 'Direct trading across commodities, industrial goods and consumer products between Indian and overseas markets, in both bulk and SME quantities.',
  },
  {
    title: 'Trade Consulting',
    text: 'Practical advisory on market entry, export incentives, compliance and pricing strategy — including RoDTEP, duty drawback and licensing.',
  },
  {
    title: 'Global Sourcing',
    text: 'Identifying, verifying and onboarding overseas suppliers that match your product specifications, quality requirements and pricing benchmarks.',
  },
  {
    title: 'Market Access & Network',
    text: 'Leverage our buyer and supplier network to enter new markets, find distribution partners and expand your international footprint.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <div className="max-w-2xl reveal">
          <span className="eyebrow">Services</span>
          <h2 className="section-heading">
            What we do for our{' '}
            <span className="gold-mark">clients.</span>
          </h2>
          <div className="section-divider" />
          <p className="section-text">
            A focused set of import-export, trading and consulting services to
            support clients across sourcing, market access and trade execution.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-9">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="reveal pb-7 border-b border-cream-line last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-gold font-serif text-base font-medium">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-navy text-xl font-medium">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-navy/72 text-[0.93rem] leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
