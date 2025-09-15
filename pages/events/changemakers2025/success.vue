<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
    <!-- Success Section -->
    <section class="relative overflow-hidden pt-20 pb-16">
      <div class="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent -z-10" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 -z-10"></div>

      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <!-- Change Makers Logo -->
          <div class="mb-12">
            <img
              src="/images/change_makers.webp"
              alt="Change Makers 2025"
              class="h-32 sm:h-40 mx-auto object-contain"
            />
          </div>

          <!-- Typing GIF -->
          <div class="mb-12">
            <img
              src="/images/typing.gif"
              alt="AI Agents at work"
              class="h-40 sm:h-48 lg:h-56 w-auto mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8">
            <span class="block text-white">Bedankt voor je</span>
            <span class="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">aanmelding!</span>
          </h1>

          <div class="max-w-2xl mx-auto space-y-6">
            <p class="text-xl text-slate-300 leading-relaxed">
              We hebben je gegevens ontvangen en zijn blij met je interesse in Genadium's AI-oplossingen na ons gesprek bij Change Makers 2025.
            </p>

            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur">
              <h3 class="text-lg font-semibold text-white mb-4">Wat gebeurt er nu?</h3>
              <div class="space-y-3 text-left">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span class="text-white text-sm font-bold">1</span>
                  </div>
                  <p class="text-slate-300">We bellen je <strong class="text-white">binnen 24 uur na het evenement</strong></p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span class="text-white text-sm font-bold">2</span>
                  </div>
                  <p class="text-slate-300">We bespreken jouw specifieke <strong class="text-white">AI-implementatiebehoeften</strong></p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span class="text-white text-sm font-bold">3</span>
                  </div>
                  <p class="text-slate-300">We delen meer informatie over onze <strong class="text-white">bewezen 5-stappen methode</strong></p>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <NuxtLink
                to="/"
                class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                <span>Terug naar hoofdpagina</span>
                <ArrowRightIcon class="h-5 w-5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="py-16 bg-white relative">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">
            Heb je vragen? Neem direct contact op
          </h2>

          <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="mailto:info@genadium.com"
              class="flex items-center gap-3 px-6 py-3 bg-slate-100 text-slate-900 rounded-xl hover:bg-slate-200 transition-colors"
            >
              <EnvelopeIcon class="h-5 w-5" />
              <span class="font-medium">info@genadium.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  CheckCircleIcon,
  ArrowRightIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline'

// Page meta
useHead({
  title: 'Bedankt voor je aanmelding - Change Makers 2025 | Genadium',
  meta: [
    { name: 'description', content: 'Bedankt voor je interesse in Genadium na Change Makers 2025. We nemen binnen 24 uur contact met je op.' }
  ]
})
</script>