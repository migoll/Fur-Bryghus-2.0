<template>
  <!-- Dette grid bruges til at vise NyhedsCard.vue. på den måde kan der sættes det antal posts ind vi gerne vil have -->
  <section class="flex flex-col items-center content-center">
    <!-- Loading animation vises kun mens isLoading er true -->
    <div
      v-if="isLoading"
      class="flex justify-center items-center flex-col h-[40vh]"
    >
      <DotLottieVue
        style="height: 200px; width: 200px"
        autoplay
        loop
        speed="0.5"
        src="https://lottie.host/72d706ae-d7cc-4f9a-b11d-33aaf8bc8ecf/0JFGSsM0eZ.lottie"
      />
      <p>Indlæser.....</p>
    </div>

    <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-3 max-w-[1240px]">
      <!-- her vises den enkelt nyhed hvor der loopes igennem hver enkelt og de indsættes -->
      <NyhedsCard v-for="nyhed in nyheder" :key="nyhed.id" :post="nyhed" />
    </div>
  </section>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const emit = defineEmits(["update:isLoading"]);

// Her defineres der props så man selv kan vælge hvor mange nyheder der skal ses
const props = defineProps({
  limit: {
    type: Number,
    default: 3,
  },
  categories: {
    type: String,
    default: "29,28,30",
  },
});

// nyheder er et tomt array hvorefter der indsættes data der bruges oppe i html'en
const nyheder = ref([]);
const isLoading = ref(true);

watch(isLoading, (val) => {
  emit("update:isLoading", val);
});

// Her fetches alle data der bliver lavet om til json
onMounted(async () => {
  try {
    const res = await fetch(
      `https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?categories=${props.categories}&per_page=100&order=desc&orderby=date&_embed`
    );
    const data = await res.json();
    nyheder.value = data.slice(0, props.limit);
  } catch (error) {
    console.error("Fejl ved hentning af nyheder:", error);
  } finally {
    // Når vi er færdige med at hente, uanset om det lykkes eller fejler
    isLoading.value = false;
  }
});
</script>
