<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
import { computed } from 'vue';
import { gsap } from 'gsap'

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));

const subtitle = ref('Visualizando el futuro de tus proyectos inmobiliarios')
const displayedText = ref('')
const subtitleRef = ref<HTMLElement | null>(null)

const ANIMATION_START = 0 // Scroll donde comienza la animación
const ANIMATION_END = 750   // Scroll donde termina la animación
const ANIMATION_DURATION = ANIMATION_END - ANIMATION_START

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})

const animationProgress = computed(() => {
    return Math.min(1, Math.max(0, (injectedScroll.value - ANIMATION_START) / ANIMATION_DURATION));
})

watch(animationProgress, (progress) => {
    const charsToShow = Math.floor(progress * subtitle.value.length)
    displayedText.value = subtitle.value.substring(0, charsToShow)

    // Animación de letras individuales
    if (subtitleRef.value) {
        const chars = subtitleRef.value.querySelectorAll('.char')
        gsap.to(chars, {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.03,
            ease: 'power2.out'
        })
    }
})

watch(animationProgress, (progress) => {
    const charsToShow = Math.floor(progress * subtitle.value.length)
    displayedText.value = subtitle.value.substring(0, charsToShow)

    if (subtitleRef.value) {
        const chars = subtitleRef.value.querySelectorAll('.char')
        gsap.to(chars, {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.03,
            ease: 'power2.out'
        })
    }
})

onMounted(() => {
    if (subtitleRef.value) {
        gsap.set(subtitleRef.value.querySelectorAll('.char'), {
            opacity: 0,
            x: -10
        })
    }
})
</script>

<template>
    <!-- Contenedor principal (ocupa toda la pantalla) -->
    <div v-show="shouldRender" class="relative w-full h-screen overflow-hidden">
        <div class="fixed inset-0 flex flex-col items-center justify-center p-4">
            <div
                class="relative w-60 h-60 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90  mb-10 rounded-full p-2 vue-gradient">
                <img class="w-full h-full object-cover rounded-full" src="@/assets/foto.jpeg" alt="Foto de perfil">
            </div>
            <b id="name" class="text-4xl md:text-6xl font-bold text-white text-center">
                Elian Remaggi
                <div class="w-full vue-gradient h-1 rounded-full"></div>
                <div class="mt-5">Software Developer</div>
            </b>
            <h3 id="subtitle" ref="subtitleRef" class="text-2xl md:text-4xl text-white font-bold mt-16 text-center">
                {{ displayedText }}
            </h3>
        </div>
    </div>
</template>


<style scoped>
#name {
    animation: bounce;
    animation-duration: 2s;
}
</style>