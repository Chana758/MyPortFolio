<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import Button from './ui/Button.vue'
import ThemeToggle from './ThemeToggle.vue'
import { profile } from '@/data/profile.js'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const isScrolled = ref(false)
const isMobileOpen = ref(false)
const active = ref('')

const handleScroll = () => (isScrolled.value = window.scrollY > 20)
const closeMenu = () => (isMobileOpen.value = false)
const onKeydown = (e) => e.key === 'Escape' && closeMenu()

// Lock page scroll while the sidebar is open
watch(isMobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

let observer = null
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  // Highlight the link of the section that is in the middle of the screen
  observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (active.value = `#${e.target.id}`)),
    { rootMargin: '-45% 0px -50% 0px' },
  )
  navLinks.forEach((l) => {
    const el = document.querySelector(l.href)
    if (el) observer.observe(el)
  })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
  observer?.disconnect()
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'border-b border-border-subtle bg-surface/85 backdrop-blur-lg' : 'bg-transparent'"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8 md:py-4" aria-label="Main">
      <a href="#hero" class="font-display text-lg font-bold tracking-tight text-text-primary">
        {{ profile.name }}<span class="text-accent">.</span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="relative py-1 text-sm transition-colors hover:text-text-primary"
            :class="active === link.href ? 'text-text-primary' : 'text-text-secondary'"
          >
            {{ link.label }}
            <span
              class="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded bg-accent transition-transform duration-300"
              :class="active === link.href ? 'scale-x-100' : 'scale-x-0'"
            />
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-2 md:gap-3">
        <ThemeToggle />
        <Button :href="profile.resumeUrl" variant="primary" size="sm" class="max-md:hidden" download>
          Download CV
        </Button>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-surface-overlay md:hidden"
          aria-label="Open menu"
          :aria-expanded="isMobileOpen"
          @click="isMobileOpen = true"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  </header>

  <!-- Overlay -->
  <Transition name="fade">
    <div
      v-if="isMobileOpen"
      class="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
      aria-hidden="true"
      @click="closeMenu"
    />
  </Transition>

  <!-- Sidebar: slides in from the left -->
  <Transition name="sidebar">
    <aside
      v-if="isMobileOpen"
      class="fixed inset-y-0 left-0 z-[60] flex w-72 max-w-[85%] flex-col border-r border-border-subtle bg-surface shadow-2xl md:hidden"
      aria-label="Mobile menu"
    >
      <div class="flex items-center justify-between px-5 py-3.5">
        <a href="#hero" class="font-display text-lg font-bold tracking-tight text-text-primary" @click="closeMenu">
          {{ profile.name }}<span class="text-accent">.</span>
        </a>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-surface-overlay"
          aria-label="Close menu"
          @click="closeMenu"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul class="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-base transition-colors hover:bg-surface-overlay hover:text-text-primary"
            :class="active === link.href ? 'bg-surface-overlay font-medium text-text-primary' : 'text-text-secondary'"
            @click="closeMenu"
          >
            <span
              class="h-1.5 w-1.5 rounded-full transition-colors"
              :class="active === link.href ? 'bg-accent' : 'bg-transparent'"
            />
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="border-t border-border-subtle p-4">
        <Button :href="profile.resumeUrl" variant="primary" size="lg" class="w-full justify-center" download>
          Download CV
        </Button>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.sidebar-enter-active,
.sidebar-leave-active { transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1); }
.sidebar-enter-from,
.sidebar-leave-to { transform: translateX(-100%); }
</style>