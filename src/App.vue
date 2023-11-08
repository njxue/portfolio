<template>
  <Header />
  <div class="mt-[70px]">
    <Introduction />
  </div>
  <div class="content flex justify-center dark:bg-[#121212] dark:text-white">
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
      width="16"
      height="16"
      fill="gray"
      class="bi bi-arrow-up-circle-fill fixed bottom-10 right-10 w-6 h-6"
      viewBox="0 0 16 16">
      <path
        d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
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
