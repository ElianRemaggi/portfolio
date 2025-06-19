<script setup lang="ts">
import { computed } from 'vue';
import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
const ANIMATION_START = 1700 // Scroll donde comienza la animación
const ANIMATION_END = 3000   // Scroll donde termina la animación

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})


watch(shouldRender, (shouldRender) => {
    if (shouldRender) {
        console.log("Academic")
    }
})

</script>

<template>

    <div v-show="shouldRender"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  z-10 h-full animate__animated  animate__fadeIn"
        :class="{
            'animate__animated animate__fadeOut': injectedScroll > (ANIMATION_START + 600)
        }">
        
    </div>

</template>

<style scoped></style>