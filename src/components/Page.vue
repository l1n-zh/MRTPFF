<template>
  <div class="w-full bg-[#212121] text-white text-[35px] text-center p-[5px]">
    {{ route.params.station }}
  </div>
  
    <field-daily-predict></field-daily-predict>

  <field>
    <field-weekly-predict></field-weekly-predict>
  </field>
</template>

<script setup>
import FieldDailyPredict from "./page/FieldDailyPredict.vue";
import FieldWeeklyPredict from "./page/FieldWeeklyPredict.vue";
import Field from "./page/Field.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
onMounted(() => {
  scrollTo(0, 0);
});
</script>
