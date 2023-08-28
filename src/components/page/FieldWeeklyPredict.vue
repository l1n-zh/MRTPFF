<template>
  <div class="flex flex-col justify-between w-full h-[210px]">
    <div class="h-[20px] w-full flex flex-row justify-between items-center" v-for="d, n in data">
      <div class="text-[18px] leading-[18px] mr-1" :style="{ color: n ? '#B3B3B3' : 'white' }">
        {{ "週" + "日一二三四五六"[(today+n)%7] }}
      </div>

      <div class="w-[1px] h-[60%] rounded-[1px] bg-[#666666] mr-1" />

      <MText :content="d.offPeak" :size="25" :color="n ? '#B3B3B3' : 'white'" class="mr-2" />

      <div class="w-0 h-[4px] flex-grow">
        <svg class="bg-[#272727] w-full h-full rounded-[1px]">
          <rect :x="`${(d.offPeak - minOffPeak) / (maxPeak - minOffPeak) * 100}%`"
            :width="`${(d.peak - d.offPeak) / (maxPeak - minOffPeak) * 100}%`" height="100%" fill="url(#color)" rx="1px"
            ry="1px" />
        </svg>
      </div>
      <MText :content="d.peak" :size="25" :color="n ? '#B3B3B3' : 'white'" class="ml-2" />
    </div>
  </div>
</template>

<script setup>
import MText from "../appearance/MonospacedFontText.vue";

const props = defineProps({
  data: Object
})

const today = new Date().getDay();
const minOffPeak = Math.min(...props.data.map(d => d.offPeak))
const maxPeak = Math.max(...props.data.map(d => d.peak))
</script>
