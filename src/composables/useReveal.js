import { onMounted, onUnmounted } from 'vue'

/**
 * Fades in every element marked with [data-reveal] when it scrolls into view.
 * Call once in App.vue. Replaces useIntersectionObserver.js (you can delete that file).
 */
export function useReveal() {
  let observer = null

  onMounted(() => {
    const els = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}