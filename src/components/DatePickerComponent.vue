<template>
  <VueDatePicker v-model="date" :enableTimePicker="false" auto-apply class="date-picker"
    @update:model-value="dateSelected" format="yyyy-MM-dd">
    <template #input-icon>
      <i class="fa-regular fa-calendar"></i>
    </template>
  </VueDatePicker>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "DatePickerComponent",
  props: {
    paymentDue: {
      type: String,
      default: ''
    },
  },
  components: {
    VueDatePicker,
  },
  data() {
    return {
      date: "",
    };
  },

  methods: {
    dateSelected() {
      const date = new Date(this.date);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      this.$emit('dateUpdated', `${year}-${month}-${day}`);
    }
  },
  watch: {
    paymentDue(newValue, oldValue) {
      this.date = newValue;
    }
  }
};
</script>

<style lang="scss" scoped>
:root,
.dp__theme_light {
  --dp-input-padding: 12px 20px;
  --dp-border-radius: 4px;
  --dp-font-family: "League Spartan", sans-serif;
  --dp-text-color: #{$body-text-color};
  --dp-border-color: #{$border-color};
  --dp-input-icon-padding: 44px;
  --dp-background-color: #{$body-bg-color};
}

.dp__theme_light {
  --dp-icon-color: #{$grey-dark};
  --dp-primary-color: #{$purple};

  i {
    margin-left: 20px;
  }
}

.dp__theme_dark {
  --dp-icon-color: #{$grey};
  --dp-primary-color: #{$purple-light};

  i {
    margin-left: 20px;
  }
}
</style>