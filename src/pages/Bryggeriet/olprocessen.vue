<template>
  <Hero
    heroHeading="Ølprocessen"
    :heroImageMobile="heroMobile"
    :heroImageDesktop="heroDesktop"
    heroImageAlt="Billede af øl på samlebånd i bryggeriet"
  />
  <div class="px-16 py-8">
    <div class="max-w-[1024px] justify-center mx-auto pb-4">
      <h2 class="text-center">Smagen af Fur og ren passion</h2>
      <p class="mt-4">
        God øl kræver gode råvarer. Et veludstyret bryggeri. Og ikke mindst en
        dygtig og passioneret brygmester. Det har vi på Fur Bryghus. Og mere
        til. Vi har en unik historie og beliggenhed. Dertil kommer det helt
        specielle Fur vand, fyldt med naturlige mineraler og salte, der optages
        gennem den lange rejse gennem øens lag af moler og vulkansk aske.
      </p>
      <img
        src="@/assets/icons/olTonde.svg"
        alt="Icon description"
        class="mt-4 w-32 h-32 mx-auto"
      />
    </div>
    <div class="flex flex-col md:flex-row gap-8 mt-8 max-w-[1400px]">
      <div class="w-full md:w-1/2">
        <img
          src="~/assets/images/desktop/olprocessen-gaering.webp"
          alt="Ølprocessen - Gæring"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-bold mb-4">Bryggeriet og brygmesteren</h2>
        <p class="mb-4">
          Fur Bryghus har indrettet bryggeriet med udvalgt udstyr. Selve
          Brygværket samt gærkarret er fabrikeret i Tjekkiet. De første tanke
          kom fra Slovenien – og er siden suppleret med to danske tanke.
          Tappekolonnen er ligeledes dansk, og pasteuriserings-enheden er
          produceret i Tyskland. Resultatet er et stærkt og professionelt
          set-up.
        </p>
        <p>
          Vores brygmester Flemming Asmussen er manden bag Fur øl. Flemming er
          uddannet brygmester fra den Skandinaviske Bryggerhøjskole i København
          og kom til Fur Bryghus den 1. januar 2005. Med familien – og 15 års
          erfaring fra Bryggeriet Fuglsang i Haderslev. Med sin store viden og
          erfaring har Flemming skabt stor respekt og anerkendelse omkring Fur
          øl fra forbrugere til bryggeri-verdenen. Og han deler gerne ud af sin
          viden til hobby-bryggere og andre øl-elskere – bare skriv til ham på
          flas@furbryghus.dk eller giv ham et kald på 9759 3060.
        </p>
      </div>
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
import FocusedEntryPoints from "~/components/FocusedEntryPoints.vue";
import Hero from "~/components/Hero.vue";

// Billeder til karousel desktop
import olprocessen from "@/assets/images/desktop/olprocessen-proces.webp";
import imageGaering from "@/assets/images/desktop/olprocessen-gaering.webp";
import imageMaltning from "@/assets/images/desktop/olprocessen-maltning.webp";
import imageTorring from "@/assets/images/desktop/olprocessen-torring.webp";
import imageMaeskning from "@/assets/images/desktop/olprocessen-maeskning.webp";
import imageSeparering from "@/assets/images/desktop/olprocessen-urteseparering.webp";
import imageKogning from "@/assets/images/desktop/olprocessen-urtkogning.webp";
import imageLagring from "@/assets/images/desktop/olprocessen-lagring.webp";
import imageTapning from "@/assets/images/desktop/olprocessen-tapning.webp";
import heroDesktop from "@/assets/images/desktop/olprocessen-hero.webp";

// Billeder til mobil
import imageOlprocessenMobile from "@/assets/images/mobile/Olprocessen_NaturligProcess_Mobile.png";
import imageGaering_Mobile from "@/assets/images/mobile/Olprocessen_Gaering_Mobile.png";
import imageMaltningMobile from "@/assets/images/mobile/Olprocessen_Maltning_Mobile.png";
import imageTorringMobile from "@/assets/images/mobile/Olprocessen_Torring_Mobile.png";
import imageMaeskningMobile from "@/assets/images/mobile/Olprocessen_Maeskning_Mobile.png";
import imageSepareringMobile from "@/assets/images/mobile/Olprocessen_Urtseparering_Mobile.png";
import imageKogningMobile from "@/assets/images/mobile/Olprocessen_Urtkogning_Mobile.png";
import imageLagringMobile from "@/assets/images/mobile/Olprocessen_Lagring_Mobile.png";
import imageTapningMobile from "@/assets/images/mobile/Olprocessen_Tapning_Mobile.png";
import heroMobile from "@/assets/images/mobile/Olprocessen_Hero_Mobile.png";

