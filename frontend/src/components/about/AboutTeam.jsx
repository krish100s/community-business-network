import { motion } from 'framer-motion'
import { Mail, Link2 } from 'lucide-react'
import { teamMembers } from './aboutData.js'

export function AboutTeam() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-section-head gcb-section-head-center">
          <span className="gcb-overline">Meet The Team</span>
          <h2 className="gcb-section-title">The people shaping the platform</h2>
        </div>
        <div className="gcb-about-team-grid">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="gcb-about-team-card"
            >
              <img src={member.image} alt={member.name} loading="lazy" className="gcb-about-team-card__image" />
              <h3>{member.name}</h3>
              <p className="gcb-about-team-card__position">{member.position}</p>
              <p>{member.description}</p>
              <div className="gcb-about-team-card__links">
                <a href={member.linkedin} aria-label={`${member.name} LinkedIn`}>
                  <Link2 size={16} />
                  LinkedIn
                </a>
                <a href={member.email} aria-label={`${member.name} email`}>
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
