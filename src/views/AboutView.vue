<template>
  <div class="about">
    <h1>Design System</h1>
    <div class="design-system">
      <div>
        <h2>Header L</h2>
        <h4>Header M</h4>
        <h6>Header S</h6>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, totam. Id
        cupiditate recusandae doloremque aspernatur totam tenetur quaerat earum aperiam, quae rerum
        voluptate sapiente dolorem similique perspiciatis dolores aliquid porro?
      </p>
      <div>
        <button class="btn">Default</button>
        <button class="btn primary">Primary</button>
        <button class="btn danger">Danger</button>
        <button class="btn btn-block">Danger</button>
      </div>

      <div>
        <label for="">Input Label</label>
        <input type="text" placeholder="Hello world" />
        <SelectComponent />
        <DatePickerComponent />
      </div>
    </div>
  </div>
</template>

<script>
import DatePickerComponent from "@/components/DatePickerComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
export default {
  name: "AboutView",
  components: {
    SelectComponent,
    DatePickerComponent,
  },
};
</script>

<style lang="scss" scoped>
.about {
  margin: 30px 20px;
}
.design-system {
  display: grid;
  place-content: center;
  gap: 20px;

  h2 {
    @include heading-l;
  }

  h4 {
    @include heading-m;
  }

  h6 {
    @include heading-s;
  }

  p {
    @include body;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>