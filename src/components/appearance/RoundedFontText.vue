<template>
  <svg
    class="absolute top-2 left-3 pt-[inherit] bg-red-500 w-[100%]"
    :style="{height: size}"
  >
    <!-- Station -->

    <text
      x="50%"
      y="50%"
      stroke="#fff"
      fill="#fff"
      stroke-linejoin="round"
      alignment-baseline="central"
      text-anchor="middle"
      class="leading-[30px]"
      :font-size="size"
    >
      窩不知道 :(
    </text>
  </svg>
</template>

<script setup>
import { computed } from "vue";

defineProps({
  size: String,
});

const y = computed(() => {});
</script>

<style scoped></style>
