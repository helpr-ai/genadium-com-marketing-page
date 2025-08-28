<template>
  <div :class="cardClasses" class="bg-white rounded-2xl p-6 border shadow-lg relative overflow-hidden">
    <div :class="bgCircleClasses" class="absolute -top-2 -right-2 w-16 h-16 rounded-full opacity-10"></div>
    <div class="relative z-10">
      <div :class="iconBgClasses" class="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
        <component :is="iconComponent" class="h-6 w-6 text-white" />
      </div>
      <h3 class="text-lg font-bold text-slate-900 mb-2">{{ title }}</h3>
      <p class="text-slate-600 text-sm mb-3">{{ problem }}</p>
      <div :class="impactClasses" class="text-sm font-semibold">{{ impact }}</div>
    </div>
  </div>
</template>

<script setup>
import {
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
  problem: {
    type: String,
    required: true
  },
  impact: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

const iconMap = {
  'PuzzlePieceIcon': PuzzlePieceIcon,
  'ClockIcon': ClockIcon,
  'XMarkIcon': XMarkIcon,
}

const iconComponent = computed(() => iconMap[props.icon])

const cardClasses = computed(() => {
  const baseClasses = 'border'
  switch (props.color) {
    case 'orange': return `${baseClasses} border-orange-200`
    case 'yellow': return `${baseClasses} border-yellow-200`
    case 'red': return `${baseClasses} border-red-200`
    default: return `${baseClasses} border-slate-200`
  }
})

const bgCircleClasses = computed(() => {
  switch (props.color) {
    case 'orange': return 'bg-orange-500'
    case 'yellow': return 'bg-yellow-500'
    case 'red': return 'bg-red-500'
    default: return 'bg-slate-500'
  }
})

const iconBgClasses = computed(() => {
  switch (props.color) {
    case 'orange': return 'bg-orange-500'
    case 'yellow': return 'bg-yellow-500'
    case 'red': return 'bg-red-500'
    default: return 'bg-slate-500'
  }
})

const impactClasses = computed(() => {
  switch (props.color) {
    case 'orange': return 'text-orange-600'
    case 'yellow': return 'text-yellow-600'
    case 'red': return 'text-red-600'
    default: return 'text-slate-600'
  }
})
</script>