<template>
  <div class="container">
    <div class="header">
      <h1>Projects</h1>
    </div>
    <div class="projects" v-for="proj in Projects">
      <Project :proj="proj" />
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
import Projects from "../helpers/Projects";

export default {
  name: "Projects",
  components: {
    Project,
  },
  data() {
    return { Projects };
  },
};
</script>

<style scoped>
.container {
  border: solid 1px;
}

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
