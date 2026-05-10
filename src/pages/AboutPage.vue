<script setup lang="ts">
import { ShieldCheck, Truck, Leaf, CheckCircle } from 'lucide-vue-next';
</script>

<template>
  <div class="flex flex-col">
    <!-- Hero -->
    <section class="bg-primary py-32 text-center text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
         <div class="grid grid-cols-12 auto-rows-fr h-full w-full opacity-20">
            <div v-for="i in 48" :key="i" class="border border-white/10" />
         </div>
      </div>
      <div class="mx-auto max-w-4xl px-6 relative z-10">
        <h1 class="text-5xl font-black uppercase tracking-tighter md:text-7xl">
          Membangun dengan Integritas & Transparansi
        </h1>
        <p class="mt-8 text-xl text-gray-400 leading-relaxed font-medium uppercase tracking-wide">
           Solusi pengadaan material konstruksi digital terdepan di Indonesia, 
           menghadirkan efisiensi tanpa kompromi pada kualitas.
        </p>
      </div>
    </section>

    <!-- Narrative Section -->
    <section class="mx-auto max-w-7xl px-6 py-24">
      <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div class="relative">
          <div class="aspect-video overflow-hidden border-8 border-gray-100 bg-gray-200">
            <img 
              src="https://solusibangunindonesia.com/wp-content/uploads/2025/03/Semen-Curah.webp" 
              class="h-full w-full object-cover"
            />
          </div>
          <div class="absolute -bottom-10 -right-10 bg-primary p-8 text-white shadow-2xl">
             <span class="block text-4xl font-black uppercase tracking-tighter">10+ Tahun</span>
             <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Pengalaman Industri</span>
          </div>
        </div>
        <div class="space-y-6">
          <h2 class="text-4xl font-bold uppercase text-primary tracking-tighter">Kisah Kami</h2>
          <div class="h-1.5 w-20 bg-secondary" />
          <p class="text-lg leading-relaxed text-gray-500 font-medium whitespace-pre-line">
            Melalui anak usaha kami, <strong class="text-primary tracking-tight italic">"PT Solusi Bangun Bangsa"</strong>, Solusi Bangun Indonesia menyediakan layanan komprehensif dalam bidang beton jadi, dengan jaringan terintegrasi yang tersebar di Pulau Jawa, yang siap melayani beragam proyek pembangunan di Indonesia.
          </p>
          <p class="text-sm leading-relaxed text-gray-500">
             Dengan pengalaman dan keahlian kelas dunia, kami tidak hanya mengantarkan produk dengan kualitas terbaik, tetapi juga memberikan konsultasi dan bantuan teknis untuk bangunan Anda.
          </p>
          <div class="rounded-xl border-l-4 border-primary bg-gray-100 p-6 italic text-primary">
             "Integritas bukan sekadar kata-kata, melainkan setiap pilar yang kami bangun bersama Anda."
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="bg-primary py-24 text-white uppercase">
       <div class="mx-auto max-w-7xl px-6">
          <div class="mb-16 text-center">
             <h2 class="text-3xl font-bold tracking-tighter">Nilai-Nilai Inti Kami</h2>
          </div>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
             <div class="border border-white/10 p-10 text-center transition-colors hover:border-secondary">
                <ShieldCheck class="mx-auto mb-6 h-16 w-16 text-secondary" />
                <h3 class="text-xl font-bold uppercase tracking-tight">Transparansi</h3>
                <p class="mt-4 text-sm font-medium text-gray-400 leading-relaxed capitalize">Sistem pelacakan real-time dan harga terbuka tanpa biaya tersembunyi.</p>
             </div>
             <div class="border border-white/10 p-10 text-center transition-colors hover:border-secondary">
                <Leaf class="mx-auto mb-6 h-16 w-16 text-secondary" />
                <h3 class="text-xl font-bold uppercase tracking-tight">Sustainability</h3>
                <p class="mt-4 text-sm font-medium text-gray-400 leading-relaxed capitalize">Berkomitmen pada emisi rendah untuk masa depan konstruksi yang lebih hijau.</p>
             </div>
             <div class="border border-white/10 p-10 text-center transition-colors hover:border-secondary">
                <Truck class="mx-auto mb-6 h-16 w-16 text-secondary" />
                <h3 class="text-xl font-bold uppercase tracking-tight">Logistik Unggul</h3>
                <p class="mt-4 text-sm font-medium text-gray-400 leading-relaxed capitalize">Jaringan logistik yang presisi dan armada yang terintegrasi penuh.</p>
             </div>
          </div>
       </div>
    </section>

    <!-- Stats Table -->
    <section class="py-24 border-b border-outline-variant bg-white">
       <div class="mx-auto max-w-7xl px-6">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-x divide-outline-variant">
             <div class="px-6">
                <div class="text-5xl font-black text-primary uppercase tracking-tighter">500+</div>
                <div class="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Proyek Selesai</div>
             </div>
             <div class="px-6 border-l border-outline-variant">
                <div class="text-5xl font-black text-primary uppercase tracking-tighter">1.2M</div>
                <div class="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Ton Material</div>
             </div>
             <div class="px-6 border-l border-outline-variant">
                <div class="text-5xl font-black text-primary uppercase tracking-tighter">34</div>
                <div class="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Provinsi</div>
             </div>
             <div class="px-6 border-l border-outline-variant">
                <div class="text-5xl font-black text-primary uppercase tracking-tighter">98%</div>
                <div class="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Kepuasan</div>
             </div>
          </div>
       </div>
    </section>

    <!-- Sustainability Section -->
    <section class="py-24 bg-gray-50">
       <div class="mx-auto max-w-7xl px-6">
          <div class="rounded-3xl border border-outline-variant bg-white p-12 shadow-sm flex flex-col lg:flex-row gap-16 items-center">
             <div class="flex-1 space-y-8">
                <div class="flex items-center gap-4">
                   <span class="bg-emerald-100 text-emerald-800 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">Green Tech</span>
                   <div class="h-px w-12 bg-gray-200" />
                </div>
                <h2 class="text-4xl font-bold uppercase text-primary leading-tight tracking-tighter">Membangun Lebih Hijau dengan Beton Karbon Rendah</h2>
                <p class="text-lg text-gray-500 font-medium leading-relaxed uppercase tracking-wide text-sm">
                   Kami memimpin transisi industri menuju material berkelanjutan. Dengan Low Carbon Concrete, membantu pengembang mengurangi emisi karbon hingga 30% tanpa mengurangi kekuatan struktural.
                </p>
                <div class="space-y-4">
                   <div class="flex items-center gap-3">
                      <CheckCircle class="text-emerald-600 h-6 w-6" />
                      <span class="font-bold text-primary italic tracking-tight">Material tersertifikasi ramah lingkungan.</span>
                   </div>
                   <div class="flex items-center gap-3">
                      <CheckCircle class="text-emerald-600 h-6 w-6" />
                      <span class="font-bold text-primary italic tracking-tight">Pengurangan jejak karbon logistik dengan rute efisien.</span>
                   </div>
                </div>
                <button class="border-2 border-primary px-10 py-3 font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all">
                   Lihat Laporan ESG
                </button>
             </div>
             <div class="flex-1 w-full">
                <img 
                  src="https://sustainability.atmeta.com/wp-content/uploads/2024/12/concrete-hero-image.jpg?fit=1200%2C1200" 
                  class="aspect-square w-full object-cover rounded-2xl border-4 border-gray-100" 
                />
             </div>
          </div>
       </div>
    </section>
  </div>
</template>
