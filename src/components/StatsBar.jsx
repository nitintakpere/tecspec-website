const STATS = [
  { value: '9+',  label: 'Years in Business' },
  { value: '20+', label: 'Serving Countries' },
  { value: '8+',  label: 'Industries Served' },
]

export default function StatsBar() {
  return (
    <section className="bg-navy-deep relative">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.45), transparent)' }}
      />
      <div className="container-x py-9 md:py-11">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={
                i < STATS.length - 1 ? 'sm:border-r sm:border-gold/20' : ''
              }
            >
              <div className="stat-item text-center">
                <div className="stat-value font-serif text-gold text-3xl md:text-[2.1rem] font-semibold leading-none">
                  {s.value}
                </div>
                <div className="stat-label mt-2 text-[10.5px] uppercase tracking-[0.22em] text-cream/70 font-semibold">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.45), transparent)' }}
      />
    </section>
  )
}
