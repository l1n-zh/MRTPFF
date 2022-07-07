<template>
    <div class="flex flex-col w-full h-full">
        <div class="flex flex-col w-full mb-[20px]" v-for="i in 2">
            <div class="bar" v-for="j in i+2" :style="{ width: Math.floor(Math.random() * 60 + 40) + '%' }"></div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.bar {
    @apply h-[8px] rounded-[2px] mt-[10px];
    background: repeating-linear-gradient(to right, #323232, #434343, #323232);
    background-size: 200% auto;
    background-position: 0 100%;
    animation: loading 1.5s linear infinite;
}

@keyframes loading {
    from {
        background-position: 0 0;
    }

    to {
        background-position: -200% 0;
    }
}
</style>