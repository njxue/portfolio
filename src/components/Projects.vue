<template>
  <div id="Projects" class="mb-5 text-4xl font-semibold">
    <h1>Projects</h1>
  </div>
  <hr />
  <div class="mt-10" v-for="proj in Projects">
    <Project :proj="proj" />
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
