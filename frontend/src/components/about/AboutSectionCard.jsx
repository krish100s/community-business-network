import { motion } from 'framer-motion'

export function AboutSectionCard({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="gcb-about-card"
    >
      <span className="gcb-overline">{title}</span>
      <div className="gcb-about-card__content">{children}</div>
    </motion.section>
  )
}

