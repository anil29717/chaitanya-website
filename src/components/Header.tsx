import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tests & Services', href: '#services' },
  { label: 'Health Packages', href: '#packages' },
  { label: 'Offers', href: '#offers' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Health Centre', href: '#health-centre' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.97)',
        boxShadow: scrolled ? '0 1px 24px rgba(11,61,145,0.10)' : '0 1px 0 rgba(11,61,145,0.07)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #0B3D91 60%, #06B6D4)' }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="7" y="2" width="4" height="14" rx="2" fill="white" />
                <rect x="2" y="7" width="14" height="4" rx="2" fill="white" />
              </svg>
            </div>
            <div>
              <div className="font-heading font-800 text-sm leading-tight" style={{ color: '#0B3D91', fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>
                Chaitanya
              </div>
              <div className="text-xs leading-tight" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Diagnostic Centre
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-blue-700"
                style={{ color: '#334155', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#0B3D91'; (e.target as HTMLElement).style.background = '#F0F7FF' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#334155'; (e.target as HTMLElement).style.background = 'transparent' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9318473692"
              className="flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg"
              style={{ color: '#0B3D91', background: '#EFF6FF', fontFamily: 'Inter, sans-serif' }}
            >
              <Phone size={14} />
              9318473692
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white shadow-sm"
              style={{ background: 'linear-gradient(135deg, #0B3D91, #1558d6)', fontFamily: 'Inter, sans-serif' }}
            >
              Book a Test
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: '#0B3D91' }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t" style={{ borderColor: '#E2E8F0', background: '#fff' }}>
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium rounded-lg"
                style={{ color: '#334155', fontFamily: 'Inter, sans-serif' }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
