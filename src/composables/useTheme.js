import { ref, watchEffect } from 'vue'

const KEY = 'theme'
const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(KEY) : null
const prefersDark =
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

// Shared across components: one source of truth for the theme.
const isDark = ref(saved ? saved === 'dark' : prefersDark)

watchEffect(() => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem(KEY, isDark.value ? 'dark' : 'light')
})

export function useTheme() {
  const toggleTheme = () => (isDark.value = !isDark.value)
  return { isDark, toggleTheme }
}