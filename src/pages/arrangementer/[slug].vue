<template>
  <div>
    <div v-if="event" class="flex flex-col items-center w-full">
      <!-- Hero Image -->
      <div v-if="event?.acf?.billede?.url" class="w-full bg-gray-100 flex justify-center">
        <img
          :src="event.acf.billede.url"
          :alt="event.acf.billede.alt || event.title.rendered"
          class="object-cover w-full max-h-[400px] md:max-h-[500px]"
          style="max-width: 1240px;"
        />
      </div>

      <div class="w-full max-w-[700px] px-4 md:px-0 mt-8">
        <!-- Title -->
        <h1 class="text-4xl font-bold mb-2 text-center" v-html="event?.title?.rendered" />

        <!-- Intro -->
        <div v-if="event?.acf?.intro_titel" class="text-lg font-semibold text-center mb-4">
          {{ event.acf.intro_titel }}
        </div>

        <!-- Date -->
        <div class="text-sm text-gray-500 text-center mb-6">
          {{ formatDate(event?.date) }}
        </div>

        <!-- Content -->
        <div class="prose max-w-none mx-auto mb-8" v-html="event?.acf?.beskrivelse || event?.content?.rendered" />

        <!-- Back link -->
        <div class="flex justify-center">
          <NuxtLink to="/arrangementer" class="text-primary underline hover:text-primary-dark transition">
            ← Tilbage til arrangementer
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else-if="pending" class="text-center py-12">Indlæser…</div>
    <div v-else class="text-center py-12">Arrangementet blev ikke fundet.</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const slug = route.params.slug
const event = ref(null)
const pending = ref(true)

const fetchEvent = async () => {
  try {
    const res = await fetch(
      `https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?slug=${slug}&categories=30,28`
    )
    const data = await res.json()
    event.value = data[0] || null
  } catch (e) {
    event.value = null
  } finally {
    pending.value = false
  }
}

onMounted(fetchEvent)

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('da-DK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.prose :deep(p) {
  margin-bottom: 1em;
}
</style>
