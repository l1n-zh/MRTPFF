<template>
  <div class="overflow-y-scroll">
    <router-link tag="div"
      v-for="station in stations"
        class="option h-[55px] w-full text-white text-[30px] p-[3px] relative block backdrop-blur-lg"
        :to="station"
        :key="station.id">
        {{ station }}
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  stations: Array,
});
</script>

<style scoped lang="postcss">

.option:hover {
  @apply
  bg-[rgba(255,255,255,0.1)];
  box-shadow: inset 0 .1px white,inset 0 -.1px white;
}
</style>
