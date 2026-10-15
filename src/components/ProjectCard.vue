<script setup>
import { ref } from 'vue'
import Card from './ui/Card.vue'
import Badge from './ui/Badge.vue'
import Button from './ui/Button.vue'

/** One project from src/data/projects.js */
defineProps({ project: { type: Object, required: true } })

// If the screenshot file is missing, show the placeholder instead of a broken image.
const imageFailed = ref(false)
</script>

<template>
  <Card hoverable padding="none" class="group flex h-full flex-col overflow-hidden hover:-translate-y-1">
    <div class="relative h-44 overflow-hidden bg-surface-overlay">
      <img
        v-if="project.image && !imageFailed"
        :src="project.image"
        :alt="`Screenshot of ${project.title}`"
        loading="lazy"
        class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        @error="imageFailed = true"
      />
      <div v-else class="flex h-full items-center justify-center bg-accent-muted">
        <span class="font-display text-4xl font-bold text-accent-text/40">{{ project.title.slice(0, 2) }}</span>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <div class="mb-2 flex items-start justify-between gap-2">
        <h3 class="text-lg font-semibold text-text-primary">{{ project.title }}</h3>
        <Badge variant="accent">{{ project.type === 'fullstack' ? 'Full-stack' : 'Frontend' }}</Badge>
      </div>

      <p class="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">{{ project.description }}</p>

      <div class="mb-5 flex flex-wrap gap-2">
        <Badge v-for="tag in project.tags" :key="tag" variant="outline">{{ tag }}</Badge>
      </div>

      <div class="flex flex-wrap gap-2">
        <Button
          v-for="(link, i) in project.links"
          :key="link.label"
          :href="link.url"
          :variant="i === 0 ? 'primary' : 'ghost'"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }}
        </Button>
      </div>
    </div>
  </Card>
</template>