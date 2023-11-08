<template>
  <header
    class="p-5 border-b-2 border-teal-900 e z-50 dark:bg-gray-900 dark:text-white dark:border-white">
    <div class="flex gap-5">
      <h1 class="text-xl">Jing Xue</h1>
      <div id="toggleTheme" class="toggleTheme">
        <input
          type="checkbox"
          id="toggleThemeCheckbox"
          class="toggleThemeCheckbox"
          :onclick="toggleTheme" />
        <label for="toggleThemeCheckbox" class="toggleThemeLabel">
          <v-icon name="md-wbsunny-round" />
          <v-icon name="io-moon" />
        </label>
      </div>
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

const toggleTheme = () => {
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
};

export default {
  name: "Header",
  components: {
    Button,
    "v-icon": OhVueIcon,
  },
  mounted() {
    const currTheme = localStorage.getItem("theme");
    const switchElement = document.getElementById("toggleThemeCheckbox");
    switchElement.checked = currTheme == null || currTheme === "light";
  },
  methods: { toggleTheme },
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
  background: white;
}
.toggleTheme {
  display: inline-block;
  width: 70px;
  height: 30px;
  background-color: #00534b;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
}

.toggleTheme input[type="checkbox"] {
  display: none;
}

.toggleThemeLabel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: white;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
}

.toggleThemeLabel:before {
  content: "";
  display: block;
  width: 50%;
  height: 100%;
  background-color: rgb(141, 209, 216);
  border-radius: 34px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.25s ease-in-out;
}

.toggleThemeCheckbox:checked + .toggleThemeLabel:before {
  transform: translateX(35px);
}
</style>
