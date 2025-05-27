<template>
  <div class="inline-block">
    <NuxtLink
      v-if="to"
      :to="to"
      :target="openInNewTab ? '_blank' : '_self'"
      class="group relative flex items-center justify-center gap-2 font-sans font-medium text-neutral-6 px-7 py-3 bg-fur-blue hover:bg-fur-accent-blue active:bg-[#1f3a52] focus-visible:outline outline-1 outline-black outline-offset-2"
    >
      <span class="text-lg">{{ label }}</span>

      <img
        v-if="isPdf"
        src="@/assets/icons/pdf.svg"
        alt="PDF icon"
        class="w-5 h-5"
      />

      <span class="relative flex items-center justify-center w-[24px] h-[24px]">
        <img
          :src="arrow"
          alt="arrow"
        />
      </span>

      <!-- Fake drop shadow -->
      <span
        class="absolute -z-10 left-0 top-0 w-full h-full bg-fur-accent-beer opacity-0 group-hover:opacity-100 group-hover:-left-[6px] group-hover:top-[6px] group-active:-left-[8px] group-active:top-[8px] transition-all duration-200"
      ></span>
    </NuxtLink>

    <button
      v-else
      class="group relative flex items-center justify-center gap-2 font-sans font-medium text-neutral-6 px-7 py-3 bg-fur-blue hover:bg-fur-accent-blue active:bg-[#1f3a52] focus-visible:outline outline-1 outline-black outline-offset-2"
    >
      <span class="text-lg">{{ label }}</span>

      <img
        v-if="isPdf"
        src="@/assets/icons/pdf.svg"
        alt="PDF icon"
        class="w-5 h-5"
      />
     
      <!-- Fake drop shadow -->
      <span
        class="absolute -z-10 left-0 top-0 w-full h-full bg-fur-accent-beer opacity-0 group-hover:opacity-100 group-hover:-left-[6px] group-hover:top-[6px] group-active:-left-[8px] group-active:top-[8px] transition-all duration-200"
      ></span>
    </button>
  </div>
</template>

<script setup lang="ts">
// Button skal have en label, og kan en to prop til at navigere til en anden side
defineProps<{
  label: string;
  to?: string;
  openInNewTab?: boolean; 
  isPdf?: boolean;
}>();

import arrow from '@/assets/icons/buttonArrow.svg'
</script>
