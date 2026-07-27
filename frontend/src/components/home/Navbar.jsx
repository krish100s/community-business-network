import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Sun, Moon, Sprout } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'

const links = [
  { label: 'Businesses', href: '#featured' },
  { label: 'Categories', href: '#categories' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#footer' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { resolvedTheme, setThemeMode } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`gcb-navbar ${scrolled ? 'is-scrolled' : ''}`}
    >
      <div className="gcb-container gcb-navbar-inner">
        <a href="#top" className="gcb-brand">
          <span className="gcb-brand-mark">
            <Sprout size={18} />
          </span>
          GrowCommunityBiz
        </a>

        <nav className="gcb-navbar-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="gcb-navbar-actions">
          <button aria-label="Search" className="gcb-icon-button">
            <Search size={18} />
          </button>
          <button
            aria-label="Toggle theme"
            onClick={() => setThemeMode(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="gcb-icon-button"
          >
            {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#login" className="gcb-login-link">Login</a>
          <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#list-business" className="gcb-navbar-cta">
            List Business
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
