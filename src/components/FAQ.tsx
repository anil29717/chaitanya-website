import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Where is Chaitanya Diagnostic Centre located in Noida?',
    a: 'We are located at Metro Pillar No. 215–216, Hoshiarpur, Sector-51, Noida – 201301. The centre is easily accessible from the Noida Sector 34 Metro Station.',
  },
  {
    q: 'What diagnostic tests are available at Chaitanya Diagnostic Centre?',
    a: 'We offer a comprehensive range of diagnostic services including MRI, CT Scan, 3D/4D Ultrasound, Color Doppler, Digital X-Ray, and a full suite of pathology services including Haematology, Biochemistry, Serology, FNAC, Histopathology, and more.',
  },
  {
    q: 'Do you provide MRI and CT scans?',
    a: 'Yes. We have a 1.5 Tesla MRI machine and a modern CT scanner on-site. Both services are available at competitive prices with same-day and next-day appointment slots.',
  },
  {
    q: 'Is home sample collection available?',
    a: 'Yes, we offer home sample collection across Noida and NCR. You can book a home collection appointment by calling us or submitting an enquiry through our website.',
  },
  {
    q: 'How can I book a diagnostic test?',
    a: 'You can book a test by calling us at 9318473692 or 9311241149, using the booking form on our website, or walking into the centre during working hours.',
  },
  {
    q: 'What health packages are available?',
    a: 'We offer several health checkup packages including Basic Health Checkup (₹1099), Advanced Health Checkup (₹2599), and Complete Health Checkup (₹3599), along with specialized packages for PCOD, heart health, allergies, and whole body MRI screening.',
  },
  {
    q: 'Are doctors available for consultation?',
    a: 'Yes. Our radiologists and pathologists are available to interpret reports. Our Director Radiology Dr. Anmol Nigam (Ex SR AIIMS) and Director Laboratory Dr. Rohini Bhatia (Gold Medalist, MD Pathology) oversee all diagnostic work.',
  },
  {
    q: "What are the centre's operating hours?",
    a: 'We are open Monday to Saturday from 07:30 AM to 09:00 PM and on Sundays from 07:30 AM to 08:00 PM.',
  },
  {
    q: 'How can I contact Chaitanya Diagnostic Centre?',
    a: 'You can reach us at 9318473692 or 9311241149. For email enquiries, write to cdcnoida@gmail.com.',
  },
  {
    q: 'Which metro station is nearest to the centre?',
    a: 'The nearest metro station is Noida Sector 34 Metro Station on the Blue Line. We are located at Metro Pillar No. 215–216, which makes us easy to find.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4" style={{ background: '#FAFCFF' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>FAQ</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ background: '#fff', border: `1px solid ${open === i ? '#93C5FD' : '#E2E8F0'}` }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm leading-snug" style={{ color: '#0B1F4D', fontFamily: 'Manrope, sans-serif' }}>{faq.q}</span>
                <ChevronDown
                  size={18}
                  style={{ flexShrink: 0, color: '#0B3D91', transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
