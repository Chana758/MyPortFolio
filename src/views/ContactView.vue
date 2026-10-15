<script setup>
import { ref } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import { contact, profile } from '@/data/profile.js'

const formData = ref({ name: '', email: '', subject: '', message: '' })
const isSubmitting = ref(false)
const status = ref(null) // 'sent' | 'mailto' | 'error'

// Only links that exist in profile.js are shown
const socials = [
  { label: 'GitHub', url: profile.github },
  { label: 'Telegram', url: profile.telegram },
  { label: 'LinkedIn', url: profile.linkedin },
].filter((s) => s.url)

// Inputs use the page color (darker than the card) so they stand out inside the form card
const fieldClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'

/**
 * With contact.formEndpoint set, the message is sent via Web3Forms.
 * Without it, the visitor's email app opens with the message filled in.
 */
const handleSubmit = async () => {
  isSubmitting.value = true
  status.value = null
  const d = formData.value

  try {
    if (contact.formEndpoint) {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contact.accessKey,
          name: d.name,
          email: d.email,
          subject: d.subject,
          message: d.message,
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error('Request failed')
      status.value = 'sent'
    } else {
      const body = encodeURIComponent(`${d.message}\n\nFrom: ${d.name} (${d.email})`)
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${body}`
      status.value = 'mailto'
    }
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch {
    status.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="relative border-t border-border-subtle py-20 lg:py-28">
    <div class="section-container">
      <div data-reveal class="max-w-2xl">
        <SectionHeading :title="contact.headline" :subtitle="contact.description" />
      </div>

      <div class="mt-14 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">

        <!-- Left: contact info -->
        <div class="space-y-6 lg:col-span-5" data-reveal>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            <!-- Email -->
            <div class="group rounded-2xl border border-border bg-surface-raised p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent-text transition-colors group-hover:bg-accent group-hover:text-white">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div class="min-w-0">
                  <p class="text-xs font-medium uppercase tracking-wider text-text-muted">Direct Email</p>
                  <a :href="`mailto:${profile.email}`" class="mt-0.5 block break-all text-sm font-semibold text-text-primary transition-colors hover:text-accent-text">{{ profile.email }}</a>
                </div>
              </div>
            </div>

            <!-- Location -->
            <div class="group rounded-2xl border border-border bg-surface-raised p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent-text transition-colors group-hover:bg-accent group-hover:text-white">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p class="text-xs font-medium uppercase tracking-wider text-text-muted">Location</p>
                  <p class="mt-0.5 text-sm font-semibold text-text-primary">{{ profile.location }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Socials -->
          <div v-if="socials.length" class="rounded-2xl border border-border bg-surface-raised p-6">
            <p class="mb-4 text-xs font-medium uppercase tracking-wider text-text-muted">Connect on socials</p>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="s in socials"
                :key="s.label"
                :href="s.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-overlay px-4 py-2.5 text-sm font-medium text-text-primary transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white"
              >
                {{ s.label }}
                <svg class="h-4 w-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: form -->
        <div class="lg:col-span-7" data-reveal style="--i: 1">
          <Card padding="lg" class="border-border shadow-xl shadow-black/10">
            <form class="space-y-5" @submit.prevent="handleSubmit">
              <div class="grid gap-5 sm:grid-cols-2">
                <div v-for="field in contact.formFields.slice(0, 2)" :key="field.id" class="flex flex-col gap-2">
                  <label :for="field.id" class="text-xs font-semibold uppercase tracking-wider text-text-secondary">{{ field.label }}</label>
                  <input :id="field.id" v-model="formData[field.id]" :type="field.type" :placeholder="field.placeholder" :required="field.required" :class="fieldClass" />
                </div>
              </div>

              <div v-for="field in contact.formFields.slice(2)" :key="field.id" class="flex flex-col gap-2">
                <label :for="field.id" class="text-xs font-semibold uppercase tracking-wider text-text-secondary">{{ field.label }}</label>
                <textarea v-if="field.type === 'textarea'" :id="field.id" v-model="formData[field.id]" :placeholder="field.placeholder" :required="field.required" rows="5" :class="[fieldClass, 'resize-none']" />
                <input v-else :id="field.id" v-model="formData[field.id]" :type="field.type" :placeholder="field.placeholder" :required="field.required" :class="fieldClass" />
              </div>

              <div class="flex flex-col justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                <Button type="submit" variant="primary" :disabled="isSubmitting" class="w-full px-8 py-3.5 sm:w-auto">
                  {{ isSubmitting ? 'Sending message...' : 'Send message' }}
                </Button>

                <div class="text-center sm:text-right">
                  <p v-if="status === 'sent'" class="animate-fade-in text-sm font-medium text-emerald-600 dark:text-emerald-400" role="status">Message sent successfully!</p>
                  <p v-if="status === 'mailto'" class="animate-fade-in text-sm font-medium text-accent-text" role="status">Your email app is opening...</p>
                  <p v-if="status === 'error'" class="animate-fade-in text-sm font-medium text-red-600 dark:text-red-400" role="alert">Failed to send. Please email directly.</p>
                </div>
              </div>
            </form>
          </Card>
        </div>

      </div>
    </div>
  </section>
</template>