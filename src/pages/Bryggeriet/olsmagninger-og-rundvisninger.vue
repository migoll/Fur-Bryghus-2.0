<template>
  <Hero
    heroHeading="Ølsmagninger rundvisninger"
    :heroImageMobile="heroMobile"
    :heroImageDesktop="heroDesktop"
    heroImageAlt="Billede af maden i restauranten"
  />
  <div class="px-16 py-8">
    <div class="max-w-[1024px] justify-center mx-auto pb-4 pt-8">
      <p class="text-center pb-4 text-xl mx-auto scroll-fade">
        *Kan bookes fra 1. marts 2025
      </p>
      <h2 class="text-center pb-2 scroll-fade">Duft, lyt og smag</h2>
      <p class="mt-4 pb-4 mx-auto scroll-fade">
        Oplev den kraftige duft af malt og humle. Lyt til den boblende summen af
        gærende bryg. Smag på den friske øl med sanserne helt åbne. En
        ølsmagning og rundvisning på Fur Bryghus tager dig igennem mange af
        øllets facetter, samtidig med du får et indblik i bryghusets 20-årige
        historie og en dybere indsigt i øllets verden.
      </p>
      <p class="mt-4 mx-auto scroll-fade">
        En ølsmagning på Fur Bryghus er en oplagt ide for vennerne, logen,
        polterabend, firmaevent, ølentusiasterne - eller bare jer, der kan lidt
        et rigtig godt glas øl, frisk fra hanerne. I kan vælge "Rundvisning med
        smagsprøver", "Lille ølsmagning" eller "Stor ølsmagning".
      </p>
      <img
        src="@/assets/icons/selskabspakker-ikon.svg"
        alt="Icon description"
        class="mt-4 w-32 h-32 mx-auto scroll-fade"
      />
    </div>
  </div>
  <div>
    <SceneAnimation2 :scenes="myScenesArray" />
  </div>
  <div class="bg-[#E2D4BB] w-full h-auto mb-4 pt-8">
    <h2 class="text-center pb-2">Bestil Ølsmagning</h2>
    <p class="mx-auto max-w-[50%]">
      Er i en gruppe der ønsker at bestille en ølsmagning eller rundvisning på
      vores dejlige bryghus, så tøv ikke med at send os en mail. Sørg for at
      have de fleste detaljer på plads, så finder vi sammen den bedste løsning.
    </p>
    <Button />
  </div>
  <FocusedEntryPoints
    :entries="['Vores-produkter', 'Bryggeprocessen', 'Gardbutik']"
  />
</template>

<script setup>
const title = ref("Ølsmagninger og rundvisninger");
const description = ref(
  "Vi tilbyder ølsmagninger og rundvisninger efter dine behov"
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

import SceneAnimation2 from "~/components/SceneAnimation2.vue";
import Hero from "~/components/Hero.vue";
import FocusedEntryPoints from "~/components/FocusedEntryPoints.vue";
import Button from "~/components/Button.vue";

// Billeder til karousel desktop
import imageRundvisning from "@/assets/images/desktop/olsmagninger-og-rundvisninger-rundvisning.webp";

import imageLilleOlsmagning from "@/assets/images/desktop/olsmagninger-og-rundvisninger-lille-olsmaning.webp";

import imageStorOlsmagning from "@/assets/images/desktop/olsmagninger-og-rundvisninger-stor-olsmagning.webp";

import heroDesktop from "@/assets/images/desktop/olsmagninger-og-rundvisninger-hero.webp";

// Billeder til mobil
import heroMobile from "@/assets/images/mobile/Olsmagning_Hero_Mobile.png";

import imageRundvisningMobile from "@/assets/images/mobile/Olprocessen_Hero_Mobile.png";

import imageLilleOlsmagningMobile from "@/assets/images/mobile/Olsmagning_LilleOlsmagning_Mobile.png";

import imageStorOlsmagningMobile from "@/assets/images/mobile/Olsmagning_StorOlsmagning_Mobile.png";

// Array med scener til SceneAnimation2 komponenten
const myScenesArray = [
  {
    title: "Rundvisning med smagsprøver",
    sideTitle: "",
    image: imageRundvisning,
    srcSet: {
      "320w": imageRundvisningMobile,
      "768w": imageRundvisning,
    },
    text: [
      "* Historien om Fur Bryghus og øllets verden",
      "* Rundvisning i bryggeriet",
      "* Smagning af 4 Fur-øl á 0,1 l. ",
      "* Afslutning i Gårdbutikken ",
      "* Kan bookes for grupper fra 20 til 60 personer Varighed: 1,25 timer Pris pr. person: 175,- ",
      "Gårdbutikkens ølbar er åben og serverer frisktappet fadøl og kolde flaskeøl. Derudover er hele Fur Bryghus varesortiment tilgængeligt, så dagens favoritter kan komme med hjem. Mht. spisning er der er mulighed for tilkøb af sandwich efter smagningen eller spisning i restauranten.",
    ],
  },
  {
    title: "Lille Ølsmagning",
    sideTitle: "",
    image: imageLilleOlsmagning,
    srcSet: {
      "320w": imageLilleOlsmagningMobile,
      "768w": imageLilleOlsmagning,
    },
    text: [
      "* Foregår i Gårdbutikken",
      "* Historien om Fur Bryghus og øllets verden",
      "* Smagning af 4 Fur-fadøl á 0,2 l. ",
      "* Saltede snacks under smagningen ",
      "* Varighed: 1,5 timer ",
      "* Pris pr. person: 295,- ",
      "* Kan bookes for grupper fra 15 til 25 personer*",
      "Gårdbutikkens har hele Fur Bryghus varesortiment tilgængeligt, så dagens favoritter kan komme med hjem. Mht. spisning er der er mulighed for tilkøb af sandwich efter smagningen eller spisning i restauranten.",
      "Ved flere end 25 personer flyttes smagningen til et større lokale, og der afsluttes i Gårdbutikken, så I ikke går glip af muligheden for at tage dagens favoritter med hjem.",
    ],
  },
  {
    title: "Stor Ølsmagning",
    sideTitle: "",
    image: imageStorOlsmagning,
    srcSet: {
      "320w": imageStorOlsmagningMobile,
      "768w": imageStorOlsmagning,
    },
    text: [
      "* Historien om Fur Bryghus og øllets verden",
      "* Rundvisning i bryggeriet",
      "* Smagning af 6 x 0,2 l. fadøl + 1 x 3 cl. Fur snaps",
      "* Saltede snacks under smagningen ",
      "* Afslutning i Gårdbutikken ",
      "* Kan bookes for grupper fra 15 til 25 personer",
      "* Varighed: 2,5 timer",
      "* Pris pr. person: 450,",
      "Gårdbutikkens har hele Fur Bryghus varesortiment tilgængeligt, så dagens favoritter kan komme med hjem. Mht. spisning er der er mulighed for tilkøb af sandwich efter smagningen eller spisning i restauranten.",
      "Ved flere end 25 personer flyttes smagningen til et større lokale, og der afsluttes i Gårdbutikken, så I ikke går glip af muligheden for at tage dagens favoritter med hjem.",
    ],
  },
];

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
