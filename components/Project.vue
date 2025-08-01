<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  url?: string;
  repo?: string;
  deploy?: string;
}

const props = withDefaults(defineProps<Props>(), {
  url: undefined,
  repo: undefined,
  deploy: undefined,
});
</script>

<template>
  <div>
    <a
      :href="url || deploy || repo"
      :target="(url || deploy || repo) ? '_blank' : '_self'"
      class="block hover:no-underline"
      :aria-label="(url || deploy || repo) ? `View ${title} project` : title"
    >
      <div
        class="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-start justify-between gap-2">
          <h3 class="mb-2 text-xl font-bold dark:text-white">{{ title }}</h3>
        </div>
        <p class="text-gray-500 dark:text-gray-400 mb-4">{{ description }}</p>
        
        <div v-if="repo || deploy" class="flex gap-3 text-sm">
          <a
            v-if="repo"
            :href="repo"
            @click.stop
            target="_blank"
            class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Repository
          </a>
          <a
            v-if="deploy"
            :href="deploy"
            @click.stop
            target="_blank"
            class="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
          >
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </a>
  </div>
</template>