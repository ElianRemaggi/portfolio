<script setup lang="ts">

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));

const resetScroll = () => {
    injectedScroll.value = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>
<template>
    <p>Holaaa</p>
    <div class="fixed bottom-10 right-10 z-50 p-3 bg-black bg-opacity-70 text-white rounded-lg cursor-pointer"> 
        <button @click="resetScroll"
            class="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 flex items-center gap-2">
            Volver al inicio
        </button>
    </div>
</template>


<style scoped></style>