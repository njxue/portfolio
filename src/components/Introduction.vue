<template>
  <div class="container">
    <h1>Hello! I'm Jing Xue,</h1>
    <div class="intro">
      <h3>
        Year 2 Computer Science student in the National University of Singapore
      </h3>
      <img src="../assets/doge.webp" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
};
</script>

<style scoped>
.container {
  border: solid 1px;
  height: 500px;
}

img {
  border: solid 1px;
  height: 250px;
  width: 250px;
}

.intro {
  display: flex;
  justify-content: space-between;
}
</style>
