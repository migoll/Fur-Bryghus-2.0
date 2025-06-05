<template>
  <div v-if="produktData" class="w-full mx-auto">
    <div class="flex flex-col lg:flex-row gap-8 lg:min-h-[80vh]">
      <div
        class="flex-1 flex flex-col justify-center items-center min-h-[300px] lg:min-h-[600px] p-4 py-16 lg:py-0"
        :style="{
          backgroundColor: produktData.acf?.baggrundsfarve,
        }"
      >
        <img
          v-if="imageUrl(produktData)"
          :src="imageUrl(produktData)"
          :alt="`Billede af ${produktData.title.rendered} fra Fur Bryghus`"
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

      <div class="flex-1 flex flex-col p-4 my-auto">
        <div class="flex flex-col lg:flex-col gap-8">
          <div class="flex-1 flex flex-col">
            <div class="hidden md:block">
              <h1 class="font-bold mb-2 scroll-fade">
                {{ produktData.title.rendered }}
              </h1>
              <ProductTags
                :product="produktData"
                :showAlcoholPercentage="true"
                class="mb-6 scroll-fade"
              />
            </div>

            <div
              v-if="produktData.acf?.beskrivelse"

              class="space-y-4 mb-8 md:mb-0 lg:mb-8 scroll-fade"

              v-html="produktData.acf.beskrivelse"
            />
            <NuxtLink to="/bryggeriet/forhandlere">
              <p class="underline">Se forhandlere</p></NuxtLink
            >
          </div>

          <div class="flex flex-col md:w-72 lg:w-full">
            <div class="flex gap-4 mb-6">
              <div
                @click="selectedQuantity = 6"
                :class="selectedQuantity !== 6 ? 'opacity-70' : ''"
              >
                <Button label="6 STK" />
              </div>

              <div
                @click="selectedQuantity = 12"
                :class="selectedQuantity !== 12 ? 'opacity-70' : ''"
              >
                <Button label="12 STK" />
              </div>
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

            <Button label="Tilføj til kurv" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section v-if="produktData" class="bg-wood-texture">
    <div class="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 py-12">
      <div>
        <h2 class="text-h2 md:text-h2-md font-anton text-white mb-8">
          Specifikationer
        </h2>
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
        <h2 class="text-h2 md:text-h2-md font-anton text-white mb-6">
          Serveringsforslag
        </h2>
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
  <FocusedEntryPoints
    :entries="['Vores-produkter', 'Bryggeprocessen', 'Gardbutik']"
  />
</template>

<script setup lang="ts">

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
    billede?: {
      url: string;
    };
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

const { data: produkt } = await useFetch<Produkt[]>(
  `https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?slug=${slug}`,
  {}
);

const produktData = computed(() => {
  const data = produkt.value?.[0];

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
  return product.acf?.billede1?.url || product.acf?.billede2?.url || product.acf?.billede?.url || "";
}

// denne kode viser en intersectionObserver der bruges til at holde øje med hvornår en bruger scroller ned til elementet og så starter effekten .scroll-fade
// onMounted er en composition Api lifecycle hook, som betyder at koden først køres når html findes i dom'en
onMounted(() => {
  // her oprettes observeren som holder øje med elementerne
  const observer = new IntersectionObserver(
    (entries) => {
      // Her laves en foreach fordi der er flere elementer og for hvert entry bliver der tjekket om det er synligt i viewporten
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Her stoppes med at observere så fade animation kun køre en gang
          observer.unobserve(entry.target);
        }
      });
      // animationen køre først når mindst 10% af elementet er synligt
    },
    { threshold: 0.1 }
  );

  // Her findes alle elementerne med klassen scroll-fade og de bliver observeret
  document.querySelectorAll(".scroll-fade").forEach((el) => {
    observer.observe(el);
  });
});

const metaDescription = "læs mere om den specifikke øl og køb med levering direkte til døren"

watchEffect(() => {
  if (produktData.value && produktData.value.title?.rendered) {
    useHead({
      title: produktData.value.title.rendered,
      meta: [
        {
          name: "description",
          content: metaDescription,
        }
      ],
    });
  }
});
</script>
