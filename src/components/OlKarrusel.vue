<template>
<div class="swiper bg-fur-blue">
  <div class="swiper-wrapper md:w-full xl:max-w-[1280px] md:py-[4rem]">
    <div class="swiper-slide !flex flex-col md:flex-row items-center justify-center md:px-[4rem]" v-for="beer in beers" :key="beer.id">
        <div>
            <img :src="beer.acf.billede1?.url" :alt="beer.acf.billede1?.alt" class="h-[40%] md:h-[40rem] object-cover">
        </div>
        <div class="">
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
            <Button/>
        </div>
    </div>
    
  </div>
  <div class="swiper-pagination"></div>

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
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

onMounted(async () => {
  const response = await fetch('https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?categories=3');
  const data = await response.json();
  beers.value = data;

  // Vent til DOM er opdateret med slides
  await nextTick();
  initSwiper();
});

</script>



<style scoped>
</style>
