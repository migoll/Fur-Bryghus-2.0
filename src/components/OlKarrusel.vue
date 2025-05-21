<template>
<div class="swiper bg-fur-blue">
  <div class="swiper-wrapper md:w-full xl:max-w-[1280px] md:py-[4rem] py-[2rem]">
    <div class="swiper-slide !flex flex-col md:flex-row items-center justify-center md:px-[4rem]" v-for="beer in beers" :key="beer.id">
        <div>
            <img :src="beer.acf.billede1?.url" :alt="beer.acf.billede1?.alt" class="h-[20rem] md:h-[40rem] object-cover">
        </div>
        <div class="!flex flex-col items-center md:items-start">
            <h2 class="text-neutral-6 text-center md:text-left">{{ beer.acf.navn }}</h2>
            <p class="text-neutral-6 p-medium text-center md:text-left" >{{ beer.acf.intro_titel }}</p>
            <div class="flex md:gap-[3rem] items-center justify-center flex-col text-center md:flex-row md:text-left  md:mt-[10rem]">
                <div class="text-neutral-6 md:w-auto ">
                    <p class="p-medium">Stilart</p>
                    <p>{{ beer.acf.stilart[0]?.name }}</p>
                </div>
                 <span class="w-1/2 h-px bg-fur-accent-beer my-4 md:rotate-90 md:w-[8rem] block"></span>
                <div class="text-neutral-6 md:w-auto">
                    <p class="p-medium">Alkoholprocent</p>
                    <p>{{ beer.acf.alkoholprocent }}%</p>
                </div>
                 <span class="w-1/2 h-px bg-fur-accent-beer my-4 md:rotate-90 md:w-[8rem] block"></span>
                <div class="text-neutral-6 md:w-auto">
                    <p class="p-medium">Smagsnoter</p>
                    <p>{{ beer.acf.smagsnoter }}</p>
                </div>
            </div>
            <div class="inline-block w-[50%] md:w-[30%]">

        <!-- knap -->
    <NuxtLink
      to="/din-side"
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

  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

</div>

</template>
<script setup>
import { onMounted, ref, nextTick } from 'vue';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const beers = ref([]);
let swiperInstance = null;

const initSwiper = () => {
  swiperInstance = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    loop: true,
    pagination: {
      el: '.custom-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

onMounted(async () => {
  const response = await fetch('https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?categories=3&produkt-sortering=45&per_page=10');
  const data = await response.json();
  beers.value = data;

  await nextTick();
  initSwiper();
});

</script>



<style scoped>
.swiper-button-prev, .swiper-button-next{
    color:#E2D4BB;
}

.swiper-button-prev:hover, .swiper-button-next:hover{
color:#E2D4BB;
}

</style>
