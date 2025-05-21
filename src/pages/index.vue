<template>
  <!-- <div class="text-2xl p-4">
    <h1 class="font-anton">Fur Bryghus – Nu kører det!</h1>
  </div>
  <Button label="Se menu" to="/restaurant/menukort" />
  <Button label="Se menu" />
  <FocusedEntryPoints
    :entries="['Vores-produkter', 'Bryggeprocessen', 'Vores historie']"
  /> -->
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
  <div class="md:flex max-w-screen md:align-middle md:justify-center md:items-center">
    <div class="mx-[2rem] my-[1rem] p-[4rem]">
      <h2 class="mb-[1rem]">Besøg et ægte mikrobryggeri på øen Fur midt i Limfjorden.</h2>
      <p>Besøg et ægte mikrobryggeri på øen Fur midt i Limfjorden. Se det arbejdende bryggeri, besøg gårdbutikken og ølbaren, eller spis en lækker frokost i restauranten.</p>
    </div>
    <div class="w-auto">
      <img src="../assets/images/mobile/Forside_Intro_Mobile.png" alt="Billede af knudeklinten på Fur" class="w-screen max-h-[300px] object-cover md:max-h-[400px]">
    </div>
  </div>
</section>

</template>
<script setup></script>
<style scoped></style>