<template>
  <div v-if="produktData" class="p-4 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">{{ produktData.title.rendered }}</h1>

    <img
      v-if="imageUrl(produktData)"
      :src="imageUrl(produktData)"
      alt="Produktbillede"
      class="max-w-[300px] mb-4"
    />

    <p class="text-gray-700 mb-4" v-html="produktData.acf?.beskrivelse" />

    <div class="text-sm text-gray-600">
      <p v-if="produktData.acf?.pris?.pris_6_stk">
        6 stk: {{ produktData.acf.pris.pris_6_stk }},- dkk
      </p>
      <p v-if="produktData.acf?.pris?.pris_12_stk">
        12 stk: {{ produktData.acf.pris.pris_12_stk }},- dkk
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

interface Term {
  name: string;
}

interface Produkt {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: {
    billede?: { url?: string };
    billede1?: { url?: string };
    billede2?: { url?: string };
    beskrivelse?: string;
    pris?: {
      pris_6_stk?: string;
      pris_12_stk?: string;
    };
  };
}

const route = useRoute();
const slug = route.params.slug as string;

const { data: produkt } = await useFetch<Produkt[]>(
  `https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?slug=${slug}`
);

const produktData = computed(() => produkt.value?.[0]);

function imageUrl(product: Produkt) {
  return (
    product.acf?.billede?.url ||
    product.acf?.billede1?.url ||
    product.acf?.billede2?.url ||
    ""
  );
}
</script>
