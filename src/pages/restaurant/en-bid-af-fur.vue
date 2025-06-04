<template>
  <!-- Menukort siden hvor der bruges 3 komponenter til at vise indhold. en herosektion, en intro sektion og menutabs hvor man kan se menukortet i tabs -->
  <Hero
    heroHeading="En bid af Fur"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Billede restauranten"
  />

  <section class="flex flex-col items-center">

    <div class="md:flex flex-col md:justify-center md:h-[700px] md:w-full lg:h-[500px] px-[1rem] md:px-[3rem] py-[3rem] gap-3 xl:max-w-[1240px] md:max-w-[60%]">
      <h2 class="text-center scroll-fade">Fokus på ingredienserne</h2>
      <p class="mx-auto scroll-fade">I vores produktion af øl har vi stor fokus på brug af lokale ingredienser. Det samme gælder også i vores udsøgte frokostretter, som er fremstillet af lokale råverer.</p>
      <p class="mx-auto scroll-fade">Sæsonens friske grøntsager høstes samme dag, som de tilberedes. Retterne kombineres, så smag og udseende tilfredsstiller alle sanser.</p>
       <img
        src="@/assets/icons/enBidaFur-ikon.svg"
        alt="Icon description"
        class="mt-4 w-32 h-32 mx-auto scroll-fade"
      />
    </div>
  </section>

  <BasicSection
    heading=" Kød fra Grambogård med fokus på dyrevelfærd"
    text="Dyrevelfærd har altid betydet meget for os, her på Fur Bryghus. Det kan bland andet ses via vores egne frilandsgrise. Fra 1. januar 2018 har vi indgået et sammenarbejde med Grambogård, som har specialiseret sig i kvalitetskød fra fritgående dyr, hvor der er 100% fokus på dyrevelfærd, respekt for dyrene og ikke mindst den gode smag."
    text2="Alt vores okse- og grisekød kommer fra Grambogård samt selvfølgelig vores egen produktion af frilandsgrise. Vi bruger kødet fra  Grambogård, da der er vores garanti for, at dyrene har haft en rolig og god opvækst, samt af dyreetiske grunde og respekt for det gode dyreliv. Det er god smag! "
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-6"
    textColor="text-neutral-6"
    :bgImage="traeBackground"
    openInNewTab="true"
  />

  <BasicSection
    heading="Fokus på bæredygtighed"
    text="På Fur Bryghus arbejder vi hele tiden med en så bæredygtig produktion som muligt. Det er ikke kun en reaktion på jordens knappe ressourcer og ”brug og smid væk” kulturen - bæredygtighed er økonomisk ansvarlighed, og det vil vi gerne være."
    text2="På Fur Bryghus arbejder vi hele tiden med en så bæredygtig produktion som muligt. Det er ikke kun en reaktion på jordens knappe ressourcer og ”brug og smid væk” kulturen - bæredygtighed er økonomisk ansvarlighed, og det vil vi gerne være."
    :listItems="[
      'Vi giver vores restprodukt fra bryggeriprocessen til en lokal landmand, der anvender det som et supplement til fodring af fedekvæg.',
      'En del af masken anvendes ligeledes  i vores hjemmebagte brød, der serveres i restauranten.',
      'Fra april 2016 har vi hvert år haft 2 hold af  9 frilandsgrise, som lever af alle vores grøntrester fra køkkenet – suppleret med rigtigt svinefoder.',
      'De har et liv med masser af plads, fantastisk opvækst, og det giver   nogle grise med krølle på halen.',
      'I 2014 skiftede vi alle vores papirmaterialer ud med T3 Natural-  papiret, der udelukkende er fremstillet af genanvendte mælkekartoner, eller tilsvarende Tetra Pak emballage.',
    ]"
    :imageMobile="mobileImg1"
    :imageDesktop="desktopImg1"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-1"
    textColor="text-neutral-1"
    reverse
  />

  <BasicSection
    heading="Prøv smagen af Fur"
    text="Besøg os og få en oplevelse og smagen af Fur. Vi glæder os til at byde dig velkommen. Husk at booke bord på restauranten for at sikre dig en plads. "
    :imageMobile="mobileImg2"
    :imageDesktop="desktopImg2"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-1"
    textColor="text-neutral-1"
    buttonLabel="Book bord"
    buttonLink="https://drive.google.com/file/d/1Qhqg9xXWR6Gopufy9k_wZsM-W4fx5y24/view?usp=sharing"
    bgColor="bg-fur-accent-beige"
    openInNewTab="true"
  />

  <FocusedEntryPoints :entries="['Menukort', 'Abning', 'Kontakt']" />
</template>

<script setup>
import heroImageMobile from "@/assets/images/mobile/Enbidaffur_Hero_Mobile.png";
import heroImageDesktop from "@/assets/images/desktop/en-bid-af-fur-hero.webp";

import mobileImg from "@/assets/images/mobile/Enbidaffur_dyrevelfaer1_Mobile.png";
import desktopImg from "@/assets/images/desktop/en-bid-af-fur-kod.webp";
import mobileImg1 from "@/assets/images/mobile/Enbidaffur_dyrevelfaer2_Mobile.png";
import desktopImg1 from "@/assets/images/desktop/en-bid-af-fur-fokus.webp";
import mobileImg2 from "@/assets/images/mobile/EnBidAfFur-prov.png";
import desktopImg2 from "@/assets/images/desktop/en-bid-af-fur-prov.webp";
import traeBackground from "@/assets/images/morkTrae.png";

// Sætter Title og Meta Description for forsiden
const title = ref("En bid af Fur");
const description = ref(
  "Læs om hvordan vi udvælger vores ingredienser og arbejder med bæredygtighed."
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

<style scoped></style>
