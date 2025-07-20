<script setup lang="ts">
interface Props {
  /**
   * Project title
   */
  title: string;
  
  /**
   * Project description
   */
  description: string;
  
  /**
   * Project URL (optional)
   */
  url?: string;
  
  /**
   * Whether to show external link icon when URL is provided (optional)
   * @default true
   */
  showLinkIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  url: undefined,
  showLinkIcon: true
});
</script>

<template>
    <div>
        <a 
          :href="url" 
          :target="url ? '_blank' : '_self'"
          class="block hover:no-underline"
          :aria-label="url ? `View ${title} project` : title"
        >
            <div
                class="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div class="flex items-start justify-between gap-2">
                  <h3 class="mb-2 text-xl font-bold dark:text-white">{{ title }}</h3>
                  <svg 
                    v-if="url && showLinkIcon" 
                    class="w-4 h-4 mt-1 text-gray-400 dark:text-gray-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
                <p class="text-gray-500 dark:text-gray-400">{{ description }}</p>
            </div>
        </a>
    </div>
</template>

<style scoped></style>