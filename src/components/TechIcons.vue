<template>
  <div class="flex flex-row gap-2 flex-wrap items-center h-[50px]">
    <div
      v-for="tech in techs"
      @mouseover="hoveredIcon = tech?.name"
      @mouseleave="hoveredIcon = ''"
      class="h-full w-8 flex flex-col justify-center items-center gap-1">
      <img class="h-7 grow" :src="getImgUrl(tech)" />
      <div
        :class="`${
          hoveredIcon == tech?.name ? 'visible' : 'invisible'
        } text-[10px] mt-auto whitespace-nowrap`">
        {{ tech?.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechIcons",
  props: ["techs"],
  methods: {
    getImgUrl: function (tech) {
      return `/icons/${tech?.icon}`;
    },
  },
  data() {
    return { hoveredIcon: "" };
  },
};
</script>
