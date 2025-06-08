<script setup>
import ColorModeButton from './ColorModeButton.vue'

defineProps({
  links: Array,
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center py-4">
    <!-- Navigation Bar -->
    <nav class="bg-zinc-900/70 backdrop-blur-sm p-2 rounded-full shadow-lg">
      <ul class="flex items-center space-x-2">
        <li
          v-for="link in links"
          :key="link.label"
          class="text-zinc-400 hover:text-zinc-100 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300"
        >
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
        <!-- Separator -->
        <div class="border-l border-zinc-700 h-6 mx-2" />

        <!-- Theme Toggle Button -->
        <li>
          <ColorModeButton />
        </li>
      </ul>
    </nav>
  </header>
</template>
