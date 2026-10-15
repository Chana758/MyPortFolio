<script setup>
import channaPhoto from '@/assets/images/channa.jpg'
import Button from '@/components/ui/Button.vue'
import { profile } from '@/data/profile.js'
</script>

<template>
  <section id="hero" class="relative flex min-h-screen items-center overflow-hidden pt-20">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="animate-drift absolute -top-32 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div class="animate-drift absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" style="animation-delay: -6s" />
    </div>

    <div class="section-container relative z-10 grid items-center gap-12 py-12 md:py-12 lg:grid-cols-2">
      <div>
        <div class="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-600 dark:text-emerald-400" style="--d: 0s">
          <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Available for internship
        </div>

        <p class="animate-fade-up mb-3 text-lg text-text-secondary" style="--d: 0.1s">Hello, I'm</p>

        <h1 class="animate-fade-up text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl" style="--d: 0.2s">
          {{ profile.name }}
          <span class="block text-accent-text">{{ profile.role }}</span>
        </h1>

        <p class="animate-fade-up mt-6 max-w-lg text-lg leading-relaxed text-text-secondary" style="--d: 0.35s">
          {{ profile.tagline }}
        </p>

        <!-- Download CV lives in the Navbar, so the hero only has the two main actions -->
        <div class="animate-fade-up mt-10 flex flex-wrap gap-3" style="--d: 0.5s">
          <Button href="#projects" variant="primary" size="lg">
            View projects
          </Button>
          <Button href="#contact" variant="secondary" size="lg" class="group gap-2">
            Get in touch
            <svg
              class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Button>
        </div>
      </div>

      <div class="animate-fade-up hidden lg:flex lg:justify-center" style="--d: 0.4s">
        <div class="animate-float rounded-full bg-gradient-to-br from-accent/60 to-accent-hover/30 p-2 shadow-2xl shadow-accent/20">
          <img :src="channaPhoto" :alt="`Photo of ${profile.name}`" class="h-80 w-80 rounded-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>