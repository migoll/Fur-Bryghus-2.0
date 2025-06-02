<template>
  <Hero
    heroHeading="Arrangementer"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Bryggeriet"
  />

  <section class="flex flex-col items-center content-center">
    <h3 class="p-medium px-[2rem] py-[1rem] max-w-[1240px] text-center">
      Oplev intimkoncerter, den populære Sommerkoncert, foredrag, standup,
      rundvisninger, mad og øl-events og meget mere.
    </h3>
  </section>

  <NyhedsGrid :limit="100" :categories="'28,30'" />
</template>

<script setup>
import mobileImg from "@/assets/images/desktop/Arrangementer-hero.webp";
import heroImageDesktop from "@/assets/images/desktop/Arrangementer-hero.webp";
</script>
