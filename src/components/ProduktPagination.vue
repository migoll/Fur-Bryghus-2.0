<!-- components/ProduktPagination.vue -->
<template>
  <div class="flex items-center justify-center gap-4 mt-8">
    <button
      @click="$emit('prev')"
      :disabled="currentPage === 0"
      class="text-lg px-3 py-1 rounded hover:bg-neutral-200 disabled:opacity-40"
    >
      ←
    </button>
    <div class="flex gap-2">
      <span
        v-for="(dot, index) in totalPages"
        :key="index"
        class="w-3 h-3 rounded-full transition-all"
        :class="[index === currentPage ? 'bg-neutral-4' : 'bg-neutral-2']"
      />
    </div>
    <button
      @click="$emit('next')"
      :disabled="currentPage === totalPages - 1"
      class="text-lg px-3 py-1 rounded hover:bg-neutral-200 disabled:opacity-40"
    >
      →
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number;
  totalPages: number;
}>();

defineEmits<{
  (e: "next"): void;
  (e: "prev"): void;
}>();
</script>
