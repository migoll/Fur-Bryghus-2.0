<template>
  <!-- Menukort siden hvor der bruges 3 komponenter til at vise indhold. en herosektion, en intro sektion og menutabs hvor man kan se menukortet i tabs -->
  <Hero  
    heroHeading="Menukort"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Billede af maden i restauranten"
  />

<BasicSection
heading="Unikke smagsoplevelser"
    text="Restaurant Bryghuset har retter fra fortolkninger af det traditionelle til gourmet. Vi tænker bæredygtigt og bruger allerhelst de lokale råvarer. Husk at reservere bord inden jeres besøg - så kan vi garantere dig og dit selskab den bedste oplevelse."
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-1"
    textColor="text-neutral-1"
    buttonLabel="Book bord"
    buttonLink="https://book.dinnerbooking.com/dk/da-DK/book/index/2837/2"
/>

<MenuTabs />

<FocusedEntryPoints :entries="['Vores-produkter', 'Bryggeprocessen', 'Vores historie']"  />
</template>

<script setup>
import heroImageMobile from '@/assets/images/desktop/menukort-hero.webp'
import heroImageDesktop from '@/assets/images/desktop/menukort-hero.webp'
import mobileImg from '@/assets/images/desktop/menukort-smagsoplevelser.webp'
import desktopImg from '@/assets/images/desktop/menukort-smagsoplevelser.webp'

// Sætter Title og Meta Description for forsiden
const title = ref('Menukort')
const description = ref('Se hvad vi tilbyder i Restauranten og vælg din ynglingsret inden næste besøg.')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<style scoped></style>
