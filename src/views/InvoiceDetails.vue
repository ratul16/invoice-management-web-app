<template>
  <div class="invoice-details">
    <div class="return" @click="$router.push({ name: 'home' })">
      <i class="fa-solid fa-angle-left"></i>
      <span>Go Back</span>
    </div>
    <!-- {{ $route.params ? $route.params.id : "Not Id Found" }} -->
    <div class="invoice" v-if="invoice">
      <div class="header">
        <div>
          <span class="label">Status</span>
          <span class="status" :class="invoice.status ? invoice.status : ''">
            <i class="fa-solid fa-circle"></i>
            {{ invoice.status ? invoice.status : "" }}
          </span>
        </div>
        <div class="action-btn">
          <button class="btn" @click="toggleSidebar">Edit</button>
          <button
            type="button"
            class="btn danger"
            data-bs-toggle="modal"
            data-bs-target="#confirmationModal"
            @click="openConfirmationModal('delete')"
          >
            Delete
          </button>
          <button
            v-if="invoice.status !== 'paid'"
            type="button"
            class="btn primary"
            data-bs-toggle="modal"
            data-bs-target="#confirmationModal"
            @click="openConfirmationModal('payment')"
          >
            Mark as Paid
          </button>
        </div>
      </div>
      <div class="content-body">
        <section class="row g-2 justify-content-between align-items-start mb-4">
          <div class="col-md-2 col-sm-6">
            <h6 class="mb-2 invoice-id"><b>#</b>{{ invoice.id }}</h6>
            <p class="description">
              {{ invoice.description }}
            </p>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="address">
              <span v-for="(a, index) in invoice.senderAddress" :key="index">
                {{ a }}
              </span>
            </div>
          </div>
        </section>
        <section class="client-info mb-4">
          <div class="row g-2 justify-content-between align-items-start">
            <div class="col-md-3 col-sm-6">
              <div>
                <label for="invoice_date" class="mb-2">Invoice Date</label>
                <h6 id="invoice_date" class="mb-2">{{ invoice.createdAt }}</h6>
              </div>
              <div>
                <label for="payment_due" class="mb-2">Payment Date</label>
                <h6 id="payment_due" class="mb-2">{{ invoice.paymentDue }}</h6>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <label for="bill_to" class="mb-2">Bill To</label>
              <h6 class="mb-2">{{ invoice.clientName }}</h6>
              <div class="address">
                <span v-for="(a, index) in invoice.clientAddress" :key="index">
                  {{ a }}
                </span>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <label for="bill_to" class="mb-2">Sent To</label>
              <h6>{{ invoice.clientEmail }}</h6>
            </div>
          </div>
        </section>
        <div class="items-preview table-responsive">
          <table class="table table-borderless">
            <thead>
              <tr class="heading">
                <th scope="col">Item Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(i, index) in invoice.items" :key="index">
                <td scope="row">{{ i.name }}</td>
                <td>{{ i.quantity }}</td>
                <td>
                  <span class="price">{{ i.price.toFixed(2) }}</span>
                </td>
                <td>
                  <span class="price">{{ i.total.toFixed(2) }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="footer">
          <span> Amount Due </span>
          <h4 class="price">{{ invoice.total.toFixed(2) }}</h4>
        </div>
      </div>
    </div>
    <AddEditForm
      v-if="this.isSidebarOpen"
      :isVisible="isSidebarOpen"
      :invoice="invoice"
      @close="toggleSidebar"
      @updateInvoice="updateInvoice"
    />
    <!-- Modal -->
    <div
      class="modal fade"
      id="confirmationModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <h4 class="mb-4">
              Confirm {{ isAction === "delete" ? "Deletion" : "Payment Status" }}
            </h4>
            <p>
              Are you sure you want to
              {{ isAction === "delete" ? "delete" : "mark as paid" }} invoice <b>#</b
              >{{ invoice && invoice.id ? invoice.id : "" }}? This action cannot be undone.
            </p>
          </div>
          <div class="modal-footer">
            <button ref="Close" type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
            <button
              v-if="isAction === 'delete'"
              type="button"
              class="btn danger"
              @click="deleteInvoice"
            >
              Delete
            </button>
            <button type="button" class="btn primary" @click="markAsPaid" v-else>
              Mark as paid
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "@/stores/store";
import AddEditForm from "@/components/AddEditForm.vue";

export default {
  name: "InvoiceDetails",
  components: {
    AddEditForm,
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      invoice: null,
      isSidebarOpen: false,
      isAction: "",
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.invoice = this.store.getInvoiceDetails(this.$route.params.id)[0];
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    updateInvoice(data) {
      let formattedData = data;
      formattedData.total = formattedData.items.reduce((acc, item) => acc + item.total, 0);
      this.invoice = formattedData;
      this.store.updateInvoice(formattedData);
    },
    openConfirmationModal(action) {
      this.isAction = action;
    },
    markAsPaid() {
      this.$refs.Close.click();
      let formattedData = this.invoice;
      formattedData.status = "paid";
      this.store.updateInvoice(formattedData);
    },
    deleteInvoice() {
      this.$refs.Close.click();
      this.store.deleteInvoice(this.invoice.id);
      this.$router.push("/");
    },
  },
  computed: {
    getTotalAmount() {
      return this.invoice.items.reduce((acc, item) => acc + item.total, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.invoice-details {
  --padding: 30px;
  margin-bottom: 20px;

  .address {
    display: flex;
    flex-direction: column;
    gap: 4px;
    @include body;
    color: $btn-text-color;
  }

  .price::before {
    content: "£";
    margin-right: 4px;
  }

  width: calc(100% - 80px);

  .return {
    margin-bottom: 20px;
    cursor: pointer;

    i {
      margin-right: 26px;
      color: $purple;
    }

    span {
      transition: color 0.3s ease-in-out;
      @include heading-s;

      &:hover {
        color: $purple;
      }
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $bg-color;
    padding: var(--padding);
    margin-bottom: 26px;
    border-radius: 8px;
    box-shadow: $shadow-light;

    & > div {
      .label {
        color: $btn-text-color;
        @include body;
      }

      .status {
        padding: 14px 24px;
        margin-left: 20px;
      }
    }

    .action-btn button:is(:not(:last-child)) {
      margin-right: 10px;
    }
  }

  .content-body {
    background-color: $bg-color;
    padding: var(--padding);
    border-radius: 8px;
    box-shadow: $shadow-light;
    @include body;
    .invoice-id::first-letter {
      color: $btn-text-color;
      font-weight: 700;
    }
    .description {
      color: $btn-text-color;
    }

    .items-preview {
      padding: 30px;
      background-color: $body-bg-color;
      border-radius: 8px 8px 0 0;
      &::-webkit-scrollbar {
        width: 5px;
        height: 6px;
        // border-radius: 50%;
      }
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px var(--padding);
      background-color: $footer-bg-color;
      color: $white;
      border-radius: 0 0 8px 8px;
    }
  }
}

@include media-queries("tab") {
}
</style>
