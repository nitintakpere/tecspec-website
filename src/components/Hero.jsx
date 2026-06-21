import { Send, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-navy pt-[120px] md:pt-[150px] pb-20 md:pb-24 overflow-hidden"
    >
      {/* Subtle gold corner ornaments */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(201,168,76,0.6) 0, transparent 35%),' +
            'radial-gradient(circle at 80% 70%, rgba(201,168,76,0.5) 0, transparent 40%)',
        }}
      />

      <div className="container-x relative">
        <div className="max-w-4xl">
          <span className="eyebrow animate-fade-up">
            Import-Export · Trading · Consulting
          </span>

          {/* Tagline — main heading */}
          <h1
            className="mt-5 font-serif text-cream font-medium text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight animate-fade-up delay-100"
          >
            Connecting Indian businesses with{' '}
            <span className="text-gold">global markets.</span>
          </h1>

          {/* Supporting description */}
          <p className="mt-6 max-w-2xl text-cream/75 text-[1rem] sm:text-[1.05rem] leading-relaxed animate-fade-up delay-200">
            A Mumbai-based import-export, trading and consulting firm. We help
            clients source the right products, connect with verified overseas
            suppliers and navigate cross-border trade with clarity and
            confidence.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-fade-up delay-300">
            <a href="#contact" className="btn btn-gold">
              <Send size={13} /> Send Enquiry
            </a>
            <a href="#about" className="btn btn-outline-cream">
              Learn More <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
