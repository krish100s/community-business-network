import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const THEME_STORAGE_KEY = 'growcommunitybiz-theme'

const ThemeContext = createContext(null)

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'auto'
  return localStorage.getItem(THEME_STORAGE_KEY) || 'auto'
}

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(getInitialTheme)
  const [resolvedTheme, setResolvedTheme] = useState(() =>
    themeMode === 'auto' ? getSystemTheme() : themeMode,
  )

  useEffect(() => {
    const nextResolved = themeMode === 'auto' ? getSystemTheme() : themeMode
    setResolvedTheme(nextResolved)
    document.documentElement.dataset.theme = nextResolved
    document.documentElement.style.colorScheme = nextResolved
    localStorage.setItem(THEME_STORAGE_KEY, themeMode)
  }, [themeMode])

  useEffect(() => {
    if (themeMode !== 'auto') return undefined
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => {
      const nextResolved = media.matches ? 'dark' : 'light'
      setResolvedTheme(nextResolved)
      document.documentElement.dataset.theme = nextResolved
      document.documentElement.style.colorScheme = nextResolved
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [themeMode])

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme
    document.documentElement.style.colorScheme = resolvedTheme
  }, [resolvedTheme])

  const value = useMemo(
    () => ({
      themeMode,
      resolvedTheme,
      setThemeMode,
      isDark: resolvedTheme === 'dark',
    }),
    [themeMode, resolvedTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
