<template>
  <div ref="sceneSection" class="flex w-full h-screen bg-white overflow-hidden relative section-pin">
    <!-- Left side: Image carousel with side title -->
    <div class="w-1/2 h-full relative overflow-hidden">
      <div ref="imageTrack" class="h-full flex transition-transform duration-700 ease-in-out">
        <div
          v-for="(scene, index) in scenes"
          :key="index"
          class="w-full h-full flex-shrink-0 relative"
        >
          <img
            :src="scene.image"
            class="w-full h-full object-cover"
            :alt="`Image ${index}`"
          />
          <div
            class="absolute right-4 top-1/2 -translate-y-1/2 left-[95%] transform -rotate-90 origin-left text-white text-3xl font-bold tracking-widest pointer-events-none"
          >
            {{ scene.sideTitle }}
          </div>
        </div>
      </div>
    </div>

    <!-- Right side: Content -->
    <div ref="textWrapper" class="w-1/2 h-full flex flex-col justify-center items-start px-12 bg-white">
      <transition-group name="fade" tag="div">
        <div :key="currentIndex" class="content-block">
          <h2 class="text-4xl font-bold mb-4">{{ scenes[currentIndex].title }}</h2>
          <div>
            <p class="mb-2" v-for="(p, i) in scenes[currentIndex].text" :key="i">{{ p }}</p>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps<{
  scenes: Array<{
    title: string
    sideTitle: string
    image: string
    text: string[]
  }>
}>()

const currentIndex = ref(0)
const sceneSection = ref<HTMLElement | null>(null)
const imageTrack = ref<HTMLElement | null>(null)

onMounted(() => {
  const numScenes = props.scenes.length

  ScrollTrigger.create({
    trigger: sceneSection.value,
    start: 'top top',
    end: () => `+=${window.innerHeight * (numScenes - 1)}`,
    scrub: true,
    pin: true,
    snap: 1 / (numScenes - 1),
    onUpdate: (self) => {
      const newIndex = Math.round(self.progress * (numScenes - 1))
      if (newIndex !== currentIndex.value) {
        currentIndex.value = newIndex
      }
    },
  })
})

watch(currentIndex, (newIndex) => {
  const offset = newIndex * 100
  gsap.to(imageTrack.value, {
    xPercent: -offset,
    duration: 0.6,
    ease: 'power2.inOut',
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
