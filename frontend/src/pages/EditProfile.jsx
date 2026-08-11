import { Button } from '../components/Button.jsx'
import { Badge } from '../components/Badge.jsx'
import { Footer } from '../components/home/Footer.jsx'

const profileFields = [
  { label: 'Full Name', type: 'text', defaultValue: 'Krish Soni', icon: 'fa-user' },
  { label: 'Username', type: 'text', defaultValue: 'krishsoni', icon: 'fa-at' },
  { label: 'Email', type: 'email', defaultValue: 'krishs0105@gmail.com', icon: 'fa-envelope' },
  { label: 'Phone', type: 'tel', placeholder: '+91 00000 00000', icon: 'fa-phone' },
]

const contactFields = [
  { label: 'Website', type: 'url', placeholder: 'https://yourwebsite.com', icon: 'fa-globe' },
  { label: 'LinkedIn', type: 'url', placeholder: 'https://linkedin.com/in/…', icon: 'fa-link' },
  { label: 'Instagram', type: 'url', placeholder: 'https://instagram.com/…', icon: 'fa-instagram' },
  { label: 'Facebook', type: 'url', placeholder: 'https://facebook.com/…', icon: 'fa-facebook-f' },
]

function FloatingField({ label, icon, textarea = false, className = '', ...props }) {
  const input = textarea ? (
    <textarea rows="4" placeholder=" " {...props} />
  ) : (
    <input placeholder=" " {...props} />
  )

  return (
    <label className={`gcb-setting-field ${className}`}>
      <span className="gcb-setting-field__icon">
        <i className={`fa-solid ${icon}`} aria-hidden="true" />
      </span>
      {input}
      <span className="gcb-setting-field__label">{label}</span>
    </label>
  )
}

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

export default function EditProfile() {
  return (
    <div className="gcb-dashboard-page gcb-dashboard-page--settings">
      <section className="gcb-dashboard-hero gcb-dashboard-hero--settings">
        <div className="gcb-ambient-gradients" aria-hidden="true" />
        <div className="gcb-container gcb-dashboard-hero__grid gcb-dashboard-hero__grid--settings">
          <div className="gcb-dashboard-hero__copy">
            <Badge className="gcb-pill">Account Settings</Badge>
            <p className="gcb-overline gcb-dashboard-eyebrow">ACCOUNT SETTINGS</p>
            <h1>Edit your profile.</h1>
            <p>
              Update your public profile, contact details, and social presence from a premium account settings layout
              that matches the rest of the community experience.
            </p>
          </div>

          <div className="gcb-dashboard-hero__media gcb-dashboard-hero__media--profile">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt=""
              loading="lazy"
            />
            <div className="gcb-dashboard-preview">
              <div className="gcb-dashboard-preview__avatar-wrap">
                <img
                  className="gcb-dashboard-preview__avatar"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                  alt="Profile preview"
                  loading="lazy"
                />
                <button type="button" className="gcb-dashboard-preview__edit">
                  <i className="fa-solid fa-camera" aria-hidden="true" />
                  Edit photo
                </button>
              </div>
              <div>
                <h2>Krish Soni</h2>
                <p>krishs0105@gmail.com</p>
                <p className="gcb-dashboard-preview__bio">
                  Designer and builder focused on local business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gcb-section">
        <div className="gcb-container gcb-dashboard-layout gcb-dashboard-layout--settings">
          <div className="gcb-dashboard-stack">
            <SectionCard
              eyebrow="Personal Information"
              title="Your profile details"
              description="Keep the details that appear across the community in sync."
            >
              <div className="gcb-settings-grid">
                {profileFields.map((field) => (
                  <FloatingField key={field.label} {...field} />
                ))}
              </div>
              <FloatingField
                label="Bio"
                icon="fa-quote-left"
                textarea
                className="gcb-setting-field--full"
                defaultValue="Designer and builder focused on local business growth."
              />
            </SectionCard>

            <SectionCard
              eyebrow="Contact Information"
              title="Connect with people"
              description="Add the ways customers can reach you and learn more."
            >
              <div className="gcb-settings-grid">
                {contactFields.map((field) => (
                  <FloatingField key={field.label} {...field} />
                ))}
              </div>
            </SectionCard>
          </div>

          <aside className="gcb-dashboard-stack">
            <SectionCard
              eyebrow="Profile Preview"
              title="Desktop preview"
              description="A quick look at how your updated account will feel on larger screens."
              className="gcb-settings-preview-card"
            >
              <div className="gcb-settings-preview">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80"
                  alt=""
                  loading="lazy"
                />
                <div className="gcb-settings-preview__copy">
                  <Badge>Live profile</Badge>
                  <h3>Krish Soni</h3>
                  <p>@krishsoni</p>
                  <p>Helping local businesses grow with premium digital experiences.</p>
                  <div className="gcb-settings-preview__meta">
                    <span>
                      <i className="fa-solid fa-location-dot" aria-hidden="true" />
                      Portland, OR
                    </span>
                    <span>
                      <i className="fa-solid fa-link" aria-hidden="true" />
                      krishsoni.com
                    </span>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard eyebrow="Account Settings" title="Manage your account">
              <div className="gcb-settings-switches">
                <div className="gcb-settings-switch">
                  <div>
                    <strong>Public profile</strong>
                    <p>Keep your profile visible to the community.</p>
                  </div>
                  <span className="gcb-settings-switch__state">On</span>
                </div>
                <div className="gcb-settings-switch">
                  <div>
                    <strong>Email notifications</strong>
                    <p>Receive updates about messages and activity.</p>
                  </div>
                  <span className="gcb-settings-switch__state">On</span>
                </div>
                <div className="gcb-settings-switch">
                  <div>
                    <strong>Two-factor authentication</strong>
                    <p>Extra protection for your account.</p>
                  </div>
                  <span className="gcb-settings-switch__state">Enabled</span>
                </div>
              </div>
            </SectionCard>

            <div className="gcb-dashboard-actions gcb-dashboard-actions--settings">
              <Button variant="primary" type="button">
                Save Changes
              </Button>
              <Button variant="ghost" type="button">
                Cancel
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
