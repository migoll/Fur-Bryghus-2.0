<template>
  <Hero
    heroHeading="Book dit selskab"
    :heroImageMobile="heroDesktop"
    :heroImageDesktop="heroDesktop"
    heroImageAlt="Billede af maden i restauranten"
  />

  <div class="px-6 py-8 lg:px-16 lg:py-16">
    <div class="flex flex-col lg:flex-row lg:space-x-16 max-w-[1400px] mx-auto">
      <!-- Text section -->
      <div class="lg:w-1/2">
        <h2 class="mb-4 scroll-fade">Sammen skaber vi en oplevelse</h2>

        <p class="mb-4 scroll-fade">
          Vi har dejlige lokaler til små og store selskaber – og er klar med råd
          og vejledning om alt fra menu til opdækning og musik. Du er altid
          velkommen til at ringe til os på 9759 3060 og få en snak med vores
          Restaurationschef om mulighederne.
        </p>

        <p class="mb-2 scroll-fade">Du kan vælge mellem følgende lokaler:</p>

        <ul class="list-disc list-inside space-y-1 mb-4 scroll-fade">
          <li>Pejsestuen (stueetage) med plads til 35 personer</li>
          <li>Restauranten (1. sal) med plads til 65 personer</li>
          <li>Loftet (2. sal) med plads til 35 personer</li>
          <li>
            Festsal med plads til 300 spisende gæster. Mulighed for opdeling i 2
            lokaler.
          </li>
          <li>Udendørs arrangement i telt med de fornødne bekvemmeligheder.</li>
        </ul>

        <p class="mb-2 scroll-fade">
          Dertil kommer en unik natur – lige uden for døren. Og du kan også
          vælge at krydre arrangementet med en rundvisning på bryggeriet.
        </p>

        <p class="mb-2 scroll-fade">
          Fri bar i 7 timer ved køb af selskabsmenu øl, husets vin og sodavand
          kr. 399,-.
        </p>

        <p class="mb-2 scroll-fade">
          Ved aflysning af et selskab mindre end 30 dage før afholdelse tillader
          vi os at opkræve kr. 5.000,-. Dette beløb modregnes imidlertid som
          depositum ved booking af nyt arrangement.
        </p>

        <p class="mb-2 scroll-fade">
          Ved større reduktion i antal senere end 4 dage før arrangementets
          afholdelse, opkræves der for det antal, der er reserveret til på 4.
          dagen før arrangementet.
        </p>
      </div>

      <div class="lg:w-1/2 mt-10 lg:mt-0">
        <ContactFormular />
      </div>
    </div>
  </div>

  <FocusedEntryPoints
    :entries="['Vores-produkter', 'Bryggeprocessen', 'Gardbutik']"
  />
</template>

<script setup>
const title = ref("Book dit selskab");
const description = ref(
  "Kontakt os her omkring dit næste selskab. Vi hjælper dig med glæde."
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
import ContactFormular from "~/components/ContactFormular.vue";

// Billeder til desktop og mobil (midlertidigt samme billede)
import heroDesktop from "~/assets/images/desktop/book-dit-selskab-hero.webp";

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
