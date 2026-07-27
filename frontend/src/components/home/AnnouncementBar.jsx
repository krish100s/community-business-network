import { Sparkles } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <div className="gcb-announcement-bar">
      <div className="gcb-announcement-content">
        <Sparkles size={14} className="gcb-gold-text" />
        <span>Join 10,000+ entrepreneurs growing together.</span>
        <a href="#stats" className="gcb-announcement-link">
          Learn More →
        </a>
      </div>
    </div>
  )
}
