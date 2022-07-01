<template>
  <router-link to="page" tag="div" class="panel flex mt-[24px]">
    <!-- Background -->
    <svg class="shape" viewBox="3.095 -409.425 212.906 174">
      <color />
      <path id="shape"
        d="M 3.094815731048584-235.4255981445312 L 66.42568206787109 -409.4253234863281 L 208.0008087158203 -409.4253234863281 C 212.4188995361328 -409.4253234863281 216.0009002685547 -405.8433227539062 216.0009002685547 -401.4252014160156 L 216.0009002685547 -243.4248046875 C 216.0009002685547 -239.0066986083984 212.4188995361328 -235.4255981445312 208.0008087158203 -235.4255981445312 L 3.094815731048584 -235.4255981445312 Z" />
    </svg>

    <svg class="shape pt-[inherit] opacity-80" viewBox="-10.929 -389.426 226.93 154">
      <color />
      <path id="shape"
        d="M -10.92871761322021 -235.4255981445312 L 45.12297821044922 -389.4255065917969 L 208.0008087158203 -389.4255065917969 C 212.4188995361328 -389.4255065917969 216.0009002685547 -385.843505859375 216.0009002685547 -381.4254150390625 L 216.0009002685547 -243.4248046875 C 216.0009002685547 -239.0066986083984 212.4188995361328 -235.4255981445312 208.0008087158203 -235.4255981445312 L -10.92871761322021 -235.4255981445312 Z" />
    </svg>

    <!-- Content -->
    <div class="flex flex-row m-h-full w-full justify-between">
      <div class="flex flex-col justify-between">
        <svg class="w-[120px] h-[60px] flex flex-1"></svg>
        <m-text class="text-white flex" :content="timeStamp" :size="30" color="#C4C4C4" />
      </div>

      <div class="flex flex-col justify-between">
        <i-filed :number="entered" />
        <i-filed :number="exited" />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import Color from "./appearance/Color.vue";
import iFiled from "./panel/InformationField.vue";
import MText from "./appearance/MonospacedFontText.vue";

const props = defineProps({
  station: String,
  time: Number,
  entered: Number,
  exited: Number,
});

const timeStamp = computed(() => {
  return props.time + ":00";
});
</script>

<style scoped lang="postcss">
.panel {
  @apply 
  relative 
  bg-[#272727] 
  rounded-[9px] 
  w-[327px] 
  h-[174px]
  px-[15px] 
  py-[21px];
  filter:drop-shadow(5px 5px 2px rgba(0,0,0,0.3))
}

.station-name {
  font-family: glow-sans;
}

.time {
  font-family: rajdhani;
}

.shape {
  @apply absolute
    h-full
    bottom-0
    right-0
    overflow-visible;
}

#shape {
  fill: url(#color);
}
</style>
