<script setup lang="ts">
import { computed } from 'vue';
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
<div v-show="shouldRender" class="relative w-full h-screen overflow-hidden z-10">
    <div class="fixed inset-0 flex flex-col items-center p-4"
        :class="{ 'justify-center': !shouldRenderDescription, 'justify-start pt-20': shouldRenderDescription }">
        <!-- Elementos centrados (foto, nombre y título) -->
        <div :class="[shouldRenderDescription ? 'opacity-100' : 'opacity-0 pointer-events-none',
        injectedScroll > (ANIMATION_END - 200) ? 'animate__fadeOut' : '']"
            class="
            fixed top-20
            w-60 h-60 sm:w-70 sm:h-70 md:w-70 md:h-70 lg:w-70 lg:h-70 mb-10 rounded-full p-2 vue-gradient animate__animated animate__backInUp">
            <img class="w-full h-full object-cover rounded-full" src="@/assets/foto.jpeg" alt="Foto de perfil">
        </div>
        <b :class="[shouldRenderDescription ? 'opacity-100' : 'opacity-0 pointer-events-none',
        injectedScroll > (ANIMATION_END - 200) ? 'animate__fadeOut' : '']"
            class="
            fixed top-90
            text-4xl md:text-4xl lg:text-4xl font-bold text-white text-center animate__animated animate__backInUp">
            Elian Remaggi
            <div class="w-full vue-gradient h-1 rounded-full"></div>
            <div class="mt-5">Software Developer</div>
        </b>
        
        <transition name="slide-up">
            <h3 id="subtitle" :class="[shouldRenderDescription ? 'opacity-100' : 'opacity-0 pointer-events-none',
            injectedScroll > (ANIMATION_END - 200) ? 'animate__fadeOut' : '']" ref="subtitleRef"
                class="
                fixed top-110 left-3 sm:left-4
                w-full ml-0 px-0 md:px-4 mt-20 text-3xl md:text-4xl text-white font-bold text-left animate__animated animate__fadeIn">
                {{ displayedText }}
            </h3>
        </transition> 
    </div>
</div>
</template>

<style scoped>
/* Estilo para el texto que aparece */
#subtitle {
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>