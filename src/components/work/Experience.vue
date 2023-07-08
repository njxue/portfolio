<template>
  <div class="p-5 border-gray shadow-md border">
    <div class="py-5 text-2xl flex justify-start items-center gap-3">
      <img class="w-20" :src="experience.logo" />
      <div>
        <span>{{ experience.role }} @ </span>
        <span class="text-blue-900"> {{ experience.name }}</span>
        <p class="text-lg">
          {{ experience.startDate }} - {{ experience.endDate }}
        </p>
      </div>
    </div>
    <hr />
    <div class="my-3">{{ experience.companyDescription }}</div>
    <ul></ul>
    <li class="my-2" v-for="deliverable in experience.deliverables">
      {{ deliverable }}
    </li>
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
