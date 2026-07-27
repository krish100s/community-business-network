import { motion } from 'framer-motion'
import { ArrowRight, Heart, MapPin, Star, CheckCircle2 } from 'lucide-react'
import { Button } from '../Button.jsx'

export function BusinessCard({ business, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="gcb-business-card"
    >
      <div className="gcb-business-cover">
        <img src={business.cover} alt={business.name} loading="lazy" />
        <img src={business.logo} alt="" className="gcb-business-logo" />
      </div>

      <div className="gcb-business-body">
        <div className="gcb-business-top">
          <div>
            <span className="gcb-business-category">{business.category}</span>
            <h3>{business.name}</h3>
          </div>

          <button type="button" className="gcb-fav-button" aria-label={`Save ${business.name}`}>
            <Heart size={16} />
          </button>
        </div>

        <p>{business.description}</p>

        <div className="gcb-business-meta">
          <span>
            <MapPin size={13} />
            {business.location}
          </span>
          <span className="gcb-business-meta__rating">
            <Star size={13} />
            {business.rating}
          </span>
        </div>

        <div className="gcb-business-footer">
          <span className="gcb-business-verified">
            <CheckCircle2 size={14} />
            Verified
          </span>
          <Button variant="ghost" size="sm" className="gcb-business-cta">
            View Details
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
