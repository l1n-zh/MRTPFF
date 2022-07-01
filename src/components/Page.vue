<template>
    <div class="w-full bg-[#212121] text-white text-[40px] text-center p-[24px]">明德站</div>
    <field>
        <field-daily-predict></field-daily-predict>
    </field>
    <field>
        <field-weekly-predict></field-weekly-predict>
    </field>
</template>

<script setup>
import FieldDailyPredict from "./page/FieldDailyPredict.vue";
import FieldWeeklyPredict from "./page/FieldWeeklyPredict.vue";
import Field from "./page/Field.vue"
</script>
