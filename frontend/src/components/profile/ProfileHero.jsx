import { motion } from 'framer-motion'
import { Badge } from '../Badge.jsx'
import { Button } from '../Button.jsx'

export function ProfileHero() {
  return (
    <section className="gcb-hero-shell">
      <div className="gcb-ambient-gradients" aria-hidden="true" />
      <div className="gcb-container gcb-profile-hero">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="gcb-profile-hero__card"
        >
          <div className="gcb-profile-cover">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="gcb-profile-header">
            <img
              className="gcb-profile-avatar"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80"
              alt="Profile"
              loading="lazy"
            />
            <div className="gcb-profile-meta">
              <Badge className="gcb-pill">Creator profile</Badge>
              <h1>Krish Soni</h1>
              <p>@krishsoni</p>
            </div>
            <div className="gcb-profile-actions">
              <Button variant="primary">Edit Profile</Button>
              <Button variant="ghost">Settings</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

