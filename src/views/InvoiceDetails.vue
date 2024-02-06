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
          <button class="btn danger">Delete</button>
          <button class="btn primary">Mark as Paid</button>
        </div>
      </div>
      <div class="content-body">
        <div class="description">
          <div>
            <h6><b>#</b>{{ invoice.id }}</h6>
            <p>
              {{ invoice.description }}
            </p>
          </div>
          <div class="address">
            <!-- {{ invoice.senderAddress }} -->
            <span v-for="(a, index) in invoice.senderAddress" :key="index">
              {{ a }}
            </span>
          </div>
        </div>
        <div class="client-info">
          <div class="date">
            <div>
              <label for="invoice_date">Invoice Date</label>
              <h6 id="invoice_date">{{ invoice.createdAt }}</h6>
            </div>
            <div>
              <label for="payment_due">Payment Date</label>
              <h6 id="payment_due">{{ invoice.paymentDue }}</h6>
            </div>
          </div>
          <div class="bill">
            <label for="bill_to">Bill To</label>
            <h6>{{ invoice.clientName }}</h6>
            <div class="address">
              <span v-for="(a, index) in invoice.clientAddress" :key="index">
                {{ a }}
              </span>
            </div>
          </div>
          <div class="email">
            <label for="bill_to">Sent To</label>
            <h6>{{ invoice.clientEmail }}</h6>
          </div>
        </div>
        <div class="items-preview">
          <div class="item heading">
            <span>Item Name</span>
            <span>Qty</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          <div class="item" v-for="(i, index) in invoice.items" :key="index">
            <span>{{ i.name }}</span>
            <span>{{ i.quantity }}</span>
            <span class="price">{{ i.price.toFixed(2) }}</span>
            <span class="price">{{ i.total.toFixed(2) }}</span>
          </div>
        </div>
        <div class="footer">
          <span> Amount Due </span>
          <h4 class="price">{{ invoice.total.toFixed(2) }}</h4>
        </div>
      </div>
    </div>
    <FormSideBar :isVisible="isSidebarOpen" :invoice="invoice" @close="toggleSidebar" v-if="this.isSidebarOpen" />
  </div>
</template>

<script>
import { useStore } from "@/stores/store";
import FormSideBar from "@/components/FormSideBar.vue";

export default {
  name: "InvoiceDetails",
  components: {
    FormSideBar,
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
    }
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

    &>div {
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

    .description {
      display: flex;
      align-items: start;
      justify-content: space-between;

      h6::first-letter {
        color: $btn-text-color;
        font-weight: 700;
      }

      p {
        // margin-top: 10px;
        color: $btn-text-color;
      }

      .address {
        align-items: end;
      }
    }

    .client-info {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 1fr 1fr 2fr;
      margin-bottom: 30px;

      h6 {
        margin: 10px 0;
      }

      .date div:is(:not(:last-child)) {
        margin-bottom: 20px;
      }

      .address {
        align-items: start;
      }
    }

    .items-preview {
      display: flex;
      flex-direction: column;
      gap: 36px;
      padding: 30px;
      background-color: $body-bg-color;
      border-radius: 8px 8px 0 0;

      .item {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 10px;
        align-items: center;

        &.heading {
          @include body;
        }

        span {
          flex: 1 0;

          &:last-child {
            text-align: right;
          }

          &:nth-child(2) {
            text-align: center;
          }

          &:nth-child(3) {
            text-align: right;
          }
        }
      }
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px var(--padding);
      background-color: $element-bg-color;
      color: $white;
      border-radius: 0 0 8px 8px;
    }
  }
}

@include media-queries("tab") {}
</style>