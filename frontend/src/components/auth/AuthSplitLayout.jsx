import { motion } from 'framer-motion'

export function AuthSplitLayout({ eyebrow, title, description, children }) {
  return (
    <div className="gcb-auth-page">
      <div className="gcb-ambient-gradients" aria-hidden="true" />
      <div className="gcb-container gcb-auth-grid">
        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="gcb-auth-visual"
        >
          <div className="gcb-auth-visual__bgtext" aria-hidden="true">
            GROW
          </div>
          <div className="gcb-auth-visual__blob gcb-auth-visual__blob--one" aria-hidden="true" />
          <div className="gcb-auth-visual__blob gcb-auth-visual__blob--two" aria-hidden="true" />
          <div className="gcb-auth-visual__card">
            <span className="gcb-overline">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="gcb-auth-visual__metrics">
              <div>
                <strong>10K+</strong>
                <span>Members</span>
              </div>
              <div>
                <strong>5K+</strong>
                <span>Businesses</span>
              </div>
              <div>
                <strong>50K+</strong>
                <span>Connections</span>
              </div>
            </div>
          </div>
        </motion.aside>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="gcb-auth-panel"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

