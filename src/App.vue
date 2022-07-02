<template>
  <div class="absolute w-[100vw]">
    <div class="flex flex-col bg-[#323232] w-[375px] h-[1500px] items-center">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
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
