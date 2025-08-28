<template>
  <div class="bg-white rounded-2xl p-6 border border-slate-200 h-full">
    <div class="mb-4">
      <div class="inline-flex h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 items-center justify-center mb-3">
        <component :is="iconComponent" class="h-6 w-6 text-blue-600" />
      </div>
      <div class="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
        {{ highlight }}
      </div>
    </div>
    
    <h3 class="text-lg font-semibold text-slate-900 mb-3">{{ title }}</h3>
    <p class="text-slate-600 text-sm leading-6">{{ desc }}</p>
  </div>
</template>

<script setup>
import {
  ClockIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  CogIcon,
  CheckCircleIcon,
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
  highlight: {
    type: String,
    required: true
  }
})

const iconMap = {
  'ClockIcon': ClockIcon,
  'LightBulbIcon': LightBulbIcon,
  'RocketLaunchIcon': RocketLaunchIcon,
  'UserGroupIcon': UserGroupIcon,
  'CogIcon': CogIcon,
  'CheckCircleIcon': CheckCircleIcon,
}

const iconComponent = computed(() => iconMap[props.icon])
</script>