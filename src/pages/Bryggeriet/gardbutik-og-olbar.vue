<template>
  <!-- Menukort siden hvor der bruges 3 komponenter til at vise indhold. en herosektion, en intro sektion og menutabs hvor man kan se menukortet i tabs -->
  <Hero
    heroHeading="Gårdbutik og ølbar"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Billede ude foran gårdbutikken"
  />

  <section class="flex flex-col items-center">

    <div class="md:flex flex-col md:justify-center md:h-[700px] md:w-full lg:h-[500px] px-[1rem] md:px-[3rem] py-[3rem] gap-3 xl:max-w-[1240px] md:max-w-[60%]">
      <h2 class="text-center scroll-fade">Shopping på den lækre måde</h2>
      <p class="mx-auto scroll-fade">Velkommen til en fuldendt oplevelse hos Fur Bryghus! Besøg den hyggelige gårdbutik og nyd en øl, mens du udforsker udvalget af specialprodukter. Gårdbutikken er åben med selvbetjening alle ugens dage fra 8:00-22:00 - du får nemt adgang med mobilen og betaler dine køb med Mobilepay.</p>
      <div class="flex flex-col items-center w-full scroll-fade" >
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
    imageAlt="Billede ude foran gårdbutikken"
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
    imageAlt="Billede inde i gårdbutikken"
    headingColor="text-neutral-1"
    textColor="text-neutral-1"
    reverse
  />

  <FocusedEntryPoints
    :entries="['Arrangementer', 'Olsmagninger', 'Vores-produkter']"
  />
</template>

<script setup>
const title = ref("Gårdbutik og ølbar");
const description = ref(
  "Vi tilbyder køb i vores gårdbutik, hvor der er fri selvbetjening"
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

import heroImageMobile from "@/assets/images/mobile/Gaardbutik_Hero_Mobile.png";
import heroImageDesktop from "@/assets/images/desktop/gardbutik-og-olbar-hero.webp";

import mobileImg from "@/assets/images/mobile/Gaardbutik_special_Mobile.png";
import desktopImg from "@/assets/images/desktop/gardbutik-og-olbar-udvalg.webp";
import mobileImg1 from "@/assets/images/mobile/Gaardbutik_Selvbetjening_Mobile.png";
import desktopImg1 from "@/assets/images/desktop/gardbutik-og-olbar-selvbetjening.webp";
import traeBackground from "@/assets/images/morkTrae.png";

// denne kode viser en intersectionObserver der bruges til at holde øje med hvornår en bruger scroller ned til elementet og så starter effekten .scroll-fade
// onMounted er en composition Api lifecycle hook, som betyder at koden først køres når html findes i dom'en
onMounted(() => {
  // her oprettes observeren som holder øje med elementerne
  const observer = new IntersectionObserver(
    (entries) => {
      // Her laves en foreach fordi der er flere elementer og for hvert entry bliver der tjekket om det er synligt i viewporten
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Her stoppes med at observere så fade animation kun køre en gang
          observer.unobserve(entry.target);
        }
      });
      // animationen køre først når mindst 10% af elementet er synligt
    },
    { threshold: 0.1 }
  );

  // Her findes alle elementerne med klassen scroll-fade og de bliver observeret
  document.querySelectorAll(".scroll-fade").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style scoped></style>
