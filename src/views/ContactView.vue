<script setup>
import { ref } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import { contact, profile } from '@/data/profile.js'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const { targetRef, isVisible } = useIntersectionObserver()

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

/**
 * Handles form submission — ready to wire up to a backend or service
 * (e.g. Formspree, EmailJS, or a custom API endpoint).
 */
const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  // Simulate async submission — replace with real API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  submitStatus.value = 'success'
  formData.value = { name: '', email: '', subject: '', message: '' }
  isSubmitting.value = false
}
</script>

<template>
  <section id="contact" class="border-t border-border-subtle">
    <div
      ref="targetRef"
      class="section-container transition-all duration-700"
      :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
    >
      <SectionHeading :title="contact.headline" :subtitle="contact.description" />

      <div class="mt-12 grid gap-12 lg:grid-cols-5">
        <!-- Contact info -->
        <div class="space-y-6 lg:col-span-2">
          <div>
            <p class="text-xs font-medium uppercase tracking-wider text-text-muted">Email</p>
            <a
              :href="`mailto:${profile.email}`"
              class="mt-1 block text-sm text-text-primary transition-colors hover:text-accent"
            >
              {{ profile.email }}
            </a>
          </div>
          <div>
            <p class="text-xs font-medium uppercase tracking-wider text-text-muted">Location</p>
            <p class="mt-1 text-sm text-text-primary">{{ profile.location }}</p>
          </div>
          <div>
            <p class="text-xs font-medium uppercase tracking-wider text-text-muted">Social</p>
            <div class="mt-2 flex gap-4">
              <a
                :href="profile.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-text-secondary transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                :href="profile.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-text-secondary transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <Card padding="lg" class="lg:col-span-3">
          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div
              v-for="field in contact.formFields"
              :key="field.id"
              class="flex flex-col gap-1.5"
            >
              <label :for="field.id" class="text-sm font-medium text-text-primary">
                {{ field.label }}
                <span v-if="field.required" class="text-accent">*</span>
              </label>

              <textarea
                v-if="field.type === 'textarea'"
                :id="field.id"
                v-model="formData[field.id]"
                :placeholder="field.placeholder"
                :required="field.required"
                rows="5"
                class="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />

              <input
                v-else
                :id="field.id"
                v-model="formData[field.id]"
                :type="field.type"
                :placeholder="field.placeholder"
                :required="field.required"
                class="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div class="flex items-center gap-4">
              <Button type="submit" variant="primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </Button>

              <p v-if="submitStatus === 'success'" class="text-sm text-accent">
                Message sent successfully!
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  </section>
</template>
