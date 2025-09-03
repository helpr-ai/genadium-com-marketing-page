<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 grid place-content-center text-white shadow-lg">
            <ChatBubbleLeftIcon class="h-5 w-5" />
          </div>
          <span class="font-bold tracking-tight text-lg">Genadium</span>
          <span class="ml-1 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-md">AI Agents that work for you</span>
        </NuxtLink>
        <nav class="hidden md:flex items-center gap-8 text-sm">
          <NuxtLink to="/#solution" class="hover:text-slate-600">De Oplossing</NuxtLink>
          <NuxtLink to="/#problem" class="hover:text-slate-600">Het Probleem</NuxtLink>
          <NuxtLink to="/#approach" class="hover:text-slate-600 font-semibold">🎯 5-Staps Methode</NuxtLink>
          <NuxtLink to="/#contact" class="hover:text-slate-600">Contact</NuxtLink>
        </nav>
        <div class="flex items-center gap-2">
          <NuxtLink to="/#contact" class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-800">
            Start nu 
            <ArrowRightIcon class="h-4 w-4 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="py-12 bg-slate-900 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 grid place-content-center">
              <ChatBubbleLeftIcon class="h-4 w-4" />
            </div>
            <span class="font-bold text-lg">Genadium</span>
            <span class="text-slate-400">—</span>
            <span class="text-slate-300">AI Agents that work for you</span>
          </NuxtLink>
          <div class="flex items-center gap-6 text-slate-300">
            <NuxtLink to="/#problem" class="hover:text-white transition-colors">Probleem</NuxtLink>
            <NuxtLink to="/#solution" class="hover:text-white transition-colors">Oplossing</NuxtLink>
            <NuxtLink to="/#contact" class="hover:text-white transition-colors">Contact</NuxtLink>
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
import {
  ChatBubbleLeftIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'
</script>