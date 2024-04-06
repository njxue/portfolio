<template>
  <div class="flex flex-row space-x-5">
    <a
      v-for="[platform, link] in Object.entries(socials)"
      :href="link"
      target="_blank"
      rel="noreferrer">
      <img width="30" :src="getImgUrl(platform)" />
    </a>
  </div>
</template>

<script>
export default {
  name: "TechIcons",
  props: ["socials"],
  methods: {
    getImgUrl: function (platform) {
      return `/icons/${platform}.svg`;
    },
  },
};
</script>
