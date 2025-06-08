<script setup>
const { state } = useGlobalStore()
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4">
    <ListHeader class="pt-20" />
    {{ state.invoice.length }} Invoices
    <InvoiceList class="mb-20" />
  </div>
</template>

<style lang="scss" scoped></style>
