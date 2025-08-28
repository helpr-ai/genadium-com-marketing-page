<template>
  <div class="flex items-start gap-4">
    <div class="inline-flex h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 items-center justify-center shrink-0">
      <component :is="iconComponent" class="h-6 w-6 text-blue-600" />
    </div>
    <div>
      <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ title }}</h3>
      <p class="text-slate-600 leading-6">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
import {
  LightBulbIcon,
  CogIcon,
  RocketLaunchIcon,
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
  }
})

const iconMap = {
  'LightBulbIcon': LightBulbIcon,
  'CogIcon': CogIcon,
  'RocketLaunchIcon': RocketLaunchIcon,
}

const iconComponent = computed(() => iconMap[props.icon])
</script>