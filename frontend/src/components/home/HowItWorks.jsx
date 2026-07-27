import { motion } from 'framer-motion'
import { UserPlus, Search, TrendingUp } from 'lucide-react'

const steps = [
  { title: 'Create Profile', desc: 'Set up your business profile in minutes with photos, hours, and services.', icon: UserPlus },
  { title: 'Discover', desc: 'Get found by nearby customers actively searching your category.', icon: Search },
  { title: 'Grow', desc: 'Turn visits into repeat customers with reviews and community referrals.', icon: TrendingUp },
]

export function HowItWorks() {
  return (
    <section id="community" className="gcb-section gcb-section-alt">
      <div className="gcb-container">
        <div className="gcb-section-head gcb-section-head-center">
          <span className="gcb-overline">Process</span>
          <h2 className="gcb-section-title">How it works</h2>
        </div>
        <div className="gcb-steps-grid">
          <div className="gcb-steps-line" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="gcb-step"
            >
              <div className="gcb-step-icon"><step.icon size={26} /></div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
