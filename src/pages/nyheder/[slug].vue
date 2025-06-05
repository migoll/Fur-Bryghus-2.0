<template>
  <div>
    <div v-if="nyhed" class="flex flex-col items-center w-full">
      <!-- Hero Image -->
      <div v-if="nyhed?.acf?.billede?.url" class="w-full flex justify-center">
        <img
          :src="nyhed.acf.billede.url"
          :alt="
            nyhed.acf.billede.alt || `Nyhedsbillede: ${nyhed.title.rendered}`
          "
          class="object-cover w-full max-h-[400px] md:max-h-[500px]"
          style="max-width: 1240px"
        />
      </div>

      <div class="w-full max-w-[700px] px-4 md:px-0 mt-8">
        <!-- Title -->
        <h1 class="mb-2 text-center" v-html="nyhed?.title?.rendered" />

        <!-- Intro -->
        <div
          v-if="nyhed?.acf?.intro_titel"
          class="text-lg font-semibold text-center mb-4"
        >
          {{ nyhed.acf.intro_titel }}
        </div>

        <!-- Date -->
        <div class="text-sm text-gray-500 text-center mb-6">
          {{ formatDate(nyhed?.date) }}
        </div>

        <!-- Content -->
        <div
          class="prose max-w-none mx-auto mb-8"
          v-html="nyhed?.acf?.beskrivelse || nyhed?.content?.rendered"
        />

        <!-- Back link -->
        <div class="flex justify-center">
          <NuxtLink
            to="/nyheder"
            class="text-primary underline hover:text-primary-dark transition"
          >
            ← Tilbage til nyheder
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else-if="pending" class="text-center py-12">Indlæser…</div>
    <div v-else class="text-center py-12">Nyheden blev ikke fundet.</div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const slug = route.params.slug;
const nyhed = ref(null);
const pending = ref(true);

const fetchNyhed = async () => {
  try {
    const res = await fetch(
      `https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?slug=${slug}&categories=29`
    );
    const data = await res.json();
    nyhed.value = data[0] || null;
  } catch (e) {
    nyhed.value = null;
  } finally {
    pending.value = false;
  }
};

onMounted(fetchNyhed);

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const metaDescription = "læs mere om den specifikke nyhed og hvad der sker på Fur Bryghus"
watchEffect(() => {
  if (nyhed.value && nyhed.value.title?.rendered) {
    useHead({
      title: nyhed.value.title.rendered,
      meta: [
        {
          name: "description",
          content: metaDescription,
        }
      ],
    });
  }
});
</script>

<style scoped>
.prose :deep(p) {
  margin-bottom: 1em;
}
</style>
