<template>
  <!-- https://swiperjs.com/ -->
   <!-- Her laves en ølkarrusel komponent der dynamisk henter indhold fra wordpress api'et -->
    <!-- Her bruges JavaScript librariet Swiper som er et populært framework til karuseller -->
<div class="swiper bg-fur-blue">
  <div class="swiper-wrapper md:w-full xl:max-w-[1280px] md:py-[4rem] lg:py-[6rem] py-[2rem]">
    <!-- med v-forloopes der over alle de øl der hentes -->
    <div class="swiper-slide !flex flex-col md:flex-row items-center justify-center lg:px-[4rem] max-w-screen" v-for="beer in beers" :key="beer.id">
        <div>
          <!-- her indsættes det billede som hentes fra api'et -->
            <img :src="beer.acf.billede1?.url" :alt="beer.acf.billede1?.alt" class="h-[20rem] md:h-[30rem] object-cover">
        </div>
        <div class="!flex flex-col items-center md:items-start">
          <!-- her vises navn og introtitel der hentes for hver øl -->
            <h2 class="text-neutral-6 text-center md:text-left">{{ beer.acf.navn }}</h2>
            <p class="text-neutral-6 p-medium text-center md:text-left" >{{ beer.acf.intro_titel }}</p>
            <div class="flex items-center md:items-start justify-center flex-col text-center lg:flex-row md:text-left  md:mt-[10rem]">
              <!-- Her vises 3 stykker metadata for hver øl -->
                <div class="text-neutral-6 md:w-auto ">
                    <p class="p-medium">Stilart</p>
                    <p>{{ beer.acf.stilart[0]?.name }}</p>
                </div>
                 <span class="w-1/2 h-px bg-fur-accent-beer my-4 lg:rotate-90 md:w-[8rem] block"></span>
                <div class="text-neutral-6 md:w-auto">
                    <p class="p-medium">Alkoholprocent</p>
                    <p>{{ beer.acf.alkoholprocent }}%</p>
                </div>
                 <span class="w-1/2 h-px bg-fur-accent-beer my-4 lg:rotate-90 md:w-[8rem] block"></span>
                <div class="text-neutral-6 md:w-auto">
                    <p class="p-medium">Smagsnoter</p>
                    <p>{{ beer.acf.smagsnoter }}</p>
                </div>
            </div>
            <div class="inline-block w-[60vw] md:w-[30vw] lg:w-[15vw]">

        <!-- knap -->
    <NuxtLink
      to="#"
      class="group relative flex items-center justify-center gap-2 font-sans font-medium text-neutral-1 px-7 py-3 bg-fur-accent-beige hover:bg-fur-accent-beer active:bg-[#C89768] focus-visible:outline outline-1 outline-black outline-offset-2 mt-[2rem] md:mt-[6rem]"
    >
      <span class="text-lg">Læs mere og køb</span>
      <span
        class="absolute -z-10 left-0 top-0 w-full h-full bg-fur-accent-blue opacity-0 group-hover:opacity-100 group-hover:-left-[6px] group-hover:top-[6px] group-active:-left-[8px] group-active:top-[8px] transition-all duration-200"
      ></span>
    </NuxtLink>
  </div>
        </div>
    </div>
    
  </div>

  <!-- Swipers egne definerede klasser til navigationspilede -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

</div>

</template>
<script setup>

// Her defineres en prop hvor man selv skal vælge id'et som man gerne vil sortere på oppe i url'et
const props = defineProps({
  produktSorteringId: {
    type: Number,
    required: true
  }
});

// Her importeres Swiper, navigationen og den css som skal bruges for at karrusellen virker funktionelt
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Her laves en variabel med et tomt array til øllene som hentes
const beers = ref([]);
let swiperInstance = null;

// Her aktiveres karusellen med swiper og aktivere navigationen og at karusellen skal loope
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

// Når komponenten er indsat kaldes on denne onmounted. 
// async bruges for at der kan bruges await indeni
onMounted(async () => {
  // Her fetches data fra api'et. her ventes på at svaret bliver hentet
 const response = await fetch(`https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?categories=3&produkt-sortering=${props.produktSorteringId}&per_page=10`);
  // her konverteres response til json
  const data = await response.json();
  // Herefter sættes dataet en i variablens beers
  beers.value = data;

  // nexttick er en funktion i vue, der venter på at dom'en opdaterer. det gøres for at swiper karusellen virker korrekt og at alt data er hentet 
  await nextTick();
  initSwiper();
});

</script>

<style scoped>
.swiper-button-prev, .swiper-button-next{
    color:#E2D4BB;
}

.swiper-button-prev:hover, .swiper-button-next:hover{
color:#C89768;
}

</style>
