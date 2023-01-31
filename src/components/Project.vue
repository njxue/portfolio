<template>
  <div class="box">
    <div class="header">
      <h1>{{ proj.name }}</h1>
    </div>
    <div class="image">
      <img src="" />
    </div>
    <div class="description">{{ proj.description }}</div>
    <div class="technologies">foo bar</div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["proj"],
};
</script>

<style scoped>
.box {
  border: solid 1px;
  width: 75%;
}

.image {
  height: 500px;
  display: flex;
  justify-content: center;
}

img {
  border: solid 1px gray;
  width: 85%;
}
</style>
