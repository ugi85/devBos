<script setup lang="ts">
import { ref, computed } from 'vue';
import { Ruler, Columns, Square, Layout, ShoppingCart, TrendingDown } from 'lucide-vue-next';

type ToolType = "Slab" | "Columns" | "Foundation" | "Reinforcement";

const activeTool = ref<ToolType>("Slab");
const length = ref(0);
const width = ref(0);
const thickness = ref(150);
const wastage = ref(5);

const netVolume = computed(() => length.value * width.value * (thickness.value / 1000));
const wastageVolume = computed(() => netVolume.value * (wastage.value / 100));
const totalVolume = computed(() => netVolume.value + wastageVolume.value);

const tools = [
  { id: "Slab", name: "Concrete Slab", icon: Layout },
  { id: "Columns", name: "Columns", icon: Columns },
  { id: "Foundation", name: "Foundation", icon: Square },
  { id: "Reinforcement", name: "Steel Reinforcement", icon: Ruler },
];
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-12">
    <section class="mb-12">
      <h1 class="text-4xl font-black uppercase text-primary tracking-tighter">Material Volume Calculator</h1>
      <p class="mt-2 max-w-2xl text-gray-500 font-medium uppercase tracking-wide text-sm">Precision engineering starts with accurate measurements. Use our industrial calculator to estimate volume and material requirements.</p>
    </section>

    <div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <!-- Input Interface -->
      <div class="lg:col-span-8 rounded-2xl border border-outline-variant bg-white p-8 shadow-sm">
        <div class="mb-10 flex flex-wrap gap-2 border-b border-outline-variant pb-6">
          <button
            v-for="tool in tools"
            :key="tool.id"
            @click="activeTool = tool.id as ToolType"
            class="flex items-center gap-3 rounded px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all"
            :class="activeTool === tool.id ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:bg-gray-100 hover:text-primary'"
          >
            <component :is="tool.icon" class="h-4 w-4" />
            {{ tool.name }}
          </button>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="space-y-3">
            <label class="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Length (m)</label>
            <input
              type="number"
              v-model="length"
              placeholder="0.00"
              class="w-full bg-gray-50 border border-outline-variant p-4 text-lg font-bold outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div class="space-y-3">
            <label class="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Width (m)</label>
            <input
              type="number"
              v-model="width"
              placeholder="0.00"
              class="w-full bg-gray-50 border border-outline-variant p-4 text-lg font-bold outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div class="space-y-3">
            <label class="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Thickness (mm)</label>
            <input
              type="number"
              v-model="thickness"
              placeholder="150"
              class="w-full bg-gray-50 border border-outline-variant p-4 text-lg font-bold outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div class="space-y-3">
            <label class="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Wastage Factor (%)</label>
            <select
              v-model="wastage"
              class="w-full bg-gray-50 border border-outline-variant p-4 text-lg font-bold outline-none focus:ring-2 focus:ring-secondary"
            >
              <option :value="5">5% (Standard)</option>
              <option :value="10">10% (Complex Pour)</option>
              <option :value="0">0% (Ideal)</option>
            </select>
          </div>
        </div>

        <div class="mt-12 group relative h-64 overflow-hidden rounded-xl border border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-secondary">
           <div class="absolute inset-0 flex flex-col items-center justify-center text-center backdrop-blur-[2px]">
              <Ruler class="h-12 w-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <span class="text-sm font-black uppercase text-primary tracking-widest">Slab Volume Formula</span>
              <span class="mt-1 text-xs font-bold text-gray-400">V = L × W × T</span>
           </div>
           <img 
             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
             class="h-full w-full object-cover opacity-5 grayscale pointer-events-none" 
           />
        </div>
      </div>

      <!-- Results Sidebar -->
      <div class="lg:col-span-4 space-y-6">
        <div class="rounded-2xl bg-primary p-8 text-white shadow-2xl">
          <h3 class="mb-6 border-b border-white/10 pb-4 text-2xl font-bold uppercase">Estimated Volume</h3>
          <div class="space-y-6">
              <div class="flex items-end justify-between">
                 <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Net Volume</span>
                 <span class="text-3xl font-black uppercase tracking-tighter">{{ netVolume.toFixed(2) }} m³</span>
              </div>
              <div class="flex items-end justify-between text-secondary">
                 <span class="text-[10px] font-bold uppercase tracking-widest opacity-60">+ Wastage ({{ wastage }}%)</span>
                 <span class="text-xl font-bold uppercase tracking-tighter">{{ wastageVolume.toFixed(2) }} m³</span>
              </div>
              <div class="border-t border-white/10 pt-6">
                 <div class="flex items-end justify-between">
                    <span class="text-xs font-bold uppercase tracking-widest">Total Required</span>
                    <span class="text-5xl font-black text-secondary uppercase tracking-tighter">{{ totalVolume.toFixed(2) }} m³</span>
                 </div>
              </div>
          </div>

          <div class="mt-12 space-y-4">
            <router-link to="/catalog" class="flex w-full items-center justify-center gap-3 bg-secondary py-4 text-sm font-black uppercase tracking-widest text-primary shadow-xl transition-transform active:scale-95">
              <ShoppingCart class="h-5 w-5" />
              Find Materials
            </router-link>
            <button class="w-full border border-white/20 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/5">
              Save Calculation
            </button>
          </div>
        </div>

        <div class="rounded-2xl border border-outline-variant bg-white p-6 shadow-sm">
           <div class="flex items-center gap-3 text-accent mb-4">
              <div class="h-2 w-2 animate-pulse rounded-full bg-red-600" />
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary">Market Price Alert</span>
           </div>
           <p class="text-xs font-medium leading-relaxed text-gray-500">Steel reinforcement prices in your region have stabilized. Order within 24 hours to lock in current rates.</p>
           <div class="mt-4 flex items-center gap-2 text-red-600">
              <TrendingDown class="h-4 w-4" />
              <span class="text-[10px] font-bold">-2.4% vs last week</span>
           </div>
        </div>
      </div>
    </div>

    <!-- Recommended Area -->
    <section class="mt-24">
       <div class="mb-8 flex items-end justify-between">
          <h2 class="text-3xl font-bold uppercase text-primary tracking-tighter">Recommended Materials</h2>
          <router-link to="/catalog" class="text-sm font-bold text-accent underline">View Full Catalog</router-link>
       </div>
       <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div v-for="i in 3" :key="i" class="group rounded-2xl border border-outline-variant bg-white p-6 transition-shadow hover:shadow-lg">
             <div class="mb-4 h-40 overflow-hidden bg-gray-100 rounded-xl">
               <img 
                 :src="i === 1 ? 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop' : i === 2 ? 'https://images.unsplash.com/photo-1621905252507-b354bcadc0e2?q=80&w=2069&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'" 
                 class="h-full w-full object-cover grayscale transition-transform group-hover:scale-105" 
               />
             </div>
             <h4 class="text-lg font-bold text-primary uppercase tracking-tight">Material {{ i === 1 ? "C30/37 Ready Mix" : i === 2 ? "Rebar Mesh A393" : "Expansion Filler" }}</h4>
             <p class="mt-2 text-xs font-medium text-gray-500">Standard industrial structural material for quality infrastructure.</p>
             <div class="mt-6 flex items-center justify-between">
                <span class="text-lg font-black text-primary uppercase tracking-tighter">$145.00 <span class="text-xs text-gray-400 font-normal">/ m³</span></span>
                <button class="rounded-lg bg-secondary p-2.5 text-primary shadow-sm hover:scale-110 transition-transform">
                   <ShoppingCart class="h-5 w-5" />
                </button>
             </div>
          </div>
       </div>
    </section>
  </div>
</template>
