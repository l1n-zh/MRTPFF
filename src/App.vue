<template>
  <div
    class="absolute w-full flex justify-center bg-black"
    :style="{
      zoom: zoomLevel,
      transform: '',
      transformOrigin: (0, 0),
    }"
    @touchmove="onTouchmove"
  >
    <div class="flex flex-col bg-[#323232] w-[375px] h-[1500px] items-center">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex"

const store = useStore()
const zoomLevel = computed(() => store.state.zoomLevel)
function onTouchmove(e) {
  if (e.scale && e.scale !== 1) {
    e.preventDefault();
  }
}

function getZoomLevel() {
  store.commit("setZoomLevel", Math.min(window.innerWidth / 375, window.innerHeight / 500))
}

function onResize() {
  getZoomLevel();
}

onMounted(() => {
  window.addEventListener("resize", onResize);
  getZoomLevel();
});
onUnmounted(() => window.removeEventListener("resize", onResize))

</script>

<style>
@font-face {
  font-family: rajdhani;
  font-weight: normal;
  src: url("../assets/fonts/Rajdhani-Regular.ttf") format("truetype");
}

@font-face {
  font-family: glow-sans;
  src: url("../assets/fonts/GlowSansTC-Regular.otf") format("truetype");
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
