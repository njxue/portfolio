<template>
  <Header title="MOFO" />
  <div class="mt-[70px]">
    <Introduction />
  </div>
  <div class="flex justify-center">
    <div class="w-[1200px]">
      <div>
        <Projects />
      </div>
      <div class="mt-10">
        <Education />
      </div>
    </div>
  </div>

  <div v-if="jumpTop" @click="handleClick" class="hover:cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="fixed bottom-10 right-10 w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
      />
    </svg>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Projects from "./components/Projects.vue";
import Introduction from "./components/Introduction.vue";
import Education from "./components/Coursework.vue";

export default {
  name: "App",
  components: {
    Header,
    Introduction,
    Projects,
    Education,
  },
  mounted() {
    window.onscroll = this.handleScroll;
  },
  data() {
    return { jumpTop: false };
  },
  methods: {
    handleScroll() {
      this.jumpTop = window.scrollY > 0;
    },
    handleClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
