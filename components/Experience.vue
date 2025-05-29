<script setup lang="ts">
import { computed } from 'vue';
import { gsap } from 'gsap';
import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
const ANIMATION_START = 0 // Scroll donde comienza la animación
const ANIMATION_END = 1000   // Scroll donde termina la animación
const ANIMATION_DURATION = ANIMATION_END - ANIMATION_START
</script>

<template>
    <div>

    </div>
</template>

<style scoped></style>