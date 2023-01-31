<template>
  <div class="p-10 m-10 border-gray shadow-md border">
    <div class="py-5">
      <h1 class="text-5xl">{{ proj.name }}</h1>
    </div>
    <hr />
    <div class="mt-5 flex justify-center">
      <img class="w-[85%]" :src="`src/assets/${proj.name}.PNG`" />
    </div>
    <div class="my-10 text-xl">{{ proj.description }}</div>
    <TechIcons :techs="proj.techs" />
  </div>
</template>

<script>
import TechIcons from "./TechIcons.vue";

export default {
  name: "Project",
  props: ["proj"],
  components: { TechIcons },
};
</script>

<style scoped></style>
