import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../Button.jsx'

export function AboutCTA() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="gcb-about-cta"
        >
          <div className="gcb-about-cta__glow" aria-hidden="true" />
          <span className="gcb-overline">Meet the platform</span>
          <h2>Built to help local communities grow together.</h2>
          <p>
            GrowCommunityBiz is designed to make local discovery feel modern, trustworthy, and genuinely useful.
          </p>
          <div className="gcb-about-cta__actions">
            <Button variant="primary">
              Explore Businesses
              <ArrowRight size={16} />
            </Button>
            <Button variant="ghost">Join Community</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

