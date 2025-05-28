<template>
  <Hero  
    heroHeading="Job hos os"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Billede af den nye chefbrygger"
  />

  <section class="flex flex-col items-center pb-[2rem]">
    <div class="md:flex flex-col md:justify-center px-[1rem] md:px-[3rem] py-[3rem] xl:max-w-[1240px] md:max-w-[60%]">
      <p>Herunder kan du se alle de jobstillinger, som vi lige nu har åbne. Send din ansøgning hurtigst muligt. Vi glæder os til at høre fra dig.</p>
    </div>

    <div class="w-full max-w-[1240px]">
      <!-- Her bruges et vue directive som lytter efter et klik event. når der klikkes åbnes accordion og derefter lukkes igen. funktionen toggleaccordion bliver kaldt og isOpen skifter mellem true og false -->
      <button 
        class="flex justify-between bg-neutral-6 w-full px-[2rem] py-[1rem] shadow-md items-center" 
        @click="toggleAccordion"
      >
        <p class="p-medium">Tjenere til frokost og events</p>
        <div class="arrow" :class="{ 'rotate-180': isOpen }">{{ isOpen ? '▲' : '▼' }}</div>
      </button>

      <div 
        ref="accordionContent" 
        class="px-[2rem] py-[1rem] overflow-hidden h-0 opacity-0" 
      >
        <div class="flex flex-col md:flex-row gap-[2rem]">
          <div>
            <div class="pt-[1rem]">
              <p>Aloha, service-stjerner! Vi søger smilende tjenere, der kan sprede glæde og sikre en fantastisk oplevelse for vores gæster. Du kommer til at servere frokost i vores hyggelige restaurant og mad til spændende events. Du vil også modtage gæsterne, stå i baren og være en del af et stærkt hold, der synes, det skal være sjovt at gå på arbejde.</p>
              <p>Hos os kan du bruge dine styrker og vokse, både personligt og fagligt. Derfor er det ikke kun verdens fedeste job - det er også en mulighed for at blive en del af et fællesskab, der støtter din udvikling. Vi tilbyder en konkurrencedygtig løn efter dine kvalifikationer.</p>
            </div>
            <div class="pt-[2rem]">
              <h3>8 styrker, der åbner døre hos os</h3>
              <ul>
                <li class="my-[1rem] list-disc ml-[1rem]">Interesse for mad og drikke</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Evnen til at være pålidelig og mødestabil</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Smilende og udadvendt væsen, når du møder vores gæster</li>
                <li class="my-[1rem] list-disc ml-[1rem]">God til at bevare roen, selv hvis vi har travlt</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Praktisk tilgang til problemer, så vi kan finde løsninger sammen</li>
                <li class="my-[1rem] list-disc ml-[1rem]">God kollega, der hjælper teamet i mål</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Erfaring er en fordel, men ikke et krav</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Du skal være mindst 18 år</li>
              </ul>
              <img src="../../assets/images/desktop/job-hos-os-2.webp" alt="Billede af den nye chefbrygger" class="w-full" />
            </div>
            <div class="pt-[2rem]">
              <h3>Søg nu: sådan gør du</h3>
              <ul>
                <li class="my-[1rem] list-disc ml-[1rem]">Send en kort ansøgning og CV til Danni Boysen på dabo@furbryghus.dk</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Har du spørgsmål, kan du ringe til ham først på 23 49 21 98</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Jobstart er til marts eller april 2025</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Vi glæder os helt vildt til at møde dig!</li>
              </ul>
            </div>
          </div>
          <div>
            <div class="pt-[1rem]">
              <img src="../../assets/images/desktop/job-hos-os-1.webp" alt="Billede af den nye chefbrygger" />
            </div>
            <div class="pt-[2rem]">
              <h3>Det får du udover et spændene job:</h3>
              <ul>
                <li class="my-[1rem] list-disc ml-[1rem]">Masser af variation. Du oplever både hverdagens puls i restauranten, livekoncerter og events.</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Arbejdskultur uden hierarki. Vi spiller på alle tangenter og samarbejder på tværs af vores styrker og faglighed</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Et ungt og energisk team. Vi er et hold af servicetalenter med masser af passion og drive</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Færgekort på husets regning. Pendling bliver ikke en udgift for dig - vi dækker dit færgekort</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Medbestemmelse om timeantal. Du kan selv være med til at bestemme, hvor mange timer du ønsker - vores tjenerjob kan rumme det meste. Skriv hvad du ønsker i din ansøgning, så tager vi det med i vores overvejelser</li>
                <li class="my-[1rem] list-disc ml-[1rem]">Fleksible arbejdstider med plads til både arbejde og fritid. Vores restaurant har primært åbent i dagtimerne, men du vil også have vagter under events, som foregår om aftenen, i weekender, ferier og på helligdage. Det er perfekt for dig, som ønsker en alsidig hverdag med mulighed for at afbalancere arbejdsliv og fritid.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sætter Title og Meta Description for forsiden
const title = ref('Job hos os')
const description = ref('Søg dit næste job hos os og udnyt dit fulde potentiale på vores fantastiske bryghus')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})

// https://gsap.com/
import { gsap } from 'gsap'

import heroImageMobile from '@/assets/images/desktop/job-hos-os-hero.webp'
import heroImageDesktop from '@/assets/images/desktop/job-hos-os-hero.webp'

// to variabler der holder styr på om accordion er åben eller lukket og en dom reference til div'en med indholdet til accordion
const isOpen = ref(false)
const accordionContent = ref(null)

// funktionen der gør at accordion åbner og lukker alt efter om der bliver klikket. hvis den er åben bliver den lukket og omvendt- 
function toggleAccordion() {
  isOpen.value = !isOpen.value

  // nexttick venter på at dom'en opdaterer efter isOpen ændres
  nextTick(() => {
    // Her bruges gsap til at lave en animation på accordion når den åbner eller lukker. så tilføjes en smooth effekt
    if (isOpen.value) {
      gsap.to(accordionContent.value, {
        height: accordionContent.value.scrollHeight,
        opacity: 1,
        duration: 0.6,
        ease: "power1.out"
      })
    } else {
      gsap.to(accordionContent.value, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power1.in"
      })
    }
  })
}
</script>

<style scoped>
button .arrow {
  transition: all 0.3s ease-in-out;
}
button:hover .arrow {
  font-size: 1.2rem;
  color: #C89768;
}

.accordion-content {
  overflow: hidden;
  height: 0;
  opacity: 0;
}
</style>
