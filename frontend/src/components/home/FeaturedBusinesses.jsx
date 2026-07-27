import { motion } from 'framer-motion'
import { Star, MapPin, ArrowRight } from 'lucide-react'
import { businesses } from './homeData.js'

export function FeaturedBusinesses() {
  return (
    <section id="featured" className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-section-head gcb-section-head-center">
          <span className="gcb-overline">Featured</span>
          <h2 className="gcb-section-title">Businesses the community loves</h2>
          <p className="gcb-section-copy">A handful of the local businesses building real relationships with their customers this month.</p>
        </div>

        <div className="gcb-business-grid">
          {businesses.map((biz, i) => (
            <motion.article
              key={biz.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="gcb-business-card"
            >
              <div className="gcb-business-cover">
                <img src={biz.cover} alt={biz.name} />
                <img src={biz.logo} alt="" className="gcb-business-logo" />
              </div>

              <div className="gcb-business-body">
                <div className="gcb-business-top">
                  <h3>{biz.name}</h3>
                  <span>
                    <Star size={14} className="fill-gold text-gold" />
                    {biz.rating}
                  </span>
                </div>
                <div className="gcb-business-meta">
                  <span>{biz.category}</span>
                  <span><MapPin size={13} /> {biz.location}</span>
                </div>
                <p>{biz.description}</p>
                <a href="#" className="gcb-link">
                  View Profile <ArrowRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
