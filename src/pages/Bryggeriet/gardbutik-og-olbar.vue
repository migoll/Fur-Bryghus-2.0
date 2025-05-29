<template>
  <!-- Menukort siden hvor der bruges 3 komponenter til at vise indhold. en herosektion, en intro sektion og menutabs hvor man kan se menukortet i tabs -->
  <Hero  
    heroHeading="Gårdbutik og ølbar"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Billede restauranten"
  />

  <section class="flex flex-col items-center">
    <div class="md:flex flex-col md:justify-center md:h-[700px] md:w-full lg:h-[500px] px-[1rem] md:px-[3rem] py-[3rem] gap-3 xl:max-w-[1240px] md:max-w-[60%]">
      <h2 class="text-center">Shopping på den lækre måde</h2>
      <p>Velkommen til en fuldendt oplevelse hos Fur Bryghus! Besøg den hyggelige gårdbutik og nyd en øl, mens du udforsker udvalget af specialprodukter. Gårdbutikken er åben med selvbetjening alle ugens dage fra 8:00-22:00 - du får nemt adgang med mobilen og betaler dine køb med Mobilepay.</p>
      <div class="flex flex-col items-center w-full" >
      <img src="@/assets/icons/Gardbutik-ikon.svg" alt="Ikon af øltønde">
      </div>
    </div>
  </section>

<BasicSection
heading="Komplet udvalg af alle vores specialvarer"
    text="Det er nemt at få adgang til gårdbutikken, helt uden åbningstider. Scan QR-koden ved døren, så åbner døren til en verden af smag. Udforsk udvalget og find dine favoritter blandt vores mange øltyper, fra klassiske pilsnere og cremede hvedeøl til de mørkere brygtyper med en dybere og mere kompleks smagsprofil."
    text2="Sortimentet udmærker sig med vores alkohol-lette og alkoholfri øl, som er kendt for at levere en fyldig og autentisk ølsmag. Endelig finder du udvalget af smagfulde kryddersnaps, tilpasset forskellige lejligheder og årets sæsoner med tilhørende madtraditioner."
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-6"
    textColor="text-neutral-6"
    :bgImage="traeBackground"
    openInNewTab="true"
/>

<BasicSection
heading="Nyd en øl med selvbetjening"
    text="Hvorfor ikke gøre den hyggelige købmands-atmosfære komplet med en kold øl? Køleskabet er fyldt og du kan frit tage et glas og nyde en hyggestund. Betaling klarer du nemt på Mobilepay, uden at være afhængig af betjening. Tag på tur med venner og familie og lav jeres egen ølsmagning, så I kan tage de helt rigtige varianter med hjem."
    :imageMobile="mobileImg1"
    :imageDesktop="desktopImg1"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-1"
    textColor="text-neutral-1"
    reverse
/>



  <FocusedEntryPoints :entries="['Arrangementer', 'Olsmagninger', 'Vores-produkter']" />

</template>

<script setup>
import heroImageMobile from '@/assets/images/mobile/Gaardbutik_Hero_Mobile.png'
import heroImageDesktop from '@/assets/images/desktop/gardbutik-og-olbar-hero.webp'

import mobileImg from '@/assets/images/mobile/Gaardbutik_special_Mobile.png'
import desktopImg from '@/assets/images/desktop/gardbutik-og-olbar-udvalg.webp'
import mobileImg1 from '@/assets/images/mobile/Gaardbutik_Selvbetjening_Mobile.png'
import desktopImg1 from '@/assets/images/desktop/gardbutik-og-olbar-selvbetjening.webp'
import traeBackground from '@/assets/images/morkTrae.png'
</script>

<style scoped></style>


