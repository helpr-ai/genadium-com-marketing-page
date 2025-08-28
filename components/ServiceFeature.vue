<template>
  <div class="flex items-start gap-3">
    <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
    <div>
      <h4 class="font-semibold text-slate-900 mb-1">{{ title }}</h4>
      <p class="text-slate-600 text-sm leading-5">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
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