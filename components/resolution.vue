<script setup lang="ts">
const screen = reactive({
  width: ref(0),
  height: ref(0),
  breakpoint: ref('')
})

const updateResolution = () => {
  if (process.client) {
    screen.width = window.innerWidth
    screen.height = window.innerHeight
    
    if (screen.width >= 1536) screen.breakpoint = '2xl'
    else if (screen.width >= 1280) screen.breakpoint = 'xl'
    else if (screen.width >= 1024) screen.breakpoint = 'lg'
    else if (screen.width >= 768) screen.breakpoint = 'md'
    else if (screen.width >= 640) screen.breakpoint = 'sm'
    else screen.breakpoint = 'xs'
  }
}

onMounted(() => {
  if (process.client) {
    updateResolution()
    window.addEventListener('resize', updateResolution)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('resize', updateResolution)
  }
})
</script>

<template>
  <div 
    v-if="screen.width > 0"
    class="resolution-display"
  >
    {{ screen.width }} × {{ screen.height }} ({{ screen.breakpoint }})
  </div>
</template>

<style scoped>
.resolution-display {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 50;
  padding: 0.75rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-family: monospace;
}
</style>