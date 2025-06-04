<template>
  <Hero
    heroHeading="Forhandlere"
    :heroImageMobile="heroDesktop"
    :heroImageDesktop="heroDesktop"
    heroImageAlt="Billede af øl i gårdbutikken"
  />

  <div class="px-6 py-8 lg:px-16 lg:py-16">
    <div class="flex flex-col lg:flex-row lg:space-x-16 max-w-[1400px] mx-auto">
      <div class="lg:w-1/2">
        <h2 class="mb-4 scroll-fade ">Lad os finde din nærmeste Fur forhandler</h2>

        <p class="mb-4 scroll-fade">
          Vores øl kan købes i en lang række cafeer, restauranter, kroer,
          specialvarebutikker og dagligvarebutikker over hele landet. Vi hjælper
          gerne med at finde en forhandler tæt på dig, så du kan få en god Fur
          øl til mad eller hygge. Mange af vores kunder - især specialbutikkerne
          og deciderede webshops sælger vores øl på nettet, så det er også
          muligt.
        </p>
      </div>

      <div class="lg:w-1/2 mt-10 lg:mt-0">
        <GoogleMap />
      </div>
    </div>
  </div>
  <FocusedEntryPoints
    :entries="['Vores-produkter', 'Kontakt', 'Bryggeprocessen']"
  />
</template>

<script setup>
const title = ref("Forhandlere");
const description = ref(
  "Find din nærmeste forhandler af Furs produkter lige her"
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

import Hero from "~/components/Hero.vue";
import FocusedEntryPoints from "~/components/FocusedEntryPoints.vue";
import GoogleMap from "~/components/GoogleMap.vue";

// Billeder til desktop og mobil (midlertidigt samme billede)
import heroDesktop from "~/assets/images/desktop/forhandlere-hero.webp";

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
