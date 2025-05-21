<template>
  <section
    :class="[
      'px-[4rem] py-[2rem] flex items-center justify-center',
      bgImage ? '' : bgColor
    ]"
      :style="bgImage ? `background-image: url(${bgImage}); background-size: cover; background-position: center;` : ''"
  >
    <div class="md:flex md:justify-center md:items-center md:h-[500px] md:w-full xl:max-w-[1280px]">
      <div class="md:w-1/2">
        <h2 :class="['mb-[1rem]', headingColor]">{{ heading }}</h2>
        <p :class="['mb-[1rem]', textColor]">{{ text }}</p>
        <Button
          v-if="buttonLabel"
          :label="buttonLabel"
          :to="buttonLink"
        />
      </div>
      <div class="md:w-1/2 md:h-full">
        <img
          :src="imageMobile"
          :alt="imageAlt"
          :srcset="`${imageDesktop} 768w`"
          class="w-full md:h-full object-cover h-[300px] mt-[1rem]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

defineProps<{
  heading: string
  text: string
  imageMobile: string
  imageDesktop: string
  imageAlt?: string
  bgColor?: string
  bgImage?: string
  headingColor?: string
  textColor?: string
  buttonLabel?: string
  buttonLink?: string
}>()
</script>
