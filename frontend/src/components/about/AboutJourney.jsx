import { motion } from 'framer-motion'
import { journey } from './aboutData.js'

export function AboutJourney() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-section-head gcb-section-head-center">
          <span className="gcb-overline">Journey Timeline</span>
          <h2 className="gcb-section-title">From idea to community growth</h2>
        </div>
        <div className="gcb-about-journey">
          {journey.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="gcb-about-journey__step"
            >
              <span className="gcb-about-journey__marker" />
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

