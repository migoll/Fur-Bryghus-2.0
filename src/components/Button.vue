<template>
  <div class="ml-6 inline-block">
    <NuxtLink
      v-if="to"
      :to="to"
      class="group relative flex items-center justify-center gap-2 font-sans font-medium text-neutral-6 px-7 py-3 bg-fur-blue hover:bg-fur-accent-blue active:bg-[#1f3a52] focus-visible:outline outline-1 outline-black outline-offset-2"
    >
      <span class="text-lg">{{ label }}</span>
      <!--
      <span class="relative flex items-center justify-center w-[24px] h-[24px]">
        <img
          src="/images/header-arrow.svg"
          alt="arrow"
          class="transition-opacity duration-200 group-hover:opacity-0"
        />

        <span
          class="absolute opacity-0 group-hover:opacity-100 flex items-center gap-[2px] transition-opacity duration-200"
        >
          <img
            src="/images/header-arrow.svg"
            class="transition-all duration-300 -translate-x-[4px] group-hover:-translate-x-[8px]"
          />
          <img
            src="/images/header-arrow.svg"
            class="transition-opacity duration-300"
          />
          <img
            src="/images/header-arrow.svg"
            class="transition-all duration-300 translate-x-[4px] group-hover:translate-x-[8px]"
          />
        </span>
      </span>
-->
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
      <!--
      <span class="relative flex items-center justify-center w-[24px] h-[24px]">
        <img
          src="/images/header-arrow.svg"
          alt="arrow"
          class="transition-opacity duration-200 group-hover:opacity-0"
        />

        <span
          class="absolute opacity-0 group-hover:opacity-100 flex items-center gap-[2px] transition-opacity duration-200"
        >
          <img
            src="/images/header-arrow.svg"
            class="transition-all duration-300 -translate-x-[4px] group-hover:-translate-x-[8px]"
          />
          <img
            src="/images/header-arrow.svg"
            class="transition-opacity duration-300"
          />
          <img
            src="/images/header-arrow.svg"
            class="transition-all duration-300 translate-x-[4px] group-hover:translate-x-[8px]"
          />
        </span>
      </span>
      -->
      <!-- Fake drop shadow -->
      <span
        class="absolute -z-10 left-0 top-0 w-full h-full bg-fur-accent-beer opacity-0 group-hover:opacity-100 group-hover:-left-[6px] group-hover:top-[6px] group-active:-left-[8px] group-active:top-[8px] transition-all duration-200"
      ></span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  to?: string;
}>();
</script>