// Array med scener
const myScenesArray = [
  {
    title: "En naturlig proces",
    sideTitle: "Øl-brygning",
    image: olprocessen,
    srcSet: {
      "320w": imageOlprocessenMobile,
      "768w": olprocessen,
    },
    text: [
      "Ølbrygning er en kunst. Og et håndværk. Det enkelte bryg tager flere uger, hvor brygmesteren nøje afstemmer råvarer, og derefter nøje overvåger mæskning, urtkogning og gæring, så de forskellige processer går op i en højere enhed.",
      'De fleste bryggerier - selv helt små mikrobryggerier - benytter sig i stadig stigende grad af moderne teknik og computerteknologi for at optimere processerne. Men ølbrygning er og bliver en naturlig proces, som ikke kan gennemføres uden personlig føling med, hvordan øllets råvarer "spiller sammen".',
      "Enhver brygmester har derfor sin egen personlige måde at brygge øl på, og det er netop de forskellige sammensætninger af råvarer, bryghusets særlige gærkultur og overvågningen af produktionen med mere, der giver hvert bryggeri sine unikke produkter. Herunder kan du se en kort, generel beskrivelse af brygprocessen.",
    ],
  },
  {
    title: "1. Maltning",
    sideTitle: "Maltning",
    image: imageMaltning,
    srcSet: {
      "320w": imageMaltningMobile,
      "768w": imageMaltning,
    },
    text: [
      "Første trin i brygprocessen er maltningen, hvor den rensede og sorterede bygmalt (eller andre egnede kornsorter) bliver omdannet til malt. Maltningen starter med at få byggen til at spire. Det sker ved at lægge bygkernerne i blød, så de begynder at suge vand. Denne proces ”støbningen”, tager 1-3 døgn. Når kernerne optager vand, begynder de at spire. Nu kommer de i spirekasser, hvor de ligger i et metertykt lag på en perforeret bund, hvor der blæses luft op igennem. Kernerne vendes 2-3 gange i døgnet for ikke at filtre sammen og ligger til spiring i 4-7 døgn.",
      "Når kernerne spirer producerer kimen enzymer. Når enzymindholdet er på sit højeste, stoppes spiringen, da enzymerne er vigtige for den senere brygproces.",
    ],
  },
  {
    title: "2. Tørring og ristning",
    sideTitle: "Tørring og ristning",
    image: imageTorring,
    srcSet: {
      "320w": imageTorringMobile,
      "768w": imageTorring,
    },
    text: [
      "Spiringen stoppes ved at der blæses varm luft op imellem kernerne i spirekasserne. Den varme luft får vandet til at fordampe, så kernerne tørrer – de tørrede kornspirer kaldes malt.",
      "I slutningen af tørringen kan man riste malten ved forskellige temperaturer. Det er tørrings- og ristningstemperaturen, der er afgørende for maltens karakteristika og farve. Hvis man rister malten ved en lav temperatur, får man en lys malttype – og rister man malten ved en meget høj temperatur, får man en mørk malttype. Efter tørringen og ristningen fjerner man spirerne fra bygkernerne. Den færdige malt er nu klar til at blive brugt til ølbrygning, der kan opdeles i mæskning, urtseparering og kogning.",
    ],
  },
  {
    title: "3. Mæskning",
    sideTitle: "Mæskning",
    image: imageMaeskning,
    srcSet: {
      "320w": imageMaeskningMobile,
      "768w": imageMaeskning,
    },
    text: [
      "Mæskning er en proces, hvor enzymerne fra malten (som blev dannet, da bygkernerne spirede) omdanner maltens stivelse til maltsukker. Det er en vigtig proces, fordi maltsukkeret er nødvendigt for den senere gæring. Gæren, som tilsættes senere i processen, omdanner nemlig maltsukkeret til alkohol.",
      "Mæskningen sættes i gang ved, at man knuser malten og tilsætter varmt vand. Når den knuste malt blandes med vand, trænger enzymer og stivelse ud og opløses i vandet, hvorved mæskningen går i gang. Det er vigtigt at knuse malten, så stivelsen i kernerne bedre kan opløses i vandet.",
      "Mæskningen foregår i nogle timer ved ca. 65 °C. Opløsningen, der kaldes ”mæsken”, vil efterhånden begynde at ændre udseende.",
    ],
  },
  {
    title: "4. Urteseparering",
    sideTitle: "Urteseparering",
    image: imageSeparering,
    srcSet: {
      "320w": imageSepareringMobile,
      "768w": imageSeparering,
    },
    text: [
      "Når mæskningen er færdig, skal mæsken (malt- og vandmassen) sies i et si-kar eller et mæskfilter. Efter siningen står man tilbage med to dele. En fast del, der kaldes masken, som bl.a. består af skallerne fra malten, og en flydende del, der kaldes urten. Det er urten, der skal bruges i den videre brygproces. Urten har en markant aroma, der er sødlig og brødagtig. Hvis man smager på urten, kan man tydeligt smage resultatet af enzymernes arbejde med at omdanne stivelse til maltsukker – det smager nemlig sødt. Masken indeholder cellulose og protein og sælges til landbruget, der bruger det som foder til kvæg.",
    ],
  },
  {
    title: "5. Urtkogning",
    sideTitle: "Urtkogning",
    image: imageKogning,
    srcSet: {
      "320w": imageKogningMobile,
      "768w": imageKogning,
    },
    text: [
      "Næste trin er kogningen af urten. Urten koges sammen med humle i en urtkedel i ca. 1 time. Under kogningen afgives humlebitterstoffer til urten. Samtidig vil en del af humleolierne, der giver aroma, imidlertid forsvinde. Hvis man vil give øllet ekstra aroma, kan man tilsætte aromahumle, når urten er næsten færdigkogt, eller man kan tilsætte humleolie senere i processen.",
      "Når urten er færdigkogt, skal den køles ned, men inden da skal de udfældede stoffer – kaldet ”trub” – frasepareres. Det sker ofte i en beholder kaldet en ”whirlpool”. Det er nødvendigt at afkøle urten, inden gæren tilsættes, da gæringen skal foregå under kølige temperaturforhold. Urten har efter kogningen ændret smagsindtryk, idet maltens sødme og humlens bitterhed har afbalanceret smagen.",
    ],
  },
  {
    title: "6. Gæring",
    sideTitle: "Gæring",
    image: imageGaering,
    srcSet: {
      "320w": imageGaering_Mobile,
      "768w": imageGaering,
    },
    text: [
      "Når urten er nedkølet tilsættes ølgæren, og urten overføres til ”gærkælderen”, som er det procesafsnit på bryggeriet, hvor gæringen foregår. Før i tiden foregik gæringen i dybe kældre for at holde en lav temperatur – i dag bruger man avancerede kølingselementer på gæringstankene, så man kan styre temperaturen.",
      "I gæringstankene går gærcellerne i ”krig” med maltsukkeret og omdanner det til alkohol og kulsyre. Gæringen varer normalt 5 – 8 dage og foregår ved forskellige temperaturer afhængig af gærtypen. Anvender man undergær, foregår gæringen typisk ved 10 – 16 °C. Anvender man overgær, er temperaturen lidt højere – typisk mellem 18 – 25 °C. I gæringsprocessen er det vigtigt at følge med i, hvor aktivt gæren arbejder. Man måler bl.a. dagligt, hvor meget maltsukker som endnu ikke er blevet omdannet til alkohol.",
      "Når gæringen er færdig, vil der ske en bundfældning af gæren, hvis der er anvendt undergær. Ved overgær, stiger gæren til overfladen og danner et tykt lag på øllets overflade. Begge dele kan indsamles og genbruges 5-10 gange inden gæren kasseres. Øllet er nu en uklar væske, og smagen er ung, rå og ufærdig.",
    ],
  },
  {
    title: "7. Lagring",
    sideTitle: "Lagring",
    image: imageLagring,
    srcSet: {
      "320w": imageLagringMobile,
      "768w": imageLagring,
    },
    text: [
      "Den færdiggærede øl skal nu lagre i kolde omgivelser (0-2 °C). Lagringstiden afhænger meget af gærtypen og øltypen. Fra et par dage til flere måneder. Når øllet køles tæt på frysepunktet, sker der en fældning af stoffer, som giver uklarheder i øllet. Derfor filtreres det meste øl efter lagringen, så de udfældede stoffer fjernes. Nogle øl filtreres dog ikke, f.eks. hvedeøl, som derfor fremstår uklare. Inden øllet tappes, skal kulsyreindholdet i øllet justeres. Ofte tilsætter man lidt ekstra kulsyre for at få det ønskede kulsyreindhold.",
    ],
  },
  {
    title: "8. Tapning",
    sideTitle: "Tapning",
    image: imageTapning,
    srcSet: {
      "320w": imageTapningMobile,
      "768w": imageTapning,
    },
    text: [
      "I forbindelse med aftapningen på flaske, dåse eller fustage vil øllet normalt blive pasteuriseret enten før, i forbindelse med eller efter tapning. Pasteurisering er en kortvarig opvarmning af øllet til en temperatur over 60 °C, hvorved man uskadeliggør uønskede bakterier og forlænger holdbarheden.",
      "Øllet er nu klar til at blive nydt. Til maden eller til ren hygge. Skål.",
    ],
  },
];
</script>
