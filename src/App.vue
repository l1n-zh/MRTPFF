<template>
  <div class="absolute w-full flex justify-center bg-black" :style="{
    zoom: Math.min(width/375, height/500),
    transform: '',
    transformOrigin: (0, 0),
  }" @touchmove="f">
    <div class="flex flex-col bg-[#323232] w-[375px] h-[1500px] items-center ">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

function f(e) {
  if (e.scale && e.scale !== 1) {
    e.preventDefault();
  }
}
const width = ref(window.innerWidth);
const height = ref(window.innerHeight);
function onResize() {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
}
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))
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
