import { useState } from 'react'
import { ChevronRight, Radio, FlaskConical } from 'lucide-react'

const radiology = [
  { name: 'MRI 1.5 Tesla', desc: 'High-resolution MRI imaging for brain, spine, joints and soft tissues.' },
  { name: 'CT Scan', desc: 'Multi-slice CT scanning for rapid, detailed cross-sectional imaging.' },
  { name: '3D/4D Ultrasound', desc: 'Advanced ultrasound imaging including obstetric and abdominal scans.' },
  { name: 'Color Doppler', desc: 'Blood flow assessment for vascular and cardiac evaluation.' },
  { name: 'Digital X-Ray', desc: 'Fast digital radiography with instant high-quality imaging.' },
  { name: 'Barium Studies', desc: 'Fluoroscopic contrast studies for GI tract evaluation.' },
  { name: 'IVP', desc: 'Intravenous pyelogram for urinary tract imaging.' },
  { name: 'RGU / MCU', desc: 'Urethrogram and micturating cystourethrogram studies.' },
  { name: 'HSG', desc: 'Hysterosalpingography for fallopian tube and uterine imaging.' },
  { name: 'Uroflowmetry', desc: 'Non-invasive urine flow rate measurement study.' },
]

const pathology = [
  { name: 'Haematology', desc: 'Complete blood count and peripheral smear evaluation.' },
  { name: 'Clinical Pathology', desc: 'Urine, stool and other body fluid analysis.' },
  { name: 'Biochemistry', desc: 'Comprehensive metabolic panel, liver and kidney function tests.' },
  { name: 'Serology', desc: 'Antibody and antigen detection for infection diagnosis.' },
  { name: 'FNAC', desc: 'Fine needle aspiration cytology for lump evaluation.' },
  { name: 'Histopathology', desc: 'Tissue biopsy examination for accurate diagnosis.' },
  { name: 'Cytopathology', desc: 'Cell-level analysis including Pap smear studies.' },
  { name: 'Immunology', desc: 'Immunoglobulin and autoimmune marker testing.' },
]

function ServiceCard({ name, desc }: { name: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="p-5 rounded-2xl cursor-pointer transition-all duration-200"
      style={{
        background: hovered ? '#0B3D91' : '#fff',
        border: `1px solid ${hovered ? '#0B3D91' : '#E2E8F0'}`,
        boxShadow: hovered ? '0 8px 32px rgba(11,61,145,0.18)' : '0 1px 4px rgba(11,61,145,0.04)',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="font-semibold text-sm mb-2 leading-snug" style={{ color: hovered ? '#fff' : '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>
        {name}
      </div>
      <div className="text-xs leading-relaxed mb-3" style={{ color: hovered ? 'rgba(255,255,255,0.8)' : '#64748B', fontFamily: 'Inter, sans-serif' }}>
        {desc}
      </div>
      <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: hovered ? '#93C5FD' : '#0B3D91', fontFamily: 'Inter, sans-serif' }}>
        Book Test <ChevronRight size={12} />
      </div>
    </div>
  )
}

export default function Services() {
  const [tab, setTab] = useState<'radiology' | 'pathology'>('radiology')

  return (
    <section id="services" className="py-20 px-4" style={{ background: '#FAFCFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Our Services</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Comprehensive Diagnostic Services
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
            Advanced imaging and laboratory services under one roof.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1.5 rounded-2xl" style={{ background: '#E0EDFF' }}>
            {[
              { key: 'radiology', label: 'Radiology', icon: <Radio size={15} /> },
              { key: 'pathology', label: 'Pathology', icon: <FlaskConical size={15} /> },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as typeof tab)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: tab === t.key ? '#0B3D91' : 'transparent',
                  color: tab === t.key ? '#fff' : '#0B3D91',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {(tab === 'radiology' ? radiology : pathology).map(s => (
            <ServiceCard key={s.name} name={s.name} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
