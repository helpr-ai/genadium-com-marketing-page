<template>
  <div class="text-center">
    <div class="mb-6">
      <div class="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 items-center justify-center mb-4">
        <component :is="iconComponent" class="h-8 w-8 text-white" />
      </div>
      <div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold -mt-2 ml-2">
        {{ step }}
      </div>
    </div>
    
    <h3 class="text-lg font-semibold text-slate-900 mb-3">{{ title }}</h3>
    <p class="text-slate-600 text-sm leading-6">{{ desc }}</p>
  </div>
</template>

<script setup>
import {
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  ChatBubbleLeftIcon,
  MapIcon,
  RocketLaunchIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
  step: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const iconMap = {
  'ClipboardDocumentCheckIcon': ClipboardDocumentCheckIcon,
  'AcademicCapIcon': AcademicCapIcon,
  'ChatBubbleLeftIcon': ChatBubbleLeftIcon,
  'MapIcon': MapIcon,
  'RocketLaunchIcon': RocketLaunchIcon,
}

const iconComponent = computed(() => iconMap[props.icon])
</script>