<script setup>

import { computed } from 'vue';
import { inject } from 'vue';

const injectedScroll = inject < Ref < number >> ('scrollValue', ref(0));
const ANIMATION_START = 0 // Scroll donde comienza la animación
const ANIMATION_END = 1000   // Scroll donde termina la animación


const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})

</script>

<template>

    <div v-show="shouldRender" class="relative w-full h-screen overflow-hidden z-10">
        <div class="fixed inset-0 flex flex-col items-center p-4"
            :class="{ 'justify-center': !shouldRenderDescription, 'justify-start pt-20': shouldRenderDescription }">
            <p>Hola</p>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>