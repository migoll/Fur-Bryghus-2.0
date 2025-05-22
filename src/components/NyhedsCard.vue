<template>
  <NuxtLink :to="`/nyhed/${post.id}`">
    <div class="nyhedsCard p-[1rem]">
      <div class="relative"> 
        <img
          v-if="post.acf?.billede"
          :src="post.acf.billede.url"
          :alt="post.acf.billede.alt"
          class="w-full h-[350px] object-cover"
        />
        <p class="absolute bottom-0 left-0 text-neutral-6 font-anton text-[2.5rem] ml-[1rem]">
          {{ post.acf?.dato }}
        </p>
      </div>
      <div class="flex mt-[1rem]">
      <div>  <h4 class="font-anton text-[2rem]">{{post.title.rendered  }}</h4> </div>
        <div> <p class="border-solid border-2 p-2 border-neutral-1 rounded-full"> {{ post.acf.eventtype[0]?.name }}</p>
            </div>
      </div>
    </div>
  </NuxtLink>
</template>



<script setup>
defineProps({
  post: Object
})
</script>

<style scoped></style>
