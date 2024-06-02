<template>
  <header
    class="p-5 border-b-2 border-teal-900 z-50 bg-white dark:bg-[#121212] dark:text-white dark:border-white">
    <div class="flex items-center gap-5">
      <h1 class="text-xl">Jing Xue</h1>
      <v-icon
        v-if="!isDarkMode"
        name="md-wbsunny-round"
        :onclick="toggleTheme"
        class="toggleTheme" />
      <v-icon
        v-if="isDarkMode"
        name="io-moon"
        :onclick="toggleTheme"
        class="toggleTheme" />
    </div>

    <div class="flex space-x-4">
      <Button text="Work Experience" />
      <Button text="Projects" />
      <Button text="Coursework" />
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdWbsunnyRound, IoMoon } from "oh-vue-icons/icons";

addIcons(MdWbsunnyRound, IoMoon);

const html = document.getElementById("app");

function toggleTheme() {
  const currTheme = localStorage.getItem("theme");
  if (!currTheme) {
    localStorage.setItem("theme", "light");
    html.classList.add("dark");
  }
  if (currTheme === "dark") {
    localStorage.setItem("theme", "light");
    html.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    html.classList.add("dark");
  }

  this.isDarkMode = localStorage.getItem("theme") === "dark";
}

export default {
  name: "Header",
  components: {
    Button,
    "v-icon": OhVueIcon,
  },
  methods: { toggleTheme },
  data() {
    return {
      isDarkMode: localStorage.getItem("theme") === "dark",
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: fixed;
  width: 100%;
  top: 0;
}
.toggleTheme {
  cursor: pointer;
}
</style>
