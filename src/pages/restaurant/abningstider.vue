<template>
    <Hero
    heroHeading="Åbningstider"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Billede af Fur bryghus"
  />

  <section class="flex flex-col items-center mx-auto p-10 md:flex-row gap-6">
    <div class="flex-1 justify-center">

      <h2 class="scroll-fade">Restaurantens åbningstider</h2>
      <p class="text-xl scroll-fade">
        Restauranten er sæsonlukket i perioden november til og med februar 2025
        - bemærk at vi åbner for selskaber over 20 personer. Kontakt os på
        97593060 eller info@furbryghus.dk for at aftale nærmere.
      </p>
    </div>

    <div class="flex-1">
      <Abningstider></Abningstider>
      <p class="text-p-medium mt-[1rem] font-bold">Bryghuset følger  ikke restaurantents åbningstider, og åbner kun op til arrangementer og smagninger</p>
    </div>
  </section>
  <BasicSection
    heading="Prøv smagen af fur"
    text="Besøg os og få en oplevelse og smagen af Fur. Vi glæder os til at byde
        dig velkommen. Husk at booke bord på restauranten for at sikre dig en
        plads."
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Restaurant billede"
    bgColor="bg-fur-accent-beer"
    headingColor="text-neutral-1"
    textColor="text-neutral-1"
    buttonLabel="Book bord"
    buttonLink="https://book.dinnerbooking.com/dk/da-DK/book/index/2837/2"
  />
</template>

<script setup>

import heroImageMobile from "@/assets/images/mobile/Aabningstider_Hero_Mobile.png";
import heroImageDesktop from "@/assets/images/desktop/abningstider-hero.webp";

import mobileImg from "@/assets/images/mobile/Aabningstider_billede2_mobile.png";
import desktopImg from "@/assets/images/desktop/abningstider-smagen-af-fur.webp";

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
