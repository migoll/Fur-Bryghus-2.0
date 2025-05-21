<template>
 <section class="hero relative h-[50vh] max-w-screen xs:h-[55vh] md:h-[100vh] overflow-visible">

  <img
    src="../assets/images/mobile/Forside_Hero_Mobile.png"
    alt="Fur bryghus"
    class="object-cover w-full h-full"
    srcset="../assets/images/desktop/forside-hero.webp 768w"
  />

  <div class="absolute inset-0 bg-gradient-to-b from-[#00000077] via-transparent to-transparent z-10"></div>

  <h1 class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-6 z-40">
    Fur Bryghus
  </h1>

  <div class="beerImg md:flex gap-4 justify-center absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 z-30 hidden">
  <router-link :to="`/posts/356`">
    <img :src="billedeUrl1" :alt="alt1" class="h-[32rem] w-full object-cover scroll-fade" />
  </router-link>
  <router-link :to="`/posts/455`">
    <img :src="billedeUrl2" :alt="alt2" class="h-[32rem] w-full object-cover scroll-fade" />
  </router-link>
  <router-link :to="`/posts/397`">
    <img :src="billedeUrl3" :alt="alt3" class="h-[32rem] w-full object-cover scroll-fade" />
  </router-link>
</div>

</section>

<section class="uspSection bg-fur-accent-beige -mt-16 z-40 relative">
  <div class="fypFlex flex flex-col justify-center items-center py-[1.5rem] md:flex-row">
  <div class="usp" >
    <p class="font-anton mb-[1rem]">
      Lokale Råvarer
    </p>
    <img src="../assets/icons/korn.svg" alt="Ikon af korn">
  </div>
 <span class="w-1/2 h-px bg-fur-accent-beer my-4 md:rotate-90 md:w-[8rem] block"></span>
  <div class="usp">
     <p class="font-anton mb-[1rem]">
      Lokale Råvarer
    </p>
    <img src="../assets/icons/olTonde.svg" alt="Ikon af korn">
  </div>
   <span class="w-1/2 h-px bg-fur-accent-beer my-4 md:rotate-90 md:w-[8rem] block"></span>
  <div class="usp">
    <p class="font-anton mb-[1rem]">
      Lokale Råvarer
    </p>
    <img src="../assets/icons/ol.svg" alt="Ikon af korn">
  </div>
   <span class="w-1/2 h-px bg-fur-accent-beer my-4 md:rotate-90 md:w-[8rem] block"></span>
  <div class="usp">
     <p class="font-anton mb-[1rem]">
      Lokale Råvarer
    </p>
    <img src="../assets/icons/olHus.svg" alt="Ikon af korn">
  </div>
  </div>
</section>

<section class="intro">
  <div class=" md:flex md:justify-center md:items-center md:h-[500px] md:w-full">
    <div class="mx-[2rem] my-[2rem] md:p-[4rem] md:w-1/2">
      <h3 class="mb-[1rem] scroll-fade">Besøg et ægte mikrobryggeri på øen Fur midt i Limfjorden.</h3>
      <p class="mb-[1rem] scroll-fade">Besøg et ægte mikrobryggeri på øen Fur midt i Limfjorden. Se det arbejdende bryggeri, besøg gårdbutikken og ølbaren, eller spis en lækker frokost i restauranten.</p>
      <Button label="Læs mere om vores historie" to="/bryggeriet/vores-historie" class="m-0" />
    </div>
    <div class="md:w-1/2 md:h-full">
      <img
        src="../assets/images/mobile/Forside_Intro_Mobile.png"
        alt="Billede af knudeklinten på Fur"
        class="w-full md:h-full object-cover h-[300px]"
      />
    </div>
  </div>
</section>
<section class="abningstider bg-fur-blue px-[4rem] py-[2rem] flex items-center justify-center">
<div class="md:flex md:justify-center md:items-center md:h-[500px] md:w-full xl:max-w-[1280px]">
  <div class=" md:w-1/2">
    <h3 class="mb-[1rem]  text-neutral-6" >Restaurantens åbningstider</h3>
    <p class="mb-[1rem]  text-neutral-6 p-medium">Bryghuset følger  ikke restaurantents åbningstider, og åbner kun op til arrangementer og smagninger</p>
  </div>
  <div class=" md:p-[4rem] md:w-1/2">
<Abningstider
    headingColor="text-white"
  liColor="text-white"
/>
  </div>
</div>
</section>

<section class="sommerKoncert ">
  <div class="md:flex md:justify-center md:items-center md:flex-row-reverse md:h-[500px] md:w-full">
    <div class="mx-[2rem] my-[2rem] md:p-[4rem] md:w-1/2">
      <h3 class="mb-[1rem] md:mb-[3rem]">Sommerkoncerten</h3>
      <p class="mb-[1rem] md:mb-[3rem]">Fur Bryghus' sommerkoncert 2025 byder på livemusik, god mad og kolde øl i hyggelige, naturskønne rammer.</p>
      <Button label="Læs mere om sommerkoncerten" to="#" class="m-0" />
    </div>
    <div class="md:w-1/2 md:h-full">
      <img
        src="../assets/images/mobile/Forside_Sommerkoncert_Mobile.png"
        alt="Billede af knudeklinten på Fur"
        class="w-full md:h-full object-cover h-[300px]"
      />
    </div>
  </div>
</section>

<OlKarrusel/>

<BasicSection
heading="Restaurant Bryghuset"
    text="Restauranten er sæsonlukket i perioden november til og med februar 2025 – vi åbner dog for selskaber over 20 personer."
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Restaurant billede"
      :bgImage="traeBackground"
    headingColor="text-neutral-6"
    textColor="text-neutral-6"
    buttonLabel="Book bord"
    buttonLink="https://book.dinnerbooking.com/dk/da-DK/book/index/2837/2"
/>

</template>
<script setup>
const billedeUrl1 = ref(null)
const billedeUrl2 = ref(null)
const billedeUrl3 = ref(null)
const alt1 = ref(null)
const alt2 = ref(null)
const alt3 = ref(null)

Promise.all([
  fetch('https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts/356'),
  fetch('https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts/455'),
  fetch('https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts/397')
])
  .then(async ([res1, res2, res3]) => {
    const data1 = await res1.json()
    const data2 = await res2.json()
    const data3 = await res3.json()
    billedeUrl1.value = data1.acf.billede1.url
    billedeUrl2.value = data2.acf.billede1.url
    billedeUrl3.value = data3.acf.billede1.url
    alt1.value = data1.acf.billede1.alt
    alt2.value = data2.acf.billede1.alt
    alt3.value = data3.acf.billede1.alt
  })
  .catch(error => {
    console.error('Fejl ved hentning:', error)
  })

import mobileImg from '@/assets/images/mobile/Forside_Restaurant_Mobile.png'
import desktopImg from '@/assets/images/desktop/Forside-restaurant-bryghuset.webp'
import traeBackground from '@/assets/images/trae-baggrund.jpeg'

import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target) // kun én gang
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.scroll-fade').forEach((el) => {
    observer.observe(el)
  })
})


</script>