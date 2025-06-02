<template>
  <Hero
    heroHeading="Kontakt os"
    :heroImageMobile="heroDesktop"
    :heroImageDesktop="heroDesktop"
    heroImageAlt="Billede af Fur klinten ved Fur Bryghus"
  />

  <div class="px-6 py-8 lg:px-16 lg:py-16">
    <div class="flex flex-col lg:flex-row lg:space-x-16 max-w-[1400px] mx-auto">
      <div class="lg:w-1/2">
        <h2 class="mb-4 text-h2 md:text-h2-md font-anton">
          Vi står klar til at hjælpe
        </h2>

        <p class="mb-4">
          Har du spørgsmål til vores produkter, restauranten eller
          arrangementer, så hører vi gerne fra dig. Fortæl os om din oplevelse
          og tøv ikke med at give os din feedback. Vi er altid klar til at
          hjælpe og give dig en god oplevelse af vores service.
        </p>

        <p class="mb-2">
          Mange ringer og spørger os om leje af værelser. Vi henviser i den
          forbindelse til det lokale Turistkontor på 97593053. Derudover kan vi
          henvise til Campaya Danmark.
        </p>

        <div
          class="border border-[#0F2B39] w-max mx-auto p-4 mt-4 px-12 space-y-6"
        >
          <div class="flex items-center space-x-4">
            <img
              src="@/assets/icons/Phone.svg"
              alt="Telefon ikon"
              class="w-10 h-10"
            />
            <p>+45 97 59 30 60</p>
          </div>

          <div class="flex items-center space-x-4">
            <img
              src="@/assets/icons/Message.svg"
              alt="Email ikon"
              class="w-10 h-10"
            />
            <p>info@furbryghus.dk</p>
          </div>

          <div class="flex items-center space-x-4">
            <img
              src="@/assets/icons/Pin_alt.svg"
              alt="Adresse ikon"
              class="w-10 h-10"
            />
            <p>Knudevej 3, 7884</p>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 mt-10 lg:mt-0">
        <ContactFormular />
      </div>
    </div>
  </div>
  <GoogleMap />
  <FocusedEntryPoints :entries="['Abning', 'Arrangementer', 'Olsmagninger']" />
</template>

<script setup>
import Hero from "~/components/Hero.vue";
import FocusedEntryPoints from "~/components/FocusedEntryPoints.vue";
import ContactFormular from "~/components/ContactFormular.vue";
import GoogleMap from "~/components/GoogleMap.vue";

// Billeder til desktop og mobil (midlertidigt samme billede)
import heroDesktop from "~/assets/images/desktop/kontakt-os-hero.webp";
</script>
