<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    <NuxtLink
      v-for="product in filteredProducts"
      :key="product.id"
      :to="`/webshop/${product.slug}`"
      class="border-2 p-4 block hover:shadow-md transition"
    >
      <img
        v-if="imageUrl(product)"
        :src="imageUrl(product)"
        alt="Produktbillede"
        class="object-cover max-w-[200px] max-h-[200px] mb-2 mx-auto"
      />

      <h2 class="text-lg font-semibold">{{ product.title.rendered }}</h2>

      <!-- pris -->
      <p class="text-gray-700 mb-2 text-sm">
        <span v-if="product.acf?.pris?.pris_6_stk">
          6 stk: {{ product.acf.pris.pris_6_stk }},- dkk<br />
        </span>
        <span v-if="product.acf?.pris?.pris_12_stk">
          12 stk: {{ product.acf.pris.pris_12_stk }},- dkk
        </span>
        <span v-if="!product.acf?.pris">Pris ukendt</span>
      </p>

      <!-- tags -->
      <div class="flex flex-wrap gap-2 mt-2">
        <span
          v-if="product.acf?.storrelse?.length"
          class="border px-2 py-1 text-xs rounded-full"
        >
          {{ product.acf.storrelse[0].name }}
        </span>

        <span
          v-if="product.acf?.stilart?.length"
          class="border px-2 py-1 text-xs rounded-full"
        >
          {{ product.acf.stilart[0].name }}
        </span>

        <span
          v-if="
            !product.acf?.storrelse?.length &&
            !product.acf?.stilart?.length &&
            product.categories?.length
          "
          class="border px-2 py-1 text-xs rounded-full"
        >
          {{
            kategoriNavne[
              product.categories.find((id) =>
                allowedCategoryIds.includes(id)
              ) ?? 0
            ]
          }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

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
    storrelse?: Term[];
    stilart?: Term[];
    size?: string;
    type?: string;
    category?: string;
  };
}

const allowedCategoryIds = [3, 75, 76];

// Defineren af hvilke navne der skal vises for de forskellige kategorier
const kategoriNavne: Record<number, string> = {
  3: "Beer",
  75: "Snaps",
  76: "Gaveæske",
};

const { data } = await useFetch<Product[]>(
  "https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?per_page=100"
);

const filteredProducts = computed(() =>
  (data.value || []).filter((product) =>
    product.categories?.some((id) => allowedCategoryIds.includes(id))
  )
);

function imageUrl(product: Product) {
  return (
    product.acf?.billede1?.url ||
    product.acf?.billede2?.url ||
    product.acf?.billede?.url ||
    ""
  );
}
</script>
