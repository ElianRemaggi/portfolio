<script setup lang="ts">

const props = defineProps<{ text: string, primaryColor: string, secondaryColor: string }>();
</script>

<template>
    <div class="rounded-full w-fit px-2 py-1" :class="[props.primaryColor, props.secondaryColor]">
        <p>{{ props.text }}</p>
    </div>
</template>