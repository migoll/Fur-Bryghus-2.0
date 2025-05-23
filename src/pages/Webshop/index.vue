<template>
  <div class="lg:flex">
    <div
      class="lg:w-56 lg:min-w-[16rem] bg-fur-blue text-fur-accent-bone px-4 py-2 sm:p-0"
    >
      <div
        class="flex lg:flex-col gap-6 overflow-x-auto p-0 lg:p-4 h-14 lg:h-auto whitespace-nowrap lg:whitespace-normal border-b lg:border-b-0"
      >
        <button
          @click="valgtSortering = null"
          :class="[
            'p-medium text-left lg:text-left transition-colors lg:p-big',
            valgtSortering === null ? 'font-bold' : 'font-normal',
          ]"
        >
          Alle produkter
        </button>
        <button
          v-for="s in sorteringer"
          :key="s.id"
          @click="valgtSortering = s.id"
          :class="[
            'p-medium text-left lg:text-left transition-colors lg:p-big',
            valgtSortering === s.id ? 'font-bold' : 'font-normal',
          ]"
        >
          {{ s.name }}
        </button>
      </div>
    </div>

    <!-- Product grid -->
    <div class="flex-1 max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
      >
        <NuxtLink
          v-for="product in sorteredeProdukter"
          :key="product.id"
          :to="`/webshop/${product.slug}`"
          class="p-4 mb-4 gap-4 hover:shadow-md transition justify-between flex flex-col"
        >
          <img
            v-if="imageUrl(product)"
            :src="imageUrl(product)"
            alt="Produktbillede"
            class="object-cover max-w-full max-h-[260px] mb-2 mx-auto"
          />
          <div class="flex flex-col">
            <h2 class="text-lg font-semibold">{{ product.title.rendered }}</h2>

            <!-- intro titel -->
            <p class="p-small text-gray-700 mb-2">
              {{ product.acf?.intro_titel || "Ingen beskrivelse tilgængelig" }}
            </p>
            <!-- tags -->
            <ProductTags :product="product" class="mt-2" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface Term {
  name: string;
}

interface Product {
  id: number;
  slug: string;
  title: { rendered: string };
  categories?: number[];
  acf: {
    billede?: { url?: string };
    billede1?: { url?: string };
    billede2?: { url?: string };
    pris?: {
      pris_6_stk?: string;
      pris_12_stk?: string;
    };
    intro_titel?: string;
    storrelse?: Term[];
    stilart?: Term[];
    size?: string;
    type?: string;
    category?: string;
    produkt_sortering?: Array<{ term_id: number }>;
  };
}

interface ProduktSortering {
  id: number;
  name: string;
  slug: string;
}

const { data } = await useFetch<Product[]>(
  "https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?per_page=100"
);

const { data: sorteringer } = await useFetch<ProduktSortering[]>(
  "https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/produkt-sortering?per_page=100"
);

const valgtSortering = ref<number | null>(null);

const sorteredeProdukter = computed(() =>
  (data.value || []).filter((produkt) => {
    if (!valgtSortering.value) return true;
    return produkt.acf?.produkt_sortering?.some(
      (term: any) => term.term_id === valgtSortering.value
    );
  })
);

function imageUrl(product: Product) {
  return (
    product.acf?.billede1?.url ||
    product.acf?.billede2?.url ||
    product.acf?.billede?.url ||
    ""
  );
}

const kategoriNavne: Record<number, string> = {
  3: "Beer",
  75: "Snaps",
  76: "Gaveæske",
};
</script>
