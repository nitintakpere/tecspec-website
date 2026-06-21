const PILLARS = [
  {
    title: 'Mission',
    text: 'Provide dependable import-export, trading and consulting services that help clients source and sell across borders with clarity.',
  },
  {
    title: 'Vision',
    text: 'To be a trusted Indian partner for businesses pursuing measured, well-planned international growth.',
  },
  {
    title: 'Values',
    text: 'Integrity, accuracy, respect for commitments, and direct communication in every transaction we undertake.',
  },
]

export default function About() {
  return (
    <section id="about" className="section bg-cream">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — eyebrow + heading + intro */}
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow">About Us</span>
            <h2 className="section-heading">
              A Mumbai-based trade partner with{' '}
              <span className="gold-mark">international reach.</span>
            </h2>
            <div className="section-divider" />
            <p className="section-text">
              Tecspec Imex Private Limited is engaged in import-export, trading
              and consulting. We work with manufacturers, suppliers and buyers
              across India and overseas markets to facilitate cross-border
              commerce.
            </p>
            <p className="section-text mt-4">
              Our focus is on connecting the right products with the right
              markets — backed by careful supplier selection, accurate trade
              documentation and clear communication at every stage.
            </p>
          </div>

          {/* Right — three pillars as clean text blocks */}
          <div className="lg:col-span-7 reveal">
            <ul className="space-y-7">
              {PILLARS.map((p, i) => (
                <li key={p.title} className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-12 sm:col-span-3 flex items-center gap-3 pt-1">
                    <span className="text-gold font-serif text-sm font-medium">
                      0{i + 1}
                    </span>
                    <span className="w-6 h-px bg-gold/60" />
                    <h3 className="font-serif text-navy text-lg font-medium">
                      {p.title}
                    </h3>
                  </div>
                  <p className="col-span-12 sm:col-span-9 text-navy/72 text-[0.93rem] leading-relaxed">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-9 pt-7 border-t border-cream-line">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-navy/55 font-semibold">
                <span><span className="text-gold">·</span> DGFT Registered</span>
                <span><span className="text-gold">·</span> IEC Holder</span>
                <span><span className="text-gold">·</span> GST Compliant</span>
                <span><span className="text-gold">·</span> MSME Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
