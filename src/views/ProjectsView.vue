<script setup>
import { ref, computed } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'
import { profile } from '@/data/profile.js'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'frontend', label: 'Frontend' },
]

const current = ref('all')

const visible = computed(() => {
  if (!projects) return []
  return current.value === 'all' 
    ? projects 
    : projects.filter((p) => p && p.type === current.value)
})
</script>

<template>
  <section id="projects" class="border-t border-border-subtle py-20 lg:py-28">
    <div class="section-container">
      <div data-reveal>
        <SectionHeading
          title="Projects"
          subtitle="Full-stack projects have separate frontend and backend repositories. Frontend projects are live on the web."
        />
      </div>

      <div class="mt-8 flex gap-2" role="tablist" aria-label="Filter projects" data-reveal>
        <button
          v-for="f in filters"
          :key="f.id"
          role="tab"
          :aria-selected="current === f.id"
          class="rounded-full border px-4 py-1.5 text-sm transition-colors"
          :class="current === f.id ? 'border-accent bg-accent text-white' : 'border-border/80 text-text-secondary hover:border-accent hover:text-text-primary'"
          @click="current = f.id"
        >
          {{ f.label }}
        </button>
      </div>

      <TransitionGroup name="card" tag="div" class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="p in visible" :key="p?.id" :project="p" />
      </TransitionGroup>

      <p class="mt-10 text-sm text-text-secondary" data-reveal>
        More repositories on
       <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="text-accent-text underline underline-offset-4">GitHub</a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.card-enter-active,
.card-leave-active { transition: opacity 0.35s ease, transform 0.35s ease; }
.card-enter-from,
.card-leave-to { opacity: 0; transform: scale(0.96); }
.card-leave-active { position: absolute; }
.card-move { transition: transform 0.35s ease; }
</style>