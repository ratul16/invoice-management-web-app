<template>
  <div class="add-edit-form">
    <!-- <h4>Add Edit Form</h4> -->
    <section>
      <h6>Bill From</h6>
      <div class="row g-3">
        <div class="col-md-12">
          <label for="address" class="form-label">Street Address</label>
          <input type="text" class="form-control" id="address" />
        </div>
        <div class="col-md-4">
          <label for="city" class="form-label">City</label>
          <input type="text" class="form-control" id="city" />
        </div>
        <div class="col-md-4">
          <label for="postcode" class="form-label">Post Code</label>
          <input type="text" class="form-control" id="postcode" />
        </div>
        <div class="col-md-4">
          <label for="country" class="form-label">Country</label>
          <input type="text" class="form-control" id="country" />
        </div>
      </div>
    </section>

    <section>
      <h6 class="heading-s">Bill To</h6>
      <div class="row g-3">
        <div class="col-md-12">
          <label for="name" class="form-label">Client's Name</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="col-md-12">
          <label for="email" class="form-label">Client's Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="col-md-12">
          <label for="address" class="form-label">Street Address</label>
          <input type="text" class="form-control" id="address" />
        </div>
        <div class="col-md-4">
          <label for="city" class="form-label">City</label>
          <input type="text" class="form-control" id="city" />
        </div>
        <div class="col-md-4">
          <label for="postcode" class="form-label">Post Code</label>
          <input type="text" class="form-control" id="postcode" />
        </div>
        <div class="col-md-4">
          <label for="country" class="form-label">Country</label>
          <input type="text" class="form-control" id="country" />
        </div>
        <div class="col-md-6">
          <label for="date" class="form-label">Invoice Date</label>
          <DatePickerComponent />
        </div>
        <div class="col-md-6">
          <label for="terms" class="form-label">Payment Terms</label>
          <SelectComponent />
        </div>
      </div>
    </section>

    <section>
      <h6>Item List</h6>
      <div class="row g-3 justify-content-between align-items-center">
        <div class="col-md-4">
          <label for="address" class="form-label">Item Name</label>
          <input type="text" class="form-control" id="address" />
        </div>
        <div class="col-md-2">
          <label for="city" class="form-label">Qty</label>
          <input type="text" class="form-control" id="city" />
        </div>
        <div class="col-md-2">
          <label for="postcode" class="form-label">Price</label>
          <input type="text" class="form-control" id="postcode" />
        </div>
        <div class="col-md-3">
          <label for="country" class="form-label">Total</label>
          <input type="text" class="form-control" id="country" />
        </div>
        <div class="col-md-1">
          <i class="fa-solid fa-trash"></i>
        </div>
        <div class="col-md-12">
          <button class="btn draft btn-block">
            <i class="fa-solid fa-plus"></i>
            Add New Item
          </button>
        </div>
      </div>
    </section>
    <div class="form-footer">
      <button class="btn draft">Cancel</button>
      <button class="btn primary">Save Changes</button>
    </div>
  </div>
</template>

<script>
import DatePickerComponent from "./DatePickerComponent.vue";
import SelectComponent from "./SelectComponent.vue";

export default {
  name: "AddEditForm",
  components: {
    DatePickerComponent,
    SelectComponent,
  },
};
</script>

<style lang="scss" scoped>
.add-edit-form {
  position: relative;
  h6 {
    color: $purple;
  }
  section {
    margin-bottom: 26px;
  }
  .form-footer {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>