<script setup lang="ts">
import { computed } from 'vue';
import { inject } from 'vue';

const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));

const ANIMATION_START = 3600; // Scroll donde comienza la animación
const ANIMATION_END = 4600;   // Scroll donde termina la animación

const shouldRender = computed(() => {
    return injectedScroll.value >= ANIMATION_START && injectedScroll.value <= ANIMATION_END;
})

const shouldRenderContent = computed(() => {
    return injectedScroll.value > (ANIMATION_START + 100) && injectedScroll.value <= ANIMATION_END;
})

interface ContactMethod {
    title: string;
    description: string;
    icon: string;
    link: string;
    color: string;
}

const contactMethods: ContactMethod[] = [
    {
        title: "Email",
        description: "elianremaggi@gmail.com",
        icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        link: "mailto:elianremaggi@gmail.com",
        color: "#42b883"
    },
    {
        title: "LinkedIn",
        description: "Conecta profesionalmente",
        icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z",
        link: "https://www.linkedin.com/in/elian-remaggi/",
        color: "#0077b5"
    },
    {
        title: "GitHub",
        description: "Revisa mi código",
        icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
        link: "https://github.com/elianremaggi",
        color: "#333"
    },
    {
        title: "WhatsApp",
        description: "Chat directo",
        icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488",
        link: "https://wa.me/5492235123456",
        color: "#25d366"
    }
]

const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async () => {
    isSubmitting.value = true
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    isSubmitting.value = false
    submitSuccess.value = true
    
    // Reset form
    formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        submitSuccess.value = false
    }, 5000)
}
</script>

<template>
    <div v-if="shouldRender" class="fixed inset-0 z-10 h-full w-full animate__animated animate__fadeIn">
        <!-- Fondo con blur -->
        <div class="absolute inset-0 bg-blue-950/60 backdrop-blur-sm"></div>
        
        <div v-if="shouldRenderContent" class="relative h-full overflow-y-auto">
            <div class="min-h-full flex flex-col items-center justify-start px-4 py-8">
                <section class="w-full max-w-6xl mx-auto">
                    <!-- Título principal -->
                    <div class="text-center mb-12">
                        <h1 class="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent 
                            bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
                            animate__animated animate__slideInDown mb-4">
                            Contacto
                        </h1>
                        <p class="text-xl text-white/80 animate__animated animate__slideInUp">
                            ¿Tienes un proyecto en mente? ¡Hablemos!
                        </p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <!-- Información de contacto -->
                        <div class="space-y-6 animate__animated animate__slideInLeft">
                            <div>
                                <h2 class="text-3xl font-bold text-white mb-6">Métodos de Contacto</h2>
                                <p class="text-white/70 text-lg mb-8">
                                    Puedes contactarme a través de cualquiera de estos medios. 
                                    Estoy disponible para proyectos freelance y oportunidades laborales.
                                </p>
                            </div>
                            
                            <div class="space-y-4">
                                <div v-for="(method, index) in contactMethods" :key="index"
                                    class="group animate__animated animate__slideInLeft"
                                    :style="{ animationDelay: `${index * 0.1}s` }">
                                    <a :href="method.link" target="_blank" 
                                        class="block p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 
                                        hover:bg-white/20 hover:border-white/40 transition-all duration-300 
                                        transform hover:-translate-y-1 hover:shadow-xl">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <div class="w-12 h-12 rounded-lg flex items-center justify-center"
                                                    :style="{ backgroundColor: method.color }">
                                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path :d="method.icon" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="flex-1">
                                                <h3 class="text-xl font-semibold text-white group-hover:text-green-400 
                                                    transition-colors duration-300">
                                                    {{ method.title }}
                                                </h3>
                                                <p class="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                                                    {{ method.description }}
                                                </p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <svg class="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" 
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Formulario de contacto -->
                        <div class="animate__animated animate__slideInRight">
                            <div class="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
                                <h2 class="text-3xl font-bold text-white mb-6">Envíame un Mensaje</h2>
                                
                                <!-- Mensaje de éxito -->
                                <div v-if="submitSuccess" 
                                    class="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-lg animate__animated animate__fadeIn">
                                    <p class="text-green-400 font-medium">
                                        ¡Mensaje enviado con éxito! Te responderé pronto.
                                    </p>
                                </div>

                                <form @submit.prevent="handleSubmit" class="space-y-6">
                                    <div>
                                        <label for="name" class="block text-white font-medium mb-2">Nombre</label>
                                        <input 
                                            id="name"
                                            v-model="formData.name"
                                            type="text" 
                                            required
                                            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                            text-white placeholder-white/50 focus:outline-none focus:ring-2 
                                            focus:ring-green-400 focus:border-transparent transition-all duration-300"
                                            placeholder="Tu nombre completo"
                                        >
                                    </div>

                                    <div>
                                        <label for="email" class="block text-white font-medium mb-2">Email</label>
                                        <input 
                                            id="email"
                                            v-model="formData.email"
                                            type="email" 
                                            required
                                            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                            text-white placeholder-white/50 focus:outline-none focus:ring-2 
                                            focus:ring-green-400 focus:border-transparent transition-all duration-300"
                                            placeholder="tu@email.com"
                                        >
                                    </div>

                                    <div>
                                        <label for="subject" class="block text-white font-medium mb-2">Asunto</label>
                                        <input 
                                            id="subject"
                                            v-model="formData.subject"
                                            type="text" 
                                            required
                                            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                            text-white placeholder-white/50 focus:outline-none focus:ring-2 
                                            focus:ring-green-400 focus:border-transparent transition-all duration-300"
                                            placeholder="¿En qué puedo ayudarte?"
                                        >
                                    </div>

                                    <div>
                                        <label for="message" class="block text-white font-medium mb-2">Mensaje</label>
                                        <textarea 
                                            id="message"
                                            v-model="formData.message"
                                            rows="5" 
                                            required
                                            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                            text-white placeholder-white/50 focus:outline-none focus:ring-2 
                                            focus:ring-green-400 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Cuéntame sobre tu proyecto..."
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit"
                                        :disabled="isSubmitting"
                                        class="w-full py-4 px-6 bg-gradient-to-r from-green-400 to-blue-500 
                                        hover:from-green-500 hover:to-blue-600 text-white font-bold rounded-lg 
                                        transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
                                        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                                        animate__animated animate__pulse animate__infinite"
                                        :class="{ 'animate__pulse animate__infinite': isSubmitting }"
                                    >
                                        <span v-if="!isSubmitting">Enviar Mensaje</span>
                                        <span v-else class="flex items-center justify-center">
                                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- Información adicional -->
                    <div class="mt-16 text-center animate__animated animate__fadeInUp">
                        <div class="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                            <h3 class="text-2xl font-bold text-white mb-4">Disponibilidad</h3>
                            <p class="text-white/70 text-lg mb-6">
                                Actualmente estoy disponible para proyectos freelance y oportunidades laborales.
                                Mi tiempo de respuesta promedio es de 24 horas.
                            </p>
                            <div class="flex flex-wrap justify-center gap-4">
                                <span class="px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 font-medium">
                                    ✅ Disponible para proyectos
                                </span>
                                <span class="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-400 font-medium">
                                    🌍 Trabajo remoto
                                </span>
                                <span class="px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 font-medium">
                                    ⚡ Respuesta rápida
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Efectos de hover personalizados */
.group:hover .group-hover\:text-green-400 {
    color: #4ade80;
}

/* Animaciones personalizadas */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .grid-cols-1.lg\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
    
    .text-5xl.md\:text-6xl {
        font-size: 3rem;
    }
}

/* Scrollbar personalizado */
.overflow-y-auto::-webkit-scrollbar {
    width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #42d392, #647eff);
    border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #3bc183, #5a6fd8);
}
</style>