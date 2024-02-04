<template>
  <VueDatePicker v-model="date" :enable-time-picker="false" auto-apply class="date-picker">
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
  components: {
    VueDatePicker,
  },
  data() {
    return {
      date: "",
    };
  },
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