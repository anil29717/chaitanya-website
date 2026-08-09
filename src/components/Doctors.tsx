import { ChevronRight, Award } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Anmol Nigam',
    degree: 'MBBS, MD Radiology',
    role: 'Director Radiology',
    credentials: ['Ex SR — AIIMS', 'Ex SR — Rajiv Gandhi Cancer Hospital'],
    specialty: 'Radiology',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Dr. Rohini Bhatia',
    degree: 'MBBS, MD Pathology',
    role: 'Director Laboratory',
    credentials: ['Gold Medalist', 'Sr. Consultant — Immuno Labs', 'Ex Sr. Consultant — SMH (Onco-Histopathology)'],
    specialty: 'Pathology',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&auto=format',
  },
]

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 px-4" style={{ background: '#FAFCFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Our Team</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-2" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Expert Doctors. Trusted Diagnosis.
          </h2>
          <p className="text-base" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
            Experienced professionals committed to accurate diagnosis and better patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {doctors.map(doc => (
            <div
              key={doc.name}
              className="rounded-3xl overflow-hidden"
              style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(11,61,145,0.07)' }}
            >
              <div className="relative h-56 overflow-hidden" style={{ background: '#DBEAFE' }}>
                <img
                  src={doc.photo}
                  alt={`${doc.name} — ${doc.role} at Chaitanya Diagnostic Centre Noida`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,61,145,0.5) 0%, transparent 60%)' }} />
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'rgba(6,182,212,0.85)', fontFamily: 'Inter, sans-serif' }}
                >
                  {doc.specialty}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold mb-0.5" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>{doc.name}</h3>
                <div className="text-sm mb-1" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{doc.degree}</div>
                <div className="text-sm font-semibold mb-4" style={{ color: '#0B3D91', fontFamily: 'Inter, sans-serif' }}>{doc.role}</div>
                <div className="space-y-2">
                  {doc.credentials.map(c => (
                    <div key={c} className="flex items-center gap-2 text-xs" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                      <Award size={12} style={{ color: '#0B3D91', flexShrink: 0 }} />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#0B3D91', fontFamily: 'Inter, sans-serif' }}>
            Meet Our Doctors <ChevronRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
