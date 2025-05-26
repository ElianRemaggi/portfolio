<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
import { computed } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));

const ANIMATION_START = 0;
const ANIMATION_END = 2000;

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})


</script>

<template>
    <div :class="{ 'hidden': !shouldRender }"
        class="relative w-full h-screen  ">
        <particles/>

        <div class="flex flex-col absolute inset-0  items-center mt-16 p-4">
            <div class="relative rounded-full w-48 h-48 md:w-80 md:h-80 mb-8">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-azul-400 via-azul-600 to-azul-800 rounded-full blur-sm">
                </div>
                <div class="absolute inset-0  rounded-full p-2 vue-gradient">
                    <img class=" w-full object-cover rounded-full" src="@/assets/foto.jpeg" alt="Foto de perfil">
                </div>
            </div>
            <b id="name" class="text-4xl md:text-6xl font-bold text-white text-center">
                <div>Elian Remaggi</div>
                <div class="w-full vue-gradient h-1 rounded-full"></div>
                <div class="mt-5">Software Developer</div>
            </b>

        </div>
    </div>
</template>


<style scoped>
#name {
    animation: bounce;
    animation-duration: 2s;
}

</style>