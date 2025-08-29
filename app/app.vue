<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <a href="#" class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 grid place-content-center text-white shadow-lg">
            <ChatBubbleLeftIcon class="h-5 w-5" />
          </div>
          <span class="font-bold tracking-tight text-lg">Genadium</span>
          <span class="ml-1 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-md">AI Agents that work for you</span>
        </a>
        <nav class="hidden md:flex items-center gap-8 text-sm">
          <a href="#solution" class="hover:text-slate-600">De Oplossing</a>
          <a href="#problem" class="hover:text-slate-600">Het Probleem</a>
          <a href="#approach" class="hover:text-slate-600 font-semibold">🎯 5-Staps Methode</a>
          <a href="#contact" class="hover:text-slate-600">Contact</a>
        </nav>
        <div class="flex items-center gap-2">
          <a href="#contact" class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-800">
            Start nu 
            <ArrowRightIcon class="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-radial from-blue-50 via-transparent to-transparent -z-10" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 -z-10"></div>
      
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-24">
        <div class="text-center max-w-6xl mx-auto">
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-semibold mb-8 shadow-sm">
            <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            🚀 Stop wachten, start vandaag met AI die werkt
          </div>
          
          <h1 class="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
            <span class="block text-slate-900">Ook last van</span>
            <span class="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI FOMO?</span>
          </h1>
          
          <p class="mt-8 text-2xl sm:text-3xl text-slate-600 leading-relaxed max-w-5xl mx-auto font-light">
           <span class="text-lg text-slate-500 block mt-4">Met ons 5-stappenplan loop je razendsnel voorop!<br></br>Wij brengen je processen helder in kaart en tonen precies waar AI direct impact kan maken.</span>
          </p>
          
          <div class="mt-12 flex justify-center">
            <a href="#contact" class="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 shadow-xl">
              <span class="relative z-10">🎯 Plan de gratis intake</span>
              <ArrowRightIcon class="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              <div class="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
          
          <div class="mt-12 text-slate-500 text-sm">
            ✨ Geadviseerd door <strong>toonaangevende bedrijven</strong> • 🏆 <strong>Bewezen resultaten</strong> • 🚀 <strong>Direct implementeerbaar</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By Section -->
    <section class="py-16 bg-slate-900 border-y border-slate-700">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Vertrouwd door toonaangevende bedrijven
          </p>
          <h3 class="text-2xl font-bold text-white">
            Geadviseerd door <span class="text-blue-400">innovatieve organisaties</span>
          </h3>
        </div>
        
        <div class="relative">
          <Carousel
            :autoplay="3000"
            :wrap-around="true"
            :items-to-show="4"
            :items-to-scroll="1"
            :transition="500"
            :breakpoints="{
              700: {
                itemsToShow: 2,
                itemsToScroll: 1,
              },
              1024: {
                itemsToShow: 3,
                itemsToScroll: 1,
              }
            }"
          >
            <Slide key="greenet">
              <div class="flex items-center justify-center h-24 px-8">
                <img 
                  src="/images/greenet.svg" 
                  alt="Greenet"
                  class="h-24 w-64 object-contain hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </Slide>
            
            <Slide key="intra">
              <div class="flex items-center justify-center h-24 px-8">
                <img 
                  src="/images/intra.svg" 
                  alt="Intra"
                  class="h-24 w-64 object-contain hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </Slide>
            
            <Slide key="meever">
              <div class="flex items-center justify-center h-24 px-8">
                <img 
                  src="/images/meever.svg" 
                  alt="Meever"
                  class="h-24 w-64 object-contain hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </Slide>
            
            <Slide key="pd_solutions">
              <div class="flex items-center justify-center h-24 px-8">
                <img 
                  src="/images/pd_solutions.svg" 
                  alt="PD Solutions"
                  class="h-24 w-64 object-contain hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </Slide>
            
            <!-- Duplicate slides for seamless loop -->
            <Slide key="greenet-2">
              <div class="flex items-center justify-center h-24 px-8">
                <img 
                  src="/images/greenet.svg" 
                  alt="Greenet"
                  class="h-24 w-64 object-contain hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </Slide>
            
            <Slide key="intra-2">
              <div class="flex items-center justify-center h-24 px-8">
                <img 
                  src="/images/intra.svg" 
                  alt="Intra"
                  class="h-24 w-64 object-contain hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section id="solution" class="py-20 lg:py-32 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 relative">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU3M2ZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full text-blue-700 font-semibold mb-8">
            ✨ Onze oplossing
          </div>
          
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
            <span class="block">Zo pakken wij jouw</span>
            <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI-uitdaging aan</span>
          </h2>
          
          <p class="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Van onduidelijkheid naar heldere processen. Van AI-vrees naar concrete toepassingen.
            <strong class="text-slate-900"> Dit is hoe we het doen.</strong>
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Step 1: Knowledge -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
              <AcademicCapIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">AI-kennis opbouwen</h3>
            <p class="text-slate-600 leading-6">
              We beginnen met een <strong>masterclass voor je team</strong>: Wat is AI? Wat kun je ermee? 
              Wat betekent het voor jouw dagelijkse werk? Zo creëren we een solide fundament.
            </p>
          </div>

          <!-- Step 2: Process Mapping -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
              <MapIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Processen in kaart brengen</h3>
            <p class="text-slate-600 leading-6">
              Via <strong>AI-gestuurde interviews</strong> brengen we jouw werkprocessen helder in kaart. 
              Geen wekenlange workshops, wel directe inzichten in hoe je werk écht verloopt.
            </p>
          </div>

          <!-- Step 3: AI Opportunities -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30">
              <RocketLaunchIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">AI-kansen identificeren</h3>
            <p class="text-slate-600 leading-6">
              Op basis van je proceskaarten tonen we <strong>precies waar AI vandaag al impact</strong> kan maken. 
              Van generatieve AI tot autonome agents.
            </p>
          </div>

          <!-- Step 4: AI Implementation -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
              <CogIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">AI implementatie</h3>
            <p class="text-slate-600 leading-6">
              Van plan naar praktijk: we bouwen <strong>werkende AI-oplossingen</strong> die direct waarde leveren. 
              Geen eindeloze pilots, wel concrete resultaten die je team direct kan gebruiken.
            </p>
          </div>
        </div>
        
        <!-- Bottom highlight -->
        <div class="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-10 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div class="relative">
            <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
              💡 Het resultaat? <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Werkende AI-oplossingen</span>
            </h3>
            <p class="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Van vaag AI-concept naar concrete implementatie en kennis over AI. Van onzekerheid naar vertrouwen. 
              <strong class="text-white">Zo pak je AI slim aan.</strong>
            </p>
            <div class="mt-8">
              <a href="#approach" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 hover:scale-105">
                <span>💡</span>
                <span>Leer hier over onze methode...</span>
                <ArrowRightIcon class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section id="problem" class="py-20 lg:py-32 bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-200 rounded-full text-red-700 font-semibold mb-6">
            🚨 De harde waarheid
          </div>
          
          <h2 class="text-5xl sm:text-6xl font-black text-slate-900 mb-8 leading-tight">
            <span class="block">Waarom</span>
            <span class="block text-red-600">95% van AI-projecten</span>
            <span class="block">faalt</span>
          </h2>
          
          <p class="text-2xl text-slate-600 leading-relaxed font-light">
            <strong class="font-semibold text-slate-900">Herkenbaar?</strong> Je bedrijf wil "iets met AI", maar weet niet waar te beginnen. 

          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <!-- Card 1: Te groot starten -->
          <div class="bg-white rounded-3xl p-8 border border-red-200 shadow-xl relative overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full opacity-10"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
                <ExclamationTriangleIcon class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4">Te groot starten</h3>
              <p class="text-slate-600 leading-6">
                Megalomane plannen zonder fundament. Bedrijven willen direct een volledig AI-ecosysteem bouwen voordat ze hun processen begrijpen.
              </p>
            </div>
          </div>

          <!-- Card 2: Te vaag -->  
          <div class="bg-white rounded-3xl p-8 border border-orange-200 shadow-xl relative overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-10"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                <QuestionMarkCircleIcon class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4">Te vaag</h3>
              <p class="text-slate-600 leading-6">
                "We willen iets met AI" zonder concrete doelen. Geen specifieke use cases, geen meetbare resultaten, geen helder eindplaatje.
              </p>
            </div>
          </div>

          <!-- Card 3: Te technisch -->
          <div class="bg-white rounded-3xl p-8 border border-yellow-200 shadow-xl relative overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500 rounded-full opacity-10"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/30">
                <CogIcon class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4">Te technisch</h3>
              <p class="text-slate-600 leading-6">
                Focus op technologie, niet op echte problemen. Teams verdwalen in complexe AI-architecturen terwijl de business case onduidelijk blijft.
              </p>
            </div>
          </div>
        </div>
        
       
        
        <!-- Bottom CTA -->
        <div class="mt-16 text-center">
          <div class="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-2xl font-bold text-xl shadow-lg">
            <span>💡</span>
            <span>Leer hier over onze methode...</span>
            <ArrowRightIcon class="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>

 

    <!-- What We Do Differently -->
    <section class="py-20 lg:py-32 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-purple-50/30 relative">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGY3MjJlIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-400/30 rounded-full text-emerald-700 font-semibold mb-8">
            ✅ Onze aanpak
          </div>
          
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
            <span class="block">Hierom zijn</span>
            <span class="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">onze projecten wel</span>
            <span class="block">succesvol</span>
          </h2>
          
          <p class="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Met ons 5-stappenplan pakken we het fundamenteel anders aan. <strong class="text-slate-900">Bewezen strategie, concrete resultaten.</strong>
          </p>
        </div>
        
        <!-- Comparison Table -->
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-slate-200">
                  <th class="w-1/5 text-left py-4 px-6"></th>
                  <th class="w-2/5 text-left py-4 px-6 font-bold text-red-600 text-lg">
                    <div class="flex items-center gap-2">
                      <XMarkIcon class="h-5 w-5" />
                      <span>Andere aanpakmethoden</span>
                    </div>
                  </th>
                  <th class="w-2/5 text-left py-4 px-6 font-bold text-emerald-600 text-lg">
                    <div class="flex items-center gap-2">
                      <CheckCircleIcon class="h-5 w-5" />
                      <span>Onze Genadium-methode</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td class="py-6 px-6 font-semibold text-slate-900 bg-slate-50">Startstrategie</td>
                  <td class="py-6 px-6 text-left bg-red-50 hover:bg-red-100 transition-colors">
                    <div class="text-red-600 font-semibold mb-2">Te groot starten</div>
                    <div class="text-slate-600 text-sm">Megalomane plannen zonder fundament. Volledig AI-ecosysteem bouwen voordat processen duidelijk zijn.</div>
                  </td>
                  <td class="py-6 px-6 text-left bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <div class="text-emerald-600 font-semibold mb-2">Klein beginnen</div>
                    <div class="text-slate-600 text-sm">AI interviews voor proceskaarten. Laaghangende vruchten eerst. Direct resultaat.</div>
                  </td>
                </tr>
                <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td class="py-6 px-6 font-semibold text-slate-900 bg-slate-50">Doelstelling</td>
                  <td class="py-6 px-6 text-left bg-red-50 hover:bg-red-100 transition-colors">
                    <div class="text-red-600 font-semibold mb-2">Te vaag</div>
                    <div class="text-slate-600 text-sm">"We willen iets met AI" zonder concrete doelen. Geen specifieke use cases of meetbare resultaten.</div>
                  </td>
                  <td class="py-6 px-6 text-left bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <div class="text-emerald-600 font-semibold mb-2">Concreet</div>
                    <div class="text-slate-600 text-sm">Proceskaarten geven concrete taakjes. Heldere actiepunten in plaats van abstracte doelen.</div>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="py-6 px-6 font-semibold text-slate-900 bg-slate-50">Focus</td>
                  <td class="py-6 px-6 text-left bg-red-50 hover:bg-red-100 transition-colors">
                    <div class="text-red-600 font-semibold mb-2">Te technisch</div>
                    <div class="text-slate-600 text-sm">Focus op technologie, niet op echte problemen. Teams verdwalen in complexe AI-architecturen.</div>
                  </td>
                  <td class="py-6 px-6 text-left bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <div class="text-emerald-600 font-semibold mb-2">Praktisch</div>
                    <div class="text-slate-600 text-sm">Wij pakken de techniek op en focussen op wat voor het oprapen ligt. Slimme quick wins.</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Bottom CTA -->
        <div class="mt-16 bg-gradient-to-r from-slate-900 to-emerald-900 rounded-3xl p-10 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10"></div>
          <div class="relative">
            <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
              🎯 Het geheim? <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Eerst processen, dan AI</span>
            </h3>
            <p class="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Zonder helder beeld van je processen is AI gokwerk. Met onze aanpak leg je eerst het fundament, 
              <strong class="text-white">dan bouw je er succesvolle AI op</strong>.
            </p>
            <div class="mt-8">
              <a href="#approach" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 hover:scale-105">
                <span>💡</span>
                <span>Leer hier over onze methode...</span>
                <ArrowRightIcon class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Approach -->
    <section id="approach" class="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIyMCIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-10"></div>
      
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <h2 class="text-5xl sm:text-6xl font-black mb-8 leading-tight">
            <span class="block text-white">Onze</span>
            <span class="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">5-Staps Methode</span>
          </h2>
          
          <p class="text-2xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
            <strong class="text-white">Bewezen bij toonaangevende bedrijven.</strong> Van versnipperde processen naar werkende AI Agents.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-5 gap-6 mb-16">
          <!-- Step 1: Intake -->
          <div class="relative group">
            <div class="relative rounded-3xl h-full p-6 border-2 bg-slate-800/50 backdrop-blur-sm border-emerald-400/30 hover:border-emerald-400/60 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <div class="absolute inset-0 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-emerald-500 to-emerald-600"></div>
              <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20 bg-emerald-400"></div>
              <div class="absolute -bottom-1 -left-1 w-6 h-6 rounded-full opacity-10 bg-emerald-400"></div>
              
              <div class="relative z-10 h-full flex flex-col">
                <div class="flex items-center justify-between mb-4">
                  <div class="px-3 py-1 rounded-full text-sm font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                    Stap 1
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-500/50">
                    <ClipboardDocumentCheckIcon class="h-8 w-8 text-white" />
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">Intake</h3>
                </div>
                
                <p class="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">Bedrijfscontext, uitdagingen en kansen scherp krijgen. Geen eindeloze PowerPoints, wel directe focus op wat écht telt.</p>
                
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    <span>Bedrijfscontext helder</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    <span>Uitdagingen in kaart</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    <span>Kansen geïdentificeerd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Masterclass -->
          <div class="relative group">
            <div class="relative rounded-3xl h-full p-6 border-2 bg-slate-800/50 backdrop-blur-sm border-blue-400/30 hover:border-blue-400/60 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <div class="absolute inset-0 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20 bg-blue-400"></div>
              <div class="absolute -bottom-1 -left-1 w-6 h-6 rounded-full opacity-10 bg-blue-400"></div>
              
              <div class="relative z-10 h-full flex flex-col">
                <div class="flex items-center justify-between mb-4">
                  <div class="px-3 py-1 rounded-full text-sm font-bold bg-blue-500/20 text-blue-400 border border-blue-400/30">
                    Stap 2
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/50">
                    <AcademicCapIcon class="h-8 w-8 text-white" />
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">Masterclass</h3>
                </div>
                
                <p class="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">Teams meenemen in wat AI concreet betekent. Van buzzwords naar praktische toepassingen die jouw mensen begrijpen.</p>
                
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>Voor jouw team</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>Concrete voorbeelden</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>Praktische toepassingen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Procesmapping -->
          <div class="relative group">
            <div class="relative rounded-3xl h-full p-6 border-2 bg-slate-800/50 backdrop-blur-sm border-purple-400/30 hover:border-purple-400/60 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <div class="absolute inset-0 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-purple-500 to-purple-600"></div>
              <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20 bg-purple-400"></div>
              <div class="absolute -bottom-1 -left-1 w-6 h-6 rounded-full opacity-10 bg-purple-400"></div>
              
              <div class="relative z-10 h-full flex flex-col">
                <div class="flex items-center justify-between mb-4">
                  <div class="px-3 py-1 rounded-full text-sm font-bold bg-purple-500/20 text-purple-400 border border-purple-400/30">
                    Stap 3
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/50">
                    <ChatBubbleLeftIcon class="h-8 w-8 text-white" />
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">Procesmapping</h3>
                </div>
                
                <p class="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">Via gesprekken direct processen in kaart. AI-gestuurde interviews maken van chaos kristalheldere overzichten.</p>
                
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    <span>Gesprekken → Processen</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    <span>AI-gestuurde interviews</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    <span>Direct proceskaarten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 4: Roadmap -->
          <div class="relative group">
            <div class="relative rounded-3xl h-full p-6 border-2 bg-slate-800/50 backdrop-blur-sm border-pink-400/30 hover:border-pink-400/60 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <div class="absolute inset-0 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-pink-500 to-pink-600"></div>
              <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20 bg-pink-400"></div>
              <div class="absolute -bottom-1 -left-1 w-6 h-6 rounded-full opacity-10 bg-pink-400"></div>
              
              <div class="relative z-10 h-full flex flex-col">
                <div class="flex items-center justify-between mb-4">
                  <div class="px-3 py-1 rounded-full text-sm font-bold bg-pink-500/20 text-pink-400 border border-pink-400/30">
                    Stap 4
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg bg-gradient-to-br from-pink-500 to-pink-600 shadow-pink-500/50">
                    <MapIcon class="h-8 w-8 text-white" />
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">Roadmap</h3>
                </div>
                
                <p class="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">Quick wins en prioriteiten voor AI-adoptie. Van inzicht naar concrete actiepunten.</p>
                
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                    <span>Quick wins gedefinieerd</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                    <span>Prioriteiten helder</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                    <span>AI-adoptie strategie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 5: Implementatie -->
          <div class="relative group">
            <div class="relative rounded-3xl h-full p-6 border-2 bg-slate-800/50 backdrop-blur-sm border-orange-400/30 hover:border-orange-400/60 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <div class="absolute inset-0 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-orange-500 to-orange-600"></div>
              <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20 bg-orange-400"></div>
              <div class="absolute -bottom-1 -left-1 w-6 h-6 rounded-full opacity-10 bg-orange-400"></div>
              
              <div class="relative z-10 h-full flex flex-col">
                <div class="flex items-center justify-between mb-4">
                  <div class="px-3 py-1 rounded-full text-sm font-bold bg-orange-500/20 text-orange-400 border border-orange-400/30">
                    Stap 5
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-500/50">
                    <RocketLaunchIcon class="h-8 w-8 text-white" />
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">Implementatie</h3>
                </div>
                
                <p class="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">Bouwen van AI Agents en workflows die direct waarde opleveren. Van plan naar werkende automatisering.</p>
                
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                    <span>AI Agents live</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                    <span>Workflows actief</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <div class="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                    <span>Directe waardecreatie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Timeline visualization -->
        <div class="relative">
          <div class="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 via-purple-500 via-pink-500 to-orange-500 rounded-full transform -translate-y-1/2"></div>
          <div class="flex justify-between items-center relative z-10">
            <div class="bg-emerald-500 w-4 h-4 rounded-full shadow-lg shadow-emerald-500/50"></div>
            <div class="bg-blue-500 w-4 h-4 rounded-full shadow-lg shadow-blue-500/50"></div>
            <div class="bg-purple-500 w-4 h-4 rounded-full shadow-lg shadow-purple-500/50"></div>
            <div class="bg-pink-500 w-4 h-4 rounded-full shadow-lg shadow-pink-500/50"></div>
            <div class="bg-orange-500 w-4 h-4 rounded-full shadow-lg shadow-orange-500/50"></div>
          </div>
          <div class="flex justify-between items-center mt-4 text-sm text-slate-400">
            <span>Start</span>
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>🎉 Live!</span>
          </div>
        </div>
        
      </div>
    </section>




    <!-- Contact -->
    <section id="contact" class="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50 relative">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTUyM2ZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-400/30 rounded-full text-emerald-700 font-bold mb-6">
            ⏰ Kom in contact
          </div>
          
          <h3 class="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
            <span class="block">Klaar voor je eerste</span>
            <span class="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">AI-doorbraak?</span>
          </h3>
          
          <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            <strong class="text-slate-900">Gratis intake</strong> van 30 minuten. We bespreken graag de mogelijkheden.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-1 gap-12 items-start">
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
            <div class="mb-8">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span class="font-bold text-green-700 text-sm">📞 We bellen je binnen 4 uur terug</span>
              </div>
              <h4 class="text-2xl font-bold text-slate-900 mb-2">Start vandaag nog</h4>
              <p class="text-slate-600">
                <strong>Geen verplichtingen. Geen kosten.</strong> Wel direct inzicht in waar AI het meeste impact heeft voor jouw bedrijf.
              </p>
            </div>
            
            <form action="https://api.web3forms.com/submit" method="POST" class="space-y-4">
              <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315">
              <input type="hidden" name="redirect" :value="successUrl">
              <input type="hidden" name="subject" value="Nieuw contactformulier bericht - Genadium.com">
              <input type="hidden" name="from_name" value="Genadium.com Marketing Page">
              
              <div class="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="first_name"
                  placeholder="Voornaam *" 
                  required
                  class="w-full px-4 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-colors"
                >
                <input 
                  type="text" 
                  name="last_name"
                  placeholder="Achternaam *" 
                  required
                  class="w-full px-4 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-colors"
                >
              </div>
              <input 
                type="email" 
                name="email"
                placeholder="Zakelijk e-mailadres *" 
                required
                class="w-full px-4 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-colors"
              >
              <input 
                type="tel" 
                name="phone"
                placeholder="Telefoonnummer *" 
                required
                class="w-full px-4 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-colors"
              >
              <textarea 
                name="message"
                placeholder="Waar loop je tegenaan? Welk proces kost teveel tijd? (Optioneel)" 
                rows="4" 
                class="w-full px-4 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg resize-none transition-colors"
              ></textarea>
              
              <button type="submit" class="group w-full px-8 py-5 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold text-xl rounded-xl hover:from-emerald-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all shadow-2xl shadow-blue-500/25">
                <span class="flex items-center justify-center gap-3">
                  🚀 Ja, plan mijn gratis intake
                  <ArrowRightIcon class="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <p class="text-xs text-slate-500 leading-5 text-center">
                🔒 Door te verzenden ga je akkoord met onze verwerking van je gegevens voor contact. 
                <strong class="text-slate-700">We bellen je binnen 4 uur terug</strong> om een afspraak te plannen.
              </p>
            </form>
          </div>
          
         
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-slate-900 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 grid place-content-center">
              <ChatBubbleLeftIcon class="h-4 w-4" />
            </div>
            <span class="font-bold text-lg">Genadium</span>
            <span class="text-slate-400">—</span>
            <span class="text-slate-300">AI Agents that work for you</span>
          </div>
          <div class="flex items-center gap-6 text-slate-300">
            <a href="#problem" class="hover:text-white transition-colors">Probleem</a>
            <a href="#platform-service" class="hover:text-white transition-colors">Dienst</a>
            <a href="#contact" class="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>© {{ new Date().getFullYear() }} Genadium. AI Agents that work for you.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {
  ChatBubbleLeftIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ScaleIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  GlobeAltIcon,
  LightBulbIcon,
  CogIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  ExclamationTriangleIcon,
  PuzzlePieceIcon,
  ClockIcon,
  XMarkIcon,
  MapIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  QuestionMarkCircleIcon
} from '@heroicons/vue/24/outline'

// Success URL for form redirect
const successUrl = computed(() => {
  if (process.client) {
    return `${window.location.origin}/success`
  }
  return '/success'
})
</script>
