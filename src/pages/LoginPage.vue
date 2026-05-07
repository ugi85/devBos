<script setup lang="ts">
import { ArrowRight, Lock, Mail } from 'lucide-vue-next';
</script>

<template>
  <div class="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-20 bg-surface">
    <div
      class="w-full max-w-md space-y-8 rounded-3xl border border-outline-variant bg-white p-10 shadow-2xl"
    >
      <div class="text-center">
        <h1 class="text-3xl font-black tracking-tighter text-primary font-heading uppercase">
          WELCOME BACK
        </h1>
        <p class="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
          Secure access to SteelProcure dashboard
        </p>
      </div>

      <form class="space-y-6" @submit.prevent>
        <div class="space-y-2">
          <label class="text-xs font-bold uppercase tracking-wider text-gray-400">
            Work Email
          </label>
          <div class="relative group">
            <Mail class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-secondary" />
            <input
              type="email"
              placeholder="name@company.com"
              class="w-full rounded-xl border border-outline-variant bg-gray-50 py-4 pl-12 pr-4 text-sm font-medium outline-none transition-all focus:border-secondary focus:ring-4 focus:ring-secondary/10"
            />
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <label class="text-xs font-bold uppercase tracking-wider text-gray-400">
              Password
            </label>
            <a href="#" class="text-xs font-bold text-secondary hover:underline">
              Forgot?
            </a>
          </div>
          <div class="relative group">
            <Lock class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-secondary" />
            <input
              type="password"
              placeholder="••••••••"
              class="w-full rounded-xl border border-outline-variant bg-gray-50 py-4 pl-12 pr-4 text-sm font-medium outline-none transition-all focus:border-secondary focus:ring-4 focus:ring-secondary/10"
            />
          </div>
        </div>

        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            class="h-4 w-4 rounded border-outline-variant text-secondary focus:ring-secondary"
          />
          <label htmlFor="remember" class="text-sm font-medium text-gray-400">
            Remember for 30 days
          </label>
        </div>

        <button class="group relative w-full flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary py-4 text-sm font-black uppercase tracking-widest text-white transition-all active:scale-95 shadow-lg shadow-primary/20">
          Sign In
          <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>

      <div class="text-center pt-4">
        <p class="text-sm text-gray-500">
          New contractor? 
          <a href="#" class="font-bold text-secondary hover:underline ml-1">
            Request Onboarding
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
