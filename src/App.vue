<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroView from '@/views/HeroView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ContactView from '@/views/ContactView.vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll.js'
import { useReveal } from '@/composables/useReveal.js'
import { profile } from '@/data/profile.js'

useSmoothScroll()
useReveal()
</script>

<template>
  <div class="min-h-screen">
    <Navbar />

    <main>
      <HeroView />
      <AboutView />
      <SkillsView />
      <ProjectsView />
      <ExperienceView />
      <ContactView />
    </main>

    <footer class="border-t border-border-subtle py-8 text-center text-sm text-text-muted">
      <p>&copy; {{ new Date().getFullYear() }} {{ profile.name }}. Built with Vue 3, Vite and Tailwind CSS.</p>
    </footer>
  </div>
</template>