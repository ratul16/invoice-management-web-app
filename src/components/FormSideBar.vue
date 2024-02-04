<template>
  <div class="form-side-bar">
    <div class="form-body">
      <AddEditForm />

      <!-- <div class="form-footer">
        <div class="add">
          <button class="btn">Cancel</button>
          <button class="btn primary">Save Changes</button>
        </div>
        <div class="edit">
          <button class="btn">Discard</button>
          <div>
            <button class="btn draft">Save as Draft</button>
            <button class="btn primary">Save & Send</button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import AddEditForm from "@/components/AddEditForm.vue";

export default {
  name: "FormSideBar",
  components: {
    AddEditForm,
  },
  data() {
    return {
      isVisible: false,
    };
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
</style>