<script setup>
/**
 * Generic card container with optional hover effect.
 */
defineProps({
  hoverable: {
    type: Boolean,
    default: false,
  },
  padding: {
    type: String,
    default: 'md',
    validator: (v) => ['none', 'sm', 'md', 'lg'].includes(v),
  },
})

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}
</script>

<template>
  <div
    class="rounded-xl border border-border-subtle bg-surface-raised"
    :class="[
      paddingClasses[padding],
      hoverable &&
        'transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-accent/5',
    ]"
  >
    <slot />
  </div>
</template>
