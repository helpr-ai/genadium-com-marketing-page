<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Success Section -->
    <section class="relative overflow-hidden pt-20 pb-16">
      <div class="absolute inset-0 bg-gradient-radial from-emerald-50 via-transparent to-transparent -z-10" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 -z-10"></div>

      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <!-- Success Icon -->
          <div class="mb-8">
            <div class="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
              <CheckCircleIcon class="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8 text-slate-900">
            <span class="block">Bedankt voor je</span>
            <span class="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">interesse!</span>
          </h1>

          <div class="max-w-2xl mx-auto space-y-6">
            <p class="text-xl text-slate-600 leading-relaxed">
              We hebben je bericht ontvangen en zijn enthousiast om te horen over jouw AI-uitdagingen.
            </p>

            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl">
              <h3 class="text-lg font-semibold text-slate-900 mb-4">Wat gebeurt er nu?</h3>
              <div class="space-y-3 text-left">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span class="text-white text-sm font-bold">1</span>
                  </div>
                  <p class="text-slate-600">We bellen je <strong class="text-slate-900">binnen 4 uur terug</strong></p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span class="text-white text-sm font-bold">2</span>
                  </div>
                  <p class="text-slate-600">We bespreken jouw specifieke <strong class="text-slate-900">bedrijfsprocessen en uitdagingen</strong></p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span class="text-white text-sm font-bold">3</span>
                  </div>
                  <p class="text-slate-600">We plannen een <strong class="text-slate-900">gratis intake van 30 minuten</strong> in</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span class="text-white text-sm font-bold">4</span>
                  </div>
                  <p class="text-slate-600">We tonen je direct <strong class="text-slate-900">waar AI het meeste impact</strong> kan maken</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-6 text-center">
              <h3 class="text-xl font-bold text-white mb-2">
                🎯 Resultaat: Heldere AI-roadmap voor jouw bedrijf
              </h3>
              <p class="text-slate-300">
                Van onduidelijkheid naar concrete implementatie en kennis over AI. Zo pak je AI slim aan.
              </p>
            </div>

            <div class="pt-4">
              <NuxtLink
                to="/"
                class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                <span>Terug naar hoofdpagina</span>
                <ArrowRightIcon class="h-5 w-5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">
            Waarom kiezen bedrijven voor Genadium?
          </h2>
          <p class="text-lg text-slate-600">
            Onze bewezen 5-stappen methode zorgt voor succesvolle AI-implementatie
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Benefit 1 -->
          <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-lg">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
              <CogIcon class="h-6 w-6 text-white" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Bewezen methode</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Onze systematische aanpak brengt eerst jouw processen in kaart, dan implementeert AI waar het werkt.
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-lg">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
              <RocketLaunchIcon class="h-6 w-6 text-white" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Directe resultaten</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Geen eindeloze pilots. Werkende AI-oplossingen die je team direct kan gebruiken.
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-lg">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
              <CheckCircleIcon class="h-6 w-6 text-white" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Vertrouwd door leiders</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Bedrijven zoals Greenet, Intra en Meever transformeren al hun operaties met ons.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="py-16 bg-white">
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
  EnvelopeIcon,
  CogIcon,
  RocketLaunchIcon
} from '@heroicons/vue/24/outline'

// Page meta
useHead({
  title: 'Bedankt voor je interesse - Genadium AI Agents',
  meta: [
    { name: 'description', content: 'Bedankt voor je interesse in Genadium AI Agents. We bellen je binnen 4 uur terug om de mogelijkheden te bespreken.' }
  ]
})
</script>