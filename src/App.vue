<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <!-- <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" width="125" height="125" /> -->
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
