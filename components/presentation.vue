<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
import { computed } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));

const ANIMATION_START = 0;
const ANIMATION_END = 1000;

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})

</script>

<template>
    <div :class="{ 'hidden': !shouldRender }"
        class="relative w-full h-screen bg-gradient-to-b from-cyan-500 to-blue-400">
        <!-- Contenido centrado responsivo -->
        <div class="flex flex-col absolute inset-0  items-center justify-center p-4">
            <div class="relative rounded-full w-48 h-48 md:w-80 md:h-80 mb-8">
                <!-- Gradiente como pseudo-elemento -->
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-azul-400 via-azul-600 to-azul-800 rounded-full blur-sm">
                </div>

                <!-- Imagen con fondo blanco para el "borde" interior -->
                <div class="absolute inset-0 bg-white rounded-full p-1">
                    <img class=" w-full object-cover rounded-full" src="@/assets/foto.jpeg" alt="Foto de perfil">
                </div>
            </div>
            <b class="text-4xl md:text-6xl font-bold text-white text-center">
                <div>Elian</div>
                <div>Remaggi</div>
            </b>
        </div>
    </div>
</template>


<style scoped></style>