<template>
  <Hero
    heroHeading="Vores produkter"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Bryggeriet"
  />
  <div class="lg:flex">
    <div
      class="lg:w-56 lg:min-w-[16rem] bg-fur-blue text-fur-accent-bone px-4 py-2 sm:p-0 lg:sticky lg:top-0 lg:h-screen"
    >
      <div
        class="flex lg:flex-col gap-6 overflow-x-auto p-0 lg:p-4 lg:h-auto whitespace-nowrap lg:whitespace-normal border-b lg:border-b-0"
      >
        <button
          @click="valgtSortering = null"
          :class="[
            'font-anton text-[30px] text-center p-4 flex-shrink-0 transition-colors',
            valgtSortering === null
              ? 'bg-fur-accent-blue text-neutral-6'
              : 'hover:bg-fur-brown text-neutral-6',
          ]"
        >
          Alle produkter
        </button>

        <button
          v-for="s in sorteringer"
          :key="s.id"
          @click="valgtSortering = s.id"
          :class="[
            'font-anton text-[30px] text-center p-4 flex-shrink-0 transition-colors',
            valgtSortering === s.id
              ? 'bg-fur-accent-blue text-neutral-6'
              : 'hover:bg-fur-brown text-neutral-6',
          ]"
        >
          {{ s.name }}
        </button>
      </div>
    </div>

    <div class="flex-1 max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
      >
        <NuxtLink
          v-for="product in paginated"
          :key="product.id"
          :to="`/webshop/${product.slug}`"
          class="relative p-4 mb-4 gap-4 transition justify-between flex flex-col overflow-hidden group"
        >
          <div
            class="relative w-full flex justify-center overflow-hidden min-h-[260px]"
          >
            <div
              v-if="product.acf?.baggrundsfarve"
              class="absolute rounded-full z-0 transition-transform duration-700 ease-in-out group-hover:scale-[3] translate-x-[-50%] translate-y-[-50%]"
              :style="{
                backgroundColor: product.acf.baggrundsfarve,
                width: '200px',
                height: '200px',
                top: '50%',
                left: '50%',
              }"
            ></div>

            <img
              v-if="imageUrl(product)"
              :src="imageUrl(product)"
              :alt="`Billede af ${product.title.rendered} fra Fur Bryghus`"
              class="relative z-10 object-cover max-h-[260px] mb-2"
            />
          </div>

          <div class="flex flex-col relative z-10">
            <h2 class="text-4xl">
              {{ product.title.rendered }}
            </h2>
            <p class="p-small text-gray-700 mb-2">
              {{ product.acf?.intro_titel || "Ingen beskrivelse tilgængelig" }}
            </p>
            <ProductTags :product="product" class="mt-2" />
          </div>
        </NuxtLink>
      </div>

      <ProduktPagination
        v-if="sorteredeProdukter.length > itemsPerPage"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @next="nextPage"
        @prev="prevPage"
      />
    </div>
  </div>
  <FocusedEntryPoints
    :entries="['Vores historie', 'Bryggeprocessen', 'Gardbutik']"
  />
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import ProduktPagination from "~/components/ProduktPagination.vue";

import heroImageMobile from "@/assets/images/desktop/vores-produkter-hero.webp";
import heroImageDesktop from "@/assets/images/desktop/vores-produkter-hero.webp";

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
    produkt_sortering?: Array<{ term_id: number }>;
    baggrundsfarve?: string;
  };
}

interface ProduktSortering {
  id: number;
  name: string;
  slug: string;
}

const hoveredProductId = ref<number | null>(null);

const { data } = await useFetch<Product[]>(
  "https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?per_page=100"
);

// Henter data til alle sorteringsrmuligheder (vores taksonomier) for produkterne
const { data: sorteringer } = await useFetch<ProduktSortering[]>(
  "https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/produkt-sortering?per_page=100"
);

const valgtSortering = ref<number | null>(null);
// Liste over kategorier der skal vises i webshoppen
const tilladteKategoriIds = [3, 76, 75];

//Filtrerede produkter baseret på tilladte kategorier
const filtreredeProdukter = computed(() =>
  (data.value || []).filter((produkt) =>
    produkt.categories?.some((id) => tilladteKategoriIds.includes(id))
  )
);

// sorterer produkterne baseret på specifik valgt sortering
const sorteredeProdukter = computed(() => {
  const produkter = filtreredeProdukter.value;
  const filtreret = valgtSortering.value
    ? produkter.filter((produkt) =>
        produkt.acf?.produkt_sortering?.some(
          (term) => term.term_id === valgtSortering.value
        )
      )
    : produkter;

  //sorter produkterne i samme rækkefølge som kategori ID, så vi får de vigtigste først
  return filtreret.sort((a, b) => {
    const aIndex = tilladteKategoriIds.findIndex((id) =>
      a.categories?.includes(id)
    );
    const bIndex = tilladteKategoriIds.findIndex((id) =>
      b.categories?.includes(id)
    );
    return aIndex - bIndex;
  });
});

function imageUrl(product: Product) {
  return (
    product.acf?.billede1?.url ||
    product.acf?.billede2?.url ||
    product.acf?.billede?.url ||
    ""
  );
}

const itemsPerPage = 9;
const currentPage = ref(0);

const paginated = computed(() => {
  const start = currentPage.value * itemsPerPage;
  return sorteredeProdukter.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() =>
  Math.ceil(sorteredeProdukter.value.length / itemsPerPage)
);

function nextPage() {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
}

watch(valgtSortering, () => {
  currentPage.value = 0;
});
</script>
