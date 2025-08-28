<template>
  <div class="bg-white rounded-2xl p-6 border border-slate-200 h-full relative overflow-hidden">
    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-50 to-orange-50 rounded-bl-full -mr-10 -mt-10"></div>
    
    <div class="relative">
      <div class="mb-4 flex items-start justify-between">
        <div class="inline-flex h-12 w-12 rounded-xl bg-red-50 border border-red-100 items-center justify-center">
          <component :is="iconComponent" class="h-6 w-6 text-red-600" />
        </div>
        <div v-if="stat" class="text-right">
          <div class="text-2xl font-bold text-red-600">{{ stat }}</div>
          <div class="text-xs text-slate-500">faalpercentage</div>
        </div>
      </div>
      
      <h3 class="text-lg font-semibold text-slate-900 mb-3">{{ title }}</h3>
      <p class="text-slate-600 text-sm leading-6">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
import {
  ExclamationTriangleIcon,
  PuzzlePieceIcon,
  ClockIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
  icon: {
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
  stat: {
    type: String,
    default: ''
  }
})

const iconMap = {
  'ExclamationTriangleIcon': ExclamationTriangleIcon,
  'PuzzlePieceIcon': PuzzlePieceIcon,
  'ClockIcon': ClockIcon,
  'XMarkIcon': XMarkIcon,
}

const iconComponent = computed(() => iconMap[props.icon])
</script>