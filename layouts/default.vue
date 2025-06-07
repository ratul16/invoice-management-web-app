<script setup>
const links = ref([
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Login', to: '/login' },
])
</script>

<template>
  <div>
    <AppHeader :links="links" />
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
