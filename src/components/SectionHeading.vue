<script setup>
/**
 * Consistent section heading used across all views.
 */
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'center'].includes(v),
  },
})
</script>

<template>
  <div :class="align === 'center' ? 'text-center' : 'text-left'">
    <h2 class="section-heading">{{ title }}</h2>
    <p
      v-if="subtitle"
      class="section-subheading"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
