import { ChevronRight, Tag } from 'lucide-react'

const offers = [
  { name: 'PCOD Profile-I', price: 1599, original: null },
  { name: 'PCOD Profile-II', price: 2499, original: null },
  { name: 'Allergy Comprehensive Profile', price: 7499, original: null },
  { name: 'Whole Body MRI Screening', price: 15000, original: null },
  { name: 'HeartGuard Advanced Package', price: 7750, original: null },
]

export default function SpecialOffers() {
  return (
    <section id="offers" className="py-20 px-4" style={{ background: '#FAFCFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Special Offers</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Special Diagnostic Offers
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((offer, i) => (
            <div
              key={offer.name}
              className="relative group rounded-2xl p-6 transition-all duration-200 cursor-pointer"
              style={{
                background: '#fff',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 12px rgba(11,61,145,0.04)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: i % 2 === 0 ? 'linear-gradient(90deg, #0B3D91, #06B6D4)' : 'linear-gradient(90deg, #06B6D4, #0B3D91)' }}
              />
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#EFF6FF', color: '#0B3D91' }}>
                  <Tag size={16} />
                </div>
                <div className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#FFF7ED', color: '#EA580C', fontFamily: 'Inter, sans-serif' }}>
                  Special Price
                </div>
              </div>
              <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>{offer.name}</h3>
              <div className="text-3xl font-extrabold mb-4" style={{ color: '#0B3D91', fontFamily: 'Manrope, sans-serif' }}>
                ₹{offer.price.toLocaleString('en-IN')}
              </div>
              <a
                href="#contact"
                className="flex items-center gap-1 text-sm font-semibold"
                style={{ color: '#0B3D91', fontFamily: 'Inter, sans-serif' }}
              >
                Book Now <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white shadow-md"
            style={{ background: 'linear-gradient(135deg, #0B3D91, #1558d6)', fontFamily: 'Inter, sans-serif' }}
          >
            View All Offers <ChevronRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
