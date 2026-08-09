import { ChevronRight, Clock } from 'lucide-react'

const articles = [
  {
    category: 'BY OUR DIAGNOSTIC EXPERTS',
    title: 'Neck Pain: Causes, Symptoms & When to Get Tested',
    excerpt: 'Persistent neck pain can signal underlying conditions requiring imaging. Here\'s when an MRI or X-ray can help identify the cause.',
    date: 'August 2026',
    photo: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop&auto=format',
  },
  {
    category: 'BY OUR HEALTH SPECIALISTS',
    title: 'Back Pain: Signs You Should Not Ignore',
    excerpt: 'Back pain affects millions. Understand the warning signs that indicate a need for urgent diagnostic evaluation and early treatment.',
    date: 'July 2026',
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
  },
  {
    category: 'BY OUR LAB EXPERTS',
    title: 'Heart Disease: Early Symptoms & Essential Tests',
    excerpt: 'Early detection through the right lab tests and cardiac imaging can significantly reduce risk. Learn which tests matter most.',
    date: 'July 2026',
    photo: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop&auto=format',
  },
]

export default function HealthCentre() {
  return (
    <section id="health-centre" className="py-20 px-4" style={{ background: '#FAFCFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Articles</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Health Centre
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map(a => (
            <article key={a.title} className="rounded-3xl overflow-hidden group cursor-pointer" style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(11,61,145,0.04)' }}>
              <div className="overflow-hidden" style={{ aspectRatio: '3/2', background: '#DBEAFE' }}>
                <img
                  src={a.photo}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>{a.category}</div>
                <h3 className="font-bold text-base leading-snug mb-3" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>{a.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{a.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    <Clock size={11} /> {a.date}
                  </div>
                  <a href="#" className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#0B3D91', fontFamily: 'Inter, sans-serif' }}>
                    Read More <ChevronRight size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
