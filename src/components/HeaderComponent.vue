<template>
  <div class="header">
    <div class="info">
      <h1>Invoices</h1>
      <p>There are total 7 invoices</p>
    </div>
    <div class="action-btn">
      <div class="filter">
        <span>Filter by status</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <button class="btn primary icon" @click="toggleSidebar">
        <i class="fa-solid fa-plus"></i>
        <span>New Invoice</span>
      </button>
    </div>
    <AddEditForm
      v-if="isSidebarOpen"
      :isVisible="isSidebarOpen"
      :invoice="invoiceData"
      @updateInvoice="addInvoice"
      @close="toggleSidebar"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../stores/store";
import AddEditForm from "@/components/AddEditForm.vue";

const store = useStore();
var isSidebarOpen = ref(false);
var invoiceData = ref({
  id: "",
});

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const addInvoice = (newInvoice) => {
  let data = newInvoice;
  data.id = "RN" + Math.floor(1000 + Math.random() * 9000);
  data.total = data.items.reduce((acc, item) => acc + item.total, 0);
  data.status = data.clientName && data.paymentDue ? "pending" : "draft";
  data.createdAt = new Date().toISOString().slice(0, 10);
  store.addInvoice(data);
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .action-btn {
    display: flex;
    align-items: center;
    gap: 40px;

    .filter {
      @include heading-s;
      span {
        margin-right: 10px;
      }
      i {
        color: $purple;
      }
    }
  }
}
</style>
