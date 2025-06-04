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
      <h2 class="text-center">Hold din fest hos os</h2>
      <p class="mx-auto">
        På Fur Bryghus sætter vi en stor ære i at skabe de helt perfekte rammer
        for netop Jeres fest. Uanset om I skal holde rund fødselsdag, bryllup,
        jubilæum eller kon rmation, kan I være sikre på, at vi står til rådighed
        og sørger for, at I og jeres gæster vil få en dag, I vil huske lang tid
        fremover.
      </p>
      <p class="mx-auto">
        Vi sætter personlig rådgivning i højsædet, og vi er først tilfredse, når
        I er tilfredse. Vi står til disposition igennem hele forløbet fra
        planlæg- ning til afholdelse af Jeres selskab. Alle forslagene er inkl.
        borddækning, dekorationer, moms samt venlig og smilende betjening.
      </p>
      <p class="mx-auto">
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
    text="Hold dit bryllup på Fur med udsigt over Limfjorden og livskvalitet i topklasse. Et bryllup på Fur giver et eksklusivt og intimt præg til dagen. Der er mulighed for overnatning på Fur Camping, ligesom I kan arrangere overnatning i sommerhuse på øen. Husk at booke god tid i forvejen – Fur er et populært sted at holde bryllup."
    :imageMobile="mobileImg1"
    :imageDesktop="desktopImg1"
    imageAlt="Billede af bryllupsfejring på Fur Bryghus med udsigt over Limfjorden"
    headingColor="text-neutral-1"
    textColor="text-neutral-1"
    buttonLabel="Se bryllupspakker"
    buttonLink="https://drive.google.com/file/d/1Qhqg9xXWR6Gopufy9k_wZsM-W4fx5y24/view?usp=sharing"
    bgColor="bg-fur-accent-beige"
    isPdf="true"
    openInNewTab="true"
  />

  <BasicSection
    heading="Konfirmations- og studenterpakker"
    text="I har mulighed for at tilpasse alt lige som I ønsker det til jeres konfirmations - og studenterselskaber. I kan derfor også vælge at supplere med natmad eller hvad I ønsker. Vi glæder os til at byde jer velkommen og sikre at dagen bliver speciel."
    :imageMobile="mobileImg1"
    :imageDesktop="desktopImg1"
    imageAlt="Billede af konfirmations- eller studenterfest på Fur Bryghus"
    headingColor="text-neutral-6"
    textColor="text-neutral-6"
    buttonLabel="Se konfirmations- og studenterpakker"
    buttonLink="https://drive.google.com/file/d/1Qhqg9xXWR6Gopufy9k_wZsM-W4fx5y24/view?usp=sharing"
    isPdf="true"
    :bgImage="traeBackground"
    openInNewTab="true"
  />

  <BasicSection
    heading="Fødselsdagspakke"
    text="Hvis du vil holde din fødselsdag på Fur har vi forberedt 2 fødselsdagsmenuer som kan ses i vores selskabsbrochure. Der er selvfølgelig mulighed for at tilpasse ligesom du ønsker og tilføje natmad hvis festen skal strække sig længere. Vi glæder os til at byde dig og dine gæster velkomne."
    :imageMobile="mobileImg2"
    :imageDesktop="desktopImg2"
    imageAlt="Billede af fødselsdagsfejring på Fur Bryghus"
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
