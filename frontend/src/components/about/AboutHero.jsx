import { motion } from 'framer-motion'
import { Badge } from '../Badge.jsx'

export function AboutHero() {
  return (
    <section className="gcb-hero-shell">
      <div className="gcb-ambient-gradients" aria-hidden="true" />
      <div className="gcb-about-hero-bgtext" aria-hidden="true">
        GROWCOMMUNITYBIZ
      </div>
      <div className="gcb-container gcb-about-hero">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="gcb-about-hero__copy"
        >
          <Badge className="gcb-pill">GrowCommunityBiz built for local growth</Badge>
          <h1 className="gcb-about-title">
            GrowCommunityBiz built for local growth
          </h1>
          <p className="gcb-about-copy">
            We believe every local business deserves a beautiful, trustworthy place to be discovered, shared, and supported by the community around it.
          </p>
        </motion.div>
      </div>
      <div className="gcb-about-blob gcb-about-blob--one" aria-hidden="true" />
      <div className="gcb-about-blob gcb-about-blob--two" aria-hidden="true" />
    </section>
  )
}

