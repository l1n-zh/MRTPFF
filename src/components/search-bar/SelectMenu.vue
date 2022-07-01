<template>
  <div class="bg-[#323232]">
    <div
      class="option h-[55px] w-full bg-[#323232] text-white text-[30px] p-[3px] hover:bg-[#4C4C4C] relative"
      v-for="station in stations"
    >
      {{ station }}
    </div>
  </div>
</template>

<script setup>


defineProps({
    stations: Array
})
</script>

<style scoped>
.option {
  filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.3));
}
</style>
