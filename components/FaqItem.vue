<template>
  <details class="group border border-slate-200 rounded-xl p-4 bg-white">
    <summary class="flex cursor-pointer list-none items-center justify-between">
      <span class="font-medium">{{ q }}</span>
      <ArrowRightIcon class="h-4 w-4 transition-transform group-open:rotate-90" />
    </summary>
    <p class="mt-3 text-slate-700 text-sm leading-6">{{ a }}</p>
  </details>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

defineProps({
  q: {
    type: String,
    required: true
  },
  a: {
    type: String,
    required: true
  }
})
</script>