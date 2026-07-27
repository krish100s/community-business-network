export const THEME_STORAGE_KEY = 'growcommunitybiz-theme'

export function getSystemTheme() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getStoredTheme() {
  if (typeof window === 'undefined') return 'auto'
  return localStorage.getItem(THEME_STORAGE_KEY) || 'auto'
}

export function resolveTheme(mode) {
  if (mode === 'auto') return getSystemTheme()
  return mode
}
