import { MoonStar, SunMedium } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { Button } from './Button.jsx'

export function ThemeToggle() {
  const { resolvedTheme, setThemeMode } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="theme-toggle-icon"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={() => setThemeMode(isDark ? 'light' : 'dark')}
    >
      {isDark ? <SunMedium size={16} aria-hidden="true" /> : <MoonStar size={16} aria-hidden="true" />}
    </Button>
  )
}
