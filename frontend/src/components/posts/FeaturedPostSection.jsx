import { FeaturedPost } from './FeaturedPost.jsx'
import { featuredPost } from './postsData.js'

export function FeaturedPostSection() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-section-head">
          <span className="gcb-overline">Featured Post</span>
          <h2 className="gcb-section-title">A highlighted story from the community</h2>
        </div>
        <FeaturedPost post={featuredPost} />
      </div>
    </section>
  )
}

