import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Sector 50, Noida',
    text: 'Very professional staff and clean facility. Got my reports on time and the team was very helpful in explaining the results. Highly recommended.',
    stars: 5,
  },
  {
    name: 'Rajesh Gupta',
    location: 'Sector 62, Noida',
    text: 'Booked an MRI through the centre. Easy booking process, reasonable price and quick service. The technician was experienced and courteous.',
    stars: 5,
  },
  {
    name: 'Anita Verma',
    location: 'Hoshiarpur, Noida',
    text: 'Visited for full body checkup package. Affordable pricing, minimal wait time and the doctors were very knowledgeable. Will visit again.',
    stars: 5,
  },
  {
    name: 'Suresh Mehta',
    location: 'Sector 34, Noida',
    text: 'Used the home sample collection service. The phlebotomist arrived on time and was very careful. Reports were delivered digitally the same day.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Patient Reviews</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Trusted by Patients Across Noida
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map(r => (
            <div
              key={r.name}
              className="p-6 rounded-2xl flex flex-col gap-4"
              style={{ background: '#FAFCFF', border: '1px solid #E2E8F0' }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>"{r.text}"</p>
              <div>
                <div className="font-semibold text-sm" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>{r.name}</div>
                <div className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
