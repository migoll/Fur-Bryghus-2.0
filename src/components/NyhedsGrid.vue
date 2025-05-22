<template>
  <section>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <NyhedsCard v-for="nyhed in nyheder" :key="nyhed.id" :post="nyhed" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NyhedsCard from './NyhedsCard.vue'

const props = defineProps({
  limit: {
    type: Number,
    default: 3 
  }
})

const nyheder = ref([])

onMounted(async () => {
  const res = await fetch(`https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?categories=29&per_page=100&order=desc&orderby=date&_embed`)
  const data = await res.json()

  nyheder.value = data.slice(0, props.limit)
})
</script>

