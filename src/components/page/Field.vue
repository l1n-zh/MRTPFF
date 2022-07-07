<template>
  <div class="field">
    <slot></slot>
  </div>
</template>

<style scoped lang="postcss">

.field {
  @apply relative
    w-[327px]
    h-auto
    bg-[#323232]
    rounded-[9px]
    flex
    flex-col
    mt-[30px]
    px-[15px]
    py-[21px];
    box-shadow: inset 0 1px 6px 1px rgba(0, 0, 0, 0.2);
}
</style>