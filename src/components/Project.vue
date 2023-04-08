<template>
  <div class="p-10 m-10 border-gray shadow-md border">
    <div class="py-5">
      <h1 class="text-3xl">{{ proj.name }}</h1>
    </div>
    <hr />
    <div class="mt-5 flex justify-center">
      <img class="max-h-[500px]" :src="`/images/${proj.img}`" />
    </div>
    <div class="my-10 text-lg">{{ proj.about.motivation }}</div>
    <div class="my-10 text-lg">{{ proj.about.description }}</div>
    <div class="flex w-full justify-between">
      <TechIcons :techs="proj.techs" />
      <ProjectLinks
        :githubLink="proj.githubLink"
        :productLink="proj.productLink"
      />
    </div>
  </div>
</template>

<script>
import TechIcons from "./TechIcons.vue";
import ProjectLinks from "./ProjectLinks.vue";

export default {
  name: "Project",
  props: ["proj"],
  components: { TechIcons, ProjectLinks },
};
</script>

<style scoped></style>
