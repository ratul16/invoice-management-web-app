<template>
  <div class="form-side-bar" :class="isVisible ? 'active' : ''">
    <div class="form-body">
      <h4 v-if="invoice" class="mb-4">
        {{ invoice.id ? 'Edit' : 'New Invoice' }}
        <b>#</b>{{ invoice.id }}
      </h4>
      <div class="add-edit-form">
        <!-- <h4>Add Edit Form</h4> -->
        <!-- {{ formData }} -->
        <section>
          <h6>Bill From</h6>
          <div class="row g-3">
            <div class="col-md-12">
              <label for="address" class="form-label">Street Address</label>
              <input type="text" class="form-control" id="address" v-model="formData.senderAddress.street" />
            </div>
            <div class="col-md-4">
              <label for="city" class="form-label">City</label>
              <input type="text" class="form-control" id="city" v-model="formData.senderAddress.city" />
            </div>
            <div class="col-md-4">
              <label for="postcode" class="form-label">Post Code</label>
              <input type="text" class="form-control" id="postcode" v-model="formData.senderAddress.postCode" />
            </div>
            <div class="col-md-4">
              <label for="country" class="form-label">Country</label>
              <input type="text" class="form-control" id="country" v-model="formData.senderAddress.country" />
            </div>
          </div>
        </section>

        <section>
          <h6 class="heading-s">Bill To</h6>
          <div class="row g-3">
            <div class="col-md-12">
              <label for="name" class="form-label">Client's Name</label>
              <input type="text" class="form-control" id="name" v-model="formData.clientName" />
            </div>
            <div class="col-md-12">
              <label for="email" class="form-label">Client's Email</label>
              <input type="email" class="form-control" id="email" v-model="formData.clientEmail" />
            </div>
            <div class="col-md-12">
              <label for="address" class="form-label">Street Address</label>
              <input type="text" class="form-control" id="address" v-model="formData.clientAddress.street" />
            </div>
            <div class="col-md-4">
              <label for="city" class="form-label">City</label>
              <input type="text" class="form-control" id="city" v-model="formData.clientAddress.city" />
            </div>
            <div class="col-md-4">
              <label for="postcode" class="form-label">Post Code</label>
              <input type="text" class="form-control" id="postcode" v-model="formData.clientAddress.postCode" />
            </div>
            <div class="col-md-4">
              <label for="country" class="form-label">Country</label>
              <input type="text" class="form-control" id="country" v-model="formData.clientAddress.country" />
            </div>
            <div class="col-md-6">
              <label for="date" class="form-label">Invoice Date</label>
              <DatePickerComponent :paymentDue="formData.paymentDue" @dateUpdated="dateUpdated" />
            </div>
            <div class="col-md-6">
              <label for="terms" class="form-label">Payment Terms</label>
              <select v-model="formData.paymentTerms" class="form-select" id="terms">
                <option value="1">Net 1 Day</option>
                <option value="7">Net 7 Days</option>
                <option value="14">Net 14 Days</option>
                <option value="30">Net 30 Days</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          <h6>Item List</h6>
          <div class="row g-3">
            <div class="col-md-12">
              <div class="row justify-content-between align-items-center">
                <div class="col-md-4">
                  <label for="item-name" class="form-label">Item Name</label>
                </div>
                <div class="col-md-2">
                  <label for="qty" class="form-label">Qty</label>
                </div>
                <div class="col-md-3">
                  <label for="price" class="form-label">Price</label>
                </div>
                <div class="col-md-2">
                  <label for="total" class="form-label">Total</label>
                </div>
                <div class="col-md-1"></div>
              </div>
              <div class="row justify-content-between align-items-center mb-2" v-for="(i, index) in formData.items"
                :key="index">
                <div class="col-md-4">
                  <input type="text" class="form-control" :id="`item-name-${index}`" v-model="i.name" />
                </div>
                <div class="col-md-2">
                  <input type="text" class="form-control" :id="`qty-${index}`" v-model="i.quantity" />
                </div>
                <div class="col-md-3">
                  <input type="text" class="form-control" :id="`price-${index}`" v-model="i.price" />
                </div>
                <div class="col-md-2">
                  {{ i.quantity * i.price }}
                </div>
                <div class="col-md-1" :id="index">
                  <i class="fa-solid fa-trash"></i>
                </div>
              </div>
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
          <button v-if="!invoice.id" class="btn danger" @click="close">Discard</button>
          <button class="btn draft" @click="close">Cancel</button>
          <button class="btn primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePickerComponent from "./DatePickerComponent.vue";

export default {
  name: "FormSideBar",
  components: {
    DatePickerComponent,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    invoice: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {
      formData: {
        senderAddress: {},
        clientAddress: {},
        items: [
          { name: "Banner Design", quantity: 1, price: 156, total: 156 },
          { name: "Email Design", quantity: 2, price: 200, total: 400 }
        ]
      },
    };
  },
  mounted() {
    if (this.isVisible) {
      this.formData = JSON.parse(JSON.stringify(this.invoice));
      // console.log(this.invoice);
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    dateUpdated(val) {
      this.formData.paymentDue = val;
    }
  },
};
</script>

<style lang="scss" scoped>
.form-side-bar {
  ::-webkit-scrollbar {
    width: 0px;
  }

  position: relative;
  z-index: 5;
  transition: all 0.3s ease-in-out;

  .form-body {
    overflow-y: scroll;
    position: fixed;
    left: 75px;
    top: 0;
    width: 620px;
    height: 100%;
    background-color: $bg-color;
    box-shadow: -80px 0px $bg-color;
    border-radius: 0 20px 20px 0;
    padding: 30px;
    translate: -700px;
    transition: all 0.3s ease-in-out;
    // .form-footer {
    //   position: absolute;
    //   bottom: 0;
    //   width: ;
    //   max-height: 100px;
    //   background: red;
    //   padding: 20px;

    //   &.add,
    //   .edit {
    //     widows: 100%;
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-between;
    //     .draft {
    //       margin-right: 10px;
    //     }
    //   }
    // }
  }

  &::before {
    content: "";
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 50%;
    z-index: -1;
  }

  &.active {
    .form-body {
      translate: 0;
    }

    &::before {
      content: "";
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: $black;
      opacity: 50%;
      z-index: -1;
    }
  }

  .add-edit-form {
    position: relative;

    h6 {
      color: $purple;
    }

    section {
      margin-bottom: 26px;
    }

    .form-footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 10px;

      .draft {
        margin-left: auto;
      }
    }
  }
}
</style>