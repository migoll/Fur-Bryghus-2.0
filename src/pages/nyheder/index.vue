<template>
    <Hero  
    heading="Nyheder"
    :imageMobile="mobileImg"
    :imageDesktop="desktopImg"
    imageAlt="Bryggeriet"
    />

    <section class="flex flex-col items-center content-center">
        <div>
        <h3 class="p-medium px-[2rem] py-[1rem] max-w-[1240px] text-center ">Læs omkring hvad der sker på Fur Bryghus og alle de arrangementer som vi arrangerer her på stedet.</h3>
        </div>
    </section>

  <NyhedsGrid :limit="100" />
  
</template>

<script setup>
import mobileImg from '@/assets/images/mobile/Nyheder_Hero.jpg'
import desktopImg from '@/assets/images/desktop/Nyheder_Hero.jpg'
</script>

<style scoped></style>