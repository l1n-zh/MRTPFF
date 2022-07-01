<template>
    <div class="flex flex-col justify-between w-full h-full">
      <div class="h-[20px] w-full flex flex-row justify-between items-center" v-for="n in 7">
        <div class="text-[18px] leading-[18px] mr-1" :style="{ color: n == today ? 'white' : '#B3B3B3' }">
          周一
        </div>

        <div class="divider w-[2px] h-[80%] rounded-[1px] bg-[#666666] mr-1" />

        <m-text content="1100" :size="25" :color="n == today ? 'white' : '#B3B3B3'" class="mr-2" />

        <div class="w-0 h-[4px] flex-grow">
          <svg class="bg-[#272727] w-full h-full rounded-[1px] shadow">
            <def>
              <color />
              <clipPath id="f">
                <rect height="100%" width="50%" />
              </clipPath>
            </def>
            <rect height="100%" width="50%" clip-path="url(#f)" fill="url(#color)" rx="1px" ry="1px" />
          </svg>
        </div>
        <m-text content="1200" :size="25" :color="n == today ? 'white' : '#B3B3B3'" class="ml-2" />
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
import MText from "/src/components/appearance/MonospacedFontText.vue";
import Color from "/src/components/appearance/Color.vue";

const today = 3;
</script>
