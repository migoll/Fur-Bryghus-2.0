<template>
  <!-- Dette grid bruges til at vise NyhedsCard.vue. på den måde kan der sættes det antal posts ind vi gerne vil have -->
  <section>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <!-- her vises den enkelt nyhed hvor der loopes igennem hver enkelt og de indsættes -->
      <NyhedsCard v-for="nyhed in nyheder" :key="nyhed.id" :post="nyhed" />
    </div>
  </section>
</template>

<script setup>
// Her defineres der props så man selv kan vælge hvor mange nyheder der skal ses
const props = defineProps({
  limit: {
    type: Number,
    default: 3 
  }
})

// nyheder er et tomt array hvorefter der indsættes data der bruges oppe i html'en
const nyheder = ref([])

// Her fetches alle data der bliver lavet om til json
onMounted(async () => {
  const res = await fetch(`https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?categories=29,28,30&per_page=100&order=desc&orderby=date&_embed`)
  const data = await res.json()

  // slice er en metode som returner en ny kopi af vores array med data. derfor hvis vi indtaster at vi kun vil se 5 nyheder, kan det lade sig gøre
  nyheder.value = data.slice(0, props.limit)

})
</script>

