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

        <h2 class="mb-4 scroll-fade">Vi står klar til at hjælpe</h2>


        <p class="mb-4 scroll-fade">
          Har du spørgsmål til vores produkter, restauranten eller
          arrangementer, så hører vi gerne fra dig. Fortæl os om din oplevelse
          og tøv ikke med at give os din feedback. Vi er altid klar til at
          hjælpe og give dig en god oplevelse af vores service.
        </p>

        <p class="mb-2 scroll-fade">
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
  <GoogleMap :iframe="map" />
  <FocusedEntryPoints :entries="['Abning', 'Arrangementer', 'Olsmagninger']" />
</template>

<script setup>
const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2100.412909189607!2d8.960754476648974!3d56.83157240838978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4649712cb46359bd%3A0xb7c27d6c1e362ea!2sFur%20Bryghus!5e1!3m2!1sda!2sdk!4v1749129549439!5m2!1sda!2sdk"
const title = ref("Kontakt os");
const description = ref(
  "Hvis du har spørgsmål kan du kontakte os her, vi svarer hurtigst muligt"
);

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});

import Hero from "~/components/Hero.vue";
import FocusedEntryPoints from "~/components/FocusedEntryPoints.vue";
import ContactFormular from "~/components/ContactFormular.vue";
import GoogleMap from "~/components/GoogleMap.vue";

// Billeder til desktop og mobil (midlertidigt samme billede)
import heroDesktop from "~/assets/images/desktop/kontakt-os-hero.webp";

// denne kode viser en intersectionObserver der bruges til at holde øje med hvornår en bruger scroller ned til elementet og så starter effekten .scroll-fade
// onMounted er en composition Api lifecycle hook, som betyder at koden først køres når html findes i dom'en
onMounted(() => {
  // her oprettes observeren som holder øje med elementerne
  const observer = new IntersectionObserver(
    (entries) => {
      // Her laves en foreach fordi der er flere elementer og for hvert entry bliver der tjekket om det er synligt i viewporten
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Her stoppes med at observere så fade animation kun køre en gang
          observer.unobserve(entry.target);
        }
      });
      // animationen køre først når mindst 10% af elementet er synligt
    },
    { threshold: 0.1 }
  );

  // Her findes alle elementerne med klassen scroll-fade og de bliver observeret
  document.querySelectorAll(".scroll-fade").forEach((el) => {
    observer.observe(el);
  });
});
</script>
