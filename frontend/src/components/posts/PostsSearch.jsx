import { Search, SlidersHorizontal } from 'lucide-react'
import { postCategories } from './postsData.js'

export function PostsSearch() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <div className="gcb-search-panel">
          <div className="gcb-search-panel__top">
            <div className="gcb-search-panel__field" role="search">
              <Search size={18} aria-hidden="true" />
              <input type="search" placeholder="Search posts, businesses, or tags" aria-label="Search posts" />
            </div>
            <div className="gcb-search-panel__meta">
              <span>12 posts</span>
              <button type="button" className="gcb-mini-control" aria-label="Filter posts">
                <SlidersHorizontal size={16} />
                Filter
              </button>
            </div>
          </div>
          <div className="gcb-chip-row gcb-chip-row--filters" aria-label="Post categories">
            {postCategories.map((category) => (
              <button key={category} type="button" className={`gcb-chip gcb-chip--button ${category === 'All Posts' ? 'is-active' : ''}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

