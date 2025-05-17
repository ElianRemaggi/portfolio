<script setup>
//saturate-150 contrast-100'

import { VueLenis} from 'lenis/vue'



</script>

<template>

  <div class="relative font-mono min-h-screen-8000 min-h-[8000px]">

    <VueLenis root>
      <div class="relative">
        <NuxtRouteAnnouncer />
        <NuxtPage />
      </div>
    </VueLenis>

  </div>
</template>