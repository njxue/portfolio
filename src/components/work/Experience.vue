<template>
  <div
    class="experience p-5 border-gray shadow-lg border rounded-lg invisible dark:bg-[#252525] dark:border-[#252525]">
    <div class="pb-5 text-2xl flex justify-start items-center gap-3">
      <img class="w-20" :src="experience.logo" />
      <div>
        <p>{{ experience.role }}</p>
        <p class="text-sm text-blue-900 dark:text-red-600">
          {{ experience.name }}
        </p>
        <p class="text-lg">
          {{ experience.startDate }} - {{ experience.endDate }}
        </p>
      </div>
    </div>
    <hr class="dark:border-[#3d3d3d]" />
    <div class="my-3">{{ experience.companyDescription }}</div>
    <ul class="list-disc list-outside pl-4">
      <li class="my-2" v-for="deliverable in experience.deliverables">
        {{ deliverable }}
      </li>
    </ul>
    <div class="h-[20px]"></div>
    <div class="bottom-0"><TechIcons :techs="experience.techs" /></div>
  </div>
</template>

<script>
import TechIcons from "../TechIcons.vue";
export default {
  name: "Experience",
  props: ["experience"],
  components: { TechIcons },
};
</script>
