<script setup lang="ts">
import { computed } from 'vue';
import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));

const ANIMATION_START = 3600; // Scroll donde comienza la animación
const ANIMATION_END = 4600;   // Scroll donde termina la animación

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})

const shouldRenderContent = computed(() => {
    return injectedScroll.value > (ANIMATION_START + 100) && injectedScroll.value <= ANIMATION_END;
})

interface ContactMethod {
    title: string;
    description: string;
    icon: string;
    link: string;
    color: string;
}

const contactMethods: ContactMethod[] = [
    {
        title: "Email",
        description: "elianremaggi@gmail.com",
        icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        link: "mailto:elianremaggi@gmail.com",
        color: "#42b883"
    },
    {
        title: "LinkedIn",
        description: "Conecta profesionalmente",
        icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z",
        link: "https://www.linkedin.com/in/elian-remaggi/",
        color: "#0077b5"
    },
    {
        title: "GitHub",
        description: "Revisa mi código",
        icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
        link: "https://github.com/elianremaggi",
        color: "#333"
    }
]


</script>

<template>
    <div v-if="shouldRender" class="fixed inset-0 z-10 h-full w-full animate__animated animate__fadeIn">
        <!-- Fondo con blur -->
        <div class="absolute inset-0 bg-blue-950/60 backdrop-blur-sm"></div>

        <div v-if="shouldRenderContent" class="relative h-full overflow-y-auto">
            <div class="min-h-full flex flex-col items-center justify-start px-4 py-8">
                <section class="w-full max-w-6xl mx-auto">
                    <!-- Título principal -->
                    <div class="text-center mb-5">
                        <h1 class="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent 
                            bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
                            animate__animated animate__slideInDown mb-4">
                            Contacto
                        </h1>
                        <p class="text-xl text-white/80 animate__animated animate__slideInUp">
                            ¿Tienes un proyecto en mente? ¡Hablemos!
                        </p>
                    </div>

                    <div class="max-w-4xl mx-auto">
                        <!-- Información de contacto -->
                        <div class="space-y-8 animate__animated animate__slideInUp">
                            <div class="text-center">
                                <h2 class="text-3xl font-bold text-white mb-2">Métodos de Contacto</h2>
                                <p class="text-white/70 text-lg mb-8">
                                    Puedes contactarme a través de cualquiera de estos medios.
                                    Estoy disponible para proyectos freelance y oportunidades laborales.
                                </p>
                            </div>
                            <!-- Badges de disponibilidad -->
                            <div class="flex flex-wrap justify-center gap-4 mb-2">
                                <span
                                    class="px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 font-medium">
                                    ✅ Disponible para proyectos
                                </span>
                                <span
                                    class="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-400 font-medium">
                                    🌍 Trabajo remoto
                                </span>
                                <span
                                    class="px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 font-medium">
                                    ⚡ Respuesta rápida
                                </span>
                            </div>

                            <!-- Métodos de contacto -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div v-for="(method, index) in contactMethods" :key="index"
                                    class="group animate__animated animate__slideInUp"
                                    :style="{ animationDelay: `${index * 0.1}s` }">
                                    <a :href="method.link" target="_blank" class="block p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 
                                        hover:bg-white/20 hover:border-white/40 transition-all duration-300 
                                        transform hover:-translate-y-1 hover:shadow-xl">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <div class="w-12 h-12 rounded-lg flex items-center justify-center"
                                                    :style="{ backgroundColor: method.color }">
                                                    <svg class="w-6 h-6 text-white" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path :d="method.icon" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="flex-1">
                                                <h3 class="text-xl font-semibold text-white group-hover:text-green-400 
                                                    transition-colors duration-300">
                                                    {{ method.title }}
                                                </h3>
                                                <p
                                                    class="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                                                    {{ method.description }}
                                                </p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <svg class="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300"
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Efectos de hover personalizados */
.group:hover .group-hover\:text-green-400 {
    color: #4ade80;
}

/* Animaciones personalizadas */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .text-5xl.md\:text-6xl {
        font-size: 3rem;
    }

    .grid-cols-1.md\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
}

/* Scrollbar personalizado */
.overflow-y-auto::-webkit-scrollbar {
    width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #42d392, #647eff);
    border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #3bc183, #5a6fd8);
}
</style>