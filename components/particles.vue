<template>

    <!-- Gradiente animado suave -->
    <div class="animate-gradient-shift">
    </div>

    <!-- Partículas flotantes -->
    <div class="fixed inset-0 bg-gradient-to-b from-blue-800 to-indigo-950 overflow-hidden z-1">

        <div class="fixed inset-0 opacity-30 pointer-events-none">
            <div v-for="i in 60" :key="i" class="absolute rounded-full bg-white/70" :style="{
                width: `${Math.random() * 5 + 5}px`,
                height: `${Math.random() * 5 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 1 + 5}s infinite ease-in-out alternate`
            }"></div>
        </div>
    </div>
</template>


<style>
/* Animación del gradiente */
@keyframes gradient-shift {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

/* Animación de partículas flotantes */
@keyframes float {
    0% {
        transform: translateY(0) translateX(0);
    }

    100% {
        transform: translateY(-20px) translateX(10px);
    }
}

.animate-gradient-shift {
    background-size: 200% 200%;
    animation: gradient-shift 15s ease infinite;
}
</style>