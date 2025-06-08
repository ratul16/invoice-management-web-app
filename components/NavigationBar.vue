<script setup>
defineProps({
  links: Array,
})

const isOpen = ref(false)
function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 relative z-50">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <UIcon
          name="devicon:nuxtjs"
          class="size-8"
        />
      </NuxtLink>

      <!-- Right side controls -->
      <div class="flex items-center space-x-2 md:order-2">
        <ColorModeButton />
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          :aria-expanded="isOpen"
          @click="toggleMenu"
        >
          <span class="sr-only">Toggle menu</span>
          <UIcon
            :name="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            class="w-5 h-5"
          />
        </button>
      </div>

      <!-- Desktop Menu -->
      <div
        id="navbar-default"
        class="hidden md:block md:w-auto"
      >
        <ul
          class="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 md:space-x-8 rtl:space-x-reverse border md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent"
        >
          <li
            v-for="(link, index) in links"
            :key="index"
          >
            <a
              :href="link.to"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Floating Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute top-full left-4 right-4 mt-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 md:hidden z-40"
      >
        <ul class="space-y-2">
          <li
            v-for="(link, index) in links"
            :key="`mobile-${index}`"
          >
            <a
              :href="link.to"
              class="block w-full py-2 px-3 rounded text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
