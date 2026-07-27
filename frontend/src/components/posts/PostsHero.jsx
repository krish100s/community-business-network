import { motion } from 'framer-motion'
import { Badge } from '../Badge.jsx'

export function PostsHero() {
  return (
    <section className="gcb-hero-shell">
      <div className="gcb-ambient-gradients" aria-hidden="true" />
      <div className="gcb-container gcb-posts-hero">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="gcb-posts-hero__copy"
        >
          <Badge className="gcb-pill">Community updates</Badge>
          <h1 className="gcb-posts-title">
            Stories, updates, and moments from the community.
          </h1>
          <p className="gcb-posts-copy">
            A clean feed for business updates, offers, events, and community stories, designed with the same premium language as the homepage and Businesses page.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

