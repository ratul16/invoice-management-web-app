<template>
  <div>
    <h2>InvoiceView</h2>
    {{ $route.params ? $route.params.id : "Not Id Found" }}
  </div>
</template>

<script>
export default {
  name: "InvoiceView",
};
</script>

<style lang="scss" scoped>
</style>