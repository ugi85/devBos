<script setup lang="ts">
import { ref } from 'vue';
import { Search, Filter, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-vue-next';

interface Product {
  id: number | string;
  name: string;
  category: string;
  price: number | null;
  unit: string;
  description: string;
  specs: Record<string, string>;
  image: string;
}

const categories = [
  "Besi & Baja",
  "Semen & Beton",
  "Material Atap",
  "Precast & Paving",
];

const products: Product[] = [
  {
    id: 1,
    name: "Semen Portland Komposit",
    category: "Semen & Beton",
    price: 68500,
    unit: "Sak",
    description: "Material dasar beton dengan ketahanan tinggi terhadap korosi sulfat. Cocok untuk bangunan tinggi.",
    specs: { Standar: "SNI 7064:2014", Berat: "50 kg" },
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Besi Beton Polos TP 240",
    category: "Besi & Baja",
    price: null,
    unit: "Meter",
    description: "Baja tulangan beton berkualitas tinggi untuk penguatan struktur bangunan dan jembatan.",
    specs: { Diameter: "12 mm", Panjang: "12 m" },
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadc0e2?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ready-Mix Concrete K-300",
    category: "Semen & Beton",
    price: 890000,
    unit: "m³",
    description: "Beton siap pakai dengan kuat tekan 300 kg/cm2. Volume presisi dan pengiriman tepat waktu.",
    specs: { Slump: "12 ± 2 cm", Layanan: "Pump Service" },
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Paving Block Hexagon 6cm",
    category: "Precast & Paving",
    price: 125000,
    unit: "m²",
    description: "Paving block berkualitas tinggi untuk area parkir, trotoar, dan jalan lingkungan perumahan.",
    specs: { Kekuatan: "K-250", Warna: "Abu, Merah" },
    image: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Atap Galvalum Spandek 0.35",
    category: "Material Atap",
    price: 54000,
    unit: "m'",
    description: "Atap baja ringan dengan lapisan pelindung karat. Sangat ringan namun kokoh untuk gudang.",
    specs: { Tebal: "0.35 mm", Lebar: "1000 mm" },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Baja Profil H-Beam 150",
    category: "Besi & Baja",
    price: null,
    unit: "Sheet",
    description: "Baja struktural untuk konstruksi rangka utama bangunan, tiang pancang, dan struktur berat.",
    specs: { Grade: "SS400 / ASTM", Asal: "Eks-Import" },
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
  },
];

const selectedCategories = ref<string[]>(["Semen & Beton"]);

const toggleCategory = (cat: string) => {
  if (selectedCategories.value.includes(cat)) {
    selectedCategories.value = selectedCategories.value.filter(c => c !== cat);
  } else {
    selectedCategories.value.push(cat);
  }
};
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-12">
    <div class="mb-12">
      <nav class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
         <router-link to="/" class="hover:text-primary">Beranda</router-link>
         <ChevronRight class="h-3 w-3" />
         <span class="text-primary">Katalog Material</span>
      </nav>
      <h1 class="mt-4 text-4xl font-black uppercase text-primary tracking-tighter">Katalog Material Konstruksi</h1>
      <p class="mt-2 max-w-2xl text-gray-500 font-medium uppercase tracking-wide text-sm">Solusi pengadaan material konstruksi berkualitas tinggi dengan standar SNI untuk kebutuhan infrastruktur dan manufaktur Anda.</p>
    </div>

    <div class="flex flex-col gap-8 lg:flex-row">
      <!-- Sidebar Filters -->
      <aside class="w-full shrink-0 lg:w-72">
        <div class="sticky top-24 space-y-8 rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
          <div class="flex items-center justify-between">
             <h3 class="text-lg font-bold uppercase text-primary">Filter Produk</h3>
             <Filter class="h-5 w-5 text-gray-400" />
          </div>
          
          <div>
            <h4 class="mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Kategori</h4>
            <div class="space-y-3">
              <label v-for="cat in categories" :key="cat" class="flex cursor-pointer items-center gap-3">
                <input 
                  type="checkbox" 
                  class="h-5 w-5 rounded border-gray-300 text-secondary focus:ring-secondary"
                  :checked="selectedCategories.includes(cat)"
                  @change="toggleCategory(cat)"
                />
                <span class="text-sm font-medium text-gray-600">{{ cat }}</span>
              </label>
            </div>
          </div>

          <div class="pt-6">
             <h4 class="mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Rentang Harga</h4>
             <input type="range" class="w-full accent-secondary" />
             <div class="mt-2 flex justify-between text-[10px] font-bold text-gray-400 uppercase">
               <span>Rp 0</span>
               <span>Rp 50jt+</span>
             </div>
          </div>

          <button class="w-full bg-primary py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-gray-800">
             Terapkan Filter
          </button>
        </div>
      </aside>

      <!-- Product Grid -->
      <div class="flex-1">
         <div class="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p class="text-sm text-gray-500 font-medium">Menampilkan <span class="text-primary font-black">1-12</span> dari <span class="text-primary font-black">48</span> material</p>
            <div class="flex items-center gap-4">
               <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Urutkan:</span>
               <select class="border border-outline-variant bg-white px-4 py-2 text-xs font-bold outline-none focus:border-secondary">
                  <option>Paling Populer</option>
                  <option>Harga Rendah-Tinggi</option>
                  <option>Harga Tinggi-Rendah</option>
               </select>
            </div>
         </div>

         <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <router-link 
              v-for="product in products" 
              :key="product.id" 
              :to="`/product/${product.id}`" 
              class="group flex flex-col overflow-hidden rounded-xl border border-outline-variant bg-white transition-shadow hover:shadow-xl font-sans"
            >
               <div class="relative h-48 overflow-hidden">
                  <img :src="product.image" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div class="absolute left-4 top-4 bg-primary px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-white">{{ product.category }}</div>
               </div>
               <div class="flex flex-1 flex-col p-6">
                  <h3 class="text-lg font-bold text-primary uppercase tracking-tight">{{ product.name }}</h3>
                  <p class="mt-2 text-xs font-medium leading-relaxed text-gray-500 line-clamp-2">{{ product.description }}</p>
                  
                  <div class="mt-6 grid grid-cols-2 gap-4">
                     <div v-for="(val, key) in product.specs" :key="key" class="rounded-lg bg-gray-100 p-2 text-center border border-gray-200">
                        <span class="block text-[8px] font-black uppercase tracking-widest text-gray-400">{{ key }}</span>
                        <span class="text-[10px] font-bold text-primary">{{ val }}</span>
                     </div>
                  </div>

                  <div class="mt-auto pt-6 flex items-center justify-between">
                     <div>
                        <span class="block text-[8px] font-black uppercase tracking-widest text-gray-400">{{ product.price ? "Estimated Price" : "Unit Price" }}</span>
                        <span class="text-lg font-black text-primary">
                           {{ product.price ? `Rp ${product.price.toLocaleString("id-ID")}` : "Contact Sales" }}
                        </span>
                     </div>
                     <div class="rounded-lg bg-secondary p-3 text-primary shadow-sm transition-transform active:scale-95">
                       <ShoppingCart class="h-5 w-5" />
                     </div>
                  </div>
               </div>
            </router-link>
         </div>

         <!-- Pagination -->
         <div class="mt-12 flex justify-center">
            <nav class="flex items-center gap-2">
               <button class="flex h-10 w-10 items-center justify-center rounded border border-outline-variant hover:bg-gray-100"><ChevronLeft class="h-4 w-4" /></button>
               <button class="flex h-10 w-10 items-center justify-center rounded bg-primary font-bold text-white">1</button>
               <button class="flex h-10 w-10 items-center justify-center rounded border border-outline-variant hover:bg-gray-100">2</button>
               <button class="flex h-10 w-10 items-center justify-center rounded border border-outline-variant hover:bg-gray-100">3</button>
               <span class="px-2 text-gray-400">...</span>
               <button class="flex h-10 w-10 items-center justify-center rounded border border-outline-variant hover:bg-gray-100">8</button>
               <button class="flex h-10 w-10 items-center justify-center rounded border border-outline-variant hover:bg-gray-100"><ChevronRight class="h-4 w-4" /></button>
            </nav>
         </div>
      </div>
    </div>
    
    <!-- Visual Stats Row -->
    <div class="mt-24 grid grid-cols-2 gap-8 border-y border-outline-variant py-12 md:grid-cols-4 text-center">
       <div>
          <span class="block text-3xl font-black text-secondary uppercase tracking-tighter">500+</span>
          <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Proyek Selesai</span>
       </div>
       <div>
          <span class="block text-3xl font-black text-secondary uppercase tracking-tighter">120k</span>
          <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Ton Material</span>
       </div>
       <div>
          <span class="block text-3xl font-black text-secondary uppercase tracking-tighter">24/7</span>
          <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Support Logistik</span>
       </div>
       <div>
          <span class="block text-3xl font-black text-secondary uppercase tracking-tighter">100%</span>
          <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Akurasi Volume</span>
       </div>
    </div>
  </div>
</template>
