import { Crosshair, Heart, Wind, Stethoscope } from 'lucide-react'

const procedures = [
  { icon: <Crosshair size={20} />, name: 'Ultrasound Guided FNAC', desc: 'Fine needle aspiration guided by real-time ultrasound imaging.' },
  { icon: <Crosshair size={20} />, name: 'Ultrasound Guided Biopsy', desc: 'Precision tissue biopsy with ultrasound guidance for accuracy.' },
  { icon: <Crosshair size={20} />, name: 'Ultrasound Guided Fluid Aspiration', desc: 'Therapeutic and diagnostic fluid aspiration under imaging.' },
  { icon: <Heart size={20} />, name: 'ECG', desc: 'Electrocardiography for cardiac rhythm and function assessment.' },
  { icon: <Stethoscope size={20} />, name: 'Echocardiography', desc: 'Ultrasound-based imaging of the heart structure and function.' },
  { icon: <Wind size={20} />, name: 'PFT', desc: 'Pulmonary function testing for respiratory evaluation.' },
]

export default function Interventional() {
  return (
    <section className="py-20 px-4" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Specialized</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Specialized Diagnostic & Interventional Procedures
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {procedures.map(p => (
            <div
              key={p.name}
              className="flex gap-4 p-5 rounded-2xl"
              style={{ background: '#F0F7FF', border: '1px solid #DBEAFE' }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#EFF6FF', color: '#0B3D91' }}>
                {p.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-1" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>{p.name}</div>
                <div className="text-xs leading-relaxed" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
