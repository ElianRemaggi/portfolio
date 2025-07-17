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
    <div v-if="shouldRender" class="fixed inset-0 z-10 h-full w-full  animate__animated animate__fadeIn">
        <DnaBackground class="fixed inset-0 z-0" />
        
        <!-- Contenedor principal con scroll y posición más alta -->
        <div class="fixed inset-0 z-10 overflow-y-auto pt-12 md:pt-20"> <!-- Añadido padding-top -->
            <!-- Centrado horizontal con posición vertical más alta -->
            <div class="min-h-full flex flex-col items-center justify-start px-4"> <!-- justify-start para alinear arriba -->
                <section class="w-full max-w-7xl py-4 mx-auto"> <!-- Reducido padding vertical -->
                    
                    <!-- Encabezado de Projects más compacto -->
                    <div class="max-w-screen-md mb-6 lg:mb-10 mx-auto text-center"> <!-- Reducido margen inferior -->
                        <h2 class="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects</h2>
                        <p class="text-gray-500 sm:text-lg dark:text-gray-400">My latest work and professional projects, designed to showcase my skills and experience.</p>
                    </div>
                    
                    <!-- Grid de proyectos -->
                    <div class="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
                        <!-- Proyecto 1 - Ejemplo -->
                        <!-- Proyecto 1 -->
                        <div class="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                            <p class="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        
                        <!-- Repetir para otros proyectos -->
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
    padding-top: 5vh; /* Puedes ajustar este valor */
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