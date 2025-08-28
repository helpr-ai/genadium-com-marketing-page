<template>
  <div class="flex items-start gap-3">
    <BoltIcon class="h-5 w-5 text-blue-600 mt-1 shrink-0" />
    <div>
      <h4 class="font-semibold text-slate-900 mb-1">{{ title }}</h4>
      <p class="text-slate-600 text-sm leading-5">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
import { BoltIcon } from '@heroicons/vue/24/outline'

defineProps({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})
</script>