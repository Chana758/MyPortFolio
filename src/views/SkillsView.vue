<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import { skillCategories } from '@/data/skills.js'
</script>

<template>
  <section id="skills" class="border-t border-border-subtle bg-surface-raised/50">
    <div class="section-container">
      <div data-reveal>
        <SectionHeading
          title="Skills"
          subtitle="Grouped by how well I know them: what I use, what I am learning, and what I know the basics of."
        />
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(cat, i) in skillCategories" :key="cat.id" data-reveal :style="`--i: ${i}`">
          <Card hoverable padding="md" class="h-full">
            <h3 class="mb-4 text-lg font-semibold text-text-primary">{{ cat.title }}</h3>
            <div class="flex flex-wrap gap-2">
              <Badge v-for="skill in cat.skills" :key="skill" :variant="cat.tone">{{ skill }}</Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>