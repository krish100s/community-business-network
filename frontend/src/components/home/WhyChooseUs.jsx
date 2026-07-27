import { motion } from 'framer-motion'
import { BadgeCheck, Zap, Users, Gift } from 'lucide-react'

const features = [
  { title: 'Verified Businesses', desc: 'Every listing is reviewed by hand so customers always know who they are working with.', icon: BadgeCheck },
  { title: 'Fast Discovery', desc: 'A search built for intent, not clutter - find the right business in seconds.', icon: Zap },
  { title: 'Community Driven', desc: 'Reviews and referrals come from real neighbors, not anonymous ratings.', icon: Users },
  { title: 'Free Listing', desc: 'Get your business online and discoverable with zero setup cost.', icon: Gift },
]

export function WhyChooseUs() {
  return (
    <section className="gcb-section gcb-section-alt">
      <div className="gcb-container gcb-why-grid">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="gcb-why-visual"
        >
          <div className="gcb-why-glow" />
          <div className="gcb-why-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80"
              alt="Local business owners reviewing their storefront listing together"
            />
          </div>
        </motion.div>

        <div>
          <span className="gcb-overline">Why GrowCommunityBiz</span>
          <h2 className="gcb-section-title">Built for trust, not just traffic</h2>
          <div className="gcb-feature-grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="gcb-feature-card"
              >
                <f.icon size={22} className="gcb-gold-text" />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
