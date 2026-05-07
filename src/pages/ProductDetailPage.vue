<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, Zap, Info } from 'lucide-vue-next';

const route = useRoute();
const id = route.params.id;

// Mock data
const product = {
  id: id || "sp-33",
  name: "Standard Concrete K-350",
  category: "Ready-Mix Concrete",
  price: "Rp 945.000",
  unit: "per m³",
  image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1200",
  description: "High-strength structural concrete suitable for beams, columns, and slabs for multi-story buildings. Engineered for durability and workability.",
  specs: [
    { label: "Slump", value: "12 ± 2 cm" },
    { label: "Strength", value: "350 kg/cm²" },
    { label: "Water/Cement", value: "0.45" },
    { label: "Added Fibers", value: "Optional" },
  ],
  features: [
    { icon: ShieldCheck, title: "Lab Certified", desc: "Third-party tested every 50m³" },
    { icon: Truck, title: "Speed Delivery", desc: "Next-day batching available" },
    { icon: Zap, title: "High Workability", desc: "Easy pumping and vibration" },
  ]
};
</script>

<template>
  <div class="bg-surface pb-24">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Breadcrumbs / Back -->
      <div class="py-8">
        <router-link to="/catalog" class="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">
          <ArrowLeft class="h-4 w-4" />
          Back to Catalog
        </router-link>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <!-- Image Section -->
        <div class="group relative h-[500px] overflow-hidden rounded-3xl border border-outline-variant shadow-2xl">
          <img
            :src="product.image"
            :alt="product.name"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div class="absolute bottom-8 left-8">
            <span class="rounded-full bg-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-primary">
              PREMIUM BATCH
            </span>
          </div>
        </div>

        <!-- Info Section -->
        <div class="flex flex-col justify-center">
          <span class="text-xs font-black uppercase tracking-widest text-secondary mb-2">{{ product.category }}</span>
          <h1 class="text-4xl font-black tracking-tighter text-primary md:text-5xl font-heading uppercase">
            {{ product.name }}
          </h1>
          
          <div class="mt-6 flex items-baseline gap-4">
            <span class="text-4xl font-black text-accent uppercase tracking-tighter">{{ product.price }}</span>
            <span class="text-lg font-medium text-gray-400 uppercase tracking-widest text-xs font-bold">{{ product.unit }}</span>
          </div>

          <p class="mt-8 text-lg leading-relaxed text-gray-500 font-medium uppercase tracking-wide text-sm whitespace-pre-line">
            {{ product.description }}
          </p>

          <div class="mt-10 grid grid-cols-2 gap-4">
            <div v-for="(spec, i) in product.specs" :key="i" class="rounded-2xl border border-outline-variant bg-gray-50 p-6 shadow-sm">
              <p class="text-[10px] font-black uppercase tracking-widest text-gray-400">{{ spec.label }}</p>
              <p class="font-bold text-primary mt-1">{{ spec.value }}</p>
            </div>
          </div>

          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <button class="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-5 text-sm font-black uppercase tracking-widest text-white transition-all hover:shadow-xl active:scale-95 shadow-lg shadow-primary/20">
              <ShoppingCart class="h-5 w-5" />
              Add to Quote
            </button>
            <button class="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-primary py-5 text-sm font-black uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-white active:scale-95">
              Technical Data Sheet
            </button>
          </div>
        </div>
      </div>

      <!-- Feature Highlights -->
      <div class="mt-24 grid gap-8 md:grid-cols-3">
        <div v-for="(feature, i) in product.features" :key="i" class="rounded-3xl border border-outline-variant bg-white p-10 shadow-sm transition-transform hover:-translate-y-2">
          <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
            <component :is="feature.icon" class="h-7 w-7" />
          </div>
          <h3 class="text-xl font-bold font-heading uppercase tracking-tight">{{ feature.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-gray-500 font-medium">{{ feature.desc }}</p>
        </div>
      </div>

      <!-- Informational Banner -->
      <div class="mt-24 rounded-3xl bg-gray-50 p-12 text-center border border-dashed border-outline-variant">
        <Info class="mx-auto h-10 w-10 text-secondary mb-6" />
        <h2 class="text-3xl font-black tracking-tighter mb-4 font-heading uppercase">PROCUREMENT NOTE</h2>
        <p class="mx-auto max-w-2xl text-xs font-bold uppercase tracking-widest leading-loose text-gray-500">
          For projects requiring specific admixture adjustments (retarders, accelerators, or high-range water reducers), please contact our batching engineer directly after adding to your quote.
        </p>
      </div>
    </div>
  </div>
</template>
