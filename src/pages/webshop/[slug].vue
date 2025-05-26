<template>
  <div v-if="produktData" class="w-full mx-auto">
    <div class="flex flex-col lg:flex-row gap-8 lg:h-[80vh]">
      <div
        class="flex-1 flex flex-col justify-center items-center min-h-[300px] lg:min-h-[600px] p-4"
        :style="{
          backgroundColor: produktData.acf?.baggrundsfarve,
        }"
      >
        <img
          v-if="imageUrl(produktData)"
          :src="imageUrl(produktData)"
          alt="Produktbillede"
          class="max-w-full max-h-[300px] lg:max-h-[600px] object-contain mb-4"
        />
        <div class="md:hidden text-fur-accent-bone">
          <h1 class="mb-2 text-center">
            {{ produktData.title.rendered }}
          </h1>
          <ProductTags
            :product="produktData"
            :showAlcoholPercentage="true"
            class="mb-6 justify-center"
          />
        </div>
      </div>

      <div class="flex-1 flex flex-col p-4">
        <div class="flex flex-col md:flex-row lg:flex-col gap-8">
          <div class="flex-1 flex flex-col">
            <div class="hidden md:block">
              <h1 class="text-2xl font-bold mb-2">
                {{ produktData.title.rendered }}
              </h1>
              <ProductTags
                :product="produktData"
                :showAlcoholPercentage="true"
                class="mb-6"
              />
            </div>

            <div
              v-if="produktData.acf?.beskrivelse"
              class="space-y-4 mb-8 md:mb-0 lg:mb-8"
              v-html="produktData.acf.beskrivelse"
            />
          </div>
          <div class="flex flex-col md:w-72 lg:w-full">
            <div class="flex gap-4 mb-6">
              <Button
                :label="'6 STK'"
                @click="selectedQuantity = 6"
                :class="selectedQuantity === 6 ? 'bg-neutral-1 text-white' : ''"
              />
              <Button
                :label="'12 STK'"
                @click="selectedQuantity = 12"
                :class="
                  selectedQuantity === 12 ? 'bg-neutral-1 text-white' : ''
                "
              />
            </div>
            <div class="mb-6">
              <div
                v-if="
                  selectedQuantity === 6 && produktData.acf?.pris?.pris_6_stk
                "
                class="text-2xl font-medium"
              >
                kr. {{ produktData.acf.pris.pris_6_stk }},00
              </div>
              <div
                v-if="
                  selectedQuantity === 12 && produktData.acf?.pris?.pris_12_stk
                "
                class="text-2xl font-medium"
              >
                kr. {{ produktData.acf.pris.pris_12_stk }},00
              </div>
            </div>

            <Button label="Tilføj til kurv" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section v-if="produktData" class="bg-wood-texture">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 py-12">
      <div>
        <h2 class="font-anton text-3xl text-white mb-8">Specifikationer</h2>
        <div class="grid auto-rows-auto gap-y-6 text-fur-accent-bone">
          <div
            class="grid grid-cols-[120px,1fr] md:grid-cols-[160px,1fr] items-baseline"
          >
            <div class="font-anton uppercase text-base md:text-lg">
              Stilart/type:
            </div>
            <div class="text-base md:text-lg font-light">
              {{ produktData.acf?.stilart?.[0]?.name || "–" }}
            </div>
          </div>
          <div
            class="grid grid-cols-[120px,1fr] md:grid-cols-[160px,1fr] items-baseline"
          >
            <div class="font-anton uppercase text-base md:text-lg">
              Alkohol pct.:
            </div>
            <div class="text-base md:text-lg font-light">
              {{ produktData.acf?.alkoholprocent || "–" }}
            </div>
          </div>
          <div
            class="grid grid-cols-[120px,1fr] md:grid-cols-[160px,1fr] items-baseline"
          >
            <div class="font-anton uppercase text-base md:text-lg">
              Ingredienser:
            </div>
            <div class="text-base md:text-lg font-light">
              {{ produktData.acf?.ingredienser || "–" }}
            </div>
          </div>
          <div
            class="grid grid-cols-[120px,1fr] md:grid-cols-[160px,1fr] items-baseline"
          >
            <div class="font-anton uppercase text-base md:text-lg">
              Udseende:
            </div>
            <div class="text-base md:text-lg font-light">
              {{ produktData.acf?.udseende || "–" }}
            </div>
          </div>
          <div
            class="grid grid-cols-[120px,1fr] md:grid-cols-[160px,1fr] items-baseline"
          >
            <div class="font-anton uppercase text-base md:text-lg">
              Smagsnoter:
            </div>
            <div class="text-base md:text-lg font-light">
              {{ produktData.acf?.smagsnoter || "–" }}
            </div>
          </div>
          <div
            class="grid grid-cols-[120px,1fr] md:grid-cols-[160px,1fr] items-baseline"
          >
            <div class="font-anton uppercase text-base md:text-lg">
              Humletype:
            </div>
            <div class="text-base md:text-lg font-light">
              {{ produktData.acf?.humle_type || "–" }}
            </div>
          </div>
          <div
            class="grid grid-cols-[120px,1fr] md:grid-cols-[160px,1fr] items-baseline"
          >
            <div class="font-anton uppercase text-base md:text-lg">
              Gærtype:
            </div>
            <div class="text-base md:text-lg font-light">
              {{ produktData.acf?.gaer_type || "–" }}
            </div>
          </div>
          <div
            class="grid grid-cols-[120px,1fr] md:grid-cols-[160px,1fr] items-baseline"
          >
            <div class="font-anton uppercase text-base md:text-lg">
              Flaskestørrelse:
            </div>
            <div class="text-base md:text-lg font-light">
              {{ produktData.acf?.storrelse?.[0]?.name || "–" }}
            </div>
          </div>
        </div>
        <a
          href="#"
          class="text-fur-accent-bone text-sm underline mt-8 inline-block hover:text-white transition-colors"
        >
          Se næringsindhold
        </a>
      </div>
      <div>
        <h2 class="font-anton text-3xl text-white mb-6">Serveringsforslag</h2>
        <div class="space-y-8 text-fur-accent-bone">
          <div class="flex items-start gap-4">
            <img
              v-if="produktData.acf?.forret?.forret_billede"
              :src="produktData.acf.forret.forret_billede"
              alt="Forret"
              class="w-20 h-20 rounded-full object-cover border-2 border-fur-bone/20"
            />
            <div>
              <strong class="block mb-2 text-white font-anton uppercase text-xl"
                >Forret</strong
              >
              <p class="text-base md:text-lg font-light">
                {{ produktData.acf?.forret?.forret_beskrivelse || "–" }}
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <img
              v-if="produktData.acf?.hovedret?.hovedret_billede"
              :src="produktData.acf.hovedret.hovedret_billede"
              alt="Hovedret"
              class="w-20 h-20 rounded-full object-cover border-2 border-fur-bone/20"
            />
            <div>
              <strong class="block mb-2 text-white font-anton uppercase text-xl"
                >Hovedret</strong
              >
              <p class="text-base md:text-lg font-light">
                {{ produktData.acf?.hovedret?.hovedret_beskrivelse || "–" }}
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <img
              v-if="produktData.acf?.dessert?.dessert_billede"
              :src="produktData.acf.dessert.dessert_billede"
              alt="Dessert"
              class="w-20 h-20 rounded-full object-cover border-2 border-fur-bone/20"
            />
            <div>
              <strong class="block mb-2 text-white font-anton uppercase text-xl"
                >Dessert</strong
              >
              <p class="text-base md:text-lg font-light">
                {{ produktData.acf?.dessert?.dessert_beskrivelse || "–" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import Button from "~/components/Button.vue";

interface Term {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
}

interface Produkt {
  id: number;
  slug: string;
  title: { rendered: string };
  categories?: number[];
  acf: {
    navn?: string;
    intro_titel?: string;
    beskrivelse?: string;
    billede1?: {
      url: string;
    };
    billede2?: {
      url: string;
    };
    pris?: {
      pris_6_stk?: string;
      pris_12_stk?: string;
    };
    storrelse?: Term[];
    stilart?: Term[];
    alkoholprocent?: string;
    ingredienser?: string;
    udseende?: string;
    smagsnoter?: string;
    humle_type?: string;
    gaer_type?: string;
    forret?: {
      forret_billede: string;
      forret_beskrivelse: string;
    };
    hovedret?: {
      hovedret_billede: string;
      hovedret_beskrivelse: string;
    };
    dessert?: {
      dessert_billede: string;
      dessert_beskrivelse: string;
    };
    baggrundsfarve?: string;
  };
}

const route = useRoute();
const slug = route.params.slug as string;

const { data: produkt, error } = await useFetch<Produkt[]>(
  `https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?slug=${slug}`,
  {
    onResponse({ response }) {
      console.log("API Response:", response._data);
    },
    onResponseError({ response }) {
      console.error("API Error:", response._data);
    },
  }
);

const produktData = computed(() => {
  const data = produkt.value?.[0];
  console.log("Current product data:", data);
  if (!data) {
    console.error("No product data found for slug:", slug);
  } else {
    console.log("Product specs:", {
      stilart: data.acf?.stilart?.[0]?.name,
      alkoholprocent: data.acf?.alkoholprocent,
      ingredienser: data.acf?.ingredienser,
      udseende: data.acf?.udseende,
      smagsnoter: data.acf?.smagsnoter,
      humle_type: data.acf?.humle_type,
      gaer_type: data.acf?.gaer_type,
      storrelse: data.acf?.storrelse?.[0]?.name,
    });
  }
  return data;
});

const selectedQuantity = ref(6);

const splitDescription = computed(() => {
  if (!produktData.value?.acf?.beskrivelse) return [];
  return produktData.value.acf.beskrivelse
    .split("\n")
    .filter((p) => p.trim() !== "");
});

function imageUrl(product: Produkt) {
  return product.acf?.billede1?.url || product.acf?.billede2?.url || "";
}
</script>
