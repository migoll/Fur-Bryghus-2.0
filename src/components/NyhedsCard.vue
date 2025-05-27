<template>
  <!-- Her laves det nyhedscard som indsættes i nyhedsgrid. her bruges alt det data som blev hentet overfra wordpress api'et -->
  <NuxtLink :to="getLink()">
    <div class="nyhedsCard p-[1rem]">
     <div class="relative overflow-hidden">
  <img
    v-if="props.post.acf?.billede"
    :src="props.post.acf.billede.url"
    :alt="props.post.acf.billede.alt"
    class="w-full h-[350px] object-cover hover:scale-[110%] ease-in-out duration-500"
  />
  <!-- Gradient overlay -->
  <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

  <p class="absolute bottom-0 left-0 text-neutral-6 font-anton text-[2.5rem] ml-[1rem] z-10">
    {{ dato }}
  </p>
</div>
      <div class="flex mt-[1rem]">
      <div>  <h4 class="font-anton text-[2rem]">{{post.title.rendered  }}</h4> </div>
        <div> <p class="border-solid border-2 p-2 border-neutral-1 rounded-full ml-[0.5rem]"> {{ post.acf.eventtype[0]?.name }}</p>
            </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
// Her defineres proppen post, som får et objekt der hvor den indsættes
const props = defineProps({
  post: Object
})

const dato = props.post?.acf?.dato ?? props.post?.acf?.Dato ?? 'Ingen dato'

// Categories: 29 = nyheder, 28/30 = arrangementer
const getLink = () => {
  if (props.post.categories?.includes(29)) {
    return `/nyheder/${props.post.slug}`
  }
  if (
    props.post.categories?.includes(28) ||
    props.post.categories?.includes(30)
  ) {
    return `/arrangementer/${props.post.slug}`
  }
  // fallback (optional)
  return `/nyheder/${props.post.slug}`
}
</script>

<style scoped></style>
