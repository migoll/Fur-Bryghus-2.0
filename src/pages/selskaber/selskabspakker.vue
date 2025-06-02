<template>
  <!-- Menukort siden hvor der bruges 3 komponenter til at vise indhold. en herosektion, en intro sektion og menutabs hvor man kan se menukortet i tabs -->
  <Hero
    heroHeading="Selskabspakker"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Billede restauranten"
  />

  <section class="flex flex-col items-center">
    <div
      class="md:flex flex-col md:justify-center md:h-[700px] md:w-full lg:h-[500px] px-[1rem] md:px-[3rem] py-[3rem] gap-3 xl:max-w-[1240px] md:max-w-[60%]"
    >
      <h2 class="text-center text-h2 md:text-h2-md font-anton">
        Hold din fest hos os
      </h2>
      <p>
        På Fur Bryghus sætter vi en stor ære i at skabe de helt perfekte rammer
        for netop Jeres fest. Uanset om I skal holde rund fødselsdag, bryllup,
        jubilæum eller kon rmation, kan I være sikre på, at vi står til rådighed
        og sørger for, at I og jeres gæster vil få en dag, I vil huske lang tid
        fremover.
      </p>
      <p>
        Vi sætter personlig rådgivning i højsædet, og vi er først tilfredse, når
        I er tilfredse. Vi står til disposition igennem hele forløbet fra
        planlæg- ning til afholdelse af Jeres selskab. Alle forslagene er inkl.
        borddækning, dekorationer, moms samt venlig og smilende betjening.
      </p>
      <p>
        Lad os holde et uforpligtende møde, så vi sammen kan skabe netop de
        rammer, som I ønsker til Jeres fest. Vi ser frem til at gøre jeres dag
        unik!
      </p>
      <div class="flex flex-col items-center w-full">
        <img src="@/assets/icons/selskabspakker-ikon.svg" alt="" />
      </div>
    </div>
  </section>

  <BasicSection
    heading="Bryllupspakke"
    text="Når I skal holde bryllup på Fur Bryghus, har vi lavet to forslag til, hvordan dagen kan se ud for Jer. På de efterfølgende sider kan I se mere om mulighederne. Alt afhængigt af Jeres ønsker kan vi tilbyde jer alt fra en lækker 3-retters bryllupsmenu med husets vine til vor luksus- pakke med bryllupskage, 4-retters menu samt udvalgte vine. Uanset hvilken pakke I vælger, vil vi råde og vejlede Jer hele vejen igennem."
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-6"
    textColor="text-neutral-6"
    buttonLabel="Læs alt om bryllupspakken"
    buttonLink="https://drive.google.com/file/d/1Qhqg9xXWR6Gopufy9k_wZsM-W4fx5y24/view?usp=sharing"
    isPdf="true"
    :bgImage="traeBackground"
    openInNewTab="true"
  />

  <BasicSection
    heading="Konfirmationspakke"
    text="Hvis i vælger at fejre konfirmation på Fur har vi samlet 2 menuer til jeres i vores selskabspdf. Her er der også mulighed for at tilkøbe natmad til hvis i vil have festen skal strække sig lidt længere. Vi har de perfekte omgivelser til en festilig konfirmation. Vores smukke natur og bygninger byder til flotte billeder af konfirmanden og plads til alle. "
    :imageMobile="mobileImg1"
    :imageDesktop="desktopImg1"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-1"
    textColor="text-neutral-1"
    buttonLabel="Læs alt om konfirmationspakken"
    buttonLink="https://drive.google.com/file/d/1Qhqg9xXWR6Gopufy9k_wZsM-W4fx5y24/view?usp=sharing"
    isPdf="true"
    openInNewTab="true"
    reverse
  />

  <BasicSection
    heading="Fødselsdagspakke"
    text="Hvis du vil holde din fødselsdag på Fur har vi forberedt 2 fødselsdagsmenuer som kan ses i vores selskabsbrochure. Der er selvfølgelig mulighed for at tilpasse ligesom du ønsker og tilføje natmad hvis festen skal strække sig længere. Vi glæder os til at byde dig og dine gæster velkomne"
    :imageMobile="mobileImg2"
    :imageDesktop="desktopImg2"
    imageAlt="Restaurant billede"
    headingColor="text-neutral-6"
    textColor="text-neutral-6"
    buttonLabel="Læs alt om fødselsdagspakken"
    buttonLink="https://drive.google.com/file/d/1Qhqg9xXWR6Gopufy9k_wZsM-W4fx5y24/view?usp=sharing"
    isPdf="true"
    :bgImage="traeBackground"
    openInNewTab="true"
  />

  <FocusedEntryPoints
    :entries="['Selskabspakker', 'Bookselskab', 'Olsmagninger']"
  />
</template>

<script setup>
import heroImageMobile from "@/assets/images/mobile/Selskabspakker_Hero_Mobile.png";
import heroImageDesktop from "@/assets/images/desktop/selskasbspakker-hero.webp";

import mobileImg from "@/assets/images/desktop/selskaber.jpg";
import desktopImg from "@/assets/images/desktop/selskaber.jpg";
import mobileImg1 from "@/assets/images/mobile/Selskabspakker_konfi_Mobile.png";
import desktopImg1 from "@/assets/images/desktop/selskabspakker-bryllupspakke.webp";
import mobileImg2 from "@/assets/images/mobile/Selskabspakker_Fodselsdag_Mobile.png";
import desktopImg2 from "@/assets/images/desktop/selskabspakker-fodselsdagspakke.webp";
import traeBackground from "@/assets/images/morkTrae.png";

// Sætter Title og Meta Description for forsiden
const title = ref("Selskabspakker");
const description = ref(
  "Vi står klar til at holde dit næste selskab. Se hvad vi tilbyder og kontakt os her."
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
</script>

<style scoped></style>
