<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import { skillCategories, skillLevelVariants } from '@/data/skills.js'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const { targetRef, isVisible } = useIntersectionObserver()
</script>

<template>
  <section id="skills" class="py-20 bg-surface-raised/50">
    <div class="section-container" ref="targetRef">
      
      <!-- Heading section -->
      <div class="mb-12">
        <p class="text-accent uppercase tracking-widest text-sm font-medium mb-2">What I work with</p>
        <h2 class="text-4xl font-bold">Skills & Technologies</h2>
      </div>

      <!-- Grid layout: បែងចែកជា 3 ជួរ (Columns) ដូចក្នុង image_d070c4.jpg -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <Card v-for="category in skillCategories" :key="category.id" class="p-6 bg-white/5 border border-white/10 rounded-2xl">
          <h3 class="text-xl font-semibold mb-4 text-white">{{ category.title }}</h3>
          
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="skill in category.skills" 
              :key="skill.name"
              class="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 border border-white/5"
            >
              {{ skill.name }}
            </span>
          </div>
        </Card>

      </div>
    </div>
  </section>
</template>
