<template>
  <div class="relative group">
    <div :class="cardClasses" class="relative rounded-3xl h-full p-6 border-2 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
      <!-- Gradient background overlay -->
      <div :class="gradientClasses" class="absolute inset-0 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
      
      <!-- Floating circles decoration -->
      <div :class="circleClasses" class="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20"></div>
      <div :class="circleClasses" class="absolute -bottom-1 -left-1 w-6 h-6 rounded-full opacity-10"></div>
      
      <div class="relative z-10 h-full flex flex-col">
        <!-- Header with step number -->
        <div class="flex items-center justify-between mb-4">
          <div :class="stepBadgeClasses" class="px-3 py-1 rounded-full text-sm font-bold">
            Stap {{ step }}
          </div>
          <div class="text-xs font-medium text-slate-400">{{ subtitle }}</div>
        </div>
        
        <!-- Icon and title -->
        <div class="mb-4">
          <div :class="iconBgClasses" class="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
            <component :is="iconComponent" class="h-8 w-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
        </div>
        
        <!-- Description -->
        <p class="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{{ desc }}</p>
        
        <!-- Highlights -->
        <div class="space-y-2">
          <div v-for="highlight in parsedHighlights" :key="highlight" class="flex items-center gap-2 text-xs text-slate-400">
            <div :class="dotClasses" class="w-1.5 h-1.5 rounded-full"></div>
            <span>{{ highlight }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ChatBubbleLeftIcon,
  RectangleGroupIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
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
  subtitle: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  highlights: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const iconMap = {
  'ChatBubbleLeftIcon': ChatBubbleLeftIcon,
  'RectangleGroupIcon': RectangleGroupIcon,
  'ShieldCheckIcon': ShieldCheckIcon,
  'ClipboardDocumentCheckIcon': ClipboardDocumentCheckIcon,
  'AcademicCapIcon': AcademicCapIcon,
  'MapIcon': MapIcon,
  'RocketLaunchIcon': RocketLaunchIcon,
}

const iconComponent = computed(() => iconMap[props.icon])
const parsedHighlights = computed(() => JSON.parse(props.highlights))

const cardClasses = computed(() => {
  const baseClasses = 'bg-slate-800/50 backdrop-blur-sm'
  switch (props.color) {
    case 'emerald': return `${baseClasses} border-emerald-400/30 hover:border-emerald-400/60`
    case 'blue': return `${baseClasses} border-blue-400/30 hover:border-blue-400/60`
    case 'purple': return `${baseClasses} border-purple-400/30 hover:border-purple-400/60`
    case 'pink': return `${baseClasses} border-pink-400/30 hover:border-pink-400/60`
    case 'orange': return `${baseClasses} border-orange-400/30 hover:border-orange-400/60`
    default: return `${baseClasses} border-slate-400/30`
  }
})

const gradientClasses = computed(() => {
  switch (props.color) {
    case 'emerald': return 'bg-gradient-to-br from-emerald-500 to-emerald-600'
    case 'blue': return 'bg-gradient-to-br from-blue-500 to-blue-600'
    case 'purple': return 'bg-gradient-to-br from-purple-500 to-purple-600'
    case 'pink': return 'bg-gradient-to-br from-pink-500 to-pink-600'
    case 'orange': return 'bg-gradient-to-br from-orange-500 to-orange-600'
    default: return 'bg-gradient-to-br from-slate-500 to-slate-600'
  }
})

const circleClasses = computed(() => {
  switch (props.color) {
    case 'emerald': return 'bg-emerald-400'
    case 'blue': return 'bg-blue-400'
    case 'purple': return 'bg-purple-400'
    case 'pink': return 'bg-pink-400'
    case 'orange': return 'bg-orange-400'
    default: return 'bg-slate-400'
  }
})

const stepBadgeClasses = computed(() => {
  switch (props.color) {
    case 'emerald': return 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30'
    case 'blue': return 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
    case 'purple': return 'bg-purple-500/20 text-purple-400 border border-purple-400/30'
    case 'pink': return 'bg-pink-500/20 text-pink-400 border border-pink-400/30'
    case 'orange': return 'bg-orange-500/20 text-orange-400 border border-orange-400/30'
    default: return 'bg-slate-500/20 text-slate-400 border border-slate-400/30'
  }
})

const iconBgClasses = computed(() => {
  switch (props.color) {
    case 'emerald': return 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-500/50'
    case 'blue': return 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/50'
    case 'purple': return 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/50'
    case 'pink': return 'bg-gradient-to-br from-pink-500 to-pink-600 shadow-pink-500/50'
    case 'orange': return 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-500/50'
    default: return 'bg-gradient-to-br from-slate-500 to-slate-600 shadow-slate-500/50'
  }
})

const dotClasses = computed(() => {
  switch (props.color) {
    case 'emerald': return 'bg-emerald-400'
    case 'blue': return 'bg-blue-400'
    case 'purple': return 'bg-purple-400'
    case 'pink': return 'bg-pink-400'
    case 'orange': return 'bg-orange-400'
    default: return 'bg-slate-400'
  }
})
</script>