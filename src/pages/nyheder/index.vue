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
        Læs omkring hvad der sker på Fur Bryghus og alle de arrangementer som vi
        arrangerer her på stedet.
      </h3>
    </div>
  </section>

  <NyhedsGrid :limit="100" @update:isLoading="isLoading = $event" />
</template>

<script setup>
import heroImageMobile from "@/assets/images/mobile/Nyheder_hero.jpg";
import heroImageDesktop from "@/assets/images/desktop/nyheder-hero.webp";

const isLoading = ref(true);

// Sætter Title og Meta Description for forsiden
const title = ref("Nyheder");
const description = ref(
  "Læs om hvad der sker og hvad du kan opleve på Fur Bryghus"
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
</script>

<style scoped></style>
