import { Check, ChevronRight } from 'lucide-react'

const packages = [
  {
    name: 'Basic Health Checkup',
    params: 70,
    tests: ['FBS', 'LFT', 'KFT', 'Lipid Profile', 'CBC', 'Advanced Urine Tests'],
    original: 2520,
    offer: 1099,
    discount: 56,
    highlight: false,
  },
  {
    name: 'Advanced Health Checkup',
    params: 96,
    tests: ['FBS', 'LFT', 'KFT', 'Lipid Profile', 'CBC', 'Vitamin B12', 'Vitamin D', 'HbA1c', 'T3/T4/TSH', 'Serum Iron'],
    original: 6200,
    offer: 2599,
    discount: 58,
    highlight: true,
  },
  {
    name: 'Complete Health Checkup',
    params: 96,
    tests: ['FBS', 'LFT', 'KFT', 'Lipid Profile', 'CBC', 'Vitamin B12', 'Vitamin D', 'Digital X-Ray Chest', 'Ultrasound Whole Abdomen', 'ECG'],
    original: 8400,
    offer: 3599,
    discount: 57,
    highlight: false,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-20 px-4" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Health Packages</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Popular Health Checkup Packages
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
            Comprehensive health screening packages designed for preventive healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map(pkg => (
            <div
              key={pkg.name}
              className="relative rounded-3xl overflow-hidden transition-all duration-200"
              style={{
                background: pkg.highlight ? 'linear-gradient(160deg, #0B3D91, #1558d6)' : '#fff',
                border: pkg.highlight ? 'none' : '1px solid #E2E8F0',
                boxShadow: pkg.highlight ? '0 20px 60px rgba(11,61,145,0.25)' : '0 2px 16px rgba(11,61,145,0.05)',
              }}
            >
              {/* Discount badge */}
              <div
                className="absolute top-5 right-5 w-14 h-14 rounded-full flex flex-col items-center justify-center text-center"
                style={{ background: pkg.highlight ? 'rgba(255,255,255,0.15)' : '#FFF7ED', border: pkg.highlight ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
              >
                <div className="text-base font-extrabold leading-none" style={{ color: pkg.highlight ? '#FDE68A' : '#EA580C', fontFamily: 'Manrope, sans-serif' }}>
                  {pkg.discount}%
                </div>
                <div className="text-[9px] font-semibold" style={{ color: pkg.highlight ? '#FDE68A' : '#EA580C', fontFamily: 'Inter, sans-serif' }}>OFF</div>
              </div>

              <div className="p-7">
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: pkg.highlight ? 'rgba(255,255,255,0.6)' : '#06B6D4', fontFamily: 'Inter, sans-serif' }}>
                  {pkg.params} Parameters
                </div>
                <h3 className="text-xl font-extrabold mb-5" style={{ color: pkg.highlight ? '#fff' : '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>
                  {pkg.name}
                </h3>

                {/* Tests */}
                <div className="space-y-2 mb-6">
                  {pkg.tests.map(t => (
                    <div key={t} className="flex items-center gap-2 text-sm" style={{ color: pkg.highlight ? 'rgba(255,255,255,0.85)' : '#475569', fontFamily: 'Inter, sans-serif' }}>
                      <Check size={14} style={{ color: pkg.highlight ? '#6EE7B7' : '#06B6D4', flexShrink: 0 }} />
                      {t}
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="text-sm line-through mb-0.5" style={{ color: pkg.highlight ? 'rgba(255,255,255,0.45)' : '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    ₹{pkg.original.toLocaleString('en-IN')}
                  </div>
                  <div className="text-4xl font-extrabold" style={{ color: pkg.highlight ? '#fff' : '#0B3D91', fontFamily: 'Manrope, sans-serif' }}>
                    ₹{pkg.offer.toLocaleString('en-IN')}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm"
                  style={{
                    background: pkg.highlight ? 'rgba(255,255,255,0.95)' : '#0B3D91',
                    color: pkg.highlight ? '#0B3D91' : '#fff',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Book Now
                  <ChevronRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#0B3D91', fontFamily: 'Inter, sans-serif' }}>
            View All Health Packages <ChevronRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
