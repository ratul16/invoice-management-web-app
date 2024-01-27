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
p {
  @include body;
}
.home {
  width: calc(100% - 80px);
  max-width: 1080px;
  margin: 10px auto;
}
</style>