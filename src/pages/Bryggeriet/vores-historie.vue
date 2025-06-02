<template>
  <Hero
    heroHeading="Vores Historie"
    :heroImageMobile="heroMobile"
    :heroImageDesktop="heroDesktop"
    heroImageAlt="Billede af maden i restauranten"
  />
  <div class="px-16 py-8">
    <div class="max-w-[1024px] justify-center mx-auto pb-4">
      <h2 class="text-center pb-2 text-h2 md:text-h2-md font-anton">
        Bryggeriet i dag
      </h2>
      <p class="mt-4 pb-4">
        Fur Bryghus er en unik kombination af mikrobryggeri, restaurant,
        gårdbutik og event venue på øen Fur, midt i Limfjorden. Bryggeri og
        restaurant er indrettet i en gammel molerfabrik - en smuk træbygning,
        arkitekttegnet og bygget i 1926. Bryggeriet udmærker sig ved at
        fremstille et bredt udvalg af specialøl, brygget med erfaring og passion
        for den gode øloplevelse.
      </p>
      <p class="mt-4">
        Restauranten er kendt for at sammensætte store smagsoplevelser,
        fortrinsvis af lokale råvarer og kød fra egne frilandsgrise - og maden
        nydes med udsigt til det arbejdende bryggeri gennem store
        panoramavinduer. Bryghuset tilbyder smukke selskabslokaler til din fest
        og gårdbutikken er fyldt med specialiteter, så dagens favoritter kan
        komme med hjem. Endelig er Fur Bryghus kendt for festlige live events,
        sammensat til at give gæsterne en uforglemmelig oplevelse, hver gang.
      </p>
      <img
        src="@/assets/icons/olTonde.svg"
        alt="Icon description"
        class="mt-4 w-32 h-32 mx-auto"
      />
    </div>
  </div>
  <div>
    <SceneAnimation2 :scenes="myScenesArray" />
  </div>
  <FocusedEntryPoints
    :entries="['Vores-produkter', 'Bryggeprocessen', 'Gardbutik']"
  />
</template>

<script setup>
import SceneAnimation2 from "~/components/SceneAnimation2.vue";
import Hero from "~/components/Hero.vue";
import FocusedEntryPoints from "~/components/FocusedEntryPoints.vue";
// Billeder til karousel desktop
import imageFabrikken from "@/assets/images/desktop/Vores-historie-fabrikken.webp";
import imageOprindelse from "@/assets/images/desktop/Vores-historie-oprindelse.webp";
import imageIndvielsen from "@/assets/images/desktop/Vores-historie-indvielsen.webp";
import imageForvandling from "@/assets/images/desktop/Vores-historie-forvandling.webp";
import heroDesktop from "@/assets/images/desktop/Vores-historie-forside.webp";
// Billeder til mobil
import heroMobile from "@/assets/images/mobile/VoresHistorie_Hero_Mobile.png";
import imageFabrikkenMobile from "@/assets/images/mobile/VoresHistorie_1982_Mobile.png";
import imageOprindelseMobile from "@/assets/images/mobile/VoreHistorie_1926_Mobile.png";
import imageIndvielsenMobile from "@/assets/images/mobile/VoresHistorie_2004_Mobile.png";
import imageForvandlingMobile from "@/assets/images/mobile/VoresHistorie_2003_Mobile.png";

