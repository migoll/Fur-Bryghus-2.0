<template>
  <div class="inline-block group overflow-visible">
    <NuxtLink
      v-if="to"
      :to="to"
      :target="openInNewTab ? '_blank' : '_self'"
      :class="[
        'inline-flex items-center justify-center gap-2 font-sans font-medium text-neutral-6 px-7 py-3 bg-fur-blue hover:bg-fur-accent-blue active:bg-[#1f3a52] focus-visible:outline outline-1 outline-black outline-offset-2 transition duration-200 shadow-none hover:shadow-[-6px_6px_0_0_rgba(200,151,104,1)] active:hover:shadow-[-6px_6px_0_0_rgba(200,151,104,1)] scroll-fade',
        $attrs.class,
      ]"
      v-bind="filteredAttrs"
    >
      <span class="text-lg">{{ label }}</span>

      <img
        v-if="isPdf"
        src="@/assets/icons/pdf.svg"
        alt="PDF icon"
        class="w-5 h-5"
      />

      <span class="w-6 h-6 arrow">
        <img :src="arrow" alt="arrow" />
      </span>
    </NuxtLink>

    <button
      v-else
      :class="[
        'inline-flex items-center justify-center gap-2 font-sans font-medium text-neutral-6 px-7 py-3 bg-fur-blue hover:bg-fur-accent-blue active:bg-[#1f3a52] focus-visible:outline outline-1 outline-black outline-offset-2 transition duration-200 shadow-none hover:shadow-[-6px_6px_0_0_rgba(200,151,104,1)] active:hover:shadow-[-6px_6px_0_0_rgba(200,151,104,1)] scroll-fade',
        $attrs.class,
      ]"
      v-bind="filteredAttrs"
    >
      <span class="text-lg">{{ label }}</span>

      <img
        v-if="isPdf"
        src="@/assets/icons/pdf.svg"
        alt="PDF icon"
        class="w-5 h-5"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  to?: string;
  openInNewTab?: boolean;
  isPdf?: boolean;
}>();

import { useAttrs, computed } from "vue";
import arrow from "@/assets/icons/buttonArrow.svg";

const attrs = useAttrs();

// Fjerner 'class' fra $attrs når vi allerede har håndteret den manuelt
const filteredAttrs = computed(() => {
  const { class: _ignored, ...rest } = attrs;
  return rest;
});
</script>

<style>
.group .arrow {
  transition: 0.3s ease-in-out;
}
.group:hover .arrow {
  transform: translateX(5px);
}
</style>
