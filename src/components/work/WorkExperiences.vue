<template>
  <div id="Work Experience">
    <div class="sectionHeader p-2 mb-5 text-4xl text-center font-mono">
      <h1>Work Experience</h1>
    </div>
    <hr />
    <div class="p-2 mt-10" v-for="exp in WorkExperiences">
      <Experience :experience="exp" />
    </div>
  </div>
</template>

<script>
import WorkExperiences from "/src/data/WorkExperiences";
import Experience from "./Experience.vue";
export default {
  name: "WorkExperiences",
  components: { Experience },
  data() {
    return { WorkExperiences };
  },
};
</script>
