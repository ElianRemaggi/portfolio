<script setup lang="ts">
import { computed } from 'vue';

import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
//const ANIMATION_START = 1000 // Scroll donde comienza la animación
//const ANIMATION_END = 2000   // Scroll donde termina la animación

const ANIMATION_START = 0 // Scroll donde comienza la animación
const ANIMATION_END = 1000   // Scroll donde termina la animación

const ANIMATION_DURATION = ANIMATION_END - ANIMATION_START

interface Job {
    title: string;
    company: string;
    date: string;
    description: string;
    skills: string[];
}

const jobs: Job[] = [
    {
        "experience": [
            {
                "title": "Software Developer",
                "company": "Fundacion Medica - HPC",
                "date": "Jun 2022 - Present",
                "description": "FullStack web application development. Hospital management system and clinical records project migrations.",
                "skills": [
                    { "nombre": "Vue 3", "color": "#42b883" },
                    { "nombre": "Nuxt", "color": "#00dc82" },
                    { "nombre": "TypeScript", "color": "#3178c6" },
                    { "nombre": "Tailwind CSS", "color": "#38bdf8" },
                    { "nombre": "SQL", "color": "#00758f" },
                    { "nombre": "Git", "color": "#f14e32" }
                ]
            },
            {
                "title": "AI Training Intern",
                "company": "Remotask",
                "date": "Mar 2020 - 2022",
                "description": "AI: 3D scenario data analysis.",
                "skills": [
                    { "nombre": "LIDAR", "color": "#5bc0de" },
                    { "nombre": "Slack", "color": "#4a154b" }
                ]
            },
            {
                "title": "Software Developer",
                "company": "General Pueyrredon Municipality",
                "date": "Sep 2019 - Feb 2020",
                "description": "Educational platform development, technological solutions for pandemic-related challenges.",
                "skills": [
                    { "nombre": "Moodle", "color": "#f98012" },
                    { "nombre": "JavaScript", "color": "#f7df1e" },
                    { "nombre": "CSS", "color": "#2965f1" },
                    { "nombre": "PHP", "color": "#777bb4" },
                    { "nombre": "Git", "color": "#f14e32" }
                ]
            },
            {
                "title": "Software Developer",
                "company": "Andromeda Latam",
                "date": "Sep 2019 - Feb 2020",
                "description": "LAMP web developer using Mgento e-commerce framework.",
                "skills": [
                    { "nombre": "Magento", "color": "#f46f25" },
                    { "nombre": "Linux", "color": "#fcc624" },
                    { "nombre": "Apache", "color": "#d22128" },
                    { "nombre": "MySQL", "color": "#00758f" },
                    { "nombre": "PHP", "color": "#777bb4" }
                ]
            }
        ]
    }
];

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})


function shouldRenderBlock(index: number) {
    console.log(injectedScroll.value, index)
    return injectedScroll.value > index;
}

watch(shouldRender, (value) => {
    console.log()
})

</script>

<template>

    <div class="relative w-full max-w-2xl z-10">
        <!-- Fondo del panel con opacidad -->
        <div class="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-xl"></div>

        <!-- Contenido del panel (sin opacidad) -->
        <div class="relative p-8 text-white">

            <div class="space-y-4">
                <div v-for="(job, index) in jobs" :key="index" class="p-4 bg-white/20 rounded-lg">

                    <h2 class="font-semibold text-xl">{{ job.title }}</h2>
                    <div class="flex">
                        <h4> {{ job.company }} - {{ job.date }}</h4>
                    </div>
                    <p>Contenido completamente visible</p>
                </div>


            </div>

            <button class="mt-6 px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition">
                Botón de ejemplo
            </button>
        </div>
    </div>

</template>

<style scoped>
/* Pequeños ajustes para asegurar la línea vertical */
.container {
    max-width: 800px;
}
</style>
