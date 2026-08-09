const techs = [
  { label: 'MRI 1.5 Tesla', photo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=360&fit=crop&auto=format' },
  { label: 'CT Scan', photo: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=500&h=360&fit=crop&auto=format' },
  { label: 'Advanced Laboratory', photo: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=360&fit=crop&auto=format' },
  { label: '3D/4D Ultrasound', photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=360&fit=crop&auto=format' },
  { label: 'Color Doppler', photo: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=500&h=360&fit=crop&auto=format' },
  { label: 'Digital X-Ray', photo: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&h=360&fit=crop&auto=format' },
]

export default function Technology() {
  return (
    <section id="technology" className="py-20 px-4" style={{ background: '#0B1F4D' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Equipment</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: '#fff', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Advanced Diagnostic Technology
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
            Modern diagnostic technology combined with experienced specialists helps deliver dependable results for better clinical decision-making.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {techs.map(t => (
            <div key={t.label} className="relative rounded-2xl overflow-hidden group" style={{ aspectRatio: '4/3', background: '#162A5A' }}>
              <img
                src={t.photo}
                alt={`${t.label} at Chaitanya Diagnostic Centre Noida`}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,31,77,0.85) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-sm font-semibold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{t.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
