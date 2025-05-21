<template>
  <section class="hero relative h-[50vh] max-w-screen xs:h-[55vh] md:h-[80vh] lg:h-[90vh">
  <img src="../assets/images/mobile/Forside_Hero_Mobile.png" 
  alt="Fur bryghus" 
  class="object-cover w-full h-full"
  srcset="../assets/images/desktop/forside-hero.webp 768w"
  >
  <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-6">
    Fur Bryghus
  </h1>
</section>
<section class="uspSection bg-fur-accent-beige">
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
      <h3 class="mb-[1rem]">Besøg et ægte mikrobryggeri på øen Fur midt i Limfjorden.</h3>
      <p class="mb-[1rem]">Besøg et ægte mikrobryggeri på øen Fur midt i Limfjorden. Se det arbejdende bryggeri, besøg gårdbutikken og ølbaren, eller spis en lækker frokost i restauranten.</p>
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

</template>
<script setup></script>
<style scoped></style>