import { useState } from 'react'
import { Phone, Mail, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', test: '', date: '', time: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', mobile: '', test: '', date: '', time: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>Book Now</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
              Book Your Diagnostic Test
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
              Fill in the form and our team will confirm your appointment. We also accept walk-ins during working hours.
            </p>

            <div className="space-y-4 mb-8">
              <a href="tel:9318473692" className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: '#F0F7FF', border: '1px solid #DBEAFE' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#0B3D91' }}>
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>Call Us</div>
                  <div className="font-semibold text-sm" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>9318473692 / 9311241149</div>
                </div>
              </a>
              <a href="mailto:cdcnoida@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: '#F0F7FF', border: '1px solid #DBEAFE' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#0B3D91' }}>
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>Email</div>
                  <div className="font-semibold text-sm" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>cdcnoida@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="p-5 rounded-2xl" style={{ background: '#FAFCFF', border: '1px solid #E2E8F0' }}>
              <div className="font-semibold text-sm mb-2" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>Working Hours</div>
              <div className="text-sm" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                <div>Mon – Sat: 07:30 AM – 09:00 PM</div>
                <div>Sunday: 07:30 AM – 08:00 PM</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl p-8" style={{ background: '#FAFCFF', border: '1px solid #E2E8F0' }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={48} style={{ color: '#22C55E', marginBottom: 16 }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>Request Received!</h3>
                <p className="text-sm" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>Our team will call you within 2 hours to confirm your booking.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { field: 'name', label: 'Full Name', type: 'text', placeholder: 'Rahul Sharma' },
                  { field: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '9876543210' },
                  { field: 'test', label: 'Test / Package', type: 'text', placeholder: 'e.g. MRI, Basic Health Checkup' },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>{label}</label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none border focus:border-blue-400"
                      style={{ border: '1.5px solid #E2E8F0', background: '#fff', fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
                    />
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none border"
                      style={{ border: '1.5px solid #E2E8F0', background: '#fff', fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>Preferred Time</label>
                    <input
                      type="time"
                      value={form.time}
                      onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none border"
                      style={{ border: '1.5px solid #E2E8F0', background: '#fff', fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific requirements or questions..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border resize-none"
                    style={{ border: '1.5px solid #E2E8F0', background: '#fff', fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm text-white"
                  style={{ background: 'linear-gradient(135deg, #0B3D91, #1558d6)', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 20px rgba(11,61,145,0.25)' }}
                >
                  <Send size={15} />
                  Request Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
