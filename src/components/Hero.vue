<template>
   <section class="hero relative h-[50vh] max-w-screen xs:h-[55vh] md:h-[60vh] lg:h-[60vh] overflow-visible">
  <img
     :src="imageMobile"
    :alt="imageAlt"
    :srcset="`${imageDesktop} 768w`"
    class="object-cover w-full h-full"
  />

  <!-- gradient til herosektion -->
  <div class="absolute inset-0 bg-gradient-to-t from-[#00000077] z-10"></div>

  <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-6 z-40 text-center">
    {{ heading }}
  </h1>

</section>
</template>

<script setup lang="ts">

defineProps<{
  heading: string
  imageMobile: string
  imageDesktop: string
  imageAlt?: string
}>()

</script>

<style scoped></style>