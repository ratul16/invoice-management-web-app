<template>
  <div class="custom-select" @click="toggleOptions">
    <div class="select-styled" :class="toggle ? 'active' : ''">
      <span>
        {{ label }}
      </span>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <ul v-if="toggle" class="select-options">
      <li v-for="option in options" :key="option" @click="getSelectedOption(option, $event)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  data() {
    return {
      toggle: false,
      label: "Select an option",
      options: ["Option 1", "Option 2", "Option 3"],
    };
  },
  methods: {
    toggleOptions() {
      this.toggle = !this.toggle;
    },
    getSelectedOption(option, event) {
      event.stopPropagation();
      this.label = option;
      this.selectedOption = option;
      this.toggleOptions();
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  cursor: pointer;
  // span {
  //   margin-left: auto;
  // }
}
.custom-select select {
  display: none;
}

.select-styled {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-radius: 4px;
  @include button;
  border: 1px solid $border-color;
  color: $body-text-color;
  background-color: $white;
  width: 100%;
  box-sizing: border-box;
  &.active {
    border: 1px solid $purple;
    outline: none;
  }

  i {
    color: $purple;
  }
}

.select-options {
  @include button;
  position: absolute;
  z-index: 999;
  width: 100%;
  max-height: 200px;
  color: $body-text-color;
  background-color: $body-bg-color;
  overflow-y: auto;
  list-style: none;
  border: 1px solid $border-color;
  border-radius: 8px;
  top: 60px;
  box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
  li {
    padding: 14px 20px;
    transition: $transition;
    &:is(:not(:last-child)) {
      border-bottom: 1px solid $border-color;
    }

    &:hover {
      color: $purple;
    }
  }
}
</style>