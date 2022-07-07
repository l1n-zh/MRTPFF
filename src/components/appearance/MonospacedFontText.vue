<template>
  <div class="inline-flex flex-row items-center">
    <span
      v-for="chr in content"
        class="font select-none"
        :key="chr.id"
        :style="style"
    >
      {{ chr }}
    </span>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  content: String,
  size: Number,
  color: String,
});

const style = ref({
  fontSize: props.size + "px",
  color: props.color,
});
</script>

<style scoped>

.font {
  margin-bottom: -0.2em;
  font-family: rajdhani;
  text-align: center;
  line-height: 100%;
  width: 0.5em;
}
</style>
