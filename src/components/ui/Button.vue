<script setup>
/**
 * Reusable button component with variant and size support.
 */
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'ghost', 'outline'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  href: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const variantClasses = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20',
  secondary:
    'bg-surface-overlay text-text-primary border border-border hover:border-accent/50 hover:bg-accent-muted',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface-overlay',
  outline:
    'border border-border text-text-primary hover:border-accent hover:text-accent',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base sm:px-8',
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    :disabled="disabled"
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </component>
</template>