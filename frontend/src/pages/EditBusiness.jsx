import { Button } from '../components/Button.jsx'
import { Badge } from '../components/Badge.jsx'
import { Footer } from '../components/home/Footer.jsx'

const contactFields = [
  { label: 'Phone', icon: 'fa-phone', defaultValue: '+91 00000 00000' },
  { label: 'Email', icon: 'fa-envelope', defaultValue: 'hello@amberandoak.com' },
  { label: 'Website', icon: 'fa-globe', defaultValue: 'https://amberandoak.com' },
]

const socialFields = [
  { label: 'WhatsApp', icon: 'fa-brands fa-whatsapp', defaultValue: 'https://wa.me/910000000000' },
  { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', defaultValue: 'https://linkedin.com/company/amber-and-oak' },
  { label: 'Instagram', icon: 'fa-brands fa-instagram', defaultValue: 'https://instagram.com/amberandoak' },
]

function Field({ label, icon, textarea = false, ...props }) {
  const input = textarea ? <textarea rows="5" placeholder=" " {...props} /> : <input placeholder=" " {...props} />

  return (
    <label className="gcb-setting-field">
      <span className="gcb-setting-field__icon">
        <i className={`fa-solid ${icon}`} aria-hidden="true" />
      </span>
      {input}
      <span className="gcb-setting-field__label">{label}</span>
    </label>
  )
}

function Section({ eyebrow, title, description, children }) {
  return (
    <section className="gcb-dashboard-card gcb-settings-panel">
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

export default function EditBusiness() {
  return (
    <div className="gcb-dashboard-page gcb-dashboard-page--business-edit">
      <section className="gcb-dashboard-hero gcb-dashboard-hero--business-edit">
        <div className="gcb-ambient-gradients" aria-hidden="true" />
        <div className="gcb-container gcb-dashboard-hero__grid gcb-dashboard-hero__grid--settings">
          <div className="gcb-dashboard-hero__copy">
            <Badge className="gcb-pill">Business Settings</Badge>
            <p className="gcb-overline gcb-dashboard-eyebrow">BUSINESS SETTINGS</p>
            <h1>Edit your business.</h1>
            <p>
              Update your listing details, contact information, social presence, and business imagery from a premium
              editor that matches the rest of the site.
            </p>
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
        <div className="gcb-container gcb-dashboard-layout gcb-dashboard-layout--settings">
          <div className="gcb-dashboard-stack">
            <Section eyebrow="Business Information" title="Update the core details" description="Keep the listing accurate and polished.">
              <div className="gcb-settings-grid">
                <Field label="Business Name" icon="fa-store" defaultValue="Amber & Oak Coffee House" />
                <Field label="Category" icon="fa-tags" defaultValue="Cafe" />
                <Field label="Location" icon="fa-location-dot" defaultValue="Portland, OR" />
                <Field label="Status" icon="fa-circle-check" defaultValue="Active" />
                <Field label="About Business" icon="fa-pen-nib" textarea defaultValue="A warm neighborhood coffee house with a premium local experience." />
              </div>
            </Section>

            <Section eyebrow="Contact Information" title="How customers reach you" description="Use the fields that already exist in the current business flow.">
              <div className="gcb-settings-grid">
                {contactFields.map((field) => (
                  <Field key={field.label} {...field} />
                ))}
              </div>
            </Section>

            <Section eyebrow="Social Links" title="External presence" description="Only the actual social channels currently supported.">
              <div className="gcb-settings-grid">
                {socialFields.map((field) => (
                  <Field key={field.label} {...field} />
                ))}
              </div>
            </Section>
          </div>

          <aside className="gcb-dashboard-stack">
            <Section eyebrow="Images" title="Business visuals" description="Manage the logo, cover image, and gallery presentation.">
              <div className="gcb-business-edit-media">
                <div className="gcb-business-edit-media__hero">
                  <img
                    src="https://images.unsplash.com/photo-1458644267420-66bc8a5f21ba?auto=format&fit=crop&w=1600&q=80"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="gcb-business-edit-media__thumbs">
                  <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" alt="" loading="lazy" />
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" alt="" loading="lazy" />
                  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" alt="" loading="lazy" />
                  <button type="button" className="gcb-business-edit-media__add">
                    <i className="fa-solid fa-plus" aria-hidden="true" />
                    Add image
                  </button>
                </div>
              </div>
            </Section>

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
