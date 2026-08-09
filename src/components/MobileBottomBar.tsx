import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex" style={{ background: '#fff', borderTop: '1px solid #E2E8F0', boxShadow: '0 -4px 20px rgba(11,61,145,0.10)' }}>
      <a
        href="tel:9318473692"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1"
        style={{ color: '#0B3D91' }}
      >
        <Phone size={20} />
        <span className="text-[10px] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Call</span>
      </a>
      <a
        href="https://wa.me/919318473692"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1"
        style={{ color: '#16A34A' }}
      >
        <MessageCircle size={20} />
        <span className="text-[10px] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>WhatsApp</span>
      </a>
      <a
        href="#contact"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-white"
        style={{ background: '#0B3D91' }}
      >
        <CalendarCheck size={20} />
        <span className="text-[10px] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Book Test</span>
      </a>
    </div>
  )
}
