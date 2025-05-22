<template>
  <div
    v-if="filteredProducts.length"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4"
  >
    <div
      v-for="product in filteredProducts"
      :key="product.id"
      class="border-2 p-4"
    >
      <img
        v-if="product.acf?.billede1?.url"
        :src="product.acf.billede1.url"
        alt="Produktbillede"
        class="object-cover max-w-[200px] max-h-[200px] mb-2 mx-auto"
      />

      <h2 class="text-lg font-semibold">{{ product.title.rendered }}</h2>

      <p class="text-gray-700 mb-2 text-sm">
        <span v-if="product.acf?.pris?.pris_6_stk">
          6 stk: {{ product.acf.pris.pris_6_stk }},- dkk<br />
        </span>
        <span v-if="product.acf?.pris?.pris_12_stk">
          12 stk: {{ product.acf.pris.pris_12_stk }},- dkk
        </span>
        <span v-if="!product.acf?.pris">Pris ukendt</span>
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-if="product.acf?.size"
          class="border px-2 py-1 text-xs rounded-full"
        >
          {{ product.acf.size }}
        </span>
        <span
          v-if="product.acf?.type"
          class="border px-2 py-1 text-xs rounded-full"
        >
          {{ product.acf.type }}
        </span>
        <span
          v-if="
            !product.acf?.size && !product.acf?.type && product.acf?.category
          "
          class="border px-2 py-1 text-xs rounded-full"
        >
          {{ product.acf.category }}
        </span>
      </div>
    </div>
  </div>
  <div v-else>Indlæser produkter...</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Product {
  id: number;
  title: { rendered: string };
  categories?: number[];
  acf: {
    billede1?: { url?: string };
    pris?: {
      pris_6_stk?: string;
      pris_12_stk?: string;
    };
    size?: string;
    type?: string;
    category?: string;
  };
}

// Tilladte WordPress kategori-ID'er
const allowedCategoryIds = [3, 75, 76];

const { data, error } = await useFetch<Product[]>(
  "https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?per_page=100"
);

// Filtrér på WP kategori-ID'er
const filteredProducts = computed(() =>
  (data.value || []).filter((product) =>
    product.categories?.some((id) => allowedCategoryIds.includes(id))
  )
);
</script>
