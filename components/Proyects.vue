<script setup lang="ts">
import { computed } from 'vue';

import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));

const ANIMATION_START = 1800;
const ANIMATION_END = 2500;

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})

function shouldRenderBlock(index: number) {
    return injectedScroll.value > (ANIMATION_START + (index * 100)+200);
}

interface Project {
    title: string
    description: string
    repo?: string
    deploy?: string
}

const projects: Project[] = [
    {
        title: "Redevelopment",
        description: "Promotion of a architecture rendering and web development service for property developers",
        repo: "https://github.com/ElianRemaggi/rendevelopment",
        deploy: "https://rendevelopment-git-main-elianremaggis-projects.vercel.app/"
    },
    {
        title: "TDD Vitest Practice",
        description: "Documentation about TDD with Vite and some practice exercises like testing katas",
        repo: "https://github.com/ElianRemaggi/tddVitestPractice",
        deploy: "https://tdd-vitest-practice.vercel.app/"
    },
    {
        title: "Topic Twister",
        description: "Clone of video game Topic Twister, developed with Unity, C# using TDD and Pair Programming",
        repo: "https://gitlab.com/luism.garciac/topic-twister/-/commits/main"
    },
    {
        title: "Login Services (Topic Twister)",
        description: "Login backend service developed with Kotlin, Ktor using TDD and Pair Programming. Deployed on Heroku",
        repo: "https://github.com/ElianRemaggi/login-topic-twister"
    },
    {
        title: "Topic Twister Backend API",
        description: "Backend API services for the videogame, developed with C# ASP.NET using TDD and Pair Programming",
        repo: "https://github.com/ElianRemaggi/Topic-Twister-BackendAPI"
    },
    {
        title: "The Random API",
        description: "Java API developed to return random values, this project is going to be migrated to Spring Boot",
        repo: "https://github.com/ElianRemaggi/TheRandomAPI"
    }
]


</script>
<template>
    <div v-if="shouldRender" class="fixed inset-0 z-10 h-full w-full animate__animated animate__fadeIn">
        <DnaBackground class="fixed inset-0 z-0" />

        <div v-if="injectedScroll > (ANIMATION_START + 100)" class="fixed inset-0 z-10 overflow-y-auto ">
            <div class="min-h-full flex flex-col items-center justify-start px-4">
                <section class="w-full max-w-7xl py-4 mx-auto">
                    <div class="max-w-screen-md mb-6 lg:mb-10 mx-auto text-center relative group">
                        <!-- Título con gradiente y efecto hover -->
                        <h2 class="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent 
                            bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
                            group-hover:bg-gradient-to-l transition-all duration-500
                            [text-shadow:_0_4px_12px_rgba(110,231,183,0.3)]
                            animate__animated 
                            animate__slideInUp">
                            Projects
                        </h2>

                        <!-- Subtítulo con borde animado -->
                        <div class="relative inline-block mb-2 animate__animated 
                            animate__slideInUp">
                            <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 relative z-10 px-4 py-2 ">
                                A selection of projects to showcase skills and experience.
                                All my repositories on GitHub:
                            </p>
                            <div class=" transition-transform hover:scale-105 duration-300 inline-block">
                                <a href="https://github.com/elianremaggi" target="_blank"
                                    class="flex flex-col items-center">
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
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="(project, index) in projects">
                                <Project v-if="shouldRenderBlock(index)" :key="index" :title="project.title"
                                    :description="project.description" :repo="project.repo" :deploy="project.deploy" />
                            </div>
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
        padding-top: 2vh;
    }
}
</style>