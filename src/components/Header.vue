<template>
  <header>
    <h1>Welcome!</h1>
    <div class="btns">
      <Button text="Click here!" bgColor="lightgreen" />
      <Button text="Click here too!" bgColor="lightblue" />
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  props: ["title"],
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  border: solid 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.btns {
  height: 100%;
  border: solid 1px;
}
</style>
