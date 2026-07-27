import { BusinessHero } from '../components/business/BusinessHero.jsx'
import { BusinessSearch } from '../components/business/BusinessSearch.jsx'
import { BusinessGrid } from '../components/business/BusinessGrid.jsx'
import { CTA } from '../components/home/CTA.jsx'
import { Footer } from '../components/home/Footer.jsx'

export default function Businesses() {
  return (
    <div className="home-page">
      <BusinessHero />
      <BusinessSearch />
      <BusinessGrid />
      <CTA />
      <Footer />
    </div>
  )
}

