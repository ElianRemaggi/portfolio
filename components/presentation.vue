<script setup lang="ts">

import { computed } from 'vue';
import { gsap } from 'gsap';
import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
const ANIMATION_START = 0 // Scroll donde comienza la animación
const ANIMATION_END = 1000   // Scroll donde termina la animación
const ANIMATION_DURATION = ANIMATION_END - ANIMATION_START

const subtitle = ref('Web Developer with 4+ years of experience specializing in Vue.js. I combine work experience, academic training, and constant self-taught learning.')
const displayedText = ref('')
const subtitleRef = ref<HTMLElement | null>(null)

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})

const shouldRenderDescription = computed(() => {
    return injectedScroll.value > (ANIMATION_START + 200) && injectedScroll.value <= ANIMATION_END;
})

const animationProgress = computed(() => {
    return Math.min(1, Math.max(0, (injectedScroll.value - ANIMATION_START) / (ANIMATION_DURATION - 100)) / 0.75);
})

watch(animationProgress, (progress) => {
    const charsToShow = Math.floor(progress * subtitle.value.length)
    displayedText.value = subtitle.value.substring(0, charsToShow)

})

</script>

<template>
    <!-- Contenedor principal (ocupa toda la pantalla) -->
    <div v-show="shouldRender" class="relative w-full h-screen overflow-hidden">
        <div class="fixed inset-0 flex flex-col items-center p-4"
            :class="{ 'justify-center': !shouldRenderDescription, 'justify-start pt-20': shouldRenderDescription }">
            <div :class="[shouldRenderDescription ? 'opacity-100' : 'opacity-0 pointer-events-none',
            injectedScroll > (ANIMATION_END - 200) ? 'animate__fadeOut' : '']"
                class="fixed top-10 sm:top-10 md:top-10 lg:top-20  w-60 h-60 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90 mb-10 rounded-full p-2 vue-gradient animate__animated animate__backInUp">
                <img class="w-full h-full object-cover rounded-full" src="@/assets/foto.jpeg" alt="Foto de perfil">
            </div>
            <b :class="[shouldRenderDescription ? 'opacity-100' : 'opacity-0 pointer-events-none',
            injectedScroll > (ANIMATION_END - 200) ? 'animate__fadeOut' : '']"
                class="fixed top-80 sm:top-90 md:top-100 lg:top-115 text-4xl md:text-6xl font-bold text-white text-center animate__animated animate__backInUp">
                Elian Remaggi
                <div class="w-full vue-gradient h-1 rounded-full"></div>
                <div class="mt-5">Software Developer</div>
            </b>
            <transition name="slide-up">
                <h3 id="subtitle" :class="[shouldRenderDescription ? 'opacity-100' : 'opacity-0 pointer-events-none',
                injectedScroll > (ANIMATION_END - 200) ? 'animate__fadeOut' : '']" ref="subtitleRef"
                    class=" fixed top-120 sm:top-140 md:top-140 lg:top-150 text-2xl md:text-4xl text-white font-bold mt-16 text-center animate__animated animate__fadeIn">
                    {{ displayedText }}
                </h3>
            </transition>
        </div>
    </div>
</template>
