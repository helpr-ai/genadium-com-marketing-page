<template>
  <div class="flex items-start gap-2">
    <CheckCircleIcon class="h-4 w-4 mt-1 shrink-0" />
    <span class="text-sm leading-6">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>