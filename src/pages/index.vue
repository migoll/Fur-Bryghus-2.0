<template>
  <!-- hero sektion -->
  <section
    class="hero relative h-[50vh] max-w-screen xs:h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-visible"
  >
    <img
      src="../assets/images/mobile/Forside_Hero_Mobile.png"
      alt="Fur bryghus"
      class="object-cover w-full h-full"
      srcset="../assets/images/desktop/Forside-hero.webp 768w"
    />

    <!-- gradient til herosektion -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#00000077] via-transparent to-transparent z-10"
    ></div>

    <h1
      ref="heroTitle"
      class="absolute top-1/2 md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-6 z-40 text-center invisible text-h1 md:text-h1-md font-anton"
    >
      Fur Bryghus
    </h1>

    <!-- 3 billeder af øl der hentes dynamisk fra WordPress Api'et -->
    <div
      class="beerImg md:flex gap-4 justify-center absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 z-30 hidden"
    >
      <router-link :to="`/webshop/fur-paskebryg`">
        <img
          :src="billedeUrl1"
          :alt="alt1"
          class="h-[20rem] lg:h-[32rem] w-full object-cover"
        />
      </router-link>
      <router-link :to="`webshop/fur-renaessance`">
        <img
          :src="billedeUrl2"
          :alt="alt2"
          class="h-[20rem] lg:h-[32rem] w-full object-cover"
        />
      </router-link>
      <router-link :to="`webshop/fur-frokost`">
        <img
          :src="billedeUrl3"
          :alt="alt3"
          class="h-[20rem] lg:h-[32rem] w-full object-cover"
        />
      </router-link>
    </div>
  </section>

  <!-- Sektion til de 4 unique selling points -->
  <section class="uspSection bg-fur-accent-beige -mt-16 z-40 relative">
    <div
      class="fypFlex flex flex-col justify-center items-center py-[1.5rem] md:flex-row"
    >
      <div class="usp opacity-0">
        <p class="font-anton mb-[1rem]">Lokale Råvarer</p>
        <img src="../assets/icons/korn.svg" alt="Ikon af korn" />
      </div>
      <span
        class="w-1/2 h-px bg-fur-accent-beer my-4 md:rotate-90 md:w-[8rem] block"
      ></span>
      <div class="usp opacity-0">
        <p class="font-anton mb-[1rem]">Naturlig proces</p>
        <img src="../assets/icons/olTonde.svg" alt="Ikon af korn" />
      </div>
      <span
        class="w-1/2 h-px bg-fur-accent-beer my-4 md:rotate-90 md:w-[8rem] block"
      ></span>
      <div class="usp opacity-0">
        <p class="font-anton mb-[1rem]">Bredt udvalg</p>
        <img src="../assets/icons/ol.svg" alt="Ikon af korn" />
      </div>
      <span
        class="w-1/2 h-px bg-fur-accent-beer my-4 md:rotate-90 md:w-[8rem] block"
      ></span>
      <div class="usp opacity-0">
        <p class="font-anton mb-[1rem]">Brygget på vand fra Fur</p>
        <img src="../assets/icons/olHus.svg" alt="Ikon af korn" />
      </div>
    </div>
  </section>

  <!-- sektion med en lille intro til bryghuset -->
  <section class="intro">
    <div
      class="md:flex md:justify-center md:items-center md:h-[700px] md:w-full lg:h-[500px]"
    >
      <div class="mx-[2rem] my-[2rem] md:p-[4rem] md:w-1/2">
        <h2 class="mb-[1rem] scroll-fade text-h2 md:text-h2-md font-anton">
          Besøg et ægte mikrobryggeri på øen Fur midt i Limfjorden.
        </h2>
        <p class="mb-[1rem] scroll-fade">
          Besøg et ægte mikrobryggeri på øen Fur midt i Limfjorden. Se det
          arbejdende bryggeri, besøg gårdbutikken og ølbaren, eller spis en
          lækker frokost i restauranten.
        </p>
        <Button
          label="Læs mere om vores historie"
          to="/bryggeriet/vores-historie"
          class="scroll-fade"
        />
      </div>
      <div class="md:w-1/2 md:h-full">
        <img
          src="../assets/images/mobile/Forside_Intro_Mobile.png"
          alt="Billede af knudeklinten på Fur"
          class="w-full md:h-full object-cover h-[300px]"
        />
      </div>
    </div>
  </section>

  <!-- åbningstiderne sektion med tekst til venstre, hvor der bliver hentet et komponent fra Abningstider.vue -->
  <section
    class="abningstider bg-fur-blue px-[4rem] py-[2rem] flex items-center justify-center"
  >
    <div
      class="md:flex md:justify-center md:items-center md:h-[500px] md:w-full xl:max-w-[1280px]"
    >
      <div class="md:w-1/2">
        <h2
          class="mb-[1rem] text-neutral-6 scroll-fade text-h2 md:text-h2-md font-anton"
        >
          Restaurantens åbningstider
        </h2>
        <p class="mb-[1rem] text-neutral-6 p-medium scroll-fade">
          Bryghuset følger ikke restaurantents åbningstider, og åbner kun op til
          arrangementer og smagninger
        </p>
      </div>
      <div class="md:p-[4rem] md:w-1/2">
        <Abningstider headingColor="text-white" liColor="text-white" />
      </div>
    </div>
  </section>

  <!-- Sommmerkoncert sektion -->
  <section class="sommerKoncert max-w-screen">
    <div
      class="md:flex md:justify-center md:items-center md:flex-row-reverse md:h-[500px] md:w-full"
    >
      <div class="mx-[2rem] my-[2rem] md:p-[4rem] md:w-1/2">
        <h2
          class="mb-[1rem] md:mb-[3rem] md:break-all scroll-fade text-h2 md:text-h2-md font-anton"
        >
          Sommerkoncerten
        </h2>
        <p class="mb-[1rem] md:mb-[3rem] scroll-fade">
          Fur Bryghus' sommerkoncert 2025 byder på livemusik, god mad og kolde
          øl i hyggelige, naturskønne rammer.
        </p>
        <Button
          label="Læs mere om sommerkoncerten"
          to="#"
          class="scroll-fade"
        />
      </div>
      <div class="md:w-1/2 md:h-full">
        <img
          src="../assets/images/mobile/Forside_Sommerkoncert_Mobile.png"
          alt="Billede af knudeklinten på Fur"
          class="w-full md:h-full object-cover h-[300px]"
        />
      </div>
    </div>
  </section>

  <!-- Ølkarrusel komponent -->
  <OlKarrusel :produktSorteringId="45" />

  <section class="flex items-center justify-center py-[2rem] lg:py-[4rem]">
    <div
      class="md:py-[4rem] py-[2rem] lg:py-[2rem] flex box-border max-w-[1240px] flex-col gap-[20px] items-center"
    >
      <h2 class="scroll-fade text-h2 md:text-h2-md font-anton">Nyheder</h2>
      <NyhedsGrid :limit="3" />
      <Button label="Se alle nyheder" to="/nyheder" class="scroll-fade" />
    </div>
  </section>

  <!-- Sektion omkring restauranten i bryghuset. Importeret komponent fra BasicSection.vue -->
  <BasicSection
    heading="Restaurant Bryghuset"
    text="Restauranten er sæsonlukket i perioden november til og med februar 2025 – vi åbner dog for selskaber over 20 personer."
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Restaurant billede"
    :bgImage="traeBackground"
    headingColor="text-neutral-6"
    textColor="text-neutral-6"
    buttonLabel="Book bord"
    buttonLink="https://book.dinnerbooking.com/dk/da-DK/book/index/2837/2"
  />

  <!-- Anmeldelse komponent -->
  <Reviews />
