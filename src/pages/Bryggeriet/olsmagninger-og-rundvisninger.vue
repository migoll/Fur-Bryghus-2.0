<template>
     <Hero  
    heroHeading="Ølsmagninger rundvisninger"
    :heroImageMobile="heroMobile"
    :heroImageDesktop="heroDesktop"
    heroImageAlt="Billede af maden i restauranten"
  />
  <div class="px-16 py-8">
    <div class="max-w-[1024px] justify-center mx-auto pb-4 pt-8">
        <p class="text-center pb-4 text-xl">*Kan bookes fra 1. marts 2025</p>
      <h2 class="text-center pb-2">Duft, lyt og smag
</h2>
      <p class="mt-4 pb-4">
       Oplev den kraftige duft af malt og humle. Lyt til den boblende summen af gærende bryg. Smag på den friske øl med sanserne helt åbne. En ølsmagning og rundvisning på Fur Bryghus tager dig igennem mange af øllets facetter, samtidig med du får et indblik i bryghusets 20-årige historie og en dybere indsigt i øllets verden. 
      </p>
      <p class="mt-4">
       En ølsmagning på Fur Bryghus er en oplagt ide for vennerne, logen, polterabend, firmaevent, ølentusiasterne - eller bare jer, der kan lidt et rigtig godt glas øl, frisk fra hanerne. I kan vælge "Rundvisning med smagsprøver", "Lille ølsmagning" eller "Stor ølsmagning".
      </p>
      <img src="@/assets/icons/olTonde.svg" alt="Icon description" class="mt-4 w-32 h-32 mx-auto" />
    </div>
  </div>
  <div>
     <SceneAnimation2 :scenes="myScenesArray" />
  </div>
  <div class="bg-[#E2D4BB] w-full h-auto mb-4 pt-8">
    <h2 class="text-center pb-2">Bestil Ølsmagning</h2>
   <p class="mx-auto max-w-[50%]">Er i en gruppe der ønsker at bestille en ølsmagning eller rundvisning på vores dejlige bryghus, så tøv ikke med at send os en mail. Sørg for at have de fleste detaljer på plads, så finder vi sammen den bedste løsning.
    </p>
    <Button/>
  </div>
    <FocusedEntryPoints :entries="['Vores-produkter', 'Bryggeprocessen', 'Gardbutik']" />
</template>

<script setup>
import SceneAnimation2 from '~/components/SceneAnimation2.vue';
import Hero from '~/components/Hero.vue'
import FocusedEntryPoints from '~/components/FocusedEntryPoints.vue'
import Button from '~/components/Button.vue';

// Billeder til karousel desktop
import imageRundvisning from '@/assets/images/desktop/olsmagninger-og-rundvisninger-rundvisning.webp'

import imageLilleOlsmagning from '@/assets/images/desktop/olsmagninger-og-rundvisninger-lille-olsmaning.webp'

import imageStorOlsmagning from '@/assets/images/desktop/olsmagninger-og-rundvisninger-stor-olsmagning.webp'

import heroDesktop from '@/assets/images/desktop/olsmagninger-og-rundvisninger-hero.webp'


// Billeder til mobil
import heroMobile from '@/assets/images/mobile/Olsmagning_Hero_Mobile.png'

import imageRundvisningMobile from '@/assets/images/mobile/Olprocessen_Hero_mobile.png'

import imageLilleOlsmagningMobile from '@/assets/images/mobile/Olsmagning_LilleOlsmagning_Mobile.png'

import imageStorOlsmagningMobile from '@/assets/images/mobile/Olsmagning_StorOlsmagning_Mobile.png'


// Array med scener til SceneAnimation2 komponenten
const myScenesArray = [
 {
    title: 'Rundvisning med smagsprøver',
    sideTitle: '',
    image: imageRundvisning,
    srcSet: {
      '320w': imageRundvisningMobile,
      '768w': imageRundvisning,
    },
    text: [
      'Bryggeriet og restauranten har til huse i en gammel molerfabrik, der er tegnet af en københavnsk arkitekt og bygget i 1926. En smuk, rød træbygning, placeret på et 128 Ha stort område på den nordvestlige spids af Fur.'
      ,
      'Her i området startede indvindingen af moler omkring år 1925. Moler-produktionen fortsatte i Vesterbakker indtil 1978, hvor den mistede sin lønsomhed og overgik til Damolins (nu Imerys) produktionsanlæg på Østfur (Østermoler).'
      ,
      'Moleret blev afskibet via egen bro, hvortil en stor del blev transporteret med små lokomotiver. Lokomotiverne er valgt som motiv på vores ravgyldne Steam Beer.'
    ]
  },
  {
    title: 'Lille Ølsmagning',
    sideTitle: '',
    image: imageLilleOlsmagning,
    srcSet: {
      '320w': imageLilleOlsmagningMobile,
      '768w': imageLilleOlsmagning,
    },
    text: [
      'Produktionen af moler på Østfur stoppede i 1982, og herefter stod fabriksbygningen tom indtil 1997. Tidens tand var hård ved bygningen, og satte sig tydelige spor.'
      ,
      'I 1997 blev området erhvervet af Mogens Fog, der påbegyndte en renovering. Fabrikken fik en ny ydre skal – 2,4 km brædder – og taget blev gjort tæt.'
      ,
      'Det var imidlertid vanskeligt at finde en anvendelse for fabrikken. Alle, der blev spurgt, kom med de samme idéer: Museum – Galleri – Udstillingsbygning – eller Showhall. Forslag om hotel var ikke muligt, da myndighederne ikke ønskede at ændre bygningens status til dette formål. Samtidig er området underlagt de restriktioner, som ligger i den 300 meter brede strandbeskyttelseslinje.'
    ]
  },
 {
    title: 'Stor Ølsmagning',
    sideTitle: '',
    image: imageStorOlsmagning,
    srcSet: {
      '320w': imageStorOlsmagningMobile,
      '768w': imageStorOlsmagning,
    },
    text: [
      'I januar/februar 2003 besluttede Mildred og Mogens Fog, at bygningen skulle indeholde et mikrobryggeri – et af Danmarks tidligste. Mogens Fog kendte kulturen fra sine rejser i udlandet, bl.a. Belgien og Tyskland, men han anede ikke, at mikrobryggerier var på vej til at blive en trend i Danmark.'
      ,
      'Parret gik i gang med at undersøge muligheden for at etablere et Bryghus i ”Den gamle røde Fabrik”, der fortsat indeholdt maskiner fra molerproduktionen. Det var vigtigt for dem at få sat nogle aktiviteter i gang i fabrikken. Og at skabe en aktivitet på Fur.'
      ,
      'Myndighederne var straks med på idéen og kunne se de muligheder, der lå i bryghus aktiviteten. For turisterne, for området og ikke mindst for hele øen Fur. Alle, der kunne have indflydelse på projektet var medvirkende og positive.'
      ,
      'Bryggeriet er stort set opført af lokale håndværkere. Og det er i sig selv flot, at en lille ø som Fur kan man mønstre lokal arbejdskraft til et sådant projekt.'
      ,
      'I dag er bryggeriet ejet af Mildred Fog, og en investorkreds bestående af Direktør Michael Ring, Stelton, Direktør Søren Holm, CoRo, Advokat Jacob Hjortshøj, Bech & Bruun, og Mads Hylletoft Bøttger direktør Dragsholm Slot.'
      
    ]
  },
  ]
</script>
