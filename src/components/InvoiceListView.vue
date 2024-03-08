<template>
  <div class="invoice-list">
    <div class="invoice-wrapper" v-if="invoices.length">
      <div
        class="invoice-card"
        v-for="invoice in invoices"
        :key="invoice.id"
        @click="getInvoiceDetails(invoice.id)"
      >
        <span class="id"> <b>#</b>{{ invoice.id }} </span>
        <span class="due"> Due {{ invoice.paymentDue }} </span>
        <span class="name">
          {{ invoice.clientName }}
        </span>
        <span class="total"> £ {{ invoice.total }} </span>
        <span class="badge status" :class="invoice.status">
          <i class="fa-solid fa-circle"></i>
          {{ invoice.status }}
        </span>
        <i class="fa-solid fa-chevron-right icon"></i>
      </div>
    </div>
    <div class="empty" v-else>
      <div>
        <img src="@/assets/images/illustration-empty.svg" alt="" srcset="" />
        <div class="content">
          <h4>There is nothing here</h4>
          <p>Create an invoice by clicking the <b>New Invoice</b> button and get started</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "../stores/store";

export default {
  name: "InvoiceListView",
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      invoices: [],
    };
  },
  mounted() {
    if (this.store.invoiceList.length) {
      this.invoices = this.store.getInvoiceList;
    }
  },
  methods: {
    getInvoiceDetails(id) {
      this.$router.push({
        name: "invoice",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.invoice-list {
  .invoice-wrapper {
    // max-height: 540px;
    // overflow-y: scroll;
    display: grid;
    gap: 16px;

    .invoice-card {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 0 14px;
      box-shadow: $shadow-light;
      background-color: $bg-color;
      border-radius: 8px;
      border: 1px solid $border-color;
      transition: border 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        border-color: $border-color;
      }

      span {
        flex: 1 0;
        padding: 24px;
      }

      .status {
        padding: 10px 0;
      }

      .icon {
        color: $purple;
        margin: 0 15px;
      }

      .id {
        &::first-letter {
          color: $btn-text-color;
          font-weight: 700;
        }
      }

      .name,
      .due {
        @include body;
        color: $btn-text-color;
      }

      .total,
      .id {
        @include heading-s;
      }

      .total {
        text-align: right;
      }
    }
  }

  .empty {
    min-height: 500px;
    display: grid;
    place-items: center;
    text-align: center;

    img {
      margin-bottom: 30px;
    }

    .content {
      h4 {
        @include heading-s;
        margin-bottom: 10px;
      }

      p {
        color: $grey-dark;
        @include body;
        margin: 0 auto;
        width: 50%;
      }
    }
  }
}
</style>
