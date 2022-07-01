<template>
    <div class="fixed h-auto z-50 w-[375px] h-max flex flex-col items-center bg-[#212121] shadow-md">
        <text class="text-white mt-[24px] text-[25px]"> 捷運人數預測 </text>
        <search-bar></search-bar>
    </div>
    <div class="mt-[137.5px]"/>
    <panel station="大安森林公園" :time="12" :entered="2100" :exited="2000" />
    <panel station="大安森林公園" :time="12" :entered="2100" :exited="2000" />
</template>

<script setup>
import panel from "./panel.vue";
import SearchBar from "./TheSearchBar.vue"

</script>
