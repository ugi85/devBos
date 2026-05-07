<script setup lang="ts">
import { ref } from 'vue';
import { Search, MapPin, Truck, CheckCircle2, Clock, AlertTriangle } from 'lucide-vue-next';

const orderId = ref("");
const isSearching = ref(false);
const showStatus = ref(false);

const handleSearch = () => {
  isSearching.value = true;
  setTimeout(() => {
    isSearching.value = false;
    showStatus.value = orderId.value.length > 5;
  }, 1500);
};

const steps = [
  { label: "Order Confirmed", status: "complete", date: "Oct 24, 09:00 AM", icon: CheckCircle2 },
  { label: "Processing", status: "complete", date: "Oct 24, 02:30 PM", icon: Clock },
  { label: "In Transit", status: "current", date: "Oct 25, 10:45 AM", icon: Truck },
  { label: "Site Delivery", status: "upcoming", date: "Expected 04:00 PM", icon: MapPin },
];
</script>

<template>
  <div class="bg-surface min-h-[calc(100vh-4rem)]">
    <div class="mx-auto max-w-4xl px-6 py-20">
      <div class="mb-12 text-center">
        <h1 class="text-4xl font-black tracking-tighter text-primary font-heading uppercase">TRACK YOUR DELIVERY</h1>
        <p class="mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">Real-time GPS tracking for your material logistics</p>
      </div>

      <!-- Search Bar -->
      <div class="rounded-3xl border border-outline-variant bg-white p-2 shadow-2xl">
        <form @submit.prevent="handleSearch" class="flex flex-col md:flex-row gap-2">
          <div class="relative flex-1">
            <Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter Batch ID or Order Number (e.g. SP-8842)"
              v-model="orderId"
              class="w-full rounded-2xl bg-gray-50 py-4 pl-12 pr-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-secondary/20"
            />
          </div>
          <button
            :disabled="isSearching"
            class="rounded-2xl bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all active:scale-95 disabled:opacity-50"
          >
            {{ isSearching ? "Locating..." : "Track Order" }}
          </button>
        </form>
      </div>

      <div v-if="showStatus" class="mt-12 space-y-8">
        <!-- Summary Grid -->
        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-outline-variant bg-gray-50 p-8 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <span class="text-[10px] font-black uppercase tracking-widest text-gray-400">Current Location</span>
              <span class="flex items-center gap-1 text-[10px] font-bold text-green-500">
                <div class="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Live Now
              </span>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Truck class="h-6 w-6" />
              </div>
              <div>
                <h3 class="font-bold text-xl uppercase tracking-tight text-primary">Truck #4412 (Giga 500)</h3>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mt-1">2.4 miles from Site B - East Gate</p>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-outline-variant bg-gray-50 p-8 text-center flex flex-col justify-center shadow-sm">
            <p class="text-[10px] font-black uppercase tracking-widest text-gray-400">ETA TO SITE</p>
            <p class="text-5xl font-black text-primary my-2 font-heading uppercase tracking-tighter">18 MIN</p>
            <p class="text-[10px] font-bold text-secondary uppercase tracking-widest">ARRIVING ON SCHEDULE</p>
          </div>
        </div>

        <!-- Timeline -->
        <div class="rounded-3xl border border-outline-variant bg-white p-10 shadow-xl">
          <h3 class="text-lg font-black tracking-tighter mb-8 font-heading uppercase">ORDER TIMELINE</h3>
          <div class="relative space-y-12">
            <div class="absolute left-[23px] top-2 bottom-2 w-0.5 bg-gray-100" />
            <div v-for="(step, i) in steps" :key="i" class="relative flex items-start gap-6">
              <div :class="`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white ${
                step.status === 'complete' ? 'bg-secondary text-primary' : 
                step.status === 'current' ? 'bg-primary text-white ring-4 ring-primary/10' : 
                'bg-gray-100 text-gray-400'
              }`">
                <component :is="step.icon" class="h-5 w-5" />
              </div>
              <div class="flex-1">
                <p :class="`text-sm font-black uppercase tracking-wider ${
                  step.status === 'upcoming' ? 'text-gray-400' : 'text-primary'
                }`">
                  {{ step.label }}
                </p>
                <p class="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">{{ step.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="!isSearching && orderId" class="mt-12 rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
        <AlertTriangle class="mx-auto mb-4 h-12 w-12 text-red-500" />
        <h3 class="font-bold text-red-900 uppercase tracking-tight">ORDER NOT FOUND</h3>
        <p class="text-xs font-bold text-red-700 uppercase tracking-widest mt-2">Please check the Batch ID on your receipt and try again.</p>
      </div>
    </div>
  </div>
</template>
