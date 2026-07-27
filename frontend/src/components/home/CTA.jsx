import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="list-business" className="gcb-section">
      <div className="gcb-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="gcb-cta-panel"
        >
          <div className="gcb-cta-glow" />
          <div className="gcb-cta-content">
            <h2>Ready to Grow Your Business?</h2>
            <p>Join thousands of local business owners building lasting relationships with their community.</p>
            <div className="gcb-cta-actions">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#top" className="gcb-button-cta-primary">
                Join Community <ArrowRight size={16} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#list-business" className="gcb-button-cta-secondary">
                List Your Business
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
