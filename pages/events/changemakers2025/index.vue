<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-20 pb-16">
      <div class="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent -z-10" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 -z-10"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Logo -->
          <div class="mb-12">
            <img
              src="/images/change_makers.webp"
              alt="Change Makers 2025"
              class="h-32 sm:h-40 lg:h-48 mx-auto object-contain"
            />
          </div>

          <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-400/40 rounded-full text-blue-300 text-sm font-semibold mb-8 shadow-sm">
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            👋 Bedankt voor je bezoek aan onze stand bij Change Makers 2025
          </div>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-8">
            <span class="block text-white">Laten we het gesprek</span>
            <span class="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">voortzetten</span>
          </h1>

          <p class="mt-8 text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Wat leuk dat we elkaar hebben ontmoet bij Change Makers 2025! Klaar om te ontdekken hoe AI Agents jouw bedrijf kunnen transformeren?
            <span class="text-lg text-slate-400 block mt-4">Laat je gegevens achter en we bellen je om jouw specifieke behoeften en onze bewezen implementatiemethode te bespreken.</span>
          </p>

          <div class="mt-12 text-slate-400 text-sm">
            🤖 <strong class="text-slate-300">AI Agents die voor jou werken</strong> • 🎯 <strong class="text-slate-300">Bewezen resultaten</strong> • 🚀 <strong class="text-slate-300">Directe implementatie</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="py-20 lg:py-32 bg-white relative">

      <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full text-blue-700 font-bold mb-6">
            📞 Plan je vervolgafspraak
          </div>

          <h3 class="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
            <span class="block">Klaar voor de</span>
            <span class="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">volgende stap</span>
            <span class="block">met AI?</span>
          </h3>

          <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            <strong class="text-slate-900">Bedankt voor je interesse!</strong> Laat je gegevens achter en we bellen je om te bespreken hoe onze AI-oplossingen jouw bedrijf specifiek kunnen helpen.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
          <div class="mb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span class="font-bold text-blue-700 text-sm">📞 We bellen je binnen 24 uur na het evenement om een afspraak te plannen</span>
            </div>
            <h4 class="text-2xl font-bold text-slate-900 mb-2">Plan je vervolgafspraak</h4>
            <p class="text-slate-600">
              <strong>Wat leuk dat we elkaar hebben ontmoet bij Change Makers 2025!</strong> We nemen contact op om een gesprek te plannen over hoe AI voor jou kan werken.
            </p>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" class="space-y-4">
            <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315">
            <input type="hidden" name="redirect" :value="successUrl">
            <input type="hidden" name="subject" value="Change Makers 2025 - Follow-up Request - Genadium.com">
            <input type="hidden" name="from_name" value="Change Makers 2025 Follow-up Page">

            <div class="grid sm:grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Volledige naam *"
                required
                class="w-full px-4 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-slate-900 placeholder-slate-500 transition-colors"
              >
              <input
                type="text"
                name="company"
                placeholder="Bedrijf *"
                required
                class="w-full px-4 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-slate-900 placeholder-slate-500 transition-colors"
              >
              <input
                type="tel"
                name="phone"
                placeholder="Telefoonnummer *"
                required
                pattern="[0-9\s\-\+\(\)]{10,}"
                title="Voer een geldig telefoonnummer in van minimaal 10 cijfers"
                class="w-full px-4 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-slate-900 placeholder-slate-500 transition-colors"
              >
            </div>

            <button type="submit" class="group w-full px-8 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all shadow-2xl shadow-blue-500/25">
              <span class="flex items-center justify-center gap-3">
                📞 Plan vervolgafspraak
                <ArrowRightIcon class="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <p class="text-xs text-slate-500 leading-5 text-center">
              🔒 Door te verzenden ga je akkoord met onze verwerking van je gegevens voor vervolgcontact.
              <strong class="text-slate-700">We bellen je binnen 24 uur na het evenement om een afspraak te plannen</strong> om je specifieke behoeften te bespreken.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Why Genadium Section -->
    <section class="py-20 bg-white relative">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-black text-slate-900 mb-8 leading-tight">
            <span class="block">Waarom kiezen voor</span>
            <span class="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Genadium AI Agents?</span>
          </h2>
          <p class="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Stop met wachten en begin met het implementeren van AI die daadwerkelijk werkt voor jouw bedrijfsprocessen.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Benefit 1 -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
              <CogIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Bewezen 5-Stappen Methode</h3>
            <p class="text-slate-600 leading-6">
              Onze <strong>systematische aanpak</strong> brengt eerst jouw processen in kaart, en implementeert dan AI waar het de grootste impact maakt. Geen giswerk.
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
              <RocketLaunchIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Directe Implementatie</h3>
            <p class="text-slate-600 leading-6">
              Sla de eindeloze pilots over. Wij bouwen <strong>werkende AI-oplossingen</strong> die jouw team direct kan gebruiken om tijd te besparen en efficiëntie te verhogen.
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30">
              <CheckCircleIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Vertrouwd door Leiders</h3>
            <p class="text-slate-600 leading-6">
              Sluit je aan bij bedrijven zoals <strong>Greenet, Intra en Meever</strong> die hun operaties al transformeren met onze AI-oplossingen.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  ArrowRightIcon,
  CogIcon,
  CheckCircleIcon,
  RocketLaunchIcon
} from '@heroicons/vue/24/outline'

// Page meta
useHead({
  title: 'Ontmoet Genadium bij Change Makers 2025 - AI Agents voor jouw bedrijf',
  meta: [
    { name: 'description', content: 'Bezoek Genadium bij Change Makers 2025. Leer over AI Agents die bedrijfsprocessen transformeren. Krijg meer informatie over onze bewezen 5-stappen implementatiemethode.' }
  ]
})

// Success URL for form redirect
const successUrl = computed(() => {
  if (process.client) {
    return `${window.location.origin}/events/changemakers2025/success`
  }
  return '/events/changemakers2025/success'
})
</script>