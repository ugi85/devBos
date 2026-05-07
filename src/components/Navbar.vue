<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Search, ShoppingCart, User, Menu } from 'lucide-vue-next';

const route = useRoute();

const navLinks = [
  { name: "Categories", path: "/catalog" },
  { name: "Calculator", path: "/calculator" },
  { name: "Sustainability", path: "/about" },
  { name: "Order Tracking", path: "/track" },
  { name: "Support", path: "/support" },
];
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface/90 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
      <router-link to="/" class="flex items-center gap-2">
        <span class="text-2xl font-black uppercase tracking-tighter text-primary font-heading">
          SteelProcure
        </span>
      </router-link>

      <nav class="hidden items-center gap-8 lg:flex">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="relative py-1 text-sm font-semibold transition-colors hover:text-primary"
          :class="route.path === link.path ? 'text-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-secondary' : 'text-gray-500'"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <div class="flex items-center gap-4">
        <div class="hidden items-center rounded-full bg-gray-100 px-4 py-1.5 xl:flex">
          <Search class="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search materials..."
            class="bg-transparent px-2 text-sm outline-none placeholder:text-gray-400"
          />
        </div>
        <router-link to="/login" class="hidden text-sm font-bold text-primary hover:underline md:block">
          Login
        </router-link>
        <button class="rounded-lg bg-secondary px-5 py-2 text-sm font-bold text-primary shadow-sm transition-transform active:scale-95">
          Get Quote
        </button>
        <button class="lg:hidden text-primary">
          <Menu class="h-6 w-6" />
        </button>
      </div>
    </div>
  </header>
</template>
