<template>
  <VueDatePicker v-model="date" :enable-time-picker="false" auto-apply class="date-picker">
    <!-- <template #input-icon>
      <img class="slot-icon" src="@/assets/images/icon-calendar.svg" />
    </template> -->
  </VueDatePicker>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
// import "@/assets/scss/date.css";
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
</style>