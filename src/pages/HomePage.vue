<script setup lang="ts">
import { ArrowRight, Box, Hammer, ShieldCheck, BarChart3, CloudRain } from 'lucide-vue-next';
</script>

<template>
  <div class="flex flex-col">
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Construction Site"
          class="h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>
      <div class="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div class="max-w-2xl">
          <span class="inline-block bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            Logistik Presisi
          </span>
          <h1 class="mt-6 text-5xl font-black leading-tight text-white md:text-6xl uppercase tracking-tighter">
            BagusProject: Material Konstruksi Berkualitas & Transparan
          </h1>
          <p class="mt-6 text-lg text-gray-300">
            Platform pengadaan material industri yang memprioritaskan integritas struktural, efisiensi biaya, dan kepastian volume untuk setiap proyek Anda.
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <router-link
              to="/catalog"
              class="flex items-center gap-2 bg-secondary px-8 py-4 font-bold text-primary transition-transform hover:translate-y-[-2px]"
            >
              Mulai Proyek Sekarang
              <ArrowRight class="h-5 w-5" />
            </router-link>
            <router-link
              to="/catalog"
              class="bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Lihat Katalog
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating Calculator Widget -->
    <section class="relative z-10 -mt-20 mx-auto w-full max-w-7xl px-6">
      <div class="grid grid-cols-1 divide-y divide-outline-variant rounded-xl border border-outline-variant bg-white p-6 shadow-2xl lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        <div class="pb-6 pr-6 lg:pb-0">
          <h3 class="text-xl font-bold uppercase tracking-tight text-primary">Kalkulator Volume</h3>
          <p class="mt-2 text-sm text-gray-500 font-medium">Estimasi kebutuhan material beton atau baja secara instan untuk akurasi budget.</p>
        </div>
        <div class="col-span-3 grid grid-cols-1 items-end gap-6 pt-6 md:grid-cols-3 lg:pl-6 lg:pt-0">
          <div class="space-y-1">
            <label class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Tipe Struktur</label>
            <select class="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-secondary">
              <option>Beton Ready-Mix</option>
              <option>Besi Tulangan</option>
              <option>Baja Profil</option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1">
              <label class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Panjang (m)</label>
              <input type="number" placeholder="0" class="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-secondary" />
            </div>
            <div class="space-y-1">
              <label class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Lebar (m)</label>
              <input type="number" placeholder="0" class="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-secondary" />
            </div>
          </div>
          <router-link to="/calculator" class="flex items-center justify-center bg-primary py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-800">
            Hitung Estimasi
          </router-link>
        </div>
      </div>
    </section>

    <!-- Categories Bento Grid -->
    <section class="mx-auto mt-24 w-full max-w-7xl px-6 mb-24">
      <div class="flex items-end justify-between mb-10">
        <div>
          <h2 class="text-3xl font-bold uppercase leading-none text-primary">Kategori Material</h2>
          <p class="mt-2 text-gray-500 font-medium">Pilihan material standar industri dengan jaminan kualitas dari supplier terverifikasi.</p>
        </div>
        <router-link to="/catalog" class="flex items-center gap-2 border-b-2 border-secondary pb-1 text-sm font-bold text-accent transition-colors hover:text-primary">
          Lihat Semua Kategori
          <ArrowRight class="h-4 w-4" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        <div class="md:col-span-8 group relative overflow-hidden bg-gray-100 p-8 border border-outline-variant">
          <div class="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div class="flex h-16 w-16 items-center justify-center bg-primary text-white">
                <Box class="h-8 w-8" />
              </div>
              <h3 class="mt-6 text-4xl font-bold uppercase text-primary leading-none">Semen & Beton</h3>
              <p class="mt-4 max-w-xs text-gray-500 font-medium">Beton Ready-Mix, Semen Portland, dan Aditif Konstruksi kualitas premium.</p>
            </div>
            <router-link to="/catalog" class="flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all">
              Eksplor Material <ArrowRight class="h-5 w-5" />
            </router-link>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop" 
            class="absolute inset-0 h-full w-full object-cover opacity-10 grayscale group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
          />
        </div>

        <div class="md:col-span-4 bg-gray-200 p-8 flex flex-col justify-between border border-outline-variant overflow-hidden group relative">
          <div>
            <div class="flex h-12 w-12 items-center justify-center bg-secondary text-primary">
              <Hammer class="h-6 w-6" />
            </div>
            <h3 class="mt-6 text-2xl font-bold uppercase text-primary">Besi & Baja</h3>
            <p class="mt-2 text-sm text-gray-500 font-medium">Rebar, I-Beam, Wide Flange, dan Wiremesh standar SNI.</p>
          </div>
          <router-link to="/catalog" class="mt-8 text-xs font-bold uppercase tracking-widest text-accent">Lihat Katalog</router-link>
          <div class="absolute -bottom-10 -right-10 opacity-5 transition-transform group-hover:rotate-12 duration-700 pointer-events-none">
             <ShieldCheck class="h-64 w-64" />
          </div>
        </div>

        <div class="md:col-span-4 bg-primary p-8 flex flex-col justify-between group">
          <h3 class="text-2xl font-bold uppercase text-white">Material Atap</h3>
          <p class="mt-2 text-sm text-gray-400">Spandek, Genteng Metal, dan Rangka Baja Ringan Profesional.</p>
          <router-link to="/catalog" class="mt-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-secondary group-hover:text-primary transition-colors">
            <ArrowRight class="h-5 w-5" />
          </router-link>
        </div>

        <div class="md:col-span-8 bg-gray-100 p-8 flex items-center justify-between border border-outline-variant">
          <div class="max-w-md">
            <h3 class="text-2xl font-bold uppercase text-primary">Precast & Paving</h3>
            <p class="mt-2 text-sm text-gray-500 font-medium">U-Ditch, Box Culvert, dan Paving Block untuk infrastruktur publik.</p>
            <button class="mt-6 border border-primary px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-primary hover:text-white">Hubungi Sales</button>
          </div>
          <div class="hidden lg:block w-1/3">
             <img src="https://images.unsplash.com/photo-1621905252507-b354bcadc0e2?q=80&w=2069&auto=format&fit=crop" class="h-32 w-full object-cover rounded-lg shadow-sm" />
          </div>
        </div>
      </div>
    </section>

    <!-- Integrity Section -->
    <section class="bg-primary/5 py-24 text-primary relative overflow-hidden">
      <div class="absolute right-0 top-0 opacity-5 pointer-events-none">
         <ShieldCheck class="h-[600px] w-[600px]" />
      </div>
      <div class="mx-auto max-w-7xl px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold uppercase tracking-tighter">Integritas di Setiap Pengiriman</h2>
          <p class="mx-auto mt-4 max-w-2xl text-gray-500 font-medium">Kami mendefinisikan ulang standar pengadaan material melalui transparansi total dan inovasi berkelanjutan.</p>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="bg-white p-8 border border-outline-variant shadow-sm transition-transform hover:-translate-y-1">
             <ShieldCheck class="h-12 w-12 text-secondary mb-6" />
             <h4 class="text-xl font-bold uppercase">Beton Jujur</h4>
             <p class="mt-4 text-gray-500 leading-relaxed text-sm">Sistem monitoring digital memastikan volume yang Anda pesan adalah volume yang Anda terima di lokasi. Tanpa manipulasi.</p>
          </div>
          <div class="bg-white p-8 border border-outline-variant shadow-sm transition-transform hover:-translate-y-1">
             <CloudRain class="h-12 w-12 text-secondary mb-6" />
             <h4 class="text-xl font-bold uppercase">Low Carbon Concrete</h4>
             <p class="mt-4 text-gray-500 leading-relaxed text-sm">Menyediakan material ramah lingkungan untuk mendukung proyek konstruksi berkelanjutan tanpa mengurangi kekuatan struktural.</p>
          </div>
          <router-link to="/track" class="bg-white p-8 border border-outline-variant shadow-sm group block transition-all hover:-translate-y-1">
             <BarChart3 class="h-12 w-12 text-secondary mb-6 transition-transform group-hover:scale-110" />
             <h4 class="text-xl font-bold uppercase flex items-center gap-2">
               Real-time Tracking <ArrowRight class="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
             </h4>
             <p class="mt-4 text-gray-500 leading-relaxed text-sm">Pantau posisi pengiriman material Anda secara live melalui dashboard untuk koordinasi site yang lebih presisi.</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Suppliers -->
    <section class="py-16 border-b border-outline-variant bg-white">
       <div class="mx-auto max-w-7xl px-6">
          <p class="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Bekerja Sama dengan Supplier Terpercaya</p>
          <div class="mt-10 flex flex-wrap items-center justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <span class="text-2xl font-black text-primary font-heading uppercase tracking-tighter">SEMEN INDONESIA</span>
             <span class="text-2xl font-black text-primary font-heading uppercase tracking-tighter">HOLCIM</span>
             <span class="text-2xl font-black text-primary font-heading uppercase tracking-tighter">KRAKATAU STEEL</span>
             <span class="text-2xl font-black text-primary font-heading uppercase tracking-tighter">SCG</span>
          </div>
       </div>
    </section>

    <!-- CTA Section -->
    <section class="mx-auto w-full max-w-7xl px-6 py-24">
       <div class="bg-secondary p-12 text-center md:p-24 rounded-3xl shadow-2xl relative overflow-hidden">
          <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          <div class="relative z-10">
            <h2 class="text-5xl font-black uppercase tracking-tighter text-primary">Siap Membangun dengan Integritas?</h2>
            <p class="mx-auto mt-6 max-w-2xl text-lg font-medium text-accent">Dapatkan penawaran harga terbaik untuk proyek komersial maupun residensial Anda. Hubungi tim ahli kami untuk konsultasi teknis gratis.</p>
            <div class="mt-10 flex flex-wrap justify-center gap-6">
               <router-link to="/catalog" class="bg-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-transform active:scale-95">Mulai Proyek Sekarang</router-link>
               <router-link to="/support" class="border-2 border-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white">Konsultasi Sales</router-link>
            </div>
          </div>
       </div>
    </section>
  </div>
</template>
