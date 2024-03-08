<template>
  <div class="home container">
    <HeaderComponent />
    <InvoiceListView />
  </div>
</template>

<script>
import InvoiceListView from "@/components/InvoiceListView.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "HomeView",
  components: {
    InvoiceListView,
    HeaderComponent,
  },
};
</script>

<style lang="scss" scoped></style>
