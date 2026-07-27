import { useState } from 'react'
import { Button } from '../components/Button.jsx'
import { ProfileHeader } from '../components/dashboard/ProfileHeader.jsx'
import { PostComposer } from '../components/dashboard/PostComposer.jsx'
import { DashboardCard } from '../components/dashboard/DashboardCard.jsx'
import { Footer } from '../components/home/Footer.jsx'

export default function CreatePost() {
  const [title, setTitle] = useState('Share something with your community')

  return (
    <div className="gcb-dashboard-page">
      <ProfileHeader
        title="Share something with your community"
        subtitle="Compose a post, preview it live, and publish updates with a polished community-first experience."
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="gcb-section">
        <div className="gcb-container gcb-dashboard-layout">
          <div className="gcb-dashboard-stack">
            <PostComposer />
            <DashboardCard>
              <span className="gcb-overline">Recent Posts</span>
              <div className="gcb-profile-list">
                {['New seasonal coffee menu now live.', 'Weekend bookings are open.', 'Fresh gallery images added to the listing.'].map((item) => (
                  <div key={item} className="gcb-profile-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>
          <aside className="gcb-dashboard-stack">
            <DashboardCard>
              <span className="gcb-overline">Live Preview</span>
              <div className="gcb-post-preview">
                <h3>{title}</h3>
                <p>Preview your post here while you type.</p>
              </div>
            </DashboardCard>
            <Button variant="primary" className="gcb-dashboard-publish">
              Publish Post
            </Button>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  )
}

