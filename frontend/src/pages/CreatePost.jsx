import { useState } from 'react'
import { Button } from '../components/Button.jsx'
import { Badge } from '../components/Badge.jsx'
import { Footer } from '../components/home/Footer.jsx'

const recentPosts = [
  'New seasonal coffee menu now live.',
  'Weekend bookings are open.',
  'Fresh gallery images added to the listing.',
]

function Field({ label, icon, textarea = false, counter, ...props }) {
  const input = textarea ? (
    <textarea placeholder=" " rows="6" {...props} />
  ) : (
    <input placeholder=" " {...props} />
  )

  return (
    <label className="gcb-setting-field gcb-post-field">
      <span className="gcb-setting-field__icon">
        <i className={`fa-solid ${icon}`} aria-hidden="true" />
      </span>
      {input}
      <span className="gcb-setting-field__label">{label}</span>
      {counter ? <span className="gcb-post-field__counter">{counter}</span> : null}
    </label>
  )
}

function UploadPanel() {
  return (
    <div className="gcb-upload-panel">
      <div className="gcb-upload-panel__copy">
        <strong>Drop images here</strong>
        <p>Drag and drop, or choose files to create a stronger community post.</p>
      </div>
      <div className="gcb-upload-panel__actions">
        <Button type="button" variant="ghost" size="sm">
          Choose files
        </Button>
        <button type="button" className="gcb-upload-panel__link">
          Remove image
        </button>
      </div>
    </div>
  )
}

function Panel({ eyebrow, title, description, children, className = '' }) {
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

export default function CreatePost() {
  const [title, setTitle] = useState('Share something with your community')
  const [description, setDescription] = useState('Write a meaningful update that feels helpful and personal.')

  return (
    <div className="gcb-dashboard-page gcb-dashboard-page--composer">
      <section className="gcb-dashboard-hero gcb-dashboard-hero--composer">
        <div className="gcb-ambient-gradients" aria-hidden="true" />
        <div className="gcb-container gcb-dashboard-hero__grid gcb-dashboard-hero__grid--composer">
          <div className="gcb-dashboard-hero__copy">
            <Badge className="gcb-pill">Create Post</Badge>
            <p className="gcb-overline gcb-dashboard-eyebrow">CREATE POST</p>
            <h1>Share something with your community.</h1>
            <p>
              Compose a polished update, preview it live, and publish with the same calm premium language used across
              the homepage, Businesses, and About pages.
            </p>
          </div>

          <div className="gcb-dashboard-hero__media gcb-dashboard-hero__media--composer">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80"
              alt=""
              loading="lazy"
            />
            <div className="gcb-dashboard-preview gcb-post-hero-preview">
              <Badge>Live preview</Badge>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gcb-section">
        <div className="gcb-container gcb-dashboard-layout gcb-dashboard-layout--composer">
          <div className="gcb-dashboard-stack">
            <Panel
              eyebrow="Post Composer"
              title="Build your update"
              description="Use the existing post composition flow in a more polished workspace."
            >
              <div className="gcb-settings-grid gcb-post-grid-form">
                <Field
                  label="Title"
                  icon="fa-heading"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Field label="Business" icon="fa-store" defaultValue="Amber & Oak Coffee House" />
                <Field label="Category" icon="fa-tags" defaultValue="Announcement" />
                <Field label="Visibility" icon="fa-eye" defaultValue="Public" />
                <Field
                  label="Description"
                  icon="fa-pen-nib"
                  textarea
                  className="gcb-setting-field--full"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  counter={`${description.length} characters`}
                />
              </div>

              <UploadPanel />

              <div className="gcb-post-tags-row">
                {['Offer', 'Community', 'Events', 'New Menu'].map((tag) => (
                  <span key={tag} className="gcb-post-tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>
            </Panel>

            <Panel eyebrow="Recent Posts" title="Latest updates" description="Recent content already available in the app.">
              <div className="gcb-business-post-list">
                {recentPosts.map((item) => (
                  <article key={item} className="gcb-business-post-item">
                    <div className="gcb-business-post-item__meta">
                      <strong>{item}</strong>
                      <span>Recent</span>
                    </div>
                    <p>Community-first content that keeps the dashboard feeling active and real.</p>
                  </article>
                ))}
              </div>
            </Panel>
          </div>

          <aside className="gcb-dashboard-stack">
            <Panel eyebrow="Live Preview" title="Post preview" description="See your draft in the same premium language.">
              <article className="gcb-post-preview-card">
                <div className="gcb-post-preview-card__media">
                  <img
                    src="https://images.unsplash.com/photo-1459184070881-58235578f004?auto=format&fit=crop&w=1600&q=80"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="gcb-post-preview-card__body">
                  <Badge>Public</Badge>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className="gcb-post-preview-card__meta">
                    <span>Amber & Oak Coffee House</span>
                    <span>2 images attached</span>
                  </div>
                </div>
              </article>
            </Panel>

            <div className="gcb-dashboard-actions gcb-dashboard-actions--settings">
              <Button variant="primary" type="button">
                Publish Post
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
