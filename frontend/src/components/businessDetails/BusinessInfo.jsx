import { motion } from 'framer-motion'
import { Globe, Mail, MapPin, Phone, Link2, Instagram, Linkedin } from 'lucide-react'

const items = [
  { label: 'Address', value: '123 Market Street, Portland, OR', icon: MapPin },
  { label: 'Contact', value: '+1 (555) 234-5678', icon: Phone },
  { label: 'Website', value: 'www.amberandoak.com', icon: Globe },
  { label: 'Email', value: 'hello@amberandoak.com', icon: Mail },
]

export function BusinessInfo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="gcb-details-card"
    >
      <div className="gcb-details-card__head">
        <span className="gcb-overline">Business Information</span>
      </div>
      <div className="gcb-details-info">
        <p className="gcb-details-copy">
          A premium community listing for a local business. This section keeps the same calm, spacious visual language as the homepage and Businesses page.
        </p>
        <div className="gcb-details-info__grid">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="gcb-details-info__item">
                <span className="gcb-details-info__icon">
                  <Icon size={16} />
                </span>
                <div>
                  <span className="gcb-details-info__label">{item.label}</span>
                  <p>{item.value}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="gcb-details-social">
          <a href="#" aria-label="Website">
            <Link2 size={16} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </motion.section>
  )
}

