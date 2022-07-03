<template>
  <div class="h-[60px] w-[100px] flex flex-col items-end z-10">
    <div class="people flex items-end mr-[1px]">
      <m-text :content="number.toString()" :size="35" color="#272727" />
      <span class="text-[10px] leading-[14px] text-[#272727]">人</span>
    </div>
    <icon/>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import MText from "../appearance/MonospacedFontText.vue";

defineProps({
  number: Number,
});
</script>

<style scoped>
</style>
