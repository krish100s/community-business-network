import { Sprout, Globe, Mail, MessageCircle } from 'lucide-react'

const columns = [
  { title: 'Product', links: ['Browse Businesses', 'Categories', 'Pricing', 'List Your Business'] },
  { title: 'Resources', links: ['Help Center', 'Community Guidelines', 'Blog', 'Success Stories'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Partners'] },
  { title: 'Support', links: ['Contact Us', 'FAQs', 'Privacy Policy', 'Terms of Service'] },
]

export function Footer() {
  return (
    <footer className="gcb-footer">
      <div className="gcb-container">
        <div className="gcb-footer-grid">
          <div className="gcb-footer-brand">
            <a href="#top" className="gcb-footer-logo">
              <span className="gcb-footer-logo-mark">
                <Sprout size={18} />
              </span>
              GrowCommunityBiz
            </a>
            <p>Helping local businesses build real, lasting connections with the communities around them.</p>
            <div className="gcb-social-row">
              {[Globe, Mail, MessageCircle, Sprout].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gcb-footer-bottom">
          <p>© 2026 GrowCommunityBiz. All rights reserved.</p>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
