import { motion } from 'framer-motion'
import { Cpu, UtensilsCrossed, Shirt, GraduationCap, HeartPulse, Camera, Building2, LayoutGrid } from 'lucide-react'
import { categories } from './homeData.js'

const iconMap = { Cpu, UtensilsCrossed, Shirt, GraduationCap, HeartPulse, Camera, Building2, LayoutGrid }

export function Categories() {
  return (
    <section id="categories" className="gcb-section gcb-section-alt">
      <div className="gcb-container">
        <div className="gcb-section-head">
          <span className="gcb-overline">Explore</span>
          <h2 className="gcb-section-title">Browse by category</h2>
        </div>

        <div className="gcb-categories-grid">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon]
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                whileHover={{ y: -5 }}
                className="gcb-category-card"
              >
                <div className="gcb-category-icon">
                  <Icon size={22} />
                </div>
                <h3>{cat.name}</h3>
                <p>{cat.count} businesses</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
