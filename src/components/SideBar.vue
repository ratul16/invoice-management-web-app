<template>
  <div class="sidebar">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="" srcset="" />
    </div>
    <div class="wrapper">
      <div class="toggle-theme" @click="toggleTheme">
        <img src="@/assets/images/icon-moon.svg" alt="" srcset="" v-if="isDarkMode" />
        <img src="@/assets/images/icon-sun.svg" alt="" srcset="" v-else />
      </div>
      <div class="avatar">
        <img src="@/assets/images/image-avatar.jpg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "../stores/store";
export default {
  name: "SiderBar",
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.store.setTheme(this.isDarkMode ? "dark" : "light");
      document.documentElement.setAttribute("theme", this.store.theme);
    },
    fetchTheme() {
      this.isDarkMode = this.store.theme === "dark" ? true : false;
      document.documentElement.setAttribute("theme", this.store.theme);
    },
  },
  mounted() {
    this.fetchTheme();
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 100px;
  height: 100vh;
  border-radius: 0 20px 20px 0;
  background-color: $element-bg-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .logo {
    min-height: 80px;
    border-radius: 0 20px 20px 0;
    width: 100%;
    background-color: $purple;
    display: grid;
    place-content: center;
    img {
      width: 50px;
    }
  }
  .wrapper {
    .toggle-theme {
      // border: 1px solid red;
      cursor: pointer;
      padding: 26px;
      img {
        // border: 1px solid yellow;
        width: 24px;
      }
    }

    .avatar {
      min-height: 80px;
      border-top: 1px solid $border-color;
      display: grid;
      place-content: center;
      img {
        border-radius: 50%;
        width: 34px;
      }
    }
  }
}
</style>