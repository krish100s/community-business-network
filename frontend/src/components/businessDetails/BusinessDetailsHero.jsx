import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Share2, Star, BadgeCheck } from 'lucide-react'
import { Button } from '../Button.jsx'
import { Badge } from '../Badge.jsx'

export function BusinessDetailsHero({ business }) {
  const title = business?.name ?? 'Loading Business'
  const category = business?.category ?? 'Community Business'
  const rating = business?.rating ?? '4.9'
  const logo = business?.logo ?? 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  const cover = business?.cover ?? 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80'

  return (
    <section className="gcb-details-hero">
      <div className="gcb-ambient-gradients" aria-hidden="true" />
      <div className="gcb-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="gcb-details-hero__grid"
        >
          <div className="gcb-details-hero__visual">
            <img src={cover} alt={title} className="gcb-details-hero__cover" loading="lazy" />
            <div className="gcb-details-hero__glow" aria-hidden="true" />
            <div className="gcb-details-hero__badge">
              <Badge variant="neutral" className="gcb-details-category">
                {category}
              </Badge>
              <div className="gcb-details-brand">
                <img src={logo} alt="" className="gcb-details-brand__logo" />
                <div>
                  <h1>{title}</h1>
                  <div className="gcb-details-brand__meta">
                    <span className="gcb-details-rating">
                      <Star size={14} fill="currentColor" />
                      {rating}
                    </span>
                    <span className="gcb-details-verified">
                      <BadgeCheck size={14} />
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gcb-details-hero__actions">
            <Button variant="ghost" size="sm" className="gcb-details-inline-action">
              <ArrowLeft size={14} />
              Back
            </Button>
            <div className="gcb-details-hero__action-group">
              <Button variant="ghost" size="sm" className="gcb-details-icon-action" aria-label="Share business">
                <Share2 size={15} />
              </Button>
              <Button variant="ghost" size="sm" className="gcb-details-icon-action" aria-label="Favourite business">
                <Heart size={15} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

