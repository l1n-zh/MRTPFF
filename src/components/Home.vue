<template>
  <div
    class="background fixed z-50 w-[375px] flex flex-col items-center overflow-hidden"
    :style="{
      backdropFilter: y > 10 || activated ? 'brightness(.6) blur(16px)' : '',
      height: activated ? '100%' : 'auto',
    }"
  >
    <text class="text-white mt-[24px] text-[25px]" v-if="!activated">
      捷運人數預測
    </text>
    <SearchBar></SearchBar>
    <div class="w-full flex flex-grow h-full" @click="deactivate()"></div>
  </div>
  <div class="mt-[137.5px]" />
  <panel v-for="station in stations" :station="station" :time="new Date().getHours()" />
</template>

<script setup>
import panel from "./panel.vue";
import SearchBar from "./TheSearchBar.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()

const store = useStore();
const activated = computed(() => store.state.activated);
const stations = computed(() => store.state.favorites)

const deactivate = () => store.commit("activate", false);
</script>

<style scoped>
.background {
  transition: all 120ms linear;
}
</style>
