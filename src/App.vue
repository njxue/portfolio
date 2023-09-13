<template>
  <Header />
  <div class="mt-[70px]">
    <Introduction />
  </div>
  <div class="content flex justify-center dark:bg-[#001e38] dark:text-white">
    <div class="w-[1200px] pt-10 space-y-7">
      <WorkExperiences />
      <Projects />
      <Education />
      <Others />
    </div>
  </div>

  <div v-if="jumpTop" @click="handleClick" class="hover:cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="fixed bottom-10 right-10 w-6 h-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
    </svg>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Projects from "./components/projects/Projects.vue";
import Introduction from "./components/introduction/Introduction.vue";
import Education from "./components/coursework/Coursework.vue";
import WorkExperiences from "./components/work/WorkExperiences.vue";
import Others from "./components/others/Others.vue";

document.addEventListener("DOMContentLoaded", function () {
  const observerCallback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("sectionHeader")) {
          entry.target.classList.add("fadeInAndSlideRightAnimation");
        } else {
          entry.target.classList.add("fadeInAndSlideLeftAnimation");
        }
        entry.target.classList.remove("invisible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback);

  document
    .querySelectorAll(".project, .experience, .sectionHeader, .other")
    .forEach((elem) => {
      if (elem) {
        observer.observe(elem);
      }
    });
});

export default {
  name: "App",
  components: {
    WorkExperiences,
    Header,
    Introduction,
    Projects,
    Education,
    Others,
  },
  mounted() {
    window.onscroll = this.handleScroll;
    const html = document.getElementById("app");
    const isDarkMode = localStorage.getItem("theme") === "dark";
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  },
  data() {
    return { jumpTop: false };
  },
  methods: {
    handleScroll() {
      this.jumpTop = window.scrollY > 0;
    },
    handleClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
@keyframes fadeInAndSlideRight {
  0% {
    opacity: 0;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
  }
}
</style>

<style>
.fadeInAndSlideUpAnimation {
  animation: 0.7s ease-out 0s 1 fadeInAndSlideUp;
}

.fadeInAndSlideLeftAnimation {
  animation: 0.7s ease-out 0s 1 fadeInAndSlideLeft;
}

.fadeInAndSlideRightAnimation {
  animation: 0.7s ease-out 0s 1 fadeInAndSlideRight;
}

@keyframes fadeInAndSlideUp {
  0% {
    opacity: 0;
    transform: translateY(+5%);
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInAndSlideLeft {
  0% {
    opacity: 0;
    transform: translateX(+7%);
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInAndSlideRight {
  0% {
    opacity: 0;
    transform: translateX(-7%);
  }
  100% {
    opacity: 1;
  }
}
</style>
