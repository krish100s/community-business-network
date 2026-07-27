import { AboutHero } from '../components/about/AboutHero.jsx'
import { AboutSectionCard } from '../components/about/AboutSectionCard.jsx'
import { AboutFeatures } from '../components/about/AboutFeatures.jsx'
import { AboutStats } from '../components/about/AboutStats.jsx'
import { AboutTeam } from '../components/about/AboutTeam.jsx'
import { AboutJourney } from '../components/about/AboutJourney.jsx'
import { AboutCTA } from '../components/about/AboutCTA.jsx'
import { Footer } from '../components/home/Footer.jsx'

export default function About() {
  return (
    <div className="gcb-about-page">
      <AboutHero />
      <section className="gcb-section">
        <div className="gcb-container gcb-about-stack">
          <AboutSectionCard title="Mission">
            <p>We make it easier for local businesses to be discovered, supported, and remembered.</p>
          </AboutSectionCard>
          <AboutSectionCard title="Vision">
            <p>To create a premium community network where local growth feels simple, trusted, and connected.</p>
          </AboutSectionCard>
          <AboutSectionCard title="Why We Built This">
            <p>We wanted a better way for communities to support the businesses around them without clutter or complexity.</p>
          </AboutSectionCard>
        </div>
      </section>
      <AboutFeatures />
      <AboutStats />
      <AboutTeam />
      <AboutJourney />
      <AboutCTA />
      <Footer />
    </div>
  )
}
