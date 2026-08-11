import { Link } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { Badge } from '../components/Badge.jsx'
import { Footer } from '../components/home/Footer.jsx'

const stats = [
  { label: 'Views', value: '12.4K', helper: 'Last 30 days' },
  { label: 'Posts', value: '84', helper: 'Published updates' },
  { label: 'Followers', value: '2.1K', helper: 'Placeholder' },
  { label: 'Rating', value: '4.9', helper: 'Placeholder' },
]

const information = [
  ['Business Name', 'Amber & Oak Coffee House'],
  ['Category', 'Cafe'],
  ['Location', 'Portland, OR'],
  ['Status', 'Active'],
  ['Owner', 'Krish Soni'],
  ['Business ID', 'amber-oak-01'],
]

const galleryImages = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80',
]

const posts = [
  {
    title: 'Weekend tasting flight',
    date: 'Published 2 days ago',
    excerpt: 'A warm community update with a seasonal highlight and a fresh call to visit.',
  },
  {
    title: 'New menu spotlight',
    date: 'Published 1 week ago',
    excerpt: 'A clean promotional post that keeps the business voice friendly and premium.',
  },
]

function SectionCard({ eyebrow, title, description, children, className = '' }) {
  return (
    <section className={`gcb-dashboard-card gcb-settings-panel ${className}`}>
      <div className="gcb-settings-panel__head">
        <div>
          <Badge className="gcb-pill">{eyebrow}</Badge>
          <h2>{title}</h2>
        </div>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="gcb-business-info-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export default function ManageBusiness() {
  return (
    <div className="gcb-dashboard-page gcb-dashboard-page--business">
      <section className="gcb-dashboard-hero gcb-dashboard-hero--business">
        <div className="gcb-ambient-gradients" aria-hidden="true" />
        <div className="gcb-container gcb-dashboard-hero__grid gcb-dashboard-hero__grid--business">
          <div className="gcb-dashboard-hero__copy">
            <Badge className="gcb-pill">Business Management</Badge>
            <p className="gcb-overline gcb-dashboard-eyebrow">BUSINESS MANAGEMENT</p>
            <h1>Manage your business.</h1>
            <p>
              Review your listing, keep the experience polished, and manage your presence from a dashboard that
              follows the same premium language as the rest of the site.
            </p>
            <div className="gcb-dashboard-hero__actions">
              <Button as={Link} to="/signup" variant="primary" type="button">
                + Add Another Business
              </Button>
            </div>
          </div>

          <div className="gcb-dashboard-hero__media gcb-dashboard-hero__media--business">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80"
              alt=""
              loading="lazy"
            />
            <div className="gcb-dashboard-business-summary">
              <div className="gcb-dashboard-business-summary__brand">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
                  alt="Business logo"
                  loading="lazy"
                />
                <div>
                  <Badge>Verified Business</Badge>
                  <h2>Amber & Oak Coffee House</h2>
                  <p>Cafe · Portland, OR</p>
                </div>
              </div>
              <div className="gcb-dashboard-status">Active</div>
            </div>
          </div>
        </div>
      </section>

      <section className="gcb-section">
        <div className="gcb-container gcb-dashboard-layout gcb-dashboard-layout--business">
          <div className="gcb-dashboard-stack">
            <SectionCard
              eyebrow="Quick Actions"
              title="Fast business controls"
              description="Use only the actions that already exist in this page."
            >
              <div className="gcb-dashboard-action-row gcb-dashboard-action-row--business">
                <Button as={Link} to="/businesses/edit" variant="primary" type="button">
                  Edit Business
                </Button>
                <Button variant="ghost" type="button">
                  View Business
                </Button>
                <Button as={Link} to="/posts/create" variant="ghost" type="button">
                  Create Post
                </Button>
                <Button variant="ghost" type="button" className="gcb-danger-button">
                  Delete Business
                </Button>
              </div>
            </SectionCard>

            <div className="gcb-dashboard-stats">
              {stats.map((item) => (
                <SectionCard key={item.label} eyebrow={item.label} title={item.value}>
                  <p className="gcb-dashboard-stat-copy">{item.helper}</p>
                </SectionCard>
              ))}
            </div>

            <SectionCard eyebrow="Business Information" title="Business details" description="A clean snapshot of the current listing.">
              <div className="gcb-business-info-grid">
                {information.map(([label, value]) => (
                  <InfoRow key={label} label={label} value={value} />
                ))}
              </div>
            </SectionCard>
          </div>

          <aside className="gcb-dashboard-stack">
            <SectionCard eyebrow="Tabs" title="Workspace navigation" description="Switch between the main business management areas.">
              <div className="gcb-dashboard-tabs gcb-dashboard-tabs--business">
                <button type="button" className="is-active">
                  Overview
                </button>
                <button type="button">Gallery</button>
                <button type="button">Posts</button>
                <button type="button">Settings</button>
              </div>
            </SectionCard>

            <SectionCard eyebrow="Gallery" title="Business imagery" description="Existing gallery-style presentation, polished for the dashboard.">
              <div className="gcb-business-gallery">
                {galleryImages.map((src) => (
                  <figure key={src} className="gcb-business-gallery__item">
                    <img src={src} alt="" loading="lazy" />
                  </figure>
                ))}
              </div>
            </SectionCard>

            <SectionCard eyebrow="Posts" title="Recent business posts" description="A presentation-only list that matches the current content structure.">
              <div className="gcb-business-post-list">
                {posts.map((post) => (
                  <article key={post.title} className="gcb-business-post-item">
                    <div className="gcb-business-post-item__meta">
                      <strong>{post.title}</strong>
                      <span>{post.date}</span>
                    </div>
                    <p>{post.excerpt}</p>
                  </article>
                ))}
              </div>
            </SectionCard>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
