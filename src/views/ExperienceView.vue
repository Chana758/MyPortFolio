<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import Badge from '@/components/ui/Badge.vue'
import { timeline } from '@/data/experience.js'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const { targetRef, isVisible } = useIntersectionObserver()

const typeVariants = {
  education: 'accent',
  experience: 'default',
}
</script>

<template>
  <section id="experience" class="border-t border-border-subtle">
    <div
      ref="targetRef"
      class="section-container transition-all duration-700"
      :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
    >
      <SectionHeading
        title="Experience"
        subtitle="My academic journey and hands-on development experience."
      />

      <div class="relative mt-12">
        <!-- Timeline line -->
        <div
          class="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block"
        />

        <div class="space-y-12">
          <div
            v-for="(item, index) in timeline"
            :key="item.id"
            class="relative md:grid md:grid-cols-2 md:gap-12"
            :class="index % 2 === 0 ? '' : 'md:direction-rtl'"
          >
            <!-- Timeline dot -->
            <div
              class="absolute -left-1.5 top-6 hidden h-3 w-3 rounded-full border-2 border-accent bg-surface md:left-1/2 md:-translate-x-1/2 md:block"
            />

            <!-- Content card -->
            <div
              class="rounded-xl border border-border-subtle bg-surface-raised p-6 md:col-span-1"
              :class="index % 2 === 0 ? 'md:col-start-1 md:mr-8' : 'md:col-start-2 md:ml-8'"
            >
              <div class="mb-3 flex flex-wrap items-center gap-3">
                <Badge :variant="typeVariants[item.type]">{{ item.type }}</Badge>
                <span class="text-xs text-text-muted">{{ item.period }}</span>
              </div>

              <h3 class="text-lg font-semibold text-text-primary">{{ item.title }}</h3>
              <p class="mt-1 text-sm font-medium text-accent">{{ item.organization }}</p>
              <p class="mt-1 text-xs text-text-muted">{{ item.location }}</p>

              <p class="mt-4 text-sm leading-relaxed text-text-secondary">
                {{ item.description }}
              </p>

              <ul class="mt-4 space-y-2">
                <li
                  v-for="highlight in item.highlights"
                  :key="highlight"
                  class="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
