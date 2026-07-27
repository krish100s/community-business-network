import { motion } from 'framer-motion'
import { BadgeCheck, MessageSquare, ShieldCheck, Smartphone, Sparkles, Users } from 'lucide-react'
import { features } from './aboutData.js'

const ICONS = {
  Sparkles,
  Users,
  MessageSquare,
  BadgeCheck,
  Smartphone,
  ShieldCheck,
}

export function AboutFeatures() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-section-head gcb-section-head-center">
          <span className="gcb-overline">Core Features</span>
          <h2 className="gcb-section-title">Everything is designed to feel premium and dependable</h2>
        </div>
        <div className="gcb-about-feature-grid">
          {features.map((feature, index) => {
            const Icon = ICONS[feature.icon]
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="gcb-about-feature-card"
              >
                <span className="gcb-about-feature-icon">
                  <Icon size={18} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