</template>
<script setup>
// Her bruges gsap til at lave en tekst animation på h1
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(SplitText, TextPlugin);
const heroTitle = ref(null);

onMounted(() => {
  gsap.set(heroTitle.value, { visibility: "visible" });

  // Her vælges der at der skal animeres efter hvert ord og herefter vælges der spcifikationerne.
  const split = new SplitText(heroTitle.value, { type: "words" });
  gsap.from(split.words, {
    y: 70,
    opacity: 0,
    rotation: "random(-20, -20)",
    duration: 0.8,
    ease: "ease",
    stagger: 0.7,
  });
});

// Sætter Title og Meta Description for forsiden
const title = ref("Fur Bryghus");
const description = ref(
  "Velkommen til Fur Bryghus, placeret på Danmarks Skønneste ø Fur"
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

// Her oprettes variabler til at gemme det indhold som vi henter fra rest Api'et til herobilledet med de 3 øl.
const billedeUrl1 = ref(null);
const billedeUrl2 = ref(null);
const billedeUrl3 = ref(null);
const alt1 = ref(null);
const alt2 = ref(null);
const alt3 = ref(null);

// Her fetches dataen fra wordpress api'et. der skal bruges fra 3 forskellige posts og derfor skal alt dataen hentes fra alle 3 url'er før der gås videre.
Promise.all([
  fetch("https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts/356"),
  fetch("https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts/455"),
  fetch("https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts/397"),
])
  // herefter omformes dataen til json og tilsidst udtrækkes dataen og bliver opdateret i de tomme variabler ovenfor
  .then(async ([res1, res2, res3]) => {
    const data1 = await res1.json();
    const data2 = await res2.json();
    const data3 = await res3.json();
    billedeUrl1.value = data1.acf.billede1.url;
    billedeUrl2.value = data2.acf.billede1.url;
    billedeUrl3.value = data3.acf.billede1.url;
    alt1.value = data1.acf.billede1.alt;
    alt2.value = data2.acf.billede1.alt;
    alt3.value = data3.acf.billede1.alt;
  })
  // Hvis der sker en fejl i fetchet, bliver der vist en error i konsollen
  .catch((error) => {
    console.error("Der er sket en fejl", error);
  });

// Her importeres de billeder som bliver brugt i basicSection komponentet
import mobileImg from "@/assets/images/mobile/Forside_Restaurant_Mobile.png";
import desktopImg from "@/assets/images/desktop/Forside-restaurant-bryghuset.webp";
import traeBackground from "@/assets/images/morkTrae.png";

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

  const usps = document.querySelectorAll(".usp");
  const uspobserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          usps.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("fade-up");
            }, i * 300);
          });
          uspobserver.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );

  if (usps.length) {
    uspobserver.observe(usps[0]);
  }
});
</script>

<style scoped>
.beerImg img {
  transition: transform 0.3s ease-in-out;
}

.beerImg img:hover {
  transform: translateY(-18px) scale(1.05);
}

h1 {
  animation: slideUp 2s ease-in-out;
}

@keyframes slideUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-up {
  opacity: 0;
  animation: fadeUp 1s ease forwards;
}
</style>
