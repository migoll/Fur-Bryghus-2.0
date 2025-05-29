<template>
  <section v-if="arrangement" class="flex flex-col-reverse w-full xl:flex-row">
    <div class="w-full p-4 md:p-8 lg:p-8 mt-8 lg:flex-1">
      <!-- Title -->
      <h2
        class="font-bold mb-2 text-center md:max-w-[20ch] mx-auto"
        v-html="arrangement?.title?.rendered"
      />

      <!-- Intro -->
      <div
        v-if="arrangement?.acf?.intro_titel"
        class="text-lg font-semibold text-center mb-2"
      >
        {{ arrangement.acf.intro_titel }}
      </div>

      <!-- Dato -->
      <div class="text-center text-sm text-gray-800 mb-4">
        <p v-if="arrangement.acf?.dato" class="mb-1">
          Afholdes: {{ arrangement.acf.dato }}
        </p>
      </div>

      <!-- Content -->
      <div
        class="max-w-[65ch] mx-auto mb-8 flex flex-col gap-4"
        v-html="arrangement?.acf?.beskrivelse || arrangement?.content?.rendered"
      />

      <!-- pris -->
      <div class="text-center p-medium text-neutral-2 mb-4">
        <p v-if="arrangement.acf?.pris">Pris: {{ arrangement.acf.pris }}</p>
      </div>

      <!-- Køb billet -->
      <div v-if="arrangement.acf?.billet_link" class="text-center mb-8">
        <Button
          :label="'Køb billet'"
          :to="arrangement.acf.billet_link"
          :openInNewTab="true"
        />
      </div>

      <!-- Back link -->
      <div class="flex justify-center">
        <NuxtLink
          to="/arrangementer"
          class="text-primary underline hover:text-primary-dark transition"
        >
          ← Tilbage til arrangementer
        </NuxtLink>
      </div>
    </div>
    <!-- Hero Image -->
    <div
      v-if="arrangement?.acf?.billede?.url"
      class="w-full flex justify-center md:flex-1 bg-fur-blue items-center"
    >
      <img
        :src="arrangement.acf.billede.url"
        :alt="arrangement.acf.billede.alt || arrangement.title.rendered"
        class="p-16"
      />
    </div>
  </section>
  <div v-else-if="pending" class="text-center py-12">Indlæser…</div>
  <div v-else class="text-center py-12">Arrangementet blev ikke fundet.</div>
  <section
    class="flex items-center justify-center flex-col max-w-[70ch] mx-auto px-4 py-8"
  >
    <h3 class="py-4">Information om sommerkoncerten</h3>
    <div class="flex flex-col gap-2">
      <h4 class="text-2xl font-bold">Billettyper</h4>
      <p class="p-small">
        VIP-billet koster 895,- + gebyr og giver adgang til all koncerter, egen
        plads i VIP området, 2-retters aftenmenu og garderobe
      </p>
      <p class="p-small">
        Almindelig billet koster 595,- + gebyr og giver adgang til alle
        koncerter
      </p>
      <p class="p-small">
        Ungdomsbillet koster 300,- + gebyr og gælder børn og unge i alderen 6-14
        år med adgang til alle koncerter.
      </p>
      <p class="p-small">Drikkevarer er ikke inkluderet i billetprisen.</p>
    </div>

    <div class="flex flex-col gap-2">
      <h4 class="text-2xl font-bold pt-8">Transport</h4>
      <p class="p-small">
        Bustransport kan som tidligere år bestilles forud hos Skive Minibusser.
        Busserne samler op og sætter af flere forskellige steder i og omkring
        Skive, Salling, Spøttrup m.v. Læs mere om køreplan og muligheder for
        opsamling hér
        <span class="underline hover:cursor-pointer hover:font-bold"
          >Tag bussen til Sommerkoncert 2025</span
        >
      </p>
      <p class="p-small">
        Taxa findes ikke længere på Fur, men kan bookes i det omfang,
        fastlandets taxaselskaber udbyder det. Derudover er det fra 24.
        september 2024 lovligt at køre privat taxakørsel på Fur, da øen ikke er
        landfast. NB: privat taxakørsel sker på eget ansvar og under dækning af
        egne forsikringer. Sæt dig ind i lovgivningen, inden du udbyder eller
        benytter privat taxakørsel. Henvisning til mere info: Privat taxa-kørsel
        lovligt på Fur (Nyhed fra TV-Midtvest)
      </p>
    </div>

    <div class="flex flex-col gap-2">
      <h4 class="text-2xl font-bold pt-8">Mad og drikke</h4>
      <p class="p-small">
        Mad og drikke må ikke medbringes, med undtagelse af diæter, der er
        nødvendige af hensyn til helbredet. Der vil være et væld af madboder og
        barer med drikkevarer med og uden alkohol, hvor vi tager imod kontanter,
        hævekort og Mobilepay. Der vil naturligvis altid være gratis adgang til
        postevand i tilfælde af høj varme eller ubehag.
      </p>
    </div>

    <div class="flex flex-col gap-2">
      <h4 class="text-2xl font-bold pt-8">Garderobe og siddepladser</h4>
      <p class="p-small">
        Siddepladser findes på pladsen, lidt væk fra scenen - også overdækket.
        Vil I gerne sidde på plænen foran scenen, må I have alle de tæpper,
        klapstole og siddeunderlag med, I har brug for.
      </p>
      <p class="p-small">
        Garderobe er inkluderet i VIP-billetter på eget ansvar - dette er ikke
        inkluderet i almindelige billetter.
      </p>
    </div>

    <div class="flex flex-col gap-2">
      <h4 class="text-2xl font-bold pt-8">Overnatning</h4>
      <p class="p-small">
        Der findes masser af hyggelige steder på Fur, hvor I kan vælge at
        overnatte i forbindelse med Sommerkoncerten. Hos
        <span
          class="underline hover:cursor-pointer hover:font-bold"
          onclick="window.open('https://www.destinationlimfjorden.dk/limfjorden/oplevelser/overnatning-fur', '_blank')"
          >Destination Limfjorden</span
        >
        findes et fint overblik, og ellers henviser vi til
        <span
          class="underline hover:cursor-pointer hover:font-bold"
          onclick="window.open('https://www.destinationlimfjorden.dk/limfjorden/den-store-guide/fursund-turistinformation-gdk602024', '_blank')
          "
          >Fursund Turistinformation.</span
        >
        Der er ikke overnatningsmuligheder på selve Fur Bryghus.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const slug = route.params.slug;
const arrangement = ref(null);
const pending = ref(true);

const fetchArrangement = async () => {
  try {
    const res = await fetch(
      `https://ap-headless.amalieandreasen.dk/wp-json/wp/v2/posts?slug=${slug}&categories=28,30`
    );
    const data = await res.json();
    arrangement.value = data[0] || null;
  } catch (e) {
    arrangement.value = null;
  } finally {
    pending.value = false;
  }
};

onMounted(fetchArrangement);

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>
