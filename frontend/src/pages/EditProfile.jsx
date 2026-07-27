import { Button } from '../components/Button.jsx'
import { ProfileHeader } from '../components/dashboard/ProfileHeader.jsx'
import { DashboardCard } from '../components/dashboard/DashboardCard.jsx'
import { SettingsCard } from '../components/dashboard/SettingsCard.jsx'
import { Footer } from '../components/home/Footer.jsx'

export default function EditProfile() {
  return (
    <div className="gcb-dashboard-page">
      <ProfileHeader
        title="Edit your profile settings"
        subtitle="Update your public profile, contact details, and social links in a polished account settings layout."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="gcb-section">
        <div className="gcb-container gcb-dashboard-layout">
          <div className="gcb-dashboard-stack">
            <DashboardCard>
              <span className="gcb-overline">Personal Information</span>
              <SettingsCard>
                <label className="gcb-dashboard-field">
                  <span>Full Name</span>
                  <input type="text" defaultValue="Krish Soni" />
                </label>
                <label className="gcb-dashboard-field">
                  <span>Username</span>
                  <input type="text" defaultValue="krishsoni" />
                </label>
                <label className="gcb-dashboard-field">
                  <span>Email</span>
                  <input type="email" defaultValue="krishs0105@gmail.com" />
                </label>
                <label className="gcb-dashboard-field">
                  <span>Bio</span>
                  <textarea rows="4" defaultValue="Designer and builder focused on local business growth." />
                </label>
              </SettingsCard>
            </DashboardCard>
            <DashboardCard>
              <span className="gcb-overline">Contact Information</span>
              <SettingsCard>
                <label className="gcb-dashboard-field">
                  <span>Phone</span>
                  <input type="tel" placeholder="+91 00000 00000" />
                </label>
                <label className="gcb-dashboard-field">
                  <span>Website</span>
                  <input type="url" placeholder="https://yourwebsite.com" />
                </label>
                <label className="gcb-dashboard-field">
                  <span>LinkedIn</span>
                  <input type="url" placeholder="https://linkedin.com/in/..." />
                </label>
              </SettingsCard>
            </DashboardCard>
          </div>

          <aside className="gcb-dashboard-stack">
            <DashboardCard>
              <span className="gcb-overline">Profile Preview</span>
              <div className="gcb-profile-preview">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" alt="" />
                <div>
                  <h3>Krish Soni</h3>
                  <p>@krishsoni</p>
                  <p>Helping local businesses grow with premium digital experiences.</p>
                </div>
              </div>
            </DashboardCard>
            <div className="gcb-dashboard-actions">
              <Button variant="primary">Save Changes</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  )
}

