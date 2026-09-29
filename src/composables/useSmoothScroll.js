import { onMounted, onUnmounted } from 'vue'

/**
 * Smooth-scroll to a target element by ID or selector.
 * @param {string} target - CSS selector or element ID (with or without #)
 * @param {number} offset - Pixel offset from top (useful for fixed navbars)
 */
export function scrollToSection(target, offset = 80) {
  const selector = target.startsWith('#') ? target : `#${target}`
  const element = document.querySelector(selector)

  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

/**
 * Composable that attaches smooth-scroll behavior to anchor links.
 */
export function useSmoothScroll(offset = 80) {
  const handleClick = (event) => {
    const href = event.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return

    event.preventDefault()
    scrollToSection(href, offset)
  }

  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', handleClick)
    })
  })

  onUnmounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.removeEventListener('click', handleClick)
    })
  })

  return { scrollToSection }
}
