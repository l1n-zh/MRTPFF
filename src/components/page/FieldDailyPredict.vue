<template>
  <div
    class="reference-line w-[297px] absolute h-[2px] rounded-[1px]"
    v-for="i in 6"
    :style="{ bottom: (i - 1) * 30 + 21 + 'px' }"
  ></div>
  <div
    class="bg-[#272727] w-[68px] h-[35px] rounded-[8px] absolute top-[3px] left-[3px] shadow-md z-20 p-[2px] bar-transition"
    :style="{ left: hovered * 11 - 8 + 'px' }"
  >
    <monospaced :content="`${data[hovered - 1]}`" :size="25" color="#ffffff" />
    <monospaced content="人" :size="1" color="#ffffff" />
  </div>
  <div
    class="flex justify-between w-full h-[180px] mt-auto z-10"
    @touchmove="onTouchmove"
    ref="chart"
  >
    <svg
      :class="[
        'flex w-[5px] h-full transition',
        hovered == n ? 'hight-light' : '',
      ]"
      @mouseover="mouseOver(n)"
      v-for="n in 24"
    >
      <color />
      <clipPath :id="`clipPathD${n}`">
        <rect
          :height="`${(data[n - 1] / maximum) * 100}%`"
          width="100%"
          :y="`${(1 - data[n - 1] / maximum) * 100}%`"
          rx="2.5px"
          ry="2.5px"
        />
      </clipPath>
      <rect
        width="100%"
        height="100%"
        :clip-path="`url(#clipPathD${n})`"
        fill="url(#color)"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Color from "../appearance/Color.vue";
import Monospaced from "../appearance/MonospacedFontText.vue";

const data = [
  100, 200, 10, 10, 500, 600, 800, 1000, 800, 1000, 900, 800, 700, 300, 500,
  600, 800, 900, 1000, 900, 700, 800, 400, 300,
];

const now = 5;
const hovered = ref(now);
const maximum = Math.max(...data);
const chart = ref();

function mouseOver(n) {
  hovered.value = n;
}

function onTouchmove(e) {
  const chartRect = chart.value.getBoundingClientRect();
  const zoomLevel = Math.min(window.innerWidth / 375, window.innerHeight / 500);
  const barX = e.changedTouches[0].clientX;
  const n = Math.round(
    ((barX / zoomLevel - chartRect.x) / chartRect.width) * 24
  );
  hovered.value = Math.max(Math.min(n, 24), 1);
}
</script>

<style scoped>
.bar-transition {
  transition: all 110ms linear;
}
.reference-line {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hight-light {
  filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.4)) saturate(1.5);
  transform: translateY(-4px);
}
</style>
