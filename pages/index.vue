<script setup lang="ts">
import { useLenis } from 'lenis/vue'
import { ref, onMounted, onUnmounted, provide } from 'vue'
import DnaBackground from '~/components/DnaBackground.vue'
import Stack from '~/components/Stack.vue'

const scrollPosition = ref(0)
const lenis = useLenis()

// ¡Provee la REF completa, no el .value!
provide('scrollValue', scrollPosition) // ← Cambio clave aquí

const scrollHandler = ({ scroll }: { scroll: number }) => {
    scrollPosition.value = Math.round(scroll)
}

onMounted(() => {
    if (lenis.value) {
        lenis.value.on('scroll', scrollHandler)
    }
})

onUnmounted(() => {
    if (lenis.value) {
        lenis.value.off('scroll', scrollHandler) // Cambiass destroy() por off()
    }
})
</script>

<template>


    <div>

        <!--Dev tools-->
        <resolution />
        <ScrollPosition />
        <Particles />
        <presentation /> 
        <Experience />
        <Proyects/>
        <Stack />
        <ScrollStart v-if="scrollPosition > 100" />
    </div>
</template>


<style scoped></style>