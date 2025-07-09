<script setup lang="ts">
import { computed } from 'vue';

import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
//const ANIMATION_START = 1000 // Scroll donde comienza la animación
//const ANIMATION_END = 2000   // Scroll donde termina la animación

const ANIMATION_START = 2500 // Scroll donde comienza la animación
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

    <div v-if="shouldRender"

        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  z-10 h-full animate__animated  animate__fadeIn">

    <DnaBackground class=" z-20"/>
    </div>

</template>

<style scoped>

.container {
    max-width: 800px;
}
</style>
 