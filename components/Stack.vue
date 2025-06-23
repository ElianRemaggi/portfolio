<script setup lang="ts">
import { computed } from 'vue';

import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));

const ANIMATION_START = 1800 
const ANIMATION_END = 3000  

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})



</script>

<template>

    <div v-if="shouldRender"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  z-10 h-full "
        :class="{
            'animate__animated animate__fadeOut': injectedScroll > (ANIMATION_START + 600)
        }">
        <div v-for="i in 10" :key="i">
            <div class="absolute inset-0 bg-gray-900"></div>
        </div>
        <div class="absolute inset-0 w-full bg-gray-900"></div>

        <div class="relative p-8 text-white w-fit m-auto">

        </div>
    </div>

</template>

<style scoped>

</style>
