<template>
  <div class="flex flex-row space-x-5">
    <img v-for="tech in techs" width="30" :src="getImgUrl(tech)" />
  </div>
</template>

<script>
export default {
  name: "TechIcons",
  props: ["techs"],
  methods: {
    getImgUrl: function (tech) {
      return `/public/icons/${tech}.svg`;
    },
  },
};
</script>
