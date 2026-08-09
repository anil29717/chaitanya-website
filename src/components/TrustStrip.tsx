import { UserCheck, Cpu, FileCheck, BadgeIndianRupee } from 'lucide-react'

const items = [
  { icon: <UserCheck size={22} />, title: 'Experienced Doctors', desc: 'AIIMS & RGCI experienced professionals' },
  { icon: <Cpu size={22} />, title: 'Advanced Technology', desc: 'Modern diagnostic equipment' },
  { icon: <FileCheck size={22} />, title: 'Accurate Reports', desc: 'Reliable diagnostic testing' },
  { icon: <BadgeIndianRupee size={22} />, title: 'Affordable Packages', desc: 'Quality healthcare at accessible prices' },
]

export default function TrustStrip() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(item => (
            <div
              key={item.title}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 rounded-2xl"
              style={{ background: '#F0F7FF', border: '1px solid #DBEAFE' }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#EFF6FF', color: '#0B3D91' }}>
                {item.icon}
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-sm leading-tight mb-0.5" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>{item.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
