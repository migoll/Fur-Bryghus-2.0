<template>
  <Hero
    heading="Nyheder"
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Bryggeriet"
  />

  <section class="flex flex-row items-center mx-auto p-10">
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
  <section class="bg-accent-fur-beer"></section>
</template>

<script setup>
import mobileImg from "@/assets/images/mobile/Aabningstider_Hero_mobile.png";
import desktopImg from "@/assets/images/desktop/abningstider-hero.webp";
</script>
