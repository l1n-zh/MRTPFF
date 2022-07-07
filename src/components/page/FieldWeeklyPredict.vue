<template>
  <div class="flex flex-col justify-between w-full h-[200px]">
    <div class="h-[20px] w-full flex flex-row justify-between items-center" v-for="d, n in data">
      <div class="text-[18px] leading-[18px] mr-1" :style="{ color: n == today ? 'white' : '#B3B3B3' }">
        {{ "週" + "一二三四五六日"[n] }}
      </div>

      <div class="divider w-[2px] h-[80%] rounded-[1px] bg-[#666666] mr-1" />

      <m-text :content="d.offPeak" :size="25" :color="n == today ? 'white' : '#B3B3B3'" class="mr-2" />

      <div class="w-0 h-[4px] flex-grow">
        <svg class="bg-[#272727] w-full h-full rounded-[1px] shadow">
          <def>
            <color />
          </def>
          <rect :x="`${(d.offPeak - minOffPeak) / (maxPeak - minOffPeak) * 100}%`"
            :width="`${(d.peak - d.offPeak) / (maxPeak - minOffPeak) * 100}%`" height="100%" fill="url(#color)" rx="1px"
            ry="1px" />
        </svg>
      </div>
      <m-text :content="d.peak" :size="25" :color="n == today ? 'white' : '#B3B3B3'" class="ml-2" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.divider {
  box-shadow: inset 0.5px 0.5px 1px rgba(0, 0, 0, 0.5);
}

.shadow {
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>

<script setup>
import MText from "../appearance/MonospacedFontText.vue";
import Color from "../appearance/Color.vue";

const props = defineProps({
  data: Object
})
const minOffPeak = Math.min(...props.data.map(d => d.offPeak))
const maxPeak = Math.max(...props.data.map(d => d.peak))

const today = 4;
</script>
