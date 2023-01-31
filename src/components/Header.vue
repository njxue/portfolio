<template>
  <header class="p-5 bg-teal-900">
    <h1 class="text-4xl text-white">Jing Xue</h1>
    <div class="btns">
      <Button text="Projects" bgColor="lightgreen" />
      <Button text="Education" bgColor="lightblue" />
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
