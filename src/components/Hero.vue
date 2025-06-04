<template>
  <!-- dette komponent bruges som hero sektion globalt på siderne.  -->
  <section
    class="hero relative h-[50vh] max-w-screen xs:h-[55vh] md:h-[60vh] lg:h-[60vh] overflow-visible"
  >
    <img
      :src="heroImageMobile"
      :alt="heroImageAlt"
      :srcset="`${heroImageDesktop} 768w`"
      class="object-cover w-full h-full"
    />

    <!-- gradient til herosektion -->
    <div class="absolute inset-0 bg-gradient-to-t from-[#00000077] z-10"></div>

    <h1
      ref="heroTitle"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-6 z-40 text-center invisible text-h1 md:text-h1-md font-anton"
    >
      {{ heroHeading }}
    </h1>
  </section>
</template>

<script setup lang="ts">
// Her kan defineres titel, billeder og alt tekst
defineProps<{
  heroHeading: string;
  heroImageMobile: string;
  heroImageDesktop: string;
  heroImageAlt?: string;
}>();

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(SplitText, TextPlugin);
const heroTitle = ref(null);

onMounted(() => {
  gsap.set(heroTitle.value, { visibility: "visible" });

  const split = new SplitText(heroTitle.value, { type: "words" });
  gsap.from(split.words, {
    y: 70,
    opacity: 0,
    rotation: "random(-20, -20)",
    duration: 0.8,
    ease: "ease",
    stagger: 0.4,
  });
});
</script>

<style scoped></style>
