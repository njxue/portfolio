<template>
  <div class="flex flex-row space-x-5">
    <img v-for="tech in techs" width="40" :src="getImgUrl(tech)" />
  </div>
</template>

<script>
export default {
  name: "TechIcons",
  props: ["techs"],
  methods: {
    getImgUrl: function (tech) {
      return `src/assets/icons/${tech}.svg`;
    },
  },
};
</script>
