<template>
  <header class="p-5 border-b-2 border-teal-900">
    <h1 class="text-4xl">Jing Xue</h1>
    <div class="flex space-x-4">
      <Button text="Projects" />
      <Button text="Education" />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: fixed;
  width: 100%;
  top: 0;
  background: white;
}
</style>
