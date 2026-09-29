<script setup>
/**
 * Badge component for skills, tags, and status labels.
 */
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'accent', 'muted', 'outline'].includes(v),
  },
})

const variantClasses = {
  default: 'bg-surface-overlay text-text-primary border-border-subtle',
  accent: 'bg-accent-muted text-accent border-accent/20',
  muted: 'bg-surface text-text-muted border-border-subtle',
  outline: 'bg-transparent text-text-secondary border-border',
}
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
    :class="variantClasses[variant]"
  >
    <slot />
  </span>
</template>
