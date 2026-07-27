import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Search, Sparkles } from 'lucide-react'
import { ThemeToggle } from '../components/ThemeToggle.jsx'
import { Button } from '../components/Button.jsx'
import { cn } from '../utils/cn.js'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/businesses', label: 'Businesses' },
  { to: '/community', label: 'Community' },
  { to: '/about', label: 'About' },
]

export function MainLayout() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className={cn('site-header', scrolled && 'site-header--scrolled')}>
        <div className="site-header__inner">
          <NavLink className="site-brand" to="/" aria-label="GrowCommunityBiz home">
            <span className="site-brand__mark" aria-hidden="true">
              <Sparkles size={16} />
            </span>
            <span className="site-brand__text">GrowCommunityBiz</span>
          </NavLink>

          <nav className="site-nav" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn('site-nav__link', isActive && 'is-active')}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-actions">
            <button type="button" className="site-icon-button" aria-label="Search">
              <Search size={16} aria-hidden="true" />
            </button>
            <ThemeToggle />
            <Button as={NavLink} to="/login" variant="ghost" size="sm">
              Login
            </Button>
            <Button as={NavLink} to="/signup" variant="primary" size="sm">
              List Business
            </Button>
          </div>
        </div>
      </header>

      <main id="main-content" className="layout-main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer" aria-label="Footer">
        <div className="site-footer__inner" />
      </footer>
    </div>
  )
}
