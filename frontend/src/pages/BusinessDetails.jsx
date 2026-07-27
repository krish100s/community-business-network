import { BusinessDetailsHero } from '../components/businessDetails/BusinessDetailsHero.jsx'
import { BusinessInfo } from '../components/businessDetails/BusinessInfo.jsx'
import { BusinessGallery } from '../components/businessDetails/BusinessGallery.jsx'
import { OwnerCard } from '../components/businessDetails/OwnerCard.jsx'
import { SimilarBusinesses } from '../components/businessDetails/SimilarBusinesses.jsx'
import { StickyActionCard } from '../components/businessDetails/StickyActionCard.jsx'
import { Footer } from '../components/home/Footer.jsx'

export default function BusinessDetails() {
  return (
    <div className="gcb-business-details-page">
      <BusinessDetailsHero />
      <main className="gcb-business-details-main">
        <div className="gcb-container gcb-business-details-layout">
          <div className="gcb-business-details-stack">
            <BusinessInfo />
            <BusinessGallery />
          </div>
          <OwnerCard />
        </div>
        <SimilarBusinesses />
      </main>
      <StickyActionCard />
      <Footer />
    </div>
  )
}

