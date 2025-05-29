<template>
  <Hero
    heading="Åbningstider"
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Bryggeriet"
  />

  <section class="flex flex-col items-center mx-auto p-10 md:flex-row gap-6">
    <div class="flex-1 justify-center">
      <h2>Restaurantens åbningstider</h2>
      <p>
        Restauranten er sæsonlukket i perioden november til og med februar 2025
        - bemærk at vi åbner for selskaber over 20 personer. Kontakt os på
        97593060 eller info@furbryghus.dk for at aftale nærmere.
      </p>
    </div>

    <div class="flex-1"><Abningstider></Abningstider></div>
  </section>
  <section
    class="bg-fur-accent-beer flex flex-col items-center mx-auto p-10 md:flex-row"
  >
    <div class="flex-1 justify-center">
      <h3>Prøv smagen af fur</h3>
      <p>
        Besøg os og få en oplevelse og smagen af Fur. Vi glæder os til at byde
        dig velkommen. Husk at booke bord på restauranten for at sikre dig en
        plads.
      </p>
      <Button label="Book bord" to="/restaurant/bestil-bord" />
    </div>
    <div class="flex-1">
      <img
        src="assets\images\desktop\abningstider-smagen-af-fur.webp"
        alt="Billede af knudeklinten på Fur"
        class="w-full md:h-full object-cover h-[300px]"
      />
    </div>
  </section>
</template>

<script setup>
import mobileImg from "@/assets/images/mobile/Aabningstider_Hero_mobile.png";
import desktopImg from "@/assets/images/desktop/abningstider-hero.webp";
</script>
