<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroView from '@/views/HeroView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll.js'

useSmoothScroll()
</script>

<template>
  <div class="min-h-screen">
    <Navbar />

    <main>
      <HeroView />
      <AboutView />
      <SkillsView />
      <ExperienceView />
      <ProjectsView />
      <ContactView />
    </main>

    <footer class="border-t border-border-subtle py-8 text-center text-sm text-text-muted">
      <p>&copy; {{ new Date().getFullYear() }} Portfolio. Built with Vue 3, Vite &amp; Tailwind CSS.</p>
    </footer>
  </div>
</template>
