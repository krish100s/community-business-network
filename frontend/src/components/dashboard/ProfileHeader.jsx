import { motion } from 'framer-motion'
import { Badge } from '../Badge.jsx'

export function ProfileHeader({ title, subtitle, image }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="gcb-dashboard-hero"
    >
      <div className="gcb-ambient-gradients" aria-hidden="true" />
      <div className="gcb-container gcb-dashboard-hero__grid">
        <div className="gcb-dashboard-hero__media">
          <img src={image} alt="" loading="lazy" />
        </div>
        <div className="gcb-dashboard-hero__copy">
          <Badge className="gcb-pill">Business owner dashboard</Badge>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </motion.section>
  )
}

