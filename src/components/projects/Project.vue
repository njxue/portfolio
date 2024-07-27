<template>
  <div
    class="mt-10 project p-5 pb-3 border-gray shadow-lg border rounded-lg invisible dark:bg-[#252525] dark:border-[#252525]">
    <div class="pb-5 flex justify-start gap-5 items-center">
      <img v-if="proj.logo" class="w-12" :src="`/icons/${proj.logo}`" />
      <h1 class="text-3xl">{{ proj.name }}</h1>
    </div>
    <hr class="dark:border-[#3d3d3d]" />
    <div class="flex flex-wrap-reverse items-center justify-center gap-5">
      <div class="relative basis-1/2 grow self-stretch">
        <div class="my-3">
          <div class="text-base">{{ proj.about.motivation }}</div>
          <div class="my-5 text-base">{{ proj.about.description }}</div>
        </div>
        <div class="h-[100px]"></div>
        <div
          class="flex w-full justify-between flex-wrap gap-3 absolute bottom-0">
          <TechIcons :techs="proj.techs" />
          <ProjectLinks
            :githubLink="proj.githubLink"
            :productLink="proj.productLink" />
        </div>
      </div>
      <img class="w-[400px] grow py-2" :src="`/images/${proj.img}`" />
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
