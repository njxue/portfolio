<template>
  <div class="flex flex-row gap-2 items-center">
    <a
      v-if="productLink"
      :href="productLink"
      class="w-8"
      target="_blank"
      rel="noreferrer">
      <img src="/icons/openInNewWindow.svg" />
    </a>
    <a :href="githubLink" class="w-8" target="_blank" rel="noreferrer"
      ><img src="/icons/github.svg"
    /></a>
  </div>
</template>

<script>
export default {
  name: "ProjectLinks",
  props: ["githubLink", "productLink"],
};
</script>
