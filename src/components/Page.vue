<template>
  <div
    class="w-full h-[50px] text-white text-[35px] text-center flex flex-row items-center justify-between px-[21px] mt-[15px]">
    <router-link tag="div" to="/">
      <svg tag="sbg" xmlns="http://www.w3.org/2000/svg" width="27" height="15.75">
        <g transform="translate(-4.5 -10.125)">
          <path
            d="M30.375,12.375H5.625A1.128,1.128,0,0,1,4.5,11.25h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,11.25h0A1.128,1.128,0,0,1,30.375,12.375Z"
            fill="#fff" />
          <path
            d="M30.375,19.125H5.625A1.128,1.128,0,0,1,4.5,18h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,18h0A1.128,1.128,0,0,1,30.375,19.125Z"
            fill="#fff" />
          <path
            d="M30.375,25.875H5.625A1.128,1.128,0,0,1,4.5,24.75h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,24.75h0A1.128,1.128,0,0,1,30.375,25.875Z"
            fill="#fff" />
        </g>
      </svg>
    </router-link>
    <div>{{ station }}</div>

    <svg xmlns="http://www.w3.org/2000/svg" width="24.255" height="21.665" viewBox="0 0 24.255 21.665"
      class="h-[30px] w-[30px]" @click="isFavorite ? removeFromFavorites() : addToFavorites()">
      <path
        d="M23.66,10.528H16.353L14.132,3.9a.8.8,0,0,0-1.51,0L10.4,10.528H3.045a.8.8,0,0,0-.795.795.584.584,0,0,0,.015.134.764.764,0,0,0,.333.561L8.6,16.251l-2.3,6.7a.8.8,0,0,0,.273.894.769.769,0,0,0,.447.194.974.974,0,0,0,.5-.179l5.862-4.178,5.862,4.178a.931.931,0,0,0,.5.179.714.714,0,0,0,.442-.194.787.787,0,0,0,.273-.894l-2.3-6.7L24.1,11.979l.144-.124a.833.833,0,0,0,.258-.532A.841.841,0,0,0,23.66,10.528Z"
        transform="translate(-1.25 -3.375)" :fill="isFavorite ? '#f4d03f' : 'none'"
        :stroke="isFavorite ? '#f4d03f' : '#fff'" />
    </svg>
  </div>

  <Field>
    <FieldDailyPredict :data="daily_data" v-if="daily_data_loaded" />
    <Loading v-if="!daily_data_loaded" />
  </Field>

  <Field>
    <FieldWeeklyPredict :data="weekly_data" v-if="weekly_data_loaded" />
    <Loading v-if="!weekly_data_loaded" />
  </Field>

  <svg>
    <GradientColor :color="color" id="color" />
  </svg>
</template>

<script setup>
import FieldDailyPredict from "./page/FieldDailyPredict.vue";
import FieldWeeklyPredict from "./page/FieldWeeklyPredict.vue";
import Loading from "./page/FieldLoading.vue"
import Field from "./page/Field.vue";
import stations from "../data/stations.json"
import GradientColor from "./appearance/GradientColor.vue";
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";


const store = useStore();
const route = useRoute();

const daily_data_loaded = ref(false);
const weekly_data_loaded = ref(false);
const daily_data = ref();
const weekly_data = ref();

const station = route.params.station;
const color = Object.keys(stations).find(key => stations[key].includes(station))
const isFavorite = computed(() => store.state.favorites.has(station));

function addToFavorites() {
  store.commit("addToFavorites", station);
}
function removeFromFavorites() {
  store.commit("removeFromFavorites", station);
}

onMounted(() => {
  scrollTo(0, 0);
  fetch(`https://lzch1.pythonanywhere.com/daily_prediction/${station}/`)
    .then((response) => {
      return response.json();
    }).then(data => {
      daily_data.value = data;
      daily_data_loaded.value = true;
    })
  fetch(`https://lzch1.pythonanywhere.com/weekly_prediction/${station}/`)
    .then((response) => {
      return response.json();
    }).then(data => {
      weekly_data.value = data;
      weekly_data_loaded.value = true;
    });
});
</script>
<style scoped>
.field {
  box-shadow: inset 0 1px 6px 1px rgba(0, 0, 0, 0.2);
}
</style>