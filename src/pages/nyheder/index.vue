<template>
  <Hero  
    heroHeading="Nyheder"
    :heroImageMobile="heroImageMobile"
    :heroImageDesktop="heroImageDesktop"
    heroImageAlt="Bryggeriet"
  />

  <section class="flex flex-col items-center content-center">
    <div v-if="!isLoading">
      <h3 class="p-medium px-[2rem] py-[1rem] max-w-[1240px] text-center">
        Læs omkring hvad der sker på Fur Bryghus og alle de arrangementer som vi arrangerer her på stedet.
      </h3>
    </div>
  </section>

  <NyhedsGrid :limit="100" @update:isLoading="isLoading = $event" />
</template>

<script setup>
import heroImageMobile from '@/assets/images/mobile/Nyheder_Hero.jpg'
import heroImageDesktop from '@/assets/images/desktop/Nyheder_Hero.jpg'

const isLoading = ref(true)
</script>

<style scoped></style>