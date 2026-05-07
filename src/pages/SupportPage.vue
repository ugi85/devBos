<script setup lang="ts">
import { MessageSquare, Phone, Mail, HelpCircle, ArrowUpRight } from 'lucide-vue-next';

const faqs = [
  {
    q: "How fast is next-day delivery?",
    a: "Orders placed before 2:00 PM are guaranteed for next-day delivery across our service areas.",
  },
  {
    q: "Can I cancel a concrete order?",
    a: "Cancellations must be made at least 12 hours before the scheduled batching time to avoid disposal fees.",
  },
  {
    q: "Do you offer credit terms for contractors?",
    a: "Yes, we offer NET-30 terms for verified procurement partners. Apply via the Enterprise dashboard.",
  },
];
</script>

<template>
  <div class="bg-surface">
    <!-- Hero Section -->
    <section class="bg-primary px-6 py-24 text-center text-white">
      <div class="mx-auto max-w-3xl">
        <span class="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1 text-xs font-black uppercase tracking-widest text-secondary">
          Help Center
        </span>
        <h1 class="text-4xl font-black tracking-tighter md:text-6xl font-heading uppercase">
          WE'RE HERE TO KEEP YOUR PROJECT MOVING
        </h1>
        <p class="mt-6 text-lg text-gray-300 font-medium tracking-wide uppercase text-sm">
          Expert support for logistics, procurement, and technical specifications.
        </p>
      </div>
    </section>

    <div class="mx-auto -mt-12 max-w-7xl px-6 pb-24">
      <!-- Contact Grid -->
      <div class="grid gap-6 md:grid-cols-3">
        <div v-for="(item, i) in [
          { icon: MessageSquare, title: 'Live Chat', desc: 'Instant response from our logistics team', action: 'Start Chat', color: 'text-blue-500' },
          { icon: Phone, title: 'Phone Support', desc: 'Available 24/7 for active site emergencies', action: '+1 (800) BagusProject', color: 'text-green-500' },
          { icon: Mail, title: 'Email Assistance', desc: 'Technical documentation & billing queries', action: 'support@bagus.com', color: 'text-secondary' },
        ]" :key="i" class="rounded-2xl border border-outline-variant bg-white p-8 shadow-xl">
          <div :class="`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 ${item.color}`">
             <component :is="item.icon" class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-bold font-heading uppercase tracking-tight">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-gray-500 leading-relaxed font-medium">{{ item.desc }}</p>
          <button class="mt-6 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-secondary hover:underline">
            {{ item.action }} <ArrowUpRight class="h-4 w-4" />
          </button>
        </div>
      </div>

      <!-- FAQs -->
      <div class="mt-24 max-w-3xl mx-auto">
        <div class="mb-12 text-center">
          <HelpCircle class="mx-auto mb-4 h-12 w-12 text-secondary" />
          <h2 class="text-3xl font-black tracking-tighter font-heading uppercase">FREQUENTLY ASKED</h2>
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400">Fast answers for busy project managers</p>
        </div>

        <div class="space-y-4">
          <details
            v-for="(faq, i) in faqs"
            :key="i"
            class="group rounded-2xl border border-outline-variant bg-white p-6 transition-all hover:border-secondary"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between text-lg font-bold uppercase tracking-tight text-primary">
              {{ faq.q }}
              <span class="transition-transform group-open:rotate-180">
                <ArrowUpRight class="h-5 w-5 text-gray-400" />
              </span>
            </summary>
            <p class="mt-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4 font-medium">
              {{ faq.a }}
            </p>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>
