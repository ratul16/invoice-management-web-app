<script setup>
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <SideBar />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
