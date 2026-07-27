import { motion } from 'framer-motion'
import { Search, ArrowRight, ShieldCheck } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../components/Button.jsx'
import { categories, businesses } from './homeData.js'

const avatarUrls = [
  businesses[0].photo ?? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
]

export function Hero() {
  const chips = categories.slice(0, 7).map((c) => c.name)

  return (
    <section id="top" className="gcb-hero-shell">
      <div className="gcb-ambient-gradients" />
      <div className="gcb-container gcb-hero-grid">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <span className="gcb-pill">
            <ShieldCheck size={14} className="gcb-gold-text" />
            Trusted by 10,000+ community members
          </span>

          <h1 className="gcb-hero-title">
            Discover Local Businesses.
            <br />
            <span className="gcb-gold-text">Build Real Connections.</span>
          </h1>

          <p className="gcb-hero-copy">
            Find trusted local businesses near you, and turn everyday customers into a community that keeps coming back.
          </p>

          <motion.div className="gcb-search-shell" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}>
            <div className="gcb-search-inner">
              <Search size={18} className="gcb-search-icon" />
              <input type="text" placeholder="Search businesses, services or categories..." className="gcb-search-input" />
            </div>
            <button className="gcb-search-button">Search</button>
          </motion.div>

          <div className="gcb-chip-row">
            {chips.map((chip) => (
              <span key={chip} className="gcb-chip">
                {chip}
              </span>
            ))}
            <span className="gcb-chip gcb-chip-more">More</span>
          </div>

          <div className="gcb-hero-actions">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#featured" className="gcb-button-primary">
              Explore Businesses <ArrowRight size={16} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#list-business" className="gcb-button-secondary">
              List Your Business
            </motion.a>
          </div>

          <div className="gcb-avatar-row">
            <div className="gcb-avatar-stack">
              {avatarUrls.map((src, i) => (
                <img key={i} src={src} alt="" className="gcb-avatar" />
              ))}
            </div>
            <span>10,000+ Members</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} className="gcb-hero-media">
          <div className="gcb-hero-glow" />
          <div className="gcb-hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80"
              alt="Local coffee shop owner standing behind the counter of her cafe"
              className="gcb-hero-image"
            />
          </div>
          <div className="gcb-floating-badge">
            <ShieldCheck size={20} className="gcb-gold-text" />
            <div>
              <p>5,000+</p>
              <span>Businesses Listed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
