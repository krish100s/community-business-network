import { motion } from 'framer-motion'
import { trustedLogos } from './homeData.js'

export function TrustedBy() {
  return (
    <section className="gcb-trusted-section">
      <div className="gcb-container">
        <p className="gcb-trusted-label">Backed by teams who trust the platforms we build on</p>
        <div className="gcb-trusted-logos">
          {trustedLogos.map((name) => (
            <motion.span key={name} whileHover={{ opacity: 1 }} className="gcb-trusted-logo">
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
