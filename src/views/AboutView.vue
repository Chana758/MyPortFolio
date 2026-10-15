<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import { about } from '@/data/profile.js'
</script>

<template>
  <section id="about" class="border-t border-border-subtle">
    <div class="section-container">
      <div data-reveal>
        <SectionHeading :title="about.headline" />
      </div>

      <div class="mt-12 grid gap-12 lg:grid-cols-2">
        <div class="space-y-5">
          <p
            v-for="(paragraph, i) in about.paragraphs"
            :key="i"
            data-reveal
            :style="`--i: ${i}`"
            class="text-base leading-relaxed text-text-secondary"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div v-for="(h, i) in about.highlights" :key="h.label" data-reveal :style="`--i: ${i + 1}`">
            <Card hoverable padding="md" class="h-full">
              <p class="text-sm text-text-muted">{{ h.label }}</p>
              <p class="mt-2 text-sm font-semibold text-text-primary">{{ h.value }}</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>