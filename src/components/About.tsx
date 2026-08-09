import { ChevronRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4', background: '#E0EDFF' }}>
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=533&fit=crop&auto=format"
                alt="Advanced diagnostic technology at Chaitanya Diagnostic Centre"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', background: '#E0EDFF' }}>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop&auto=format"
                  alt="Experienced doctors at Chaitanya Diagnostic Centre Noida"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', background: '#E0EDFF' }}>
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop&auto=format"
                  alt="Laboratory services at Chaitanya Diagnostic Centre"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>About Us</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
              Trusted Diagnostic Care in Noida
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
              Chaitanya Diagnostic Centre provides comprehensive diagnostic imaging and laboratory services in Noida, combining advanced technology with experienced medical professionals to support accurate and timely diagnosis.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
              Located near Metro Pillar No. 215–216 at Sector-51 Hoshiarpur, we are committed to making advanced diagnostic services accessible to patients across Noida, with a patient-first approach and transparent pricing.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white shadow-md"
              style={{ background: 'linear-gradient(135deg, #0B3D91, #1558d6)', fontFamily: 'Inter, sans-serif' }}
            >
              Know More About Us
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
