<template>
  <div>
    <!--  Karousel som er skjult på små skærme -->
    <div
      ref="container"
      class="carousel-wrapper hidden lg:flex h-screen w-full overflow-hidden relative"
    >
      <!-- Venstre halvdel: billeder + sideTitel -->
      <div
        class="w-1/2 h-full overflow-hidden relative flex items-center justify-center bg-black"
      >
        <div
          ref="track"
          class="carousel-track flex h-full absolute top-0 left-0"
        >
          <div
            v-for="(scene, i) in scenes"
            :key="i"
            class="carousel-slide w-full h-full flex-shrink-0"
          >
            <img
              :src="scene.image"
              :srcset="scene.srcSet"
              sizes="(min-width: 768px) 50vw, 100vw"
              :alt="scene.title"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <!-- SideTitler -->
        <div
          class="side-title-wrapper absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
        >
          <div
            v-for="(scene, i) in scenes"
            :key="'side-title-' + i"
            class="side-title text-white font-bold text-6xl tracking-widest whitespace-nowrap"
            :ref="(el) => (sideTitleRefs[i] = el)"
          >
            {{ scene.sideTitle }}
          </div>
        </div>
      </div>

      <!-- Højre halvdel: tekst -->
      <div class="w-1/2 h-full flex flex-col justify-center px-16 relative">
        <div
          v-for="(scene, i) in scenes"
          :key="'text-' + i"
          class="absolute top-1/2 left-0 w-full text-content pl-4 pr-4 mb-2"
          :ref="(el) => (textRefs[i] = el)"
          style="transform: translateY(-50%); opacity: 0"
        >
          <h2 class="mb-4">
            {{ scene.title }}
          </h2>
          <p v-for="(p, j) in scene.text" :key="j" class="mb-2">{{ p }}</p>
        </div>
      </div>
    </div>

    <!-- Mobilversion  -->
    <div class="lg:hidden">
      <div v-for="(scene, i) in scenes" :key="'mobile-' + i" class="mb-16 px-4">
        <div class="relative">
          <img
            :src="scene.image"
            :srcset="scene.srcSet"
            sizes="100vw"
            :alt="scene.title"
            class="w-full rounded-lg"
          />

          <div
            class="absolute bottom-2 left-4 text-white font-bold text-xl bg-black bg-opacity-60 px-2 py-1 rounded"
          >
            {{ scene.sideTitle }}
          </div>
        </div>
        <h2 class="text-h2 md:text-h2-md font-anton mt-4">{{ scene.title }}</h2>
        <p v-for="(p, j) in scene.text" :key="'mobile-text-' + j" class="mt-2">
          {{ p }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  scenes: {
    type: Array,
    required: true,
  },
});

const container = ref(null);
const track = ref(null);
const textRefs = [];
const sideTitleRefs = [];

onMounted(() => {
  // Kun initialiser ScrollTrigger hvis skærmbredde er desktop
  if (window.innerWidth < 1024) return;

  const totalSlides = props.scenes.length;
  const scrollHeight = window.innerHeight * (totalSlides - 1);

  // Opret ScrollTrigger-tidslinje og pin containeren
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: "top top",
      end: () => `+=${scrollHeight}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });

  for (let i = 0; i < totalSlides; i++) {
    const textOutDuration = 0.3;
    const imageSlideDuration = 0.4;
    const textInDuration = 0.3;

    const startTime = i;
    const textOutEnd = startTime + textOutDuration;
    const imageSlideEnd = textOutEnd + imageSlideDuration;

    // Animer udgang af tekst
    tl.to(
      textRefs[i],
      {
        y: 50,
        opacity: 0,
        duration: textOutDuration,
        ease: "power1.inOut",
      },
      startTime
    );

    // Animer udgang af sideTitel
    tl.to(
      sideTitleRefs[i],
      {
        y: -50,
        opacity: 0,
        duration: textOutDuration,
        ease: "power1.inOut",
      },
      startTime
    );

    // Billed-transition (undtagen sidste slide)
    if (i < totalSlides - 1) {
      tl.to(
        track.value,
        {
          xPercent: `-=${100}`,
          duration: imageSlideDuration,
          ease: "power1.inOut",
        },
        textOutEnd
      );

      // Indgang af næste tekst
      tl.fromTo(
        textRefs[i + 1],
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: textInDuration, ease: "power1.inOut" },
        imageSlideEnd
      );

      // Indgang af næste sideTitel
      tl.fromTo(
        sideTitleRefs[i + 1],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: textInDuration, ease: "power1.inOut" },
        imageSlideEnd
      );
    }
  }

  // Vis første tekst og sideTitel ved start
  gsap.set(textRefs[0], { opacity: 1, y: 0 });
  gsap.set(sideTitleRefs[0], { opacity: 1, y: 0 });
});
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  user-select: none;
}

.carousel-track {
  display: flex;
  will-change: transform;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.carousel-slide {
  flex-shrink: 0;
  width: 50vw;
  height: 100%;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-content {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  opacity: 0;
}

.side-title-wrapper {
  width: 4rem;
  height: 100%;
}

.side-title {
  position: absolute;
  left: 3rem;
  top: 80%;
  transform: rotate(-90deg) translateY(-50%);
  transform-origin: left center;
  opacity: 0;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
}
</style>
