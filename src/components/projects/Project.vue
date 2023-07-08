<template>
  <div class="p-5 border-gray shadow-md border">
    <div class="py-5">
      <h1 class="text-3xl">{{ proj.name }}</h1>
    </div>
    <hr />
    <div class="flex flex-wrap-reverse items-center justify-center gap-5">
      <div class="relative basis-1/2 grow self-stretch">
        <div class="my-3">
          <div class="text-base">{{ proj.about.motivation }}</div>
          <div class="my-5 text-base">{{ proj.about.description }}</div>
        </div>
        <div class="h-[100px]"></div>
        <div
          class="flex w-full justify-between flex-wrap gap-3 absolute bottom-0"
        >
          <TechIcons :techs="proj.techs" />
          <ProjectLinks
            :githubLink="proj.githubLink"
            :productLink="proj.productLink"
          />
        </div>
      </div>
      <img class="w-[400px] grow" :src="`/images/${proj.img}`" />
    </div>
  </div>
</template>

<script>
import TechIcons from "../TechIcons.vue";
import ProjectLinks from "./ProjectLinks.vue";

export default {
  name: "Project",
  props: ["proj"],
  components: { TechIcons, ProjectLinks },
};
</script>

<style scoped></style>
