<template>
  <div class="relative w-full h-screen overflow-hidden bg-black" ref="container">
    <div class="w-full h-full flex items-stretch">
      <!-- Left: Stacked Images + Side Title -->
      <div class="w-1/2 h-full relative overflow-hidden">
        <div class="absolute inset-0 w-full h-full">
          <div
            v-for="(scene, idx) in scenes"
            :key="scene.title"
            :ref="el => imageRefs[idx] = el"
            class="absolute inset-0 w-full h-full"
            :style="{ zIndex: scenes.length - idx }"
          >
            <img :src="scene.image" class="object-cover w-full h-full" />
            <div
              :ref="el => sideTitleRefs[idx] = el"
              class="absolute right-4 top-[75%] left-[95%] transform -rotate-90 origin-left text-white text-[40px] font-bold tracking-widest pointer-events-none"
            >
              {{ scene.sideTitle }}
            </div>
          </div>
        </div>
      </div>
      <!-- Right: Text (always black background, only current text visible) -->
      <div class="w-1/2 h-full relative overflow-hidden flex flex-col justify-center bg-black">
        <div class="absolute inset-0 flex flex-col justify-center items-center">
          <div
            v-for="(scene, idx) in scenes"
            :key="scene.title"
            :ref="el => textRefs[idx] = el"
            class="absolute inset-0 flex flex-col justify-center items-center"
            v-show="currentIndex === idx || currentIndex + 1 === idx || (currentIndex === scenes.length - 1 && idx === scenes.length - 1)"
          >
            <h3 class="text-3xl font-bold mb-4 text-white">{{ scene.title }}</h3>
            <div>
              <p class="text-left text-white" v-for="(p, i) in scene.text" :key="i">{{ p }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import imageGaering from '@/assets/images/desktop/olprocessen-gaering.webp'
import lagring from '@/assets/images/desktop/olprocessen-lagring.webp'

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)
const imageRefs = []
const textRefs = []
const sideTitleRefs = []
const currentIndex = ref(0)

const scenes = [
  {
    title: 'brygning',
    sideTitle: 'brygning',
    image: imageGaering,
    text: ['Tekst for test'],
  },
  {
    title: 'Maltning',
    sideTitle: 'MALTNING',
    image: lagring,
    text: ['Tekst for test'],
  },
  {
    title: 'Tørring og ristning',
    sideTitle: 'Tørring og ristning',
    image: imageGaering,
    text: ['Tekst for test'],
  },
  {
    title: 'Mæskning',
    sideTitle: 'MÆSKNING',
    image: imageGaering,
    text: ['Tekst for test'],
  },
  {
    title: 'Urtseparering',
    sideTitle: 'URTSEPARERING',
    image: imageGaering,
    text: ['Tekst for test'],
  },
  {
    title: 'Urtkogning',
    sideTitle: 'URTKOGNING',
    image: imageGaering,
    text: ['Tekst for test'],
  },
  {
    title: 'Gæring',
    sideTitle: 'GÆRING',
    image: imageGaering,
    text: ['Tekst for test'],
  },
   {
    title: 'Lagring',
    sideTitle: 'LAGRING',
    image: imageGaering,
    text: ['Tekst for test'],
  },
   {
    title: 'Tapning',
    sideTitle: 'TAPNING',
    image: imageGaering,
    text: ['Tekst for test'],
  },
]

onMounted(() => {
  // Set initial states
  scenes.forEach((_, idx) => {
    if (imageRefs[idx]) {
      gsap.set(imageRefs[idx], { xPercent: idx === 0 ? 0 : 100, opacity: idx === 0 ? 1 : 0 })
    }
    if (textRefs[idx]) {
      gsap.set(textRefs[idx], { y: 0, opacity: idx === 0 ? 1 : 0 })
    }
    if (sideTitleRefs[idx]) {
      gsap.set(sideTitleRefs[idx], { y: 0, opacity: idx === 0 ? 1 : 0 })
    }
  })

  ScrollTrigger.create({
    trigger: container.value,
    start: 'top top',
    end: () => `+=${window.innerHeight * (scenes.length - 1)}`,
    pin: true,
    scrub: true,
    snap: 1 / (scenes.length - 1),
    onUpdate: self => {
      const progress = self.progress * (scenes.length - 1)
      const idx = Math.floor(progress + 0.0001)
      currentIndex.value = idx
      const local = progress - idx
      // Deadzone: lock animation for first 30% of each section
      const deadzone = 0.3
      let animLocal = (local - deadzone) / (1 - deadzone)
      animLocal = Math.max(0, Math.min(animLocal, 1))
      // Animate out current text and sideTitle first (0-0.33)
      if (textRefs[idx]) {
        gsap.to(textRefs[idx], { y: -100 * Math.min(animLocal * 3, 1), opacity: 1 - Math.min(animLocal * 3, 1), duration: 0.01, overwrite: 'auto' })
      }
      if (sideTitleRefs[idx]) {
        gsap.to(sideTitleRefs[idx], { y: 100 * Math.min(animLocal * 3, 1), opacity: 1 - Math.min(animLocal * 3, 1), duration: 0.01, overwrite: 'auto' })
      }
      // Animate image out and new image in (0.33-0.66)
      if (imageRefs[idx] && imageRefs[idx + 1]) {
        let imgProgress = Math.max(0, Math.min((animLocal - 0.33) * 3 / 2, 1))
        // Current image slides right, new image slides in from left
        gsap.to(imageRefs[idx], { xPercent: imgProgress * 100, opacity: 1 - imgProgress, duration: 0.01, overwrite: 'auto' })
        gsap.to(imageRefs[idx + 1], { xPercent: -100 + imgProgress * 100, opacity: imgProgress, duration: 0.01, overwrite: 'auto' })
      }
      // Animate new text in (0.66-0.9)
      if (textRefs[idx + 1]) {
        let textInProgress = Math.max(0, Math.min((animLocal - 0.66) * 3, 1))
        gsap.to(textRefs[idx + 1], { y: 100 - textInProgress * 100, opacity: textInProgress, duration: 0.01, overwrite: 'auto' })
      }
      // Animate new sideTitle in (0.9-1)
      if (sideTitleRefs[idx + 1]) {
        let stInProgress = Math.max(0, Math.min((animLocal - 0.9) * 10, 1))
        gsap.to(sideTitleRefs[idx + 1], { y: -100 + stInProgress * 100, opacity: stInProgress, duration: 0.01, overwrite: 'auto' })
      }
    },
  })
})
</script>

<style scoped>
/* All transitions are handled by GSAP */
</style>


