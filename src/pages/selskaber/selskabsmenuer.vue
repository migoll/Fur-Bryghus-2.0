<template>
  <!-- Menukort siden hvor der bruges 3 komponenter til at vise indhold. en herosektion, en intro sektion og menutabs hvor man kan se menukortet i tabs -->
  <Hero  
    heroHeading="Selskabsmenuer"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Billede af maden i restauranten"
  />

<BasicSection
heading="Sammen skaber vi en oplevelse"
    text="Vi har dejlige lokaler til små og store selskaber – og er klar med råd og vejledning om alt fra menu til opdækning og musik. Du er altid velkommen til at ringe til os på 9759 3060 og få en snak med vores Restaurationschef om mulighederne."
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-1"
    textColor="text-neutral-1"
    buttonLabel="Book dit selskab"
    buttonLink="/book-dit-selskab"
/>

<SelskabsTabs />

  <FocusedEntryPoints :entries="['Selskabspakker', 'Bookselskab', 'Olsmagninger']" />

</template>

<script setup>
import heroImageMobile from '@/assets/images/desktop/selskabsmenuer-hero.webp'
import heroImageDesktop from '@/assets/images/desktop/selskabsmenuer-hero.webp'
import mobileImg from '@/assets/images/desktop/selskabsmenu-ret-eksempel.webp'
import desktopImg from '@/assets/images/desktop/selskabsmenu-ret-eksempel.webp'

// Sætter Title og Meta Description for forsiden
const title = ref('Selskabsmenuer')
const description = ref('Se vores selskabsmenuer, eller sammensæt din helt egen menu.')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<style scoped></style>
