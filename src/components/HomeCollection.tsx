import { Home, Phone, ChevronRight, Clock, MapPin } from 'lucide-react'

export default function HomeCollection() {
  return (
    <section className="py-20 px-4" style={{ background: '#FAFCFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3', background: '#DBEAFE' }}>
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=700&h=525&fit=crop&auto=format"
                alt="Home sample collection service at Chaitanya Diagnostic Centre Noida"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 right-6 bg-white rounded-2xl px-5 py-4 shadow-xl"
              style={{ border: '1px solid #E2E8F0' }}
            >
              <div className="flex items-center gap-2 text-sm font-semibold mb-1" style={{ color: '#0B3D91', fontFamily: 'Manrope, sans-serif' }}>
                <Clock size={14} style={{ color: '#06B6D4' }} />
                Same Day Booking
              </div>
              <div className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>Early morning slots available</div>
            </div>
          </div>

          <div>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: '#EFF6FF', color: '#0B3D91' }}>
              <Home size={22} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Home Collection</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
              Diagnostic Tests at Your Doorstep
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
              Can't visit the centre? Our home sample collection service makes diagnostic testing more convenient. A trained professional comes to your home at your preferred time.
            </p>
            <div className="flex items-center gap-2 text-sm mb-8" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
              <MapPin size={14} style={{ color: '#0B3D91' }} />
              Available across Noida and NCR region
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white shadow-md"
                style={{ background: 'linear-gradient(135deg, #0B3D91, #1558d6)', fontFamily: 'Inter, sans-serif' }}
              >
                Request Home Collection
                <ChevronRight size={15} />
              </a>
              <a
                href="tel:9318473692"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border"
                style={{ color: '#0B3D91', borderColor: '#93C5FD', fontFamily: 'Inter, sans-serif' }}
              >
                <Phone size={15} />
                Call 9318473692
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
