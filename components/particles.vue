<template>
    <div class="absolute inset-0 opacity-30 pointer-events-none">
        <div v-for="i in 75" :key="i" class="absolute rounded-full bg-white/70" :style="{
            width: `${Math.random() * 5 + 5}px`,
            height: `${Math.random() * 5 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out alternate`
        }"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>