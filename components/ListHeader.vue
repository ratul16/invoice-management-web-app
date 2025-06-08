<script setup>
const filters = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const showSidebar = ref(false)

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}
</script>

<template>
  <div class="block sm:flex items-center justify-between py-4">
    <div class="info mb-4 sm:mb-0">
      <h1 class="text-4xl">Invoices</h1>
      <p class="text-gray-600 mb-0">There are total 7 invoices</p>
    </div>
    <div class="actions flex items-center gap-4">
      <USelect
        size="xl"
        placeholder="Select status"
        :items="filters"
        class="w-68"
      />
      <UButton
        size="xl"
        icon="lucide:plus"
        label="New Invoice"
        class="cursor-pointer"
        @click="toggleSidebar"
      />
    </div>
    <AddEditForm v-model:is-visible="showSidebar" />
  </div>
</template>

<style lang="scss" scoped></style>
