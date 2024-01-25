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
      <button class="btn primary icon">
        <i class="fa-solid fa-plus"></i>
        New Invoice
      </button>
    </div>
  </div>
</template>

<script>
export default {};
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