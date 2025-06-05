<template>
  <div class="inline-block group overflow-visible">
    <!-- hvis der er en "to" brug denne knap, der bruger nuxtlink. v-bind der fjerner class fra attributes, så der ikke er conflict med tailwindd -->
    <NuxtLink
      v-if="to"
      :to="to"
      :target="openInNewTab ? '_blank' : '_self'"
      :class="[baseClasses, $attrs.class]"
      v-bind="filteredAttrs"
    >
      <span class="text-lg">{{ label }}</span>

      <!-- hvis isPdf er true, viser den pdf ikonet -->
      <img
        v-if="isPdf"
        src="@/assets/icons/pdf.svg"
        alt="PDF icon"
        class="w-5 h-5"
      />

      <!-- pil der altid vises -->
      <span class="w-6 h-6 arrow">
        <img :src="arrow" alt="arrow" />
      </span>
    </NuxtLink>

      <!-- hvis ikke der er  `to`, vis en knap med samme styling og attributter (undtagen class) -->
     <button v-else :class="[baseClasses, $attrs.class]" v-bind="filteredAttrs">
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
const props = defineProps<{
  label: string;
  to?: string;
  openInNewTab?: boolean;
  isPdf?: boolean;
  isNeutral?: boolean;
}>();

import { useAttrs, computed } from "vue";
import arrow from "@/assets/icons/buttonArrow.svg";

const attrs = useAttrs();

/* fjerner class fra attributes for at undgrå konlikt med tailwind  */
const filteredAttrs = computed(() => {
  const { class: _ignored, ...rest } = attrs;
  return rest;
});

/* Beregner styling for både link og button, og skiftr mellem neutral og farvet version baseret på isNeutral prop  */
const baseClasses = computed(() =>
  [
    "inline-flex items-center justify-center gap-2 font-sans font-medium px-7 py-3 focus-visible:outline outline-1 outline-black outline-offset-2 transition duration-200 shadow-none scroll-fade",
    props.isNeutral
      ? "bg-neutral-6 text-neutral-1 hover:bg-neutral-5 active:bg-neutral-5 hover:shadow-[-6px_6px_0_0_rgba(200,151,104,1)] active:hover:shadow-[-6px_6px_0_0_rgba(200,151,104,1)]"
      : "bg-fur-blue text-neutral-6 hover:bg-fur-accent-blue active:bg-[#1f3a52] hover:shadow-[-6px_6px_0_0_rgba(200,151,104,1)] active:hover:shadow-[-6px_6px_0_0_rgba(200,151,104,1)]",
  ].join(" ")
);
</script>

<style scoped>
/* animerer arrow på knappen */
.group .arrow {
  transition: 0.3s ease-in-out;
}
.group:hover .arrow {
  transform: translateX(5px);
}
</style>
