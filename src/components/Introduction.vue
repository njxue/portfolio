<template>
  <div class="py-[50px] mb-10 border-solid bg-slate-100 font-mono">
    <div
      class="px-10 max-w-[1000px] m-auto flex justify-center flex-wrap-reverse gap-7 items-center "
    >
      <div class="basis-1/2 grow">
        <div>
          <div class="text-4xl font-bold" id="greeting"></div>
          <div class="text-2xl mt-3" id="large"></div>
          <div class="text-xl mt-10" id="small"></div>
        </div>
        <div class="mt-10 flex gap-x-4">
          <SocialsIcons :socials="Myself.socials" />
          <a
            href="https://github.com/njxue/Resume/blob/main/NgJingXue_Resume.pdf"
            ><div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-slate-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              <p class="text-slate-500">Resume</p>
            </div></a
          >
        </div>
      </div>
      <img src="/images/me.jpeg" class="object-cover rounded-full" />
    </div>
  </div>
</template>

<script>
import Myself from "../helpers/Myself";
import SocialsIcons from "./SocialsIcons.vue";

export default {
  name: "Introduction",
  components: [SocialsIcons],
  data() {
    return { Myself };
  },
  components: { SocialsIcons },
};
window.onload = () => {
  document.getElementById("greeting").innerHTML = Myself.greeting;
  document.getElementById("large").innerHTML = Myself.large;
  document.getElementById("small").innerHTML = Myself.small;
};
</script>

<style scoped>
img {
  height: 250px;
  width: 250px;
}
</style>
