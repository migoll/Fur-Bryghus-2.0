<template>
  <Hero
    heroHeading="Arrangementer"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Billede fra sommmerfesten"
  />

  <section class="flex flex-col items-center content-center">
    <h3 class="p-medium px-[2rem] py-[1rem] max-w-[1240px] text-center">
      Oplev intimkoncerter, den populære Sommerkoncert, foredrag, standup,
      rundvisninger, mad og øl-events og meget mere.
    </h3>
  </section>

  <NyhedsGrid :limit="100" :categories="'28,30'" />
  <section class="bg-fur-accent-blue">
    <FocusedEntryPoints :entries="['Olsmagninger', 'Kontakt', 'Gardbutik']" />
  </section>
</template>

<script setup>
const title = ref("Arrangementer");
const description = ref(
  "Se alle vores arrangementer her og find ud af hvornår du skal besøge os næste gang"
);

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});

import heroImageMobile from "@/assets/images/desktop/Arrangementer-hero.webp";
import heroImageDesktop from "@/assets/images/desktop/Arrangementer-hero.webp";
</script>
