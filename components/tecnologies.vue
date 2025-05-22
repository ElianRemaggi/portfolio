<template>
    <div class="min-h-screen w-full overflow-hidden relative">
        <!-- Fondo animado -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Gradiente animado suave -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-violet-900/90 animate-gradient-shift">
            </div>

            <!-- Partículas flotantes -->
            <div class="absolute inset-0 opacity-30 pointer-events-none">
                <div v-for="i in 60" :key="i" class="absolute rounded-full bg-white/70" :style="{
                    width: `${Math.random() * 5 + 1}px`,
                    height: `${Math.random() * 5 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out alternate`
                }"></div>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="relative z-10">
            <presentation />
            <ScrollPosition />
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