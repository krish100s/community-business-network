import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Button } from '../Button.jsx'

export function OwnerCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="gcb-details-card gcb-details-owner"
    >
      <div className="gcb-details-card__head">
        <span className="gcb-overline">Owner Information</span>
      </div>
      <div className="gcb-details-owner__body">
        <div className="gcb-details-owner__avatar">MA</div>
        <div>
          <h3>Maria Alvarez</h3>
          <p>Founder and creative lead behind Amber & Oak Coffee House.</p>
        </div>
        <div className="gcb-details-owner__cta">
          <Button variant="primary" className="gcb-details-owner__button">
            <Phone size={15} />
            Call Owner
          </Button>
          <Button variant="ghost" className="gcb-details-owner__button">
            <Mail size={15} />
            Contact
          </Button>
        </div>
      </div>
    </motion.aside>
  )
}

