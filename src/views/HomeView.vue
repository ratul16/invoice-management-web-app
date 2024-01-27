<template>
  <div class="home">
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

<style lang="scss" scoped>
.home {
  width: calc(100% - 80px);
}
</style>