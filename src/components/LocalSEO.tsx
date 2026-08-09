import { MapPin, Navigation } from 'lucide-react'

export default function LocalSEO() {
  return (
    <section className="py-20 px-4" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Find Us</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
              Diagnostic Centre in Sector 51, Noida
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
              Chaitanya Diagnostic Centre is conveniently located near Metro Pillar No. 215–216 at Hoshiarpur, Sector-51, Noida — easily accessible from Noida Sector 34 Metro Station and surrounding areas.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
              We offer MRI in Noida, CT Scan in Noida, Ultrasound in Noida, comprehensive pathology services in Noida, health checkup packages in Noida, and home sample collection in Noida — all under one roof.
            </p>

            <div className="flex items-start gap-3 p-5 rounded-2xl mb-6" style={{ background: '#F0F7FF', border: '1px solid #DBEAFE' }}>
              <MapPin size={20} style={{ color: '#0B3D91', flexShrink: 0, marginTop: 2 }} />
              <div>
                <div className="font-semibold text-sm mb-0.5" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>Chaitanya Diagnostic Centre</div>
                <div className="text-sm" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>Metro Pillar No. 215–216, Hoshiarpur, Sector-51, Noida – 201301</div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Hoshiarpur+Sector+51+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white shadow-md"
              style={{ background: 'linear-gradient(135deg, #0B3D91, #1558d6)', fontFamily: 'Inter, sans-serif' }}
            >
              <Navigation size={15} />
              Get Directions
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3', background: '#E0EDFF' }}>
            <iframe
              title="Chaitanya Diagnostic Centre location map Noida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0!2d77.37!3d28.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzUxLjkiTiA3N8KwMjEnNDEuMyJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
