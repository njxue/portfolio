<template>
  <a :href="`#${text}`">
    <div class="flex items-center gap-2">
      <img
        v-if="text === 'Work Experience'"
        class="w-5 h-5"
        src="/icons/briefcase.gif"
      />
      <img
        v-else-if="text === 'Projects'"
        class="w-5 h-5"
        src="/icons/coding.gif"
      />
      <img
        v-else-if="text === 'Coursework'"
        class="w-5 h-5"
        src="/icons/book.gif"
      />
      <p v-if="isScreenWidthAbove520">{{ text }}</p>
    </div>
  </a>
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
  data() {
    return { isScreenWidthAbove520: false };
  },
  created() {
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
  },
  methods: {
    handleWindowResize() {
      this.isScreenWidthAbove520 = window.innerWidth >= 520;
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
