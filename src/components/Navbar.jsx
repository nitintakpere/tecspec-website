import { useEffect, useState } from 'react'
import { Menu, X, Send } from 'lucide-react'
import LogoMark from './LogoMark.jsx'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-navy transition-shadow duration-200"
      style={{
        borderBottom: '2px solid rgba(201, 168, 76, 0.7)',
        boxShadow: scrolled
          ? '0 6px 22px -8px rgba(201,168,76,0.35), 0 4px 16px -6px rgba(0,0,0,0.45)'
          : '0 4px 14px -6px rgba(201,168,76,0.22)',
      }}
    >
      <div className="container-x flex items-center justify-between h-[78px] md:h-[88px]">
        {/* Brand — text-based logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <LogoMark tone="dark" size="lg" />
          <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.28em] text-gold font-semibold border-l border-gold/30 pl-3 ml-0.5">
            Private Limited
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-tab">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn btn-gold btn-sm">
            <Send size={12} /> Send Enquiry
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-cream hover:text-gold transition-colors rounded-full"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-navy overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ borderTop: '1px solid rgba(201, 168, 76, 0.18)' }}
      >
        <div className="container-x py-3 flex flex-col gap-0.5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-tab-mobile"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-gold mt-3 w-full"
          >
            <Send size={13} /> Send Enquiry
          </a>
        </div>
      </div>
    </header>
  )
}
