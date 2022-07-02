<template>
  <div class="h-[60px] w-[120px] flex flex-col items-end z-10">
    <div class="people flex flex-row items-end mr-[2px]">
      <m-text :content="number.toString()" :size="35" color="#272727" />
      <div class="text-[10px] leading-[14px] text-[#272727]">人</div>
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
