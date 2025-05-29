<template>
  <Hero  
    heroHeading="Forhandlere"
    :heroImageMobile="heroDesktop"  
    :heroImageDesktop="heroDesktop"
    heroImageAlt="Billede af Fur klinten ved Fur Bryghus"
  />

  <div class="px-6 py-8 lg:px-16 lg:py-16">
    <div class="flex flex-col lg:flex-row lg:space-x-16 max-w-[1400px] mx-auto">
      <div class="lg:w-1/2">
        <h2 class=" mb-4">Lad os finde din nærmeste Fur forhandler</h2>

        <p class="mb-4">
          Vores øl kan købes i en lang række cafeer, restauranter, kroer, specialvarebutikker og dagligvarebutikker over hele landet. Vi hjælper gerne med at finde en forhandler tæt på dig, så du kan få en god Fur øl til mad eller hygge. Mange af vores kunder - især specialbutikkerne og deciderede webshops sælger vores øl på nettet, så det er også muligt.
        </p>
      </div>

      <div class="lg:w-1/2 mt-10 lg:mt-0">
        <GoogleMap />
      </div>
    </div>
  </div>
  <FocusedEntryPoints :entries="['Vores-produkter', 'Kontakt', 'Bryggeprocessen']" />
</template>

<script setup>
import Hero from '~/components/Hero.vue'
import FocusedEntryPoints from '~/components/FocusedEntryPoints.vue'
import GoogleMap from '~/components/GoogleMap.vue'

// Billeder til desktop og mobil (midlertidigt samme billede)
import heroDesktop from '~/assets/images/desktop/forhandlere-hero.webp'
</script>
