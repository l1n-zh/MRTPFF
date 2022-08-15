<template>
  <linearGradient spread-method="pad" x1="1" x2="0" y1="1" y2="0">
    <stop offset="0" :stop-color="gradientColors[color][0]" stop-opacity="1"></stop>
    <stop offset="1" :stop-color="gradientColors[color][1]" stop-opacity="1"></stop>
  </linearGradient>
</template>

<script setup>

defineProps({
  color: String
})

const gradientColors = {
  R: ["#F25F5F", "#FF63D8"],
  BL: ["#8A63FF", "#5EA8F2"],
  BR: ["#993C3C", "#FF8B64"],
  O: ["#F2775E", "#FFD863"],
  G: ["#8FF25E", "#63FFA4"],
  Y: ["#F2C15E", "#FFFF63"]
}

</script>