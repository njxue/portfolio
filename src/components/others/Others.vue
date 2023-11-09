<template>
  <div id="Others">
    <div
      class="sectionHeader p-2 mb-5 text-4xl text-center font-mono invisible">
      <h1>Others</h1>
    </div>
    <hr />
    <div
      class="other flex flex-row flex-wrap justify-stretch gap-3 invisible mt-7">
      <div
        class="p-5 flex-1 min-w-[250px] border-gray shadow-lg border rounded dark:bg-[#252525] dark:border-[#252525]"
        v-for="others in Others">
        <div class="mb-2 flex justify-start gap-5 items-center">
          <img v-if="others.icon" class="w-12" :src="`/icons/${others.icon}`" />
          <h1 class="text-2xl mb-2">{{ others.title }}</h1>
        </div>
        <hr class="dark:border-[#3d3d3d]" />
        <div class="mt-2" :id="others.id"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Others from "/src/data/Others";
export default {
  name: "Others",
  data() {
    return { Others };
  },
  mounted() {
    Others.forEach((o) => {
      const e = document.getElementById(o.id);
      if (e) {
        e.innerHTML = o.description;
      }
    });
  },
};
</script>
