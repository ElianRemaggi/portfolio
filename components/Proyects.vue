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
            <div class="min-h-full flex flex-col items-center justify-start px-4">
                <!-- justify-start para alinear arriba -->
                <section class="w-full max-w-7xl py-4 mx-auto"> <!-- Reducido padding vertical -->

                    <!-- Encabezado de Projects más compacto -->
                    <div class="max-w-screen-md mb-6 lg:mb-10 mx-auto text-center"> <!-- Reducido margen inferior -->
                        <h2 class="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects
                        </h2>
                        <p class="text-gray-500 sm:text-lg dark:text-gray-400">Some works and professional projects,
                            designed to showcase my skills and experience.</p>
                    </div>

                    <!-- 
                    <div class="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
                        <Project
                        title="Marketing Dashboard"
                        description="A comprehensive analytics platform for marketing teams"
                        url="https://example.com/marketing"
                        />
                    -->
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