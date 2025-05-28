
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Desarrollador Web con +4 años de experiencia especializado en Vue.js. Combino experiencia laboral, formación académica y un constante aprendizaje autodidacta.'
  },
  maxDuration: {
    type: Number,
    default: 5000
  },
  minSpeed: {
    type: Number,
    default: 30
  },
  maxSpeed: {
    type: Number,
    default: 150
  },
  glowCount: {
    type: Number,
    default: 15
  }
})

const displayedText = ref('')
const isTyping = ref(true)
const isWhiteout = ref(false)
const textElement = ref<HTMLElement | null>(null)

interface Glow {
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

const glows = ref<Glow[]>([])

// Inicializar efectos de brillo
const initGlows = () => {
  const newGlows: Glow[] = []
  
  for (let i = 0; i < props.glowCount; i++) {
    newGlows.push({
      x: Math.random() * 90 + 5, // 5-95%
      y: Math.random() * 90 + 5, // 5-95%
      size: Math.random() * 300 + 100, // 100-400px
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
      duration: Math.random() * 2000 + 1000, // 1-3s
      delay: Math.random() * 3000 // 0-3s
    })
  }
  
  glows.value = newGlows
}

const calculateSpeed = () => {
  return Math.floor(
    Math.random() * (props.maxSpeed - props.minSpeed) + props.minSpeed
  )
}

const typeText = async () => {
  isTyping.value = true
  const characters = props.text.split('')
  const totalCharacters = characters.length
  
  const avgSpeed = Math.min(
    props.maxDuration / totalCharacters,
    props.maxSpeed
  )
  
  for (let i = 0; i < totalCharacters; i++) {
    displayedText.value += characters[i]
    const speed = Math.min(calculateSpeed(), avgSpeed)
    await new Promise(resolve => setTimeout(resolve, speed))
  }
  
  isTyping.value = false
  
  // Iniciar secuencia de brillo final
  setTimeout(() => {
    isWhiteout.value = true
  }, 1000)
}

onMounted(() => {
  initGlows()
  typeText()
})
</script>


<template>
  <div class="container" :class="{ 'full-white': isWhiteout }">
    <div class="typing-effect">
      <span ref="textElement">{{ displayedText }}</span>
      <span class="cursor" :class="{ 'cursor-blink': !isTyping }">|</span>
    </div>
    
    <div 
      v-for="(glow, index) in glows" 
      :key="index"
      class="glow" 
      :style="{
        left: `${glow.x}%`,
        top: `${glow.y}%`,
        width: `${glow.size}px`,
        height: `${glow.size}px`,
        opacity: glow.opacity,
        animation: `pulse ${glow.duration}ms ease-out ${glow.delay}ms forwards`
      }"
    ></div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #1a1a1a;
  color: #e0e0e0;
  overflow: hidden;
  transition: background-color 1.5s ease-out;
}

.container.full-white {
  background-color: white;
  color: transparent;
}

.typing-effect {
  font-size: 1.5rem;
  line-height: 1.6;
  max-width: 800px;
  position: relative;
  z-index: 2;
}

.cursor {
  font-weight: bold;
  opacity: 1;
  color: #42b983;
}

.cursor-blink {
  animation: blink 0.7s infinite;
}

.glow {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
  transform: translate(-50%, -50%);
  z-index: 1;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}
</style>