import { AnnouncementBar } from '../components/home/AnnouncementBar.jsx'
import { Hero } from '../components/home/Hero.jsx'
import { TrustedBy } from '../components/home/TrustedBy.jsx'
import { Categories } from '../components/home/Categories.jsx'
import { FeaturedBusinesses } from '../components/home/FeaturedBusinesses.jsx'
import { WhyChooseUs } from '../components/home/WhyChooseUs.jsx'
import { HowItWorks } from '../components/home/HowItWorks.jsx'
import { CommunityStats } from '../components/home/CommunityStats.jsx'
import { Testimonials } from '../components/home/Testimonials.jsx'
import { CTA } from '../components/home/CTA.jsx'
import { Footer } from '../components/home/Footer.jsx'

export default function Home() {
  return (
    <div className="home-page">
      <AnnouncementBar />
      <Hero />
      <TrustedBy />
      <Categories />
      <FeaturedBusinesses />
      <WhyChooseUs />
      <HowItWorks />
      <CommunityStats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
