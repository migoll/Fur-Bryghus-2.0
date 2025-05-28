<template>
     <Hero  
    heroHeading="Vores Historie"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroDesktop"
    heroImageAlt="Billede af maden i restauranten"
  />

  <div class="px-16 py-8">
    <div class="max-w-[1324px] justify-center mx-auto">
      <h2>Bryggeriet i dag</h2>
      <p class="mt-2">
       Fur Bryghus er en unik kombination af mikrobryggeri, restaurant, gårdbutik og event venue på øen Fur, midt i Limfjorden. Bryggeri og restaurant er indrettet i en gammel molerfabrik - en smuk træbygning, arkitekttegnet og bygget i 1926. Bryggeriet udmærker sig ved at fremstille et bredt udvalg af specialøl, brygget med erfaring og passion for den gode øloplevelse.
      </p>
      <p class="mt-4">
        Restauranten er kendt for at sammensætte store smagsoplevelser, fortrinsvis af lokale råvarer og kød fra egne frilandsgrise - og maden nydes med udsigt til det arbejdende bryggeri gennem store panoramavinduer. Bryghuset tilbyder smukke selskabslokaler til din fest og gårdbutikken er fyldt med specialiteter, så dagens favoritter kan komme med hjem. Endelig er Fur Bryghus kendt for festlige live events, sammensat til at give gæsterne en uforglemmelig oplevelse, hver gang.
      </p>
    </div>
    <div class="flex flex-col md:flex-row gap-8 mt-8 max-w-[1324px]">
  <div class="w-full md:w-1/2">
    <img src="~/assets/images/desktop/olprocessen-gaering.webp" alt="Ølprocessen - Gæring" class="w-full h-full object-cover" />
  </div>
  <div class="w-full md:w-1/2">
    <h2 class="text-2xl font-bold mb-4">Bryggeriet og brygmesteren</h2>
    <p class="mb-4">
      Fur Bryghus har indrettet bryggeriet med udvalgt udstyr. Selve Brygværket samt gærkarret er fabrikeret i Tjekkiet. De første tanke kom fra Slovenien – og er siden suppleret med to danske tanke. Tappekolonnen er ligeledes dansk, og pasteuriserings-enheden er produceret i Tyskland. Resultatet er et stærkt og professionelt set-up.
    </p>
    <p>
      Vores brygmester Flemming Asmussen er manden bag Fur øl. Flemming er uddannet brygmester fra den Skandinaviske Bryggerhøjskole i København og kom til Fur Bryghus den 1. januar 2005. Med familien – og 15 års erfaring fra Bryggeriet Fuglsang i Haderslev. Med sin store viden og erfaring har Flemming skabt stor respekt og anerkendelse omkring Fur øl fra forbrugere til bryggeri-verdenen. Og han deler gerne ud af sin viden til hobby-bryggere og andre øl-elskere – bare skriv til ham på flas@furbryghus.dk eller giv ham et kald på 9759 3060.
    </p>
  </div>
</div>
  </div>
  <div>
     <SceneAnimation2 :scenes="myScenesArray" />
  </div>
</template>

<script setup>
import SceneAnimation2 from '~/components/SceneAnimation2.vue';
import Hero from '~/components/Hero.vue'
// Billeder til karousel

import imageFabrikken from '@/assets/images/desktop/Vores-historie-fabrikken.webp'

import imageOprindelse from '@/assets/images/desktop/Vores-historie-oprindelse.webp'

import imageIndvielsen from '@/assets/images/desktop/Vores-historie-indvielsen.webp'

import imageForvandling from '@/assets/images/desktop/Vores-historie-forvandling.webp'

import heroDesktop from '@/assets/images/desktop/Vores-historie-forside.webp'


// Array med scener
const myScenesArray = [
 {
    title: 'Bygningens oprindelse',
    sideTitle: '1926',
    image: imageOprindelse,
    text: [
      'Bryggeriet og restauranten har til huse i en gammel molerfabrik, der er tegnet af en københavnsk arkitekt og bygget i 1926. En smuk, rød træbygning, placeret på et 128 Ha stort område på den nordvestlige spids af Fur.'
      ,
      'Her i området startede indvindingen af moler omkring år 1925. Moler-produktionen fortsatte i Vesterbakker indtil 1978, hvor den mistede sin lønsomhed og overgik til Damolins (nu Imerys) produktionsanlæg på Østfur (Østermoler).'
      ,
      'Moleret blev afskibet via egen bro, hvortil en stor del blev transporteret med små lokomotiver. Lokomotiverne er valgt som motiv på vores ravgyldne Steam Beer.'
    ]
  },
  {
    title: 'Fabrikken står tom',
    sideTitle: '1982',
    image: imageFabrikken,
    text: [
      'Produktionen af moler på Østfur stoppede i 1982, og herefter stod fabriksbygningen tom indtil 1997. Tidens tand var hård ved bygningen, og satte sig tydelige spor.'
      ,
      'I 1997 blev området erhvervet af Mogens Fog, der påbegyndte en renovering. Fabrikken fik en ny ydre skal – 2,4 km brædder – og taget blev gjort tæt.'
      ,
      'Det var imidlertid vanskeligt at finde en anvendelse for fabrikken. Alle, der blev spurgt, kom med de samme idéer: Museum – Galleri – Udstillingsbygning – eller Showhall. Forslag om hotel var ikke muligt, da myndighederne ikke ønskede at ændre bygningens status til dette formål. Samtidig er området underlagt de restriktioner, som ligger i den 300 meter brede strandbeskyttelseslinje.'
    ]
  },
 {
    title: 'Den store forvandling',
    sideTitle: '2003',
    image: imageForvandling,
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
  {
    title: 'Indvielse af Fur bryghus',
    sideTitle: '2004',
    image: imageIndvielsen,
    text: [
      'Fur Bryghus blev startet, med hjertet, af to personer som ville skabe noget specielt og unikt for deres ø og lokalområde – Mildred og Mogens Fog.'
      ,
      'Fur Bryghus blev indviet torsdag d. 30 september 2004 – hvor bryggeriet blev besøgt af 350 inviterede og efterfølgende omkring 550 ”Åbent hus” gæster. Helt symbolsk foregik det i solskin, så de mange gæster rigtig kunne nyde dagen, maden og øllen. En fantastisk dag for Fur Bryghus. Og for Fur.'
      ,
      'Deres grundide var, at de ville skabe en virksomhed med 5-6 ansatte – det skulle gør Fur kendt i hele DK, og så skulle det være en turist attraktion.I dag sælger vi vores øl i hele DK – vi har ca. 45.000 gæster i løbet af året, og vi er 19 ansatte hele året rundt. FUR Bryghus er i god gænge, og følger den vej, de tanker og ideer som blev grundlagt i 2004, men naturligvis med en tilpasning løbende i f.t. de krav og ønsker ALLE vores mange gæster og kunder i det ganske land stiller til os.',
      'Siden indvielsen er det gået slag i slag for både bryggeri og restaurant. Med flot anerkendelse af både øl og mad. FUR Bryghus har oplevet en succes, der langt overstiger forventningerne.'
    ]
  },
  ]
</script>
