<script setup lang="ts">

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
import { gsap } from 'gsap';

const resetScroll = () => {
    injectedScroll.value = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Usamos onMounted para asegurarnos de que el DOM esté listo
onMounted(() => {
    const container = document.getElementById("container");
    const arrow = document.getElementById("arrow");
    // Configura el gradiente inicial
    gsap.set(container, {
        background: "linear-gradient(to right, #7c3aed, #06b6d4)"
    });

    // Anima otros propiedades
    gsap.to(container, {
        boxShadow: "0 0 20px 10px rgba(6, 182, 212, 0.7)", // Sombra cyan
        borderRadius: "50%",
        rotation: 360,
        duration: 1,
        repeat: 1,
        yoyo: true,
        onComplete: () => { // Cuando termine la rotación...
            gsap.to(container, {
                opacity: 0,
            });

            gsap.to(arrow, {
                opacity: 0.3,
                width: 60,
                height: 60,
                duration: 0.5,
                onComplete: () => {
                    gsap.to(arrow, {
                        transform: "scale(0.8)",
                        duration: 0.5,
                        repeat: -1,
                        yoyo: true,
                    })
                }
            });
        },
    });


});

</script>

<template>

    <div class="fixed bottom-10 right-10 z-50 ">
        <div id="container" class=" p-3  text-white rounded-full cursor-pointer  w-20 h-20"> </div>

    </div>
    <button @click="resetScroll" class="fixed bottom-10 right-10 z-50 ">
        <img id="arrow" src="~/assets/png/Arrow-Up-icon.png" alt="Icono de flecha" class="fit w-20 h-20">
    </button>
</template>


<style scoped></style>