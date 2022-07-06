<template>
  <div
    class="background fixed z-50 w-[375px] flex flex-col items-center"
    :style="{
      backdropFilter: scrolled || activated ? 'brightness(.6) blur(16px)' : '',
      height: activated ? '100%' : 'auto',
    }"
  >
    <text class="text-white mt-[24px] text-[25px]" v-if="!activated">
      捷運人數預測
    </text>
    <search-bar></search-bar>
    <div class="w-full flex flex-grow" @click="deactivate()"></div>
  </div>
  <div class="mt-[137.5px]" />
  <panel v-for="station in stations" :station="station" :time="12" :entered="2100" :exited="2000" />
</template>

<script setup>
import panel from "./panel.vue";
import SearchBar from "./TheSearchBar.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const activated = computed(() => store.state.activated);
const scrolled = ref(0);
const stations = computed(() => store.state.favorites)

const deactivate = () => store.commit("activate", false);

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
function onScroll() {
  scrolled.value = window.scrollY > 10;
}
</script>

<style scoped>
.background {
  transition: all 120ms linear;
}
</style>
