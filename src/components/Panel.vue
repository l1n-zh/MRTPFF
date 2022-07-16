<template>
  <router-link :to="station" tag="div" class="panel flex mt-[24px]">
    <!-- Background -->
    <svg class="shape" viewBox="3.095 -409.425 212.906 174">
      <defs>
        <gradient-color :color="color" :id="color" />
      </defs>
      <path
        id="shape"
        d="M 3.094815731048584-235.4255981445312 L 66.42568206787109 -409.4253234863281 L 208.0008087158203 -409.4253234863281 C 212.4188995361328 -409.4253234863281 216.0009002685547 -405.8433227539062 216.0009002685547 -401.4252014160156 L 216.0009002685547 -243.4248046875 C 216.0009002685547 -239.0066986083984 212.4188995361328 -235.4255981445312 208.0008087158203 -235.4255981445312 L 3.094815731048584 -235.4255981445312 Z"
        :style="{ fill: `url(#${color})` }"
      />
    </svg>

    <svg
      class="shape pt-[inherit] opacity-80"
      viewBox="-10.929 -389.426 226.93 154"
      :style="{ fill: `url(#${color})` }"
    >
      <defs>
        <gradient-color :color="color" :id="color" />
      </defs>

      <path
        id="shape"
        d="M -10.92871761322021 -235.4255981445312 L 45.12297821044922 -389.4255065917969 L 208.0008087158203 -389.4255065917969 C 212.4188995361328 -389.4255065917969 216.0009002685547 -385.843505859375 216.0009002685547 -381.4254150390625 L 216.0009002685547 -243.4248046875 C 216.0009002685547 -239.0066986083984 212.4188995361328 -235.4255981445312 208.0008087158203 -235.4255981445312 L -10.92871761322021 -235.4255981445312 Z"
      />
    </svg>

    <!-- Content -->
    <div class="flex flex-row m-h-full w-full justify-between">
      <div
        class="flex flex-col justify-between text-white text-[1.5rem] leading-[1.5rem] w-[4.5em] tracking-[1px]"
      >
        <div class="">{{ station.slice(0, 4) }}</div>
        <div class="mt-[10px]">{{ station.slice(4) }}</div>
        <m-text
          class="text-white flex"
          :content="timeStamp"
          :size="30"
          color="#C4C4C4"
        />
      </div>

      <div class="flex flex-col justify-between z-10">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.75"
            height="19.907"
            viewBox="0 0 20.75 19.907"
          >
            <path
              d="M26.638,23.657H22.5a.75.75,0,0,1,0-1.5h4.138a1.309,1.309,0,0,0,1.319-1.3V6.545a1.309,1.309,0,0,0-1.319-1.3H22.5a.75.75,0,1,1,0-1.5h4.138a2.81,2.81,0,0,1,2.819,2.8V20.862A2.81,2.81,0,0,1,26.638,23.657Z"
              transform="translate(-8.707 -3.75)"
              fill="#323232"
            />
            <path
              d="M18.023,11.455a.722.722,0,0,0-.006,1.017l3.361,3.366H8.588a.719.719,0,0,0,0,1.437H21.373l-3.361,3.366a.727.727,0,0,0,.006,1.017.716.716,0,0,0,1.012-.006l4.555-4.588h0a.807.807,0,0,0,.149-.227.686.686,0,0,0,.055-.276.72.72,0,0,0-.2-.5l-4.555-4.588A.7.7,0,0,0,18.023,11.455Z"
              transform="translate(-7.875 -6.605)"
              fill="#323232"
            />
          </svg>
          <information-field :number="entered" />
        </div>
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.75"
            height="19.907"
            viewBox="0 0 20.75 19.907"
          >
            <path
              d="M26.638,23.657H22.5a.75.75,0,0,1,0-1.5h4.138a1.309,1.309,0,0,0,1.319-1.3V6.545a1.309,1.309,0,0,0-1.319-1.3H22.5a.75.75,0,1,1,0-1.5h4.138a2.81,2.81,0,0,1,2.819,2.8V20.862A2.81,2.81,0,0,1,26.638,23.657Z"
              transform="translate(-8.707 -3.75)"
              fill="#323232"
            />
            <path
              d="M13.64,11.455a.722.722,0,0,1,.006,1.017l-3.361,3.366h12.79a.719.719,0,0,1,0,1.437H10.29l3.361,3.366a.727.727,0,0,1-.006,1.017.716.716,0,0,1-1.012-.006L8.08,17.065h0a.807.807,0,0,1-.149-.227.686.686,0,0,1-.055-.276.72.72,0,0,1,.2-.5l4.555-4.588A.7.7,0,0,1,13.64,11.455Z"
              transform="translate(-7.875 -6.605)"
              fill="#323232"
            />
          </svg>
          <information-field :number="exited" />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import GradientColor from "./appearance/GradientColor.vue";
import InformationField from "./panel/InformationField.vue";
import MText from "./appearance/MonospacedFontText.vue";
import stations from "../data/stations.json";

const props = defineProps({
  station: String,
  time: Number,
  entered: Number,
  exited: Number,
});

const color = Object.keys(stations).find((key) =>
  stations[key].includes(props.station)
);

const timeStamp = computed(() => {
  return props.time + ":00";
});
</script>

<style scoped lang="postcss">
.panel {
  @apply relative bg-[#272727] rounded-[9px] w-[327px] h-[174px] px-[15px] py-[21px];
  filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.3));
}

.station-name {
  font-family: glow-sans;
}

.time {
  font-family: rajdhani;
}

.shape {
  @apply absolute h-full bottom-0 right-0 overflow-visible;
}
</style>
