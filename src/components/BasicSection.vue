<template>
  <!-- Genanvenlig sektion med overskrift, tekst, valgfri knap, valgfri baggrund og billede, kan bruges mange steder til forskellig information -->
  <section
    :class="[
      // Hvis der er et baggrundsbillede tilføjes ingen klasse fordi billedet bruges nede i style. hvis der er en faarve istedet bruges baggrundsfarve som klasse, så vi kan sætte den med tailwind css

      'px-4 py-8 md:py-[4rem] md:px-16 flex items-center justify-center md:min-h-[700px]',
      bgImage ? '' : bgColor
    ]
    // her defineres hvordan baggrundsbilledet sættes hvis der findes det
    ":style="bgImage ? `background-image: url(${bgImage}); background-size: cover; background-position: center;` : ''"

  >
    <div
      :class="[
        'md:flex md:justify-center md:items-center md:h-full md:w-full xl:max-w-[1280px] md:gap-[5rem]',
        reverse ? 'md:flex-row-reverse' : '',
      ]"
    >
      <div class="lg:w-1/2">
        <!-- Her sættes dynamiskefarver til h2 og p så brugeren selv kan vælge farven -->

        <h2 :class="['mb-4 scroll-fade', headingColor]">{{ heading }}</h2>
        <p :class="['mb-4 scroll-fade', textColor]">{{ text }}</p>
        <p :class="['mb-4 scroll-fade', textColor]">{{ text2 }}</p>
        <!-- Her kan man vælge at indsætte en dynamisk liste -->
        <ul
        v-if="listItems && listItems.length"
        :class="['mb-4 list-disc pl-5 scroll-fade', textColor]"

        >
          <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
        </ul>
        <!-- Her indsættes det knap komponent som vi allerede har lavet -->
        <Button
          v-if="buttonLabel"
          :label="buttonLabel"
          :to="buttonLink"
          :is-pdf="isPdf"
          :open-in-new-tab="openInNewTab"
        />
      </div>
      <div class="md:h-full lg:w-1/2">
        <img
          :src="imageMobile"
          :alt="imageAlt"
          :srcset="`${imageDesktop} 768w`"
          class="w-full md:h-[400px] object-cover mt-4 md:m-0 scroll-fade"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Her bruge typescript til at definerer komponentets props
// ? = valgfri prop
// Typescript bruges her for at minimere fejl under udvikling og hvis der bliver sat noget forkert der hvor komponentet bruges
defineProps<{
  heading: string;
  text: string;
  text2?: string;
  listItems?: string[];
  imageMobile: string;
  imageDesktop: string;
  imageAlt?: string;
  bgColor?: string;
  bgImage?: string;
  headingColor?: string;
  textColor?: string;
  buttonLabel?: string;
  buttonLink?: string;
  reverse?: boolean;
  isPdf?: boolean;
  openInNewTab?: boolean;
}>();

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
