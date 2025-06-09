<script setup lang="ts">
import { computed } from 'vue';

import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
const ANIMATION_START = 1000 // Scroll donde comienza la animación
const ANIMATION_END = 2000   // Scroll donde termina la animación
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
        title: "Software Developer",
        company: "Fundacion Medica - HPC",
        date: "Jun 2022 - Present",
        description: "FullStack web application development. Hospital management system and clinical records project migrations.",
        skills: ["Vue 3", "Nuxt", "TypeScript", "Tailwind CSS", "SQL", "Git"]
    },
    {
        title: "AI Training Intern",
        company: "Remotask",
        date: "Mar 2020 - 2022",
        description: "AI: 3D scenario data analysis.",
        skills: ["LIDAR", "Slack"]
    },
    {
        title: "Software Developer",
        company: "General Pueyrredon Municipality",
        date: "Sep 2019 - Feb 2020",
        description: "Educational platform development, technological solutions for pandemic-related challenges.",
        skills: ["Moodle", "JavaScript", "CSS", "PHP", "Git"]
    },
    {
        title: "Software Developer",
        company: "Andromeda Latam",
        date: "Sep 2019 - Feb 2020",
        description: "LAMP web developer using Mgento e-commerce framework.",
        skills: ["Magento", "Linux", "Apache", "MySQL", "PHP"]
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

    <div v-show="shouldRender" class=" fixed inset-0 container mx-auto px-4 py-8">
        <!-- Línea vertical -->
        <div v-show="shouldRenderBlock(ANIMATION_START + 100)" class="absolute left-3.5 top-0 h-full w-1 bg-gray-700 md:left-1/2 md:-translate-x-1/2"></div>

        <!-- Elementos de la línea de tiempo -->
        <div v-show="shouldRenderBlock(ANIMATION_START + (index * 100) )" v-for="(job, index) in jobs" :key="index" class="relative mb-8 pl-12 md:pl-0 md:even:flex-row-reverse">
            <!-- Punto indicador -->
            <div 
                class="absolute left-0 top-4 w-4 h-4 rounded-full bg-green-500 border-4 border-gray-700 transform -translate-x-1/2 md:left-1/2">
            </div>

            <!-- Contenido del trabajo -->
            <div class="bg-gray-700 p-6 rounded-lg shadow-md md:w-5/12">
                <div class="flex flex-col sm:flex-row justify-between">
                    <h2 class="text-xl font-bold text-gray-200">{{ job.title }}</h2>
                    <span class="text-sm text-gray-500">{{ job.date }}</span>
                </div>
                <h3 class="text-lg text-gray-100 mb-2">{{ job.company }}</h3>
                <p class="text-gray-200">{{ job.description }}</p>

                <!-- Habilidades -->
                <div class="mt-3 flex flex-wrap gap-2">
                    <span v-for="(skill, skillIndex) in job.skills" :key="skillIndex"
                        class="px-2 py-1 bg-gray-800 text-gray-100 text-xs rounded-full">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* Pequeños ajustes para asegurar la línea vertical */
.container {
    max-width: 800px;
}
</style>