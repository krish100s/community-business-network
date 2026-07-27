import { Button } from '../components/Button.jsx'
import { Badge } from '../components/Badge.jsx'
import { ProfileHeader } from '../components/dashboard/ProfileHeader.jsx'
import { BusinessStats } from '../components/dashboard/BusinessStats.jsx'
import { DashboardCard } from '../components/dashboard/DashboardCard.jsx'
import { Footer } from '../components/home/Footer.jsx'

export default function ManageBusiness() {
  return (
    <div className="gcb-dashboard-page">
      <ProfileHeader
        title="Manage your business"
        subtitle="Review your listing, preview business performance, and manage business settings from one premium dashboard."
        image="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="gcb-section">
        <div className="gcb-container gcb-dashboard-layout">
          <div className="gcb-dashboard-stack">
            <DashboardCard>
              <div className="gcb-dashboard-business-head">
                <div>
                  <Badge>Verified Business</Badge>
                  <h2>Amber & Oak Coffee House</h2>
                  <p>Cafe · Portland, OR</p>
                </div>
                <div className="gcb-dashboard-status">Active</div>
              </div>
              <div className="gcb-dashboard-action-row">
                <Button variant="primary">Edit Business</Button>
                <Button variant="ghost">View Business</Button>
                <Button variant="ghost">Create Post</Button>
                <Button variant="ghost">Delete Business</Button>
              </div>
            </DashboardCard>
            <BusinessStats
              items={[
                { label: 'Views', value: '12.4K', helper: 'Last 30 days' },
                { label: 'Posts', value: '84', helper: 'Published updates' },
                { label: 'Followers', value: '2.1K', helper: 'Placeholder' },
                { label: 'Rating', value: '4.9', helper: 'Placeholder' },
              ]}
            />
          </div>
          <aside className="gcb-dashboard-stack">
            <DashboardCard>
              <span className="gcb-overline">Tabs</span>
              <div className="gcb-dashboard-tabs">
                <button type="button" className="is-active">Overview</button>
                <button type="button">Gallery</button>
                <button type="button">Posts</button>
                <button type="button">Settings</button>
              </div>
            </DashboardCard>
            <DashboardCard>
              <span className="gcb-overline">Business Information</span>
              <p className="gcb-dashboard-copy">
                A clean, premium workspace for managing the business presence while keeping the existing business logic intact.
              </p>
            </DashboardCard>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  )
}

