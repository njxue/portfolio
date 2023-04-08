<template>
  <div class="flex flex-row gap-2 items-start flex-wrap">
    <img v-for="tech in techs" class="w-7" :src="getImgUrl(tech)" />
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
