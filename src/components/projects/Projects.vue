<template>
  <div id="Projects">
    <div
      class="sectionHeader p-2 mb-5 text-4xl text-center font-mono invisible">
      <h1>Projects</h1>
    </div>
    <hr />

    <Project :proj="proj" v-for="proj in Projects" />
  </div>
</template>

<script>
import Project from "./Project.vue";
import Projects from "/src/data/Projects";

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
