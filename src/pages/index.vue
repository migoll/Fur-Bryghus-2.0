<template>
  <!-- <div class="text-2xl p-4">
    <h1 class="font-anton">Fur Bryghus – Nu kører det!</h1>
  </div>
  <Button label="Se menu" to="/restaurant/menukort" />
  <Button label="Se menu" />
  <FocusedEntryPoints
    :entries="['Vores-produkter', 'Bryggeprocessen', 'Vores historie']"
  /> -->
  <section class="hero relative h-[50vh] max-w-screen xs:h-[55vh] md:h-[60vh] lg:h-[70vh">
  <img src="../assets/images/mobile/Forside_Hero_Mobile.png" 
  alt="Fur bryghus" 
  class="object-cover w-full h-full"
  srcset="../assets/images/desktop/forside-hero.webp 768w"
  >
  <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-6">
    Fur Bryghus
  </h1>
</section>
<section class="uspSection bg-fur-accent-beige flex flex-col justify-center items-center py-[1.5rem] md:flex-row">
  <div class="usp" >
    <p>
      Lokale Råvarer
    </p>
    <img src="../assets/icons/korn.svg" alt="Ikon af korn">
  </div>
  <hr class="w-1/2 border-t border-fur-accent-beer my-4 md:rotate-90 md:w-full">
  <div class="usp">
    <p>
      Lokale Råvarer
    </p>
    <img src="../assets/icons/olTonde.svg" alt="Ikon af korn">
  </div>
   <hr class="w-1/2 border-t border-fur-accent-beer my-4">
  <div class="usp">
    <p>
      Lokale Råvarer
    </p>
    <img src="../assets/icons/ol.svg" alt="Ikon af korn">
  </div>
   <hr class="w-1/2 border-t border-fur-accent-beer my-4 m-0 p-0">
  <div class="usp">
    <p>
      Lokale Råvarer
    </p>
    <img src="../assets/icons/olHus.svg" alt="Ikon af korn">
  </div>
</section>
</template>
<script setup></script>
<style scoped></style>