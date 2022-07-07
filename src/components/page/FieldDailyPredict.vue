<template>
  <div class="relative w-full h-[210px] flex">

    <!-- 輔助線 -->
    <div v-for="i in 6" class="reference-line w-[297px] absolute h-[2px] rounded-[1px]"
      :style="{ bottom: (i - 1) * 30 + 'px' }"></div>

    <!-- 懸浮方塊 -->
    <div
      class="bg-[#272727] w-[68px] h-[35px] rounded-[8px] absolute top-[-15px] left-[3px] z-20 p-[2px] bar-transition"
      :style="{ left: hovered * 11 - 24 + 'px' }">
      <monospaced :content="`${data[hovered - 1]}`" :size="25" color="#ffffff" />
      <monospaced content="人" :size="1" color="#ffffff" />
    </div>

    <!-- 圖表 -->
    <div class="flex justify-between w-full h-[180px] mt-auto z-10" @touchmove="onTouchmove" ref="chart">
      <svg v-for="n in 24" :class="[
        'flex w-[5px] h-full transition',
        hovered == n ? 'hight-light' : '',
      ]" :key="n.id + display" @mouseover="mouseOver(n)">
        <clipPath :id="`clipPathD${n}`">
          <rect :height="`${(data[n - 1] / maximum) * 100}%`" width="100%" :y="`${(1 - data[n - 1] / maximum) * 100}%`"
            rx="2.5px" ry="2.5px" />
        </clipPath>
        <rect width="100%" height="100%" :clip-path="`url(#clipPathD${n})`" fill="url(#color)" />
      </svg>
    </div>
  </div>

  <!-- 按鈕列 -->
  <div class="w-full h-[25px] flex justify-between rounded-[3px] overflow-hidden mt-[8px]">
    <div v-for="option in Object.keys(options)" :style="{ backgroundColor: display == option ? '#212121' : '#2C2C2C' }"
      class="bg-[#212121] w-[33%] h-full text-white leading-[25px] text-[10px] text-center select-none"
      @click="display = option">
      {{ option }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Monospaced from "../appearance/MonospacedFontText.vue";
import { useStore } from "vuex";

const sum = [];
const display = ref("總人數");

const props = defineProps({
  data: Object
})

const entering = props.data.entering
const leaving = props.data.leaving

const options = {
  "進站人數": entering,
  "出站人數": leaving,
  "總人數": sum,
};

for (let i = 0; i < 24; ++i) {
  sum.push(parseInt(entering[i]) + parseInt(leaving[i]))
}

const data = computed(() => options[display.value]);
const now = 5;
const hovered = ref(now);
const maximum = computed(() => Math.max(...data.value));
const chart = ref();
const store = useStore();
const zoomLevel = computed(() => store.state.zoomLevel);


function mouseOver(n) {
  hovered.value = n;
}

function onTouchmove(e) {
  const chartRect = chart.value.getBoundingClientRect();
  const barX = e.changedTouches[0].clientX;
  const n = Math.round(
    ((barX / zoomLevel.value - chartRect.x) / chartRect.width) * 24
  );
  hovered.value = Math.max(Math.min(n, 24), 1);
}
</script>

<style scoped lang="postcss">
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