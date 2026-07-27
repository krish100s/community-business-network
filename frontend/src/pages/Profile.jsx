import { motion } from 'framer-motion'
import { Link, Share2, Settings2, BriefcaseBusiness } from 'lucide-react'
import { Footer } from '../components/home/Footer.jsx'

export default function Profile() {
  return (
    <div className="gcb-profile-page">
      <section className="gcb-hero-shell">
        <div className="gcb-ambient-gradients" aria-hidden="true" />
        <div className="gcb-container gcb-profile-hero">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
                <span className="gcb-pill">Creator profile</span>
                <h1>Krish Soni</h1>
                <p>@krishsoni · krishs0105@gmail.com</p>
                <p>Helping local businesses grow with premium digital experiences.</p>
              </div>
              <div className="gcb-profile-actions">
                <button type="button" className="gcb-profile-action">
                  <Settings2 size={16} />
                  Edit Profile
                </button>
                <button type="button" className="gcb-profile-action">
                  <Share2 size={16} />
                  Share Profile
                </button>
                <button type="button" className="gcb-profile-action gcb-profile-action--primary">
                  <BriefcaseBusiness size={16} />
                  Manage Businesses
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="gcb-section">
        <div className="gcb-container gcb-profile-layout">
          <div className="gcb-profile-stack">
            <section className="gcb-profile-card">
              <span className="gcb-overline">Account Information</span>
              <div className="gcb-profile-info-grid">
                <div>
                  <span>Email</span>
                  <p>krishs0105@gmail.com</p>
                </div>
                <div>
                  <span>Joined</span>
                  <p>January 2026</p>
                </div>
                <div>
                  <span>Bio</span>
                  <p>Designer and builder focused on local business growth.</p>
                </div>
                <div>
                  <span>Social Links</span>
                  <p>LinkedIn, GitHub, Email</p>
                </div>
              </div>
            </section>

            <section className="gcb-profile-grid gcb-profile-grid--stats">
              {[
                { label: 'Businesses Owned', value: '12' },
                { label: 'Posts Created', value: '84' },
                { label: 'Saved Businesses', value: '24' },
                { label: 'Community Activity', value: '98%' },
              ].map((stat) => (
                <article key={stat.label} className="gcb-profile-card gcb-profile-stat">
                  <span className="gcb-overline">{stat.label}</span>
                  <strong>{stat.value}</strong>
                </article>
              ))}
            </section>

            <section className="gcb-profile-card">
              <span className="gcb-overline">Recent Businesses</span>
              <div className="gcb-profile-list">
                {['Amber & Oak Coffee House', 'Marigold Hair Studio', 'Linden Lane Boutique'].map((item) => (
                  <div key={item} className="gcb-profile-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="gcb-profile-card">
              <span className="gcb-overline">Recent Posts</span>
              <div className="gcb-profile-list">
                {[
                  'Shared a new community story about local growth.',
                  'Published a premium UI update for the businesses page.',
                  'Posted a short update about design system consistency.',
                ].map((item) => (
                  <div key={item} className="gcb-profile-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="gcb-profile-stack">
            <section className="gcb-profile-card">
              <span className="gcb-overline">Settings Shortcut</span>
              <div className="gcb-profile-shortcut">
                <Settings2 size={16} />
                Manage account settings
              </div>
            </section>
            <section className="gcb-profile-card">
              <span className="gcb-overline">Businesses Owned</span>
              <div className="gcb-profile-list">
                {['Amber & Oak Coffee House', 'Marigold Hair Studio', 'Linden Lane Boutique'].map((item) => (
                  <div key={item} className="gcb-profile-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  )
}
