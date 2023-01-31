<template>
  <a :href="`#${text}`" :style="{ background: bgColor }">{{ text }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    bgColor: {
      default: "white",
    },
  },
};
</script>

<style scoped>
button {
  height: 100%;
  cursor: pointer;
}

button:hover {
  opacity: 50%;
}
</style>
