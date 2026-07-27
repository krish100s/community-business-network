import { BusinessCard } from '../business/BusinessCard.jsx'
import { businessResults } from '../business/businessData.js'

export function SimilarBusinesses() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-section-head">
          <span className="gcb-overline">Similar Businesses</span>
          <h2 className="gcb-section-title">More businesses with a similar feel</h2>
        </div>
        <div className="gcb-business-grid">
          {businessResults.slice(1, 4).map((business, index) => (
            <BusinessCard key={business.name} business={business} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

