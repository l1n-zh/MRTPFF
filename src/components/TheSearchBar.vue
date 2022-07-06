<template>
  <div class="w-full px-[24px] py-[20px]" tabindex="0">
    <div class="flex flex-grow items-center relative">
      <!-- 搜尋圖示 -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="20"
        class="absolute left-[11px] top-[50%] translate-y-[-10px] pointer-events-none z-10"
        v-if="!activated"
      >
        <path
          id="Icon_ionic-ios-search"
          data-name="Icon ionic-ios-search"
          d="M22.289,21.19l-5.006-5.052a7.135,7.135,0,1,0-1.083,1.1l4.973,5.019a.771.771,0,0,0,1.087.028A.775.775,0,0,0,22.289,21.19ZM11.676,17.3a5.633,5.633,0,1,1,3.984-1.65A5.6,5.6,0,0,1,11.676,17.3Z"
          transform="translate(-4.5 -3)"
          fill="#fff"
        />
      </svg>

      <!-- 提示文字 -->
      <div
        class="absolute w-[100px] leading-[20px] text-center left-[50%] translate-x-[-50px] text-[#9C9C9C] pointer-events-none z-10"
        v-if="!activated"
      >
        搜尋站牌
      </div>

      <!-- 搜尋框 -->
      <input
        class="h-[36px] w-full rounded-[8px] bg-[rgba(255,255,255,.2)] text-white pl-[10px] outline-none backdrop-blur-lg"
        size="1"
        tabindex="0"
        v-model="search"
        @input="refreshSearchingResult(search)"
        @focus="activate(true)"
      />

      <!-- 取消圖示 -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.555"
        height="25.555"
        class="absolute right-[38px] opacity-60"
        v-if="activated && search"
        @click="activate(false)"
      >
        <path
          d="M25.91,16.875H19.125V10.09a1.125,1.125,0,0,0-2.25,0v6.785H10.09a1.125,1.125,0,0,0,0,2.25h6.785V25.91a1.125,1.125,0,0,0,2.25,0V19.125H25.91a1.125,1.125,0,0,0,0-2.25Z"
          transform="translate(12.778 -12.678) rotate(45)"
          fill="#fff"
        />
      </svg>

      <!-- Filter按鈕 -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="20"
        class="ml-[10px]"
        @click="withFilter = !withFilter"
        v-if="activated"
      >
        <path
          d="M-159.15-2528.363h-12.032a.87.87,0,0,1-.818-.909.869.869,0,0,1,.818-.908h12.032a2.059,2.059,0,0,1,1.877-1.364,2.059,2.059,0,0,1,1.877,1.364h3.85a.869.869,0,0,1,.818.908.869.869,0,0,1-.818.909h-3.85a2.058,2.058,0,0,1-1.877,1.363A2.058,2.058,0,0,1-159.15-2528.363Zm-8.182-6.729h-3.85A.869.869,0,0,1-172-2536a.869.869,0,0,1,.818-.908h3.85a2.059,2.059,0,0,1,1.877-1.364,2.058,2.058,0,0,1,1.877,1.364h12.032a.869.869,0,0,1,.818.908.869.869,0,0,1-.818.909h-12.032a2.058,2.058,0,0,1-1.877,1.363A2.059,2.059,0,0,1-167.332-2535.091Zm8.182-6.728h-12.032a.87.87,0,0,1-.818-.909.869.869,0,0,1,.818-.908h12.032a2.059,2.059,0,0,1,1.877-1.364,2.059,2.059,0,0,1,1.877,1.364h3.85a.869.869,0,0,1,.818.908.869.869,0,0,1-.818.909h-3.85a2.058,2.058,0,0,1-1.877,1.363A2.058,2.058,0,0,1-159.15-2541.82Z"
          stroke="#fff"
          transform="translate(173 2546)"
          :fill="withFilter ? 'none' : '#fff'"
          :stroke-width="withFilter ? '1' : '0'"
        />
      </svg>
    </div>

    <!-- Filter -->
    <div class="flex flex-wrap" v-if="activated && withFilter">
      <div
        v-for="n in 6"
        class="w-[50%] flex flex-row justify-start mt-[12px] select-none"
        :style="{ opacity: openedFilters.includes(filters[n - 1]) ? 1 : 0.4 }"
        @click="toggle(filters[n - 1])"
      >
        <div
          class="w-[30px] h-[30px] rounded-[8px]"
          :style="{ backgroundColor: colors[n - 1] }"
        />
        <div class="ml-[6px]" :style="{ color: colors[n - 1] }">
          {{ texts[n - 1] }}
        </div>
      </div>
    </div>
  </div>
  <select-menu
    :stations="searchingResult"
    class="w-full"
    v-if="activated && search"
  />
</template>

<script setup>
import SelectMenu from "./search-bar/SelectMenu.vue";
import stations from "../data/stations.json";
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

const search = ref();
const searchingResult = ref([]);
const openedFilters = ref([]);
const withFilter = ref(false);
const store = useStore();

const activated = computed(() => store.state.activated);

const filters = ["BR", "R", "G", "O", "BL", "Y"];

watch(activated, (value, oldValue) => {
  if (!value) {
    search.value = "";
    searchingResult.value = [];
    openedFilters.value = [];
  }
});

function activate(value) {
  store.commit("activate", value);
}

function toggle(filter) {
  let idx = openedFilters.value.indexOf(filter);
  if (idx == -1) openedFilters.value.push(filter);
  else openedFilters.value.splice(idx, 1);
  refreshSearchingResult();
}

function refreshSearchingResult() {
  if (search.value) {
    let tmp = [];
    openedFilters.value.forEach((filter) => tmp.push(stations[filter]));
    if (!tmp.length) tmp = Object.values(stations);
    searchingResult.value = [...new Set(tmp.flat())].filter((station) =>
      station.includes(search.value)
    );
  }
}

const colors = [
  "#CD6550",
  "#FA6194",
  "#63FFA4",
  "#FFB163",
  "#6397FF",
  "#FFFF63",
];

const texts = [
  "文湖線",
  "淡水信義線",
  "松山新店線",
  "中和新蘆線",
  "板南線",
  "環狀線",
];
</script>
