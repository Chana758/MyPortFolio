<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const { targetRef, isVisible } = useIntersectionObserver()
</script>

<template>
  <section id="projects" class="border-t border-border-subtle bg-surface-raised/50">
    <div
      ref="targetRef"
      class="section-container transition-all duration-700"
      :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
    >
      <SectionHeading
        title="Projects"
        subtitle="A selection of work that showcases my skills and growth as a developer."
      />

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>
