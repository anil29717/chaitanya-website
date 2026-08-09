import { Zap, UserCheck, Cpu, BadgeIndianRupee, Shield, Layers } from 'lucide-react'

const reasons = [
  { icon: <Zap size={22} />, title: 'Fast & Accurate', desc: 'Reliable diagnostic testing with efficient reporting and timely results.' },
  { icon: <UserCheck size={22} />, title: 'Experienced Doctors', desc: 'Specialist doctors with experience from leading institutions including AIIMS and RGCI.' },
  { icon: <Cpu size={22} />, title: 'Advanced Technology', desc: 'Modern diagnostic imaging and laboratory technology for dependable results.' },
  { icon: <BadgeIndianRupee size={22} />, title: 'Affordable Healthcare', desc: 'Quality diagnostic services at competitive and transparent prices.' },
  { icon: <Shield size={22} />, title: 'Trusted & Ethical', desc: 'Patient-focused and transparent diagnostic care you can rely on.' },
  { icon: <Layers size={22} />, title: 'Comprehensive Services', desc: 'Radiology and pathology services available under one roof.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Why Us</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Why Choose Chaitanya Diagnostic Centre?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group p-7 rounded-3xl transition-all duration-200 relative overflow-hidden"
              style={{ background: '#FAFCFF', border: '1px solid #E2E8F0' }}
            >
              <div
                className="absolute bottom-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: i % 3 === 0 ? 'rgba(11,61,145,0.04)' : i % 3 === 1 ? 'rgba(6,182,212,0.04)' : 'rgba(11,61,145,0.03)', transform: 'translate(30%, 30%)' }}
              />
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: '#EFF6FF', color: '#0B3D91' }}>
                {r.icon}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
