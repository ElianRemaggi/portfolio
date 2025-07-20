<script setup lang="ts">
import { computed } from 'vue';

import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
//const ANIMATION_START = 1000 // Scroll donde comienza la animación
//const ANIMATION_END = 2000   // Scroll donde termina la animación

const ANIMATION_START = 2300 // Scroll donde comienza la animación
const ANIMATION_END = 3000   // Scroll donde termina la animación



const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})





//watch de shouldRender para usar console log
watch(shouldRender, (value) => {
    if (value) {
        console.log('shouldRender is true');
    } else {
        console.log('shouldRender is false');
    }
});

</script>
<template>
    <div v-if="shouldRender" class="fixed inset-0 z-10 h-full w-full animate__animated animate__fadeIn">
        <DnaBackground class="fixed inset-0 z-0" />

        <div v-if="injectedScroll > (ANIMATION_START + 100)" class="fixed inset-0 z-10 overflow-y-auto pt-12 md:pt-20 ">
            <div class="min-h-full flex flex-col items-center justify-start px-4">
                <section class="w-full max-w-7xl py-4 mx-auto">
                    <div class="max-w-screen-md mb-6 lg:mb-10 mx-auto text-center relative group">
                        <!-- Título con gradiente y efecto hover -->
                        <h2 class="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent 
                            bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
                            group-hover:bg-gradient-to-l transition-all duration-500
                            [text-shadow:_0_4px_12px_rgba(110,231,183,0.3)]
                            hover:[text-shadow:_0_6px_16px_rgba(110,231,183,0.5),0_0_20px_rgba(147,51,234,0.4)]
                            dark:[text-shadow:_0_4px_12px_rgba(110,231,183,0.2)]
                            dark:hover:[text-shadow:_0_6px_16px_rgba(110,231,183,0.4),0_0_20px_rgba(147,51,234,0.3)]">
                            Projects
                        </h2>

                        <!-- Subtítulo con borde animado -->
                        <div class="relative inline-block mb-2">
                            <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 relative z-10 px-4 py-2
                                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400/20 before:to-blue-500/20 
                                    before:rounded-full before:-z-10 before:scale-x-0 group-hover:before:scale-x-100 
                                    before:origin-left before:transition-transform before:duration-500">
                                A selection of projects to showcase skills and experience.
                                All my repositories on GitHub:
                            </p>
                            <div class=" transition-transform hover:scale-105 duration-300 inline-block">
                                <a href="https://github.com/elianremaggi" class="flex flex-col items-center">
                                    <div class="relative">
                                        <img src="@/public/github.png" alt="GitHub" class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-blue-600 
                                        hover:from-green-400 hover:to-blue-500 rounded-xl p-2 border-2 
                                        border-white/20 shadow-lg transition-all duration-300">
                                    </div>
                                </a>
                            </div>
                            <span class="absolute bottom-0 left-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent 
                                transform -translate-x-1/2 group-hover:w-40 transition-all duration-500"></span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* Ajuste fino de posición */
.fixed.inset-0.overflow-y-auto {
    scroll-behavior: smooth;
    padding-top: 5vh;
    /* Puedes ajustar este valor */
}

/* Efectos de hover más sutiles */
.transform {
    transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .fixed.inset-0.overflow-y-auto {
        padding-top: 3vh;
    }

    .py-4 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
}

@media (min-width: 1024px) {
    .fixed.inset-0.overflow-y-auto {
        padding-top: 8vh;
    }
}
</style>