<template>
  <div class="flex flex-row gap-2 flex-wrap items-center">
    <img v-for="tech in techs" class="w-8" :src="getImgUrl(tech)" />
  </div>
</template>

<script>
export default {
  name: "TechIcons",
  props: ["techs"],
  methods: {
    getImgUrl: function (tech) {
      return `/icons/${tech}.svg`;
    },
  },
};
</script>
