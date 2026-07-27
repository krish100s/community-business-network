import { motion } from 'framer-motion'
import { Search, SlidersHorizontal, LayoutGrid, ListFilter } from 'lucide-react'
import { businessCategories } from './businessData.js'

export function BusinessSearch() {
  return (
    <section className="gcb-section">
      <div className="gcb-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="gcb-search-panel"
        >
          <div className="gcb-search-panel__top">
            <div className="gcb-search-panel__field" role="search">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search businesses by name, category, or location"
                aria-label="Search businesses"
              />
            </div>

            <div className="gcb-search-panel__meta">
              <span>6 businesses</span>
              <button type="button" className="gcb-mini-control" aria-label="Sort businesses">
                <SlidersHorizontal size={16} />
                Sort
              </button>
              <button type="button" className="gcb-mini-control" aria-label="Grid view">
                <LayoutGrid size={16} />
              </button>
              <button type="button" className="gcb-mini-control" aria-label="List view">
                <ListFilter size={16} />
              </button>
            </div>
          </div>

          <div className="gcb-chip-row gcb-chip-row--filters" aria-label="Category filters">
            {businessCategories.map((category) => (
              <button key={category} type="button" className={`gcb-chip gcb-chip--button ${category === 'All Categories' ? 'is-active' : ''}`}>
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

