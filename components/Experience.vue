<script setup lang="ts">
import { computed } from 'vue';

import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
//const ANIMATION_START = 1000 // Scroll donde comienza la animación
//const ANIMATION_END = 2000   // Scroll donde termina la animación

const ANIMATION_START = 1000 // Scroll donde comienza la animación
const ANIMATION_END = 1800   // Scroll donde termina la animación

interface Job {
    title: string;
    company: string;
    date: string;
    description: string;
    skills: Skill[];
}

interface Skill {
    nombre: string;
    color: string;
}

const jobs: Job[] = [
    {
        "title": "Software Developer",
        "company": "Fundacion Medica - HPC",
        "date": "06/2022 - Present",
        "description": "FullStack web application development. Hospital management system and clinical records project migrations.",
        "skills": [
            { "nombre": "Vue 3", "color": "#42b883" },
            { "nombre": "Nuxt", "color": "#00dc82" },
            { "nombre": "TypeScript", "color": "#3178c6" },
            { "nombre": "Tailwind CSS", "color": "#38bdf8" },
            { "nombre": "Java", "color": "#f14e32" },
            { "nombre": "SQL", "color": "#00758f" },
            { "nombre": "Git", "color": "#f14e32" }
        ]
    },
    {
        "title": "AI Training Intern",
        "company": "Remotask",
        "date": "03/2020 - 01/2022",
        "description": "AI: 3D scenario data analysis.",
        "skills": [
            { "nombre": "LIDAR", "color": "#5bc0de" },
            { "nombre": "Slack", "color": "#4a154b" }
        ]
    },
    {
        "title": "Software Developer - Academic Internship",
        "company": "General Pueyrredon Municipality",
        "date": "09/2019 - 02/2020",
        "description": "Educational platform development, technological solutions for pandemic-related challenges.",
        "skills": [
            { "nombre": "Moodle", "color": "#f98012" },
            { "nombre": "JavaScript", "color": "#d1b514" },
            { "nombre": "CSS", "color": "#2965f1" },
            { "nombre": "PHP", "color": "#5d5d9e" },
            { "nombre": "Git", "color": "#f14e32" }
        ]
    },
    {
        "title": "Software Developer",
        "company": "Andromeda Latam",
        "date": "09/2019 - 02/2020",
        "description": "LAMP web developer using Magento e-commerce framework.",
        "skills": [
            { "nombre": "Magento", "color": "#f46f25" },
            { "nombre": "Linux", "color": "#fcc624" },
            { "nombre": "Apache", "color": "#d22128" },
            { "nombre": "MySQL", "color": "#00758f" },
            { "nombre": "PHP", "color": "#5d5d9e" }
        ]
    }
]

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})


function shouldRenderBlock(index: number) {
    return injectedScroll.value > (ANIMATION_START + (index * 100));
}


</script>

<template>

    <div v-if="shouldRender"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  z-10 h-full animate__animated  animate__fadeIn"
        :class="{
            'animate__animated animate__fadeOut': injectedScroll > (ANIMATION_START + 600)
        }">
        :class
        <div class="absolute inset-0 bg-blue-950/60  backdrop-blur-sm w-full "></div>

        <div class="relative p-8 text-white w-fit m-auto">

            <div v-for="(job, index) in jobs" :index="index" class="space-y-4 mb-5 ">
                <div v-if="shouldRenderBlock(index)" class="p-4 bg-white/20 rounded-lg" :class="{
                    'animate__animated animate__zoomIn': injectedScroll <= (ANIMATION_START + 600),
                    'animate__animated animate__fadeOut': injectedScroll > (ANIMATION_START + 600)
                }">
                    <div>
                        <h2 class="font-semibold text-2xl"> <u>  {{ job.title }} </u></h2>
                        <div class="flex">
                            <p class="text-xl"> {{ job.company }} </p>  <p class="text-sm my-auto ml-2"> - {{ job.date }}</p>  
                        </div>
                        <p>{{ job.description }}</p>

                        <div class="flex flex-wrap gap-2 mt-4">
                            <span v-for="(skill, index) in job.skills" :key="index" class="px-2 py-1 rounded-full"
                                :style="{ backgroundColor: skill.color }">
                                {{ skill.nombre }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.container {
    max-width: 800px;
}
</style>
