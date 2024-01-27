<template>
  <div class="home">
    <HeaderComponent />
    <InvoiceList />
  </div>
</template>

<script>
import InvoiceList from "@/components/invoiceList.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "HomeView",
  components: {
    InvoiceList,
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