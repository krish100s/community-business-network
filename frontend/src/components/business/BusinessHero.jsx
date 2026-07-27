import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Button } from '../Button.jsx'
import { Badge } from '../Badge.jsx'

export function BusinessHero() {
  return (
    <section className="gcb-hero-shell">
      <div className="gcb-ambient-gradients" aria-hidden="true" />
      <div className="gcb-container gcb-hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge className="gcb-pill">Discover businesses in your community</Badge>
          <h1 className="gcb-hero-title">
            Find.
            <br />
            Connect.
            <br />
            Grow together.
          </h1>
          <p className="gcb-hero-copy">
            Explore local businesses, save favourites, and discover new places that feel close to home.
            <br />
            Built to help communities support the entrepreneurs around them.
          </p>

          <div className="gcb-search-shell" role="search" aria-label="Search businesses">
            <div className="gcb-search-inner">
              <Search size={18} aria-hidden="true" />
              <input
                className="gcb-search-input"
                type="search"
                placeholder="Search businesses, categories or locations..."
                aria-label="Search businesses, categories or locations"
              />
            </div>
            <div className="gcb-chip-row" aria-label="Popular categories">
              <span className="gcb-chip">Cafe</span>
              <span className="gcb-chip">Restaurant</span>
              <span className="gcb-chip">Salon</span>
              <span className="gcb-chip gcb-chip-more">+ more</span>
            </div>
          </div>

          <div className="gcb-hero-actions">
            <Button className="gcb-button-primary">Browse Businesses</Button>
            <Button variant="ghost" className="gcb-button-secondary">
              List Your Business
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="gcb-hero-media"
        >
          <div className="gcb-hero-glow" aria-hidden="true" />
          <div className="gcb-hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
              alt="Smiling entrepreneur"
              className="gcb-hero-image"
              loading="lazy"
            />
            <div className="gcb-floating-badge">
              <div>
                <p>5,000+</p>
                <span>Businesses Listed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
