<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import { about } from '@/data/profile.js'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const { targetRef, isVisible } = useIntersectionObserver();
</script>

<template>
  <section id="about" class="border-t border-border-subtle">
    <div
      ref="targetRef"
      class="section-container transition-all duration-700"
      :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
    >
      <SectionHeading :title="about.headline" subtitle="A bit about my journey and what drives me." />

      <div class="mt-12 grid gap-12 lg:grid-cols-2">
        <div class="space-y-5">
          <p
            v-for="(paragraph, index) in about.paragraphs"
            :key="index"
            class="text-base leading-relaxed text-text-secondary"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <Card
            v-for="highlight in about.highlights"
            :key="highlight.label"
            hoverable
            padding="md"
          >
            <p class="text-xs font-medium uppercase tracking-wider text-text-muted">
              {{ highlight.label }}
            </p>
            <p class="mt-2 text-sm font-semibold text-text-primary">{{ highlight.value }}</p>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