// Array med scener til SceneAnimation2 komponenten
const myScenesArray = [
  {
    title: "Bygningens oprindelse",
    sideTitle: "1926",
    image: imageOprindelse,
    srcSet: {
      "320w": imageOprindelseMobile,
      "768w": imageOprindelse,
    },
    text: [
      "Bryggeriet og restauranten har til huse i en gammel molerfabrik, der er tegnet af en københavnsk arkitekt og bygget i 1926. En smuk, rød træbygning, placeret på et 128 Ha stort område på den nordvestlige spids af Fur.",
      "Her i området startede indvindingen af moler omkring år 1925. Moler-produktionen fortsatte i Vesterbakker indtil 1978, hvor den mistede sin lønsomhed og overgik til Damolins (nu Imerys) produktionsanlæg på Østfur (Østermoler).",
      "Moleret blev afskibet via egen bro, hvortil en stor del blev transporteret med små lokomotiver. Lokomotiverne er valgt som motiv på vores ravgyldne Steam Beer.",
    ],
  },
  {
    title: "Fabrikken står tom",
    sideTitle: "1982",
    image: imageFabrikken,
    srcSet: {
      "320w": imageFabrikkenMobile,
      "768w": imageFabrikken,
    },
    text: [
      "Produktionen af moler på Østfur stoppede i 1982, og herefter stod fabriksbygningen tom indtil 1997. Tidens tand var hård ved bygningen, og satte sig tydelige spor.",
      "I 1997 blev området erhvervet af Mogens Fog, der påbegyndte en renovering. Fabrikken fik en ny ydre skal – 2,4 km brædder – og taget blev gjort tæt.",
      "Det var imidlertid vanskeligt at finde en anvendelse for fabrikken. Alle, der blev spurgt, kom med de samme idéer: Museum – Galleri – Udstillingsbygning – eller Showhall. Forslag om hotel var ikke muligt, da myndighederne ikke ønskede at ændre bygningens status til dette formål. Samtidig er området underlagt de restriktioner, som ligger i den 300 meter brede strandbeskyttelseslinje.",
    ],
  },
  {
    title: "Den store forvandling",
    sideTitle: "2003",
    image: imageForvandling,
    srcSet: {
      "320w": imageForvandlingMobile,
      "768w": imageForvandling,
    },
    text: [
      "I januar/februar 2003 besluttede Mildred og Mogens Fog, at bygningen skulle indeholde et mikrobryggeri – et af Danmarks tidligste. Mogens Fog kendte kulturen fra sine rejser i udlandet, bl.a. Belgien og Tyskland, men han anede ikke, at mikrobryggerier var på vej til at blive en trend i Danmark.",
      "Parret gik i gang med at undersøge muligheden for at etablere et Bryghus i ”Den gamle røde Fabrik”, der fortsat indeholdt maskiner fra molerproduktionen. Det var vigtigt for dem at få sat nogle aktiviteter i gang i fabrikken. Og at skabe en aktivitet på Fur.",
      "Myndighederne var straks med på idéen og kunne se de muligheder, der lå i bryghus aktiviteten. For turisterne, for området og ikke mindst for hele øen Fur. Alle, der kunne have indflydelse på projektet var medvirkende og positive.",
      "Bryggeriet er stort set opført af lokale håndværkere. Og det er i sig selv flot, at en lille ø som Fur kan man mønstre lokal arbejdskraft til et sådant projekt.",
      "I dag er bryggeriet ejet af Mildred Fog, og en investorkreds bestående af Direktør Michael Ring, Stelton, Direktør Søren Holm, CoRo, Advokat Jacob Hjortshøj, Bech & Bruun, og Mads Hylletoft Bøttger direktør Dragsholm Slot.",
    ],
  },
  {
    title: "Indvielse af Fur bryghus",
    sideTitle: "2004",
    image: imageIndvielsen,
    srcSet: {
      "320w": imageIndvielsenMobile,
      "768w": imageIndvielsen,
    },
    text: [
      "Fur Bryghus blev startet, med hjertet, af to personer som ville skabe noget specielt og unikt for deres ø og lokalområde – Mildred og Mogens Fog.",
      "Fur Bryghus blev indviet torsdag d. 30 september 2004 – hvor bryggeriet blev besøgt af 350 inviterede og efterfølgende omkring 550 ”Åbent hus” gæster. Helt symbolsk foregik det i solskin, så de mange gæster rigtig kunne nyde dagen, maden og øllen. En fantastisk dag for Fur Bryghus. Og for Fur.",
      "Deres grundide var, at de ville skabe en virksomhed med 5-6 ansatte – det skulle gør Fur kendt i hele DK, og så skulle det være en turist attraktion.I dag sælger vi vores øl i hele DK – vi har ca. 45.000 gæster i løbet af året, og vi er 19 ansatte hele året rundt. FUR Bryghus er i god gænge, og følger den vej, de tanker og ideer som blev grundlagt i 2004, men naturligvis med en tilpasning løbende i f.t. de krav og ønsker ALLE vores mange gæster og kunder i det ganske land stiller til os.",
      "Siden indvielsen er det gået slag i slag for både bryggeri og restaurant. Med flot anerkendelse af både øl og mad. FUR Bryghus har oplevet en succes, der langt overstiger forventningerne.",
    ],
  },
];
</script>
