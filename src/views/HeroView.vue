<script setup>
import channaPhoto from '@/assets/images/channa.jpg'

const profile = {
  name: 'Sam Channa',
  tagline: 'Passionate 2nd-year ITE student at RUPP, building modern web applications with Vue.js and Laravel.',
  location: 'Phnom Penh, Cambodia'
}

const scrollTo = (id) => {
  const element = document.querySelector(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>
x
<template>
  <section id="hero" class="relative flex min-h-screen items-center overflow-hidden pt-20">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div class="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
    </div>

    <div class="section-container relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
      
      <div class="animate-fade-up">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
          <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for work
        </div>

        <p class="mb-3 text-sm font-medium uppercase tracking-widest text-accent-light">
          Hello, I'm
        </p>

        <h1 class="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          {{ profile.name }}
          <span class="block bg-gradient-to-r from-accent to-violet-800 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>

        <p class="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
          {{ profile.tagline }}
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <button @click="scrollTo('#projects')" class="rounded-xl bg-accent px-8 py-3 font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25">
            View Projects
          </button>
          <button @click="scrollTo('#contact')" class="rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-3 font-medium text-slate-300 transition-all hover:border-accent/50 hover:text-white">
            Get in Touch
          </button>
        </div>
      </div>

      <!-- Photo -->
      <div class="relative hidden lg:flex lg:justify-center">
        <div class="photo-ring">
          <img :src="channaPhoto" alt="Sam Channa" class="photo-img" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.photo-ring {
  width: 340px;
  height: 340px;
  border-radius: 50%;
  padding: 8px; /* Thinner border feel */
  /* Updated background to be a softer gradient transition */
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(124, 58, 237, 0.4));
  box-shadow: 0 0 40px rgba(163, 117, 243, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /* Change object-position to center to show full image content */
  object-fit: cover;
  object-position: center; 
  display: block;
}
</style>