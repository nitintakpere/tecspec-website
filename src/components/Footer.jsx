import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  ArrowUp,
} from 'lucide-react'
import LogoMark from './LogoMark.jsx'

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'Our Process', href: '#process' },
  { label: 'Our Commitment', href: '#commitment' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  'Import & Export',
  'International Trading',
  'Trade Consulting',
  'Global Sourcing',
  'Market Access & Network',
]

const SOCIAL = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: <Linkedin size={14} strokeWidth={1.8} />,
    bg: '#0077B5',
  },
  {
    label: 'Facebook',
    href: '#',
    icon: <Facebook size={14} strokeWidth={1.8} />,
    bg: '#1877F2',
  },
  {
    label: 'X',
    href: '#',
    icon: <Twitter size={13} strokeWidth={1.8} />,
    bg: '#000000',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: <Instagram size={14} strokeWidth={1.8} />,
    bg: 'radial-gradient(circle at 30% 110%, #FED576 0%, #F47133 20%, #BC3081 45%, #4C63D2 80%)',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="bg-navy text-cream/70 pt-14 pb-7"
      style={{ borderTop: '1px solid rgba(201, 168, 76, 0.25)' }}
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark tone="dark" size="md" />
              <span className="text-[9.5px] uppercase tracking-[0.25em] text-gold font-semibold border-l border-gold/30 pl-3">
                Private Limited
              </span>
            </div>
            <p className="mt-5 text-[13px] text-cream/55 leading-relaxed max-w-sm">
              A Mumbai-based import-export, trading and consulting firm working
              with clients across India and overseas markets.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="social-pill"
                  style={{
                    background: s.bg,
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-gold font-semibold mb-3.5 text-[10.5px] uppercase tracking-[0.22em]">
              Company
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[12.5px] text-cream/65 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-gold font-semibold mb-3.5 text-[10.5px] uppercase tracking-[0.22em]">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[12.5px] text-cream/65 hover:text-gold transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-gold font-semibold mb-3.5 text-[10.5px] uppercase tracking-[0.22em]">
              Reach Us
            </h4>
            <ul className="space-y-3 text-[12.5px]">
              <li className="flex items-start gap-2.5">
                <MapPin size={12} className="mt-0.5 text-gold shrink-0" />
                <span className="text-cream/65 leading-relaxed">
                  Mumbai, Maharashtra,<br />India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={12} className="text-gold shrink-0" />
                <a
                  href="mailto:takperesmita@gmail.com"
                  className="text-cream/65 hover:text-gold transition-colors break-all"
                >
                  takperesmita@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={12} className="text-gold shrink-0" />
                <a
                  href="tel:+918369415470"
                  className="text-cream/65 hover:text-gold transition-colors"
                >
                  +91 83694 15470
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance strip */}
        <div className="mt-12 pt-5 border-t border-gold/15 grid md:grid-cols-2 gap-3 items-center">
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] text-cream/55">
            <span>
              <span className="text-gold font-semibold">GSTIN:</span> 27AAFCT5348G1Z5
            </span>
            <span>
              <span className="text-gold font-semibold">CIN:</span> U74990MH2015PTC289008
            </span>
            <span>
              <span className="text-gold font-semibold">DGFT IEC:</span> AAFCT5348G
            </span>
          </div>
          <div className="md:text-right">
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold hover:text-gold-soft"
            >
              Back to top <ArrowUp size={11} />
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-cream/50">
          <p>© {year} Tecspec Imex Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
