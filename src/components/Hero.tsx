import { Phone, ChevronRight, Home } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden"
      style={{ background: '#FAFCFF' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(6,182,212,0.07) 0%, transparent 60%), radial-gradient(ellipse at 90% 80%, rgba(11,61,145,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: '#EFF6FF', color: '#0B3D91', border: '1px solid #BFDBFE', fontFamily: 'Inter, sans-serif' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
              Trusted Diagnostic Centre in Noida
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-5"
              style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.02em' }}
            >
              Precise Scans.{' '}
              <span style={{ color: '#0B3D91' }}>Better Diagnosis.</span>{' '}
              <span style={{ color: '#06B6D4' }}>Stronger Care.</span>
            </h1>

            <p className="text-base lg:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
              Advanced diagnostic imaging and laboratory services backed by experienced doctors, modern technology and patient-focused care.
            </p>

            {/* Highlight */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#EFF6FF' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l1.8 3.6L14 5.5l-3 2.9.7 4.1L8 10.3l-3.7 2.2.7-4.1L2 5.5l4.2-.9L8 1z" fill="#0B3D91" />
                </svg>
              </div>
              <span className="text-sm font-semibold" style={{ color: '#0B3D91', fontFamily: 'Inter, sans-serif' }}>
                Doctors from AIIMS & RGCI
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg"
                style={{ background: 'linear-gradient(135deg, #0B3D91, #1558d6)', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 20px rgba(11,61,145,0.30)' }}
              >
                Book a Test
                <ChevronRight size={16} />
              </a>
              <a
                href="tel:9318473692"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border"
                style={{ color: '#0B3D91', borderColor: '#93C5FD', background: '#fff', fontFamily: 'Inter, sans-serif' }}
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Home collection pill */}
            <div className="inline-flex items-center gap-2 text-sm" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>
              <Home size={14} />
              <span className="font-medium">Home Collection Available</span>
            </div>
          </div>

          {/* Right — Medical Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3', background: '#E0EDFF' }}>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format"
                alt="Modern MRI diagnostic equipment at Chaitanya Diagnostic Centre Noida"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(11,61,145,0.10) 0%, transparent 60%)' }} />
            </div>

            {/* Floating cards */}
            <div
              className="absolute -bottom-5 -left-5 lg:-left-10 bg-white rounded-2xl px-5 py-3 shadow-xl"
              style={{ border: '1px solid #E2E8F0' }}
            >
              <div className="text-xs font-medium mb-1" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>Reports Delivered</div>
              <div className="text-2xl font-extrabold" style={{ color: '#0B3D91', fontFamily: 'Manrope, sans-serif' }}>24hrs</div>
              <div className="text-xs" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>on most tests</div>
            </div>

            <div
              className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-2xl px-5 py-3 shadow-xl"
              style={{ border: '1px solid #E2E8F0' }}
            >
              <div className="text-xs font-medium mb-1" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>MRI 1.5 Tesla</div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs font-semibold" style={{ color: '#0B3D91', fontFamily: 'Inter, sans-serif' }}>Available Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
