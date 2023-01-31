<template>
  <Header title="MOFO" />
  <div class="wrapper">
    <div class="main">
      <Introduction />
      <Projects />
      <Education />
    </div>
  </div>
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

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
.main {
  width: 1300px;
}
</style>
