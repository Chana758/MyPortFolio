<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from './ui/Button.vue'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-surface/80 backdrop-blur-lg border-b border-border-subtle' : 'bg-transparent'"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
      <a href="#hero" class="text-lg font-bold tracking-tight text-text-primary">
        Portfolio<span class="text-accent">.</span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="hidden md:block">
        <Button href="#contact" variant="primary" size="sm">Hire Me</Button>
      </div>

      <!-- Mobile toggle -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary md:hidden"
        aria-label="Toggle menu"
        @click="isMobileOpen = !isMobileOpen"
      >
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            v-if="!isMobileOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="isMobileOpen"
      class="border-t border-border-subtle bg-surface/95 backdrop-blur-lg md:hidden"
    >
      <ul class="flex flex-col gap-1 px-6 py-4">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="block rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-surface-overlay hover:text-text-primary"
            @click="isMobileOpen = false"
          >
            {{ link.label }}
          </a>
        </li>
        <li class="pt-2">
          <Button href="#contact" variant="primary" size="sm" class="w-full">
            Hire Me
          </Button>
        </li>
      </ul>
    </div>
  </header>
</template>
