<script setup>
import Card from './ui/Card.vue'
import Badge from './ui/Badge.vue'
import Button from './ui/Button.vue'

/**
 * Project card — maps a single project object from src/data/projects.js.
 */
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Card hoverable padding="none" class="group flex h-full flex-col overflow-hidden">
    <!-- Project thumbnail placeholder -->
    <div
      class="flex h-44 items-center justify-center bg-surface-overlay transition-colors group-hover:bg-accent-muted"
    >
      <div class="text-center">
        <span class="text-4xl font-bold text-accent/30">{{ project.year }}</span>
        <p class="mt-1 text-xs text-text-muted">Project</p>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <div class="mb-2 flex items-start justify-between gap-2">
        <h3 class="text-lg font-semibold text-text-primary">{{ project.title }}</h3>
        <Badge v-if="project.featured" variant="accent">Featured</Badge>
      </div>

      <p class="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {{ project.description }}
      </p>

      <div class="mb-5 flex flex-wrap gap-2">
        <Badge v-for="tag in project.tags" :key="tag" variant="outline">
          {{ tag }}
        </Badge>
      </div>

      <div class="flex gap-3">
        <Button
          v-if="project.liveUrl"
          :href="project.liveUrl"
          variant="primary"
          size="sm"
        >
          Live Demo
        </Button>
        <Button
          v-if="project.githubUrl"
          :href="project.githubUrl"
          variant="ghost"
          size="sm"
        >
          GitHub
        </Button>
      </div>
    </div>
  </Card>
</template>
