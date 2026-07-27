import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats } from './homeData.js'

function CountUpNumber({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, value])

  const formatted = display >= 1000 ? `${Math.round(display / 1000)}K` : display

  return (
    <span ref={ref} className="gcb-stat-number">
      {formatted}
      {suffix}
    </span>
  )
}

export function CommunityStats() {
  return (
    <section id="stats" className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="gcb-stat-card"
            >
              <CountUpNumber value={s.value} suffix={s.suffix} />
              <p>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
