import { motion } from 'framer-motion'
import { stats } from './aboutData.js'

export function AboutStats() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-section-head gcb-section-head-center">
          <span className="gcb-overline">Platform Statistics</span>
          <h2 className="gcb-section-title">Small numbers that hint at bigger community momentum</h2>
        </div>
        <div className="gcb-about-stats-grid">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="gcb-about-stat-card"
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

