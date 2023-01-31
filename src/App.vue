<script setup></script>

<template>
  <Header title="MOFO" />
  <Introduction />
  <Projects />
  <Education />
</template>

<script>
import Header from "./components/Header.vue";
import Projects from "./components/Projects.vue";
import Introduction from "./components/Introduction.vue";
import Education from "./components/Education.vue";

export default {
  name: "App",
  components: {
    Header,
    Introduction,
    Projects,
    Education,
  },
};
</script>
