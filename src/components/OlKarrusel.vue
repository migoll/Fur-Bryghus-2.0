<template>
  <!-- https://swiperjs.com/ -->
  <!-- Her laves en ølkarrusel komponent der dynamisk henter indhold fra wordpress api'et -->
  <!-- Her bruges JavaScript librariet Swiper som er et populært framework til karuseller -->
  <div class="swiper bg-fur-blue">
    <div
      class="swiper-wrapper md:w-full xl:max-w-[1280px] md:py-[4rem] lg:py-[6rem] py-[2rem]"
    >
      <!-- med v-for loops der over alle de øl der hentes -->
      <div
        class="swiper-slide !flex flex-col md:flex-row items-center justify-center lg:px-[4rem] max-w-screen gap-8"
        v-for="beer in beers"
        :key="beer.id"
      >
        <div>
          <!-- her indsættes det billede som hentes fra api'et -->
          <img
            :src="beer.acf.billede1?.url"
            :alt="beer.acf.billede1?.alt"
            class="h-[20rem] md:h-[30rem] object-cover transition-transform duration-300 transform"
          />
        </div>

        <div class="flex flex-col items-center lg:items-start">
          <!-- her vises navn og introtitel der hentes for hver øl -->

          <h2 class="text-neutral-6 text-center md:text-left">
            {{ beer.acf.navn }}
          </h2>
          <p
            class="text-neutral-6 text-2xl text-center md:text-left text-opacity-50 pt-4"
          >
            {{ beer.acf.intro_titel }}
          </p>

          <div
            class="flex items-center justify-center flex-col text-center lg:flex-row lg:text-left md:mt-[10rem]"
          >
            <!-- Her vises 3 stykker metadata for hver øl -->
            <div class="text-neutral-6 md:w-auto">
              <p class="opacity-50 text-xl">Stilart</p>
              <p class="text-3xl max-w-96">{{ beer.acf.stilart[0]?.name }}</p>
            </div>
            <span
              class="w-1/2 h-px bg-fur-accent-beer my-4 lg:rotate-90 md:w-[8rem] block"
            ></span>
            <div class="text-neutral-6 md:w-auto">
              <p class="opacity-50 text-xl">Alkoholprocent</p>
              <p class="text-3xl max-w-96">{{ beer.acf.alkoholprocent }}%</p>
            </div>
            <span
              class="w-1/2 h-px bg-fur-accent-beer my-4 lg:rotate-90 md:w-[8rem] block"
            ></span>
            <div class="text-neutral-6 md:w-auto">
              <p class="opacity-50 text-xl">Smagsnoter</p>
              <p class="text-3xl max-w-96">{{ beer.acf.smagsnoter }}</p>
            </div>
          </div>

          <div class="inline-block">
            <!-- knap - når knappen bliver hovedered sker growImage, og modsat shrinkImage, som hover effekt-->
            <Button
              isNeutral
              :label="`Smag på ${beer.acf.navn}`"
              :to="`/webshop/${beer.slug}`"
              class="!opacity-100 mt-4"
              @mouseenter="growImage"
              @mouseleave="shrinkImage"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Swipers egne definerede klasser til navigationspilede -->
    <div class="swiper-button-prev mx-4"></div>
    <div class="swiper-button-next mx-4"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

// Her defineres en prop hvor man selv skal vælge id'et som man gerne vil sortere på oppe i url'et
const props = defineProps({
  produktSorteringId: {
    type: Number,
    required: true,
  },
});

// Tomt array til ølene
// Her importeres Swiper, navigationen og den css som skal bruges for at karrusellen virker funktionelt
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Her laves en variabel med et tomt array til øllene som hentes
const beers = ref([]);
let swiperInstance = null;

// Funktion der skalerer billedet op når der hoveres over knappen
const growImage = (e) => {
  const slide = e.target.closest(".swiper-slide");
  if (!slide) return;
  const img = slide.querySelector("img");
  if (!img) return;
  img.classList.add("scale-105");
};

// Funktion der fjerner skalering når man ikke længere hover
const shrinkImage = (e) => {
  const slide = e.target.closest(".swiper-slide");
  if (!slide) return;
  const img = slide.querySelector("img");
  if (!img) return;
  img.classList.remove("scale-105");
};

// Hent data og initialiser Swiper
const initSwiper = () => {
  swiperInstance = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

// Når komponenten er indsat kaldes on denne onmounted.
// async bruges for at der kan bruges await indeni
onMounted(async () => {
  const response = await fetch(
    `https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?categories=3&produkt-sortering=${props.produktSorteringId}&per_page=10`
  );
  const data = await response.json();

  // Filtrér kun dem hvor størrelse indeholder term_id 7 (50cl)
  beers.value = data.filter((beer) =>
    beer.acf?.storrelse?.some((s) => s.term_id === 7)
  );

  // nexttick er en funktion i vue, der venter på at dom'en opdaterer. det gøres for at swiper karusellen virker korrekt og at alt data er hentet
  await nextTick();
  initSwiper();
});
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #e2d4bb;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #c89768;
}
</style>
