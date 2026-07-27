import { businessResults } from './businessData.js'
import { BusinessCard } from './BusinessCard.jsx'

export function BusinessGrid() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-section-head">
          <span className="gcb-overline">Featured Businesses</span>
          <h2 className="gcb-section-title">Local businesses with real community energy</h2>
          <p className="gcb-section-copy">
            Browse a curated selection of community-loved businesses, all presented with the same premium system as the homepage.
          </p>
        </div>

        <div className="gcb-business-grid">
          {businessResults.map((business, index) => (
            <BusinessCard key={business.name} business={business} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

