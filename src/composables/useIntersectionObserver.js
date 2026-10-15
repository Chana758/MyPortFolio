import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Observes an element and toggles `isVisible` when it enters the viewport.
 * Useful for scroll-triggered fade-in animations.
 *
 * @param {Object} options
 * @param {number} options.threshold 
 * @param {string} options.rootMargin 
 */
export function useIntersectionObserver(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options

  const targetRef = ref(null)
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    if (!targetRef.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(targetRef.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { targetRef, isVisible }
}
