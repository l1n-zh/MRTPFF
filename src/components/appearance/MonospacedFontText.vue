<template>
  <div class="inline">
    <span
      class="font"
      v-for="chr in content"
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
  color:String,
});

const style = ref({
  fontSize: props.size + 'px',
  color: props.color,
})
</script>

<style scoped>

.font {
  font-family: rajdhani;
  display: inline-block;
  text-align: center;
  line-height: 100%;
  width: 0.5em;
}
</style>