<template>
  <div class="h-[60px] w-[120px] relative">
    <div class="absolute people right-0">
      <m-text :content="number.toString()" :size="40" color="#212121" />
      <div class="text-[10px] leading-[10px] mr-[2px] inline-block">人</div>
    </div>
    <icon class="absolute right-0 bottom-0" />
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
.people {
  font-family: Rajdhani;
  color: #272727;
}
</style>
