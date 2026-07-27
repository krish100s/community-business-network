import { Phone, MessageCircle, Mail, Globe } from 'lucide-react'

export function StickyActionCard() {
  return (
    <>
      <aside className="gcb-details-sticky" aria-label="Business actions">
        <a href="#" className="gcb-details-sticky__action">
          <Phone size={16} />
          Call
        </a>
        <a href="#" className="gcb-details-sticky__action">
          <MessageCircle size={16} />
          WhatsApp
        </a>
        <a href="#" className="gcb-details-sticky__action">
          <Mail size={16} />
          Email
        </a>
        <a href="#" className="gcb-details-sticky__action">
          <Globe size={16} />
          Visit Website
        </a>
      </aside>

      <div className="gcb-details-mobilebar" aria-label="Business actions">
        <a href="#" aria-label="Call">
          <Phone size={18} />
        </a>
        <a href="#" aria-label="WhatsApp">
          <MessageCircle size={18} />
        </a>
        <a href="#" aria-label="Email">
          <Mail size={18} />
        </a>
        <a href="#" aria-label="Visit Website">
          <Globe size={18} />
        </a>
      </div>
    </>
  )
}

