<script setup lang="ts">
import { Share2, Globe, Mail } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-primary text-gray-300">
    <div class="mx-auto max-w-7xl px-6 py-12">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div class="lg:col-span-1">
          <span class="text-2xl font-bold text-secondary font-heading">Dynamix</span>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
            Integrated logistics and procurement solutions for the modern industrial supply chain.
            Built for structural integrity and reliability.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3">
          <div>
            <h4 class="mb-4 text-xs font-bold uppercase tracking-widest text-white">Layanan</h4>
            <ul class="space-y-3 text-sm">
              <li><router-link to="/catalog" class="hover:text-secondary transition-colors">Material Standards</router-link></li>
              <li><a href="#" class="hover:text-secondary transition-colors">Supplier Portal</a></li>
              <li><router-link to="/calculator" class="hover:text-secondary transition-colors">Calculator</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 text-xs font-bold uppercase tracking-widest text-white">Perusahaan</h4>
            <ul class="space-y-3 text-sm">
              <li><router-link to="/about" class="hover:text-secondary transition-colors">ESG Report</router-link></li>
              <li><a href="#" class="hover:text-secondary transition-colors">Our Partners</a></li>
              <li><a href="#" class="hover:text-secondary transition-colors">Services Area</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 text-xs font-bold uppercase tracking-widest text-white">Bantuan</h4>
            <ul class="space-y-3 text-sm">
              <li><router-link to="/support" class="hover:text-secondary transition-colors">Contact Support</router-link></li>
              <li><a href="#" class="hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" class="hover:text-secondary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
        <p class="text-xs text-gray-500">
          © 2026 Dynamix Logistics. Built for structural integrity.
        </p>
        <div class="mt-4 flex gap-6 md:mt-0">
          <button class="text-gray-500 hover:text-white"><Share2 class="h-5 w-5" /></button>
          <button class="text-gray-500 hover:text-white"><Globe class="h-5 w-5" /></button>
          <button class="text-gray-500 hover:text-white"><Mail class="h-5 w-5" /></button>
        </div>
      </div>
    </div>
  </footer>
</template>
