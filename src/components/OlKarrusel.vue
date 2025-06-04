<template>
  <!-- https://swiperjs.com/ -->
  <!-- Her laves en ølkarrusel komponent der dynamisk henter indhold fra wordpress api'et -->
  <!-- Her bruges JavaScript librariet Swiper som er et populært framework til karuseller -->
  <div class="swiper bg-fur-blue">
    <div class="swiper-wrapper md:w-full xl:max-w-[1280px] md:py-[4rem] lg:py-[6rem] py-[2rem]">
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
            class="h-[20rem] md:h-[30rem] object-cover transition-transform duration-300"
          />
        </div>

        <div class="flex flex-col items-center lg:items-start">
          <!-- her vises navn og introtitel der hentes for hver øl -->
          <h2 class="text-neutral-6 text-center md:text-left">{{ beer.acf.navn }}</h2>
          <p class="text-neutral-6 p-medium text-center md:text-left">{{ beer.acf.intro_titel }}</p>

          <div class="flex items-center justify-center flex-col text-center lg:flex-row lg:text-left md:mt-[10rem]">
            <!-- Her vises 3 stykker metadata for hver øl -->
            <div class="text-neutral-6 md:w-auto">
              <p class="opacity-50 text-xl">Stilart</p>
              <p class="p-medium">{{ beer.acf.stilart[0]?.name }}</p>
            </div>
            <span class="w-1/2 h-px bg-fur-accent-beer my-4 lg:rotate-90 md:w-[8rem] block"></span>
            <div class="text-neutral-6 md:w-auto">
              <p class="opacity-50 text-xl">Alkoholprocent</p>
              <p class="p-medium">{{ beer.acf.alkoholprocent }}%</p>
            </div>
            <span class="w-1/2 h-px bg-fur-accent-beer my-4 lg:rotate-90 md:w-[8rem] block"></span>
            <div class="text-neutral-6 md:w-auto">
              <p class="opacity-50 text-xl">Smagsnoter</p>
              <p class="p-medium max-w-96">{{ beer.acf.smagsnoter }}</p>
            </div>
          </div>

          <div class="inline-block">
            <!-- knap - når knappen bliver hovedered sker growImage, og modsat shrinkImage, som hover effekt-->
            <NuxtLink
              :to="`/webshop/${beer.slug}`"
              class="relative flex items-center justify-center gap-2 font-sans font-medium text-neutral-1 px-7 py-3 bg-fur-accent-beige hover:bg-fur-accent-beer active:bg-[#C89768] focus-visible:outline outline-1 outline-black outline-offset-2 mt-[2rem] md:mt-[6rem]"
              @mouseenter="growImage"
              @mouseleave="shrinkImage"
            >
              <span class="text-lg whitespace-nowrap">Smag på {{ beer.acf.navn }}</span>
              <span
                class="absolute -z-10 left-0 top-0 w-full h-full bg-fur-accent-blue opacity-0 group-hover:opacity-100 group-hover:-left-[6px] group-hover:top-[6px] group-active:-left-[8px] group-active:top-[8px] transition-all duration-200"
              ></span>
            </NuxtLink>
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
import { ref, onMounted, nextTick } from 'vue';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const props = defineProps({
  produktSorteringId: {
    type: Number,
    required: true,
  },
});

// Tomt array til ølene
const beers = ref([]);
let swiperInstance = null;

// Hent data og initialiser Swiper
const initSwiper = () => {
  swiperInstance = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

onMounted(async () => {
  const response = await fetch(
    `https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?categories=3&produkt-sortering=${props.produktSorteringId}&per_page=10`
  );
  const data = await response.json();
  beers.value = data;

  await nextTick();
  initSwiper();
});

// Funktion der skalerer billedet op når der hoveres over knappen
const growImage = (e) => {
  const slide = e.target.closest('.swiper-slide');
  if (!slide) return;
  const img = slide.querySelector('img');
  if (!img) return;
  img.classList.add('scale-105');
};

const shrinkImage = (e) => {
  const slide = e.target.closest('.swiper-slide');
  if (!slide) return;
  const img = slide.querySelector('img');
  if (!img) return;
  img.classList.remove('scale-105');
};
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
