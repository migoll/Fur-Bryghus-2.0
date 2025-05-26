<template>
  <NuxtLink
    :to="href"
    class="bg-fur-blue text-white w-48 flex flex-col items-center justify-center p-4 rounded-md hover:opacity-90 transition"
  >
    <img
      :src="image"
      alt="Dropdown entry image"
      class="w-full h-auto object-cover mb-4"
    />
    <span class="font-semibold text-center text-base">{{ title }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  href: string;
  image: string;
}>();
</script>
