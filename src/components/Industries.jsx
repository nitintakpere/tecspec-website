const INDUSTRIES = [
  'Industrial & Engineering',
  'Agriculture & Commodities',
  'Pharmaceuticals & Healthcare',
  'Electronics & Components',
  'Construction & Infrastructure',
  'Textiles & Apparel',
  'Chemicals & Polymers',
  'FMCG & Retail',
]

export default function Industries() {
  return (
    <section id="industries" className="section bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow">Industries</span>
            <h2 className="section-heading">
              Sectors we{' '}
              <span className="gold-mark">serve.</span>
            </h2>
            <div className="section-divider" />
            <p className="section-text">
              We work across a range of industries — selecting engagements
              where our sourcing and trade experience can add real value.
            </p>
          </div>

          <div className="lg:col-span-7 reveal">
            <ul className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-cream-line border-y border-cream-line">
              {INDUSTRIES.map((name, i) => (
                <li
                  key={name}
                  className={`flex items-center gap-3 py-3.5 ${
                    i % 2 === 0 ? 'sm:border-r sm:border-cream-line sm:pr-6' : 'sm:pl-6'
                  } ${i < 2 ? 'sm:border-t-0' : ''}`}
                  style={{
                    borderTopWidth: i === 0 || (i === 1) ? '0' : undefined,
                  }}
                >
                  <span className="text-gold font-serif text-xs font-medium w-6 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-navy text-[0.97rem]">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
