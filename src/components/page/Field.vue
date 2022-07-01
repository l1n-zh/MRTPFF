<template>
  <div class="field flex mt-[30px]">
    <slot></slot>
  </div>
</template>

<style scoped lang="postcss">

.field {
  @apply relative
    bg-[#323232]
    rounded-[9px]
    w-[327px]
    h-[250px]
    px-[15px]
    py-[21px];
    box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.2);
}
</style>