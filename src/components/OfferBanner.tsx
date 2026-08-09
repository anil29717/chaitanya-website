import { Zap, ChevronRight } from 'lucide-react'

export default function OfferBanner() {
  return (
    <section id="offers-banner" className="py-5 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden px-6 sm:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(120deg, #0B3D91 0%, #0e52c1 50%, #06B6D4 100%)',
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />

          <div className="relative flex items-center gap-5">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <Zap size={28} className="text-yellow-300" fill="currentColor" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.02em' }}>50% OFF</span>
                <span className="text-xs font-semibold text-yellow-300 px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', fontFamily: 'Inter, sans-serif' }}>LIMITED TIME</span>
              </div>
              <div className="text-white/90 font-semibold text-base mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                On MRI, CT Scan & Health Packages
              </div>
              <div className="text-white/70 text-sm mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                Limited-time diagnostic offers for comprehensive health screening.
              </div>
            </div>
          </div>

          <a
            href="#offers"
            className="relative flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ background: 'rgba(255,255,255,0.95)', color: '#0B3D91', fontFamily: 'Inter, sans-serif' }}
          >
            Explore Offers
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
