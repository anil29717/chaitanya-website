import { MapPin, Phone, Mail, Clock } from 'lucide-react'

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

const services = ['MRI', 'CT Scan', 'Ultrasound', 'X-Ray', 'Pathology', 'Health Packages']

export default function Footer() {
  return (
    <footer style={{ background: '#0B1F4D', color: '#CBD5E1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1558d6, #06B6D4)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="7" y="2" width="4" height="14" rx="2" fill="white" />
                  <rect x="2" y="7" width="14" height="4" rx="2" fill="white" />
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-sm text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Chaitanya Diagnostic</div>
                <div className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>Centre, Noida</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
              Precise Scans. Better Diagnosis. Stronger Care.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-xs font-bold" style={{ background: 'rgba(255,255,255,0.07)', color: '#94A3B8' }}>
                IG
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-xs font-bold" style={{ background: 'rgba(255,255,255,0.07)', color: '#94A3B8' }}>
                FB
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold text-white text-sm mb-5" style={{ fontFamily: 'Manrope, sans-serif' }}>Quick Links</div>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-semibold text-white text-sm mb-5" style={{ fontFamily: 'Manrope, sans-serif' }}>Services</div>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-white text-sm mb-5" style={{ fontFamily: 'Manrope, sans-serif' }}>Contact</div>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                <MapPin size={14} style={{ flexShrink: 0, marginTop: 2, color: '#06B6D4' }} />
                Metro Pillar No. 215–216, Hoshiarpur, Sector-51, Noida – 201301
              </div>
              <a href="tel:9318473692" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                <Phone size={14} style={{ color: '#06B6D4', flexShrink: 0 }} />
                9318473692 / 9311241149
              </a>
              <a href="mailto:cdcnoida@gmail.com" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                <Mail size={14} style={{ color: '#06B6D4', flexShrink: 0 }} />
                cdcnoida@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                <Clock size={14} style={{ flexShrink: 0, marginTop: 2, color: '#06B6D4' }} />
                <div>
                  <div>Mon–Sat: 07:30 AM – 09:00 PM</div>
                  <div>Sunday: 07:30 AM – 08:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="text-xs" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
            © 2026 Chaitanya Diagnostic Centre, Noida. All rights reserved.
          </div>
          <div className="text-xs" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
            Diagnostic Centre in Sector 51 Noida | MRI in Noida | CT Scan in Noida
          </div>
        </div>
      </div>
    </footer>
  )
}
