<template>
  <div class="w-[500px] grow flex justify-center items-center">
    <img
      v-on:click="handleClick"
      :class="this.images.length > 1 ? arrowStyles : 'hidden'"
      id="leftClicker"
      src="/icons/angle-left.svg"
    />

    <img class="w-[90%]" :src="images[i]" />
    <img
      v-on:click="handleClick"
      :class="this.images.length > 1 ? arrowStyles : 'hidden'"
      id="rightClicker"
      src="/icons/angle-right.svg"
    />
  </div>
</template>

<script>
function handleClick(e) {
  const addOrMinus = e.target.id === "leftClicker" ? -1 : 1;
  this.i = Math.max(Math.min(this.i + addOrMinus, this.images.length - 1), 0);
}

let arrowStyles = "cursor-pointer w-5 h-5";

export default {
  name: "Carousel",
  props: { images: Array },
  methods: { handleClick },
  data() {
    return { i: 0, arrowStyles };
  },
};
</script>
