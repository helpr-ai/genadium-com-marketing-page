<template>
  <div class="rounded-2xl h-full bg-white border p-6">
    <div class="mb-4">
      <h3 class="flex items-center gap-2 text-base font-semibold">
        <span class="inline-flex h-9 w-9 rounded-xl bg-slate-100 items-center justify-center">
          <component :is="iconComponent" class="h-6 w-6" />
        </span>
        {{ title }}
      </h3>
    </div>
    <div>
      <p class="text-slate-700 text-sm leading-6">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
import {
  ChatBubbleLeftIcon,
  WrenchScrewdriverIcon,
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
  'ChatBubbleLeftIcon': ChatBubbleLeftIcon,
  'WrenchScrewdriverIcon': WrenchScrewdriverIcon,
  'RocketLaunchIcon': RocketLaunchIcon,
}

const iconComponent = computed(() => iconMap[props.icon])
</script>