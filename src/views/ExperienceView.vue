<script setup>
import { ref } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { timeline, certificates } from '@/data/experience.js'

const selectedImage = ref(null)

const openImage = (img) => {
  if (img) selectedImage.value = img
}

const closeImage = () => {
  selectedImage.value = null
}
</script>

<template>
  <section id="education" class="relative overflow-hidden border-t border-border-subtle py-20 lg:py-28">
    <div class="section-container">

      <!-- Section Heading -->
      <div data-reveal class="mx-auto mb-16 max-w-2xl text-center">
        <SectionHeading
          title="Education & Certificates"
          subtitle="My university studies and the technical courses I have completed."
        />
      </div>

      <!-- Alternating Timeline Container -->
      <div class="relative mx-auto max-w-5xl">

        <!-- Center Vertical Line -->
        <div class="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block"></div>

        <div class="space-y-12">

          <!-- 1. Education (Left Side) -->
          <div
            v-for="item in timeline"
            :key="item.id"
            class="group relative flex flex-col items-center justify-between md:flex-row"
            data-reveal
          >
            <div class="w-full md:w-[45%] md:pr-6">
              <div class="relative overflow-hidden rounded-2xl border border-border bg-surface-raised p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
                <div class="mb-3 flex items-center gap-2">
                  <span class="rounded-full bg-accent-muted px-3 py-1 text-xs font-semibold text-accent-text">
                    education
                  </span>
                  <span class="text-xs font-medium text-text-muted">{{ item.period }}</span>
                </div>

                <h3 class="text-xl font-bold text-text-primary transition-colors group-hover:text-accent-text">
                  {{ item.title }}
                </h3>
                <p class="mt-1 text-sm font-semibold text-accent-text">{{ item.organization }}</p>
                <p class="mb-4 mt-0.5 text-xs text-text-muted">{{ item.location }}</p>

                <ul v-if="item.highlights.length" class="space-y-2 border-t border-border-subtle pt-4">
                  <li v-for="h in item.highlights" :key="h" class="flex items-start gap-2.5 text-xs text-text-secondary">
                    <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{{ h }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Center Timeline Dot -->
            <div class="absolute left-1/2 top-8 z-10 hidden h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-surface md:flex">
              <span class="h-2 w-2 rounded-full bg-accent"></span>
            </div>

            <div class="hidden w-full md:block md:w-[45%]"></div>
          </div>

          <!-- 2. Certificates (Alternating Left / Right) -->
          <div
            v-for="(c, i) in certificates"
            :key="c.title"
            class="group relative flex flex-col items-center justify-between md:flex-row"
            :class="i % 2 === 0 ? 'md:flex-row-reverse' : ''"
            data-reveal
            :style="`--i: ${i}`"
          >
            <div class="w-full md:w-[45%]" :class="i % 2 === 0 ? 'md:pl-6' : 'md:pr-6'">
              <div class="relative overflow-hidden rounded-2xl border border-border bg-surface-raised p-5 transition-all duration-300 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">

                <!-- Certificate image (full image, object-contain) -->
                <div
                  v-if="c.image"
                  class="relative mb-4 flex h-48 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-surface p-2 sm:h-56"
                  @click="openImage(c.image)"
                >
                  <img
                    :src="c.image"
                    :alt="c.title"
                    class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span class="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white shadow-md">Click to view</span>
                  </div>
                </div>

                <div class="mb-2 flex items-center justify-between gap-2">
                  <span class="rounded-full bg-accent-muted px-2.5 py-0.5 text-xs font-semibold text-accent-text">
                    certificate
                  </span>
                  <span class="text-xs font-medium text-text-muted">{{ c.year }}</span>
                </div>

                <h4 class="text-base font-bold leading-snug text-text-primary transition-colors group-hover:text-accent-text">
                  {{ c.title }}
                </h4>
                <p class="mt-1 text-xs font-semibold text-accent-text">{{ c.issuer }}</p>

                <!-- Only shown when the certificate really has an ID -->
                <div
                  v-if="c.id"
                  class="mt-4 flex items-center justify-between border-t border-border-subtle pt-3 text-xs text-text-muted"
                >
                  <span>Certificate ID</span>
                  <span class="font-medium text-accent-text">{{ c.id }}</span>
                </div>
              </div>
            </div>

            <!-- Center Timeline Dot -->
            <div class="absolute left-1/2 top-8 z-10 hidden h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-surface md:flex">
              <span class="h-2 w-2 rounded-full bg-accent"></span>
            </div>

            <div class="hidden w-full md:block md:w-[45%]"></div>
          </div>

        </div>
      </div>
    </div>

    <!-- Image Fullscreen Modal -->
    <Teleport to="body">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        @click="closeImage"
      >
        <div class="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface-raised p-2 shadow-2xl">
          <button
            type="button"
            class="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-surface-overlay text-text-primary shadow-md hover:bg-accent hover:text-white"
            aria-label="Close"
            @click="closeImage"
          >
            ✕
          </button>
          <img :src="selectedImage" alt="Certificate Full View" class="max-h-[85vh] w-auto rounded-xl object-contain" />
        </div>
      </div>
    </Teleport>
  </section>
</template>