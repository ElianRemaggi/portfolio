<script setup lang="ts">
import { computed, ref } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));

const ANIMATION_START = 1800;
const ANIMATION_END = 3000;

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
});

const colorMap = [
    { hex: "#5d5d9e", tailwind: ["bg-indigo-600", "bg-indigo-700", "bg-violet-600"] },
    { hex: "#42b883", tailwind: ["bg-emerald-400", "bg-emerald-500", "bg-teal-400"] },
    { hex: "#00dc82", tailwind: ["bg-green-400", "bg-emerald-400", "bg-teal-300"] },
    { hex: "#3178c6", tailwind: ["bg-blue-500", "bg-blue-600", "bg-sky-500"] },
    { hex: "#38bdf8", tailwind: ["bg-sky-400", "bg-sky-500", "bg-cyan-400"] },
    { hex: "#4a154b", tailwind: ["bg-purple-800", "bg-purple-900", "bg-fuchsia-900"] },
    { hex: "#00758f", tailwind: ["bg-cyan-600", "bg-cyan-700", "bg-teal-600"] }
];

// Ahora almacenamos tanto el color como el ancho para cada elemento
const bars = ref<{ color: string, width: string }[]>([]);

const getRandomSimilarColor = (): string => {
    const randomGroup = colorMap[Math.floor(Math.random() * colorMap.length)];
    return randomGroup.tailwind[Math.floor(Math.random() * randomGroup.tailwind.length)];
};

const generateBars = () => {
    bars.value = Array.from({ length: 25 }, () => ({
        color: getRandomSimilarColor(),
        width: `${Math.random() * 75}%`
    }));
};

interface img {
    alt: string,
    url: string
}

const imgMap: img[] = [
    { alt: "vue", url: "~/assets/png/lenguages/vue.png" },
    { alt: "nuxt", url: "~/assets/png/lenguages/nuxtjs.png" },
    { alt: "java", url: "~/assets/png/lenguages/java.png" },
    { alt: "typescript", url: "~/assets/png/lenguages/typescript.png" },
    { alt: "tailwind", url: "~/assets/png/lenguages/tailwind.png" },
]

// Generar los elementos solo una vez al montar el componente
onMounted(() => {
    generateBars();
});
</script>

<template>
    <div v-if="shouldRender"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 h-full"
        :class="{ 'animate__animated animate__fadeOut': injectedScroll > (ANIMATION_START + 600) }">
        <div class="absolute inset-0 w-full bg-gray-900"></div>

        <!-- Contenedor de círculos -->
        <div class="absolute w-full h-full ml-2 overflow-hidden">
            <div v-for="(element, index) in bars" :key="index"
                class="flex w-full h-5 m-5 md:ml-20 lg:ml-40 animate__animated animate__fadeInLeft "
                :style="{ animationDelay: `${index * 0.05}s` }">
                <div class="rounded-full w-5 h-5 my-5 opacity-80" :class="element.color"></div>
                <div class="w-120 h-5 ml-2 my-5 rounded-4xl opacity-50 " :class="element.color"
                    :style="{ width: element.width }"></div>
            </div>
        </div>

        <div v-if="injectedScroll > (ANIMATION_START + 100)" class="p-4 bg-black/50 rounded-lg m-10" :class="{
            'animate__animated animate__zoomIn': injectedScroll <= (ANIMATION_START + 600),
            'animate__animated animate__fadeOut': injectedScroll > (ANIMATION_START + 600)
        }">

            <p class="red-500 text-5xl"> </p>
        </div>
    </div>
    <img class="w-full h-full object-cover rounded-full" src="@/assets/foto.jpeg" alt="Foto de perfil">

    <!-- Fondo semitransparente -->
    <div
        class="fixed inset-0 w-full h-full flex bg-gray-900/50 flex flex-wrap justify-center items-center gap-4 p-4 z-11">
        <img v-for="(img, index) in imgMap" :key="index" :src="img.url" :alt="img.alt"
            class="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300" />
    </div>
</template>