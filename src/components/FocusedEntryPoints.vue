<template>
  <section class="grid md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto py-12">
    <div
      v-for="entry in resolvedEntries"
      :key="entry.title"
      class="group bg-white shadow-md relative flex flex-col h-full overflow-hidden"
    >
      <div class="overflow-hidden cursor-pointer">
        <img
          :src="entry.image"
          :alt="entry.title"
          class="w-full h-64 object-cover hover:scale-[110%] ease-in-out duration-500"
        />
      </div>
      <div class="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h2
            class="text-h2 md:text-h2-md font-anton text-center text-black mb-2"
          >
            {{ entry.title }}
          </h2>
          <p class="text-sm text-center text-gray-700">
            {{ entry.description }}
          </p>
        </div>
        <div class="mt-6 text-center">
          <Button :label="entry.buttonText" :to="entry.href" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import entryPointMenuImage from "~/assets/images/desktop/FEP-menukort.webp";
import entryPointProdukterImage from "~/assets/images/desktop/FEP-produkter.webp";
import entryPointbryggeprocessenImage from "~/assets/images/desktop/FEP-processen.png";
import entryPointbryggehistorienImage from "~/assets/images/desktop/FEP-vores-historie.webp";
import entryPointOlsmagningerImage from "~/assets/images/desktop/FEP-olsmagninger.webp";
import entryPointGardbutikImage from "~/assets/images/desktop/FEP-gardbutik.webp";
import entryPointselskabspakkerImage from "~/assets/images/desktop/FEP-selskabspakker.webp";
import entryPoinAbningImage from "~/assets/images/desktop/FEP-abningstider.webp";
import entryPointEnbidImage from "~/assets/images/desktop/FEP-en-bid-af-fur.webp";
import entryPointForhandlerImage from "~/assets/images/desktop/FEP-forhandler.png";
import entryPointArrangementerImage from "~/assets/images/desktop/FEP-arrangementer.png";
import entryPointBookselskabImage from "~/assets/images/desktop/FEP-book-dit-selskab.webp";
import entryPointSelskabmenuImage from "~/assets/images/desktop/FEP-selskabsmenuer.webp";
import entryPointKontaktImage from "~/assets/images/desktop/FEP-kontakt-os.webp";

type EntryKey =
  | "Vores-produkter"
  | "Bryggeprocessen"
  | "Vores historie"
  | "Menukort"
  | "Olsmagninger"
  | "Gardbutik"
  | "Selskabspakker"
  | "Abning"
  | "Enbid"
  | "Forhandler"
  | "Arrangementer"
  | "Bookselskab"
  | "Selskabsmenuer"
  | "Kontakt";

const props = defineProps<{
  entries: [EntryKey, EntryKey, EntryKey];
}>();

// Sikre at all entries er unikke
if (new Set(props.entries).size !== props.entries.length) {
  throw new Error("Each entry in 'entries' must be unique.");
}

const entryData: Record<
  EntryKey,
  {
    title: string;
    description: string;
    href: string;
    buttonText: string;
    image: string;
  }
> = {
  "Vores-produkter": {
    title: "Vores produkter",
    description:
      "Oplev alle vores lækre produkter og køb dem hjem til dig selv. Her har du også mulighed for at lave gavekort",
    href: "/Webshop",
    buttonText: "Se vores produkter",
    image: entryPointProdukterImage,
  },
  Bryggeprocessen: {
    title: "Ølprocessen",
    description:
      "Se hvordan vores øl bliver til, og lær mere om de teknikker og råvarer vi bruger.",
    href: "/bryggeriet/olprocessen",
    buttonText: "Læs om ølprocessen",
    image: entryPointbryggeprocessenImage,
  },
  "Vores historie": {
    title: "Vores historie",
    description:
      "Tag med på en tidsrejse og hør historien om Fur Bryghus og hvordan det hele startede.",
    href: "/bryggeriet/vores-historie",
    buttonText: "Læs vores historie",
    image: entryPointbryggehistorienImage,
  },
  Menukort: {
    title: "Menukort",
    description:
      "Tag et kig på vores lækre menu, hvor vi fokuserer på de lokale ingredienser og de bedste råvarer",
    href: "/restaurant/menukort",
    buttonText: "Se menu",
    image: entryPointMenuImage,
  },
  Olsmagninger: {
    title: "Ølsmagninger og rundvisninger",
    description: "Læs og book en af vores populære ølsmagninger",
    href: "/bryggeriet/olsmagninger-og-rundvisninger",
    buttonText: "Læs mere",
    image: entryPointOlsmagningerImage,
  },
  Gardbutik: {
    title: "Gårdbutik og ølbar",
    description:
      "I vores gårbutik og ølbar har du mulighed for at købe og nyde en dejlig Fur øl",
    href: "/bryggeriet/gardbutik-og-olbar",
    buttonText: "Læs mere",
    image: entryPointGardbutikImage,
  },
  Selskabspakker: {
    title: "Selskabspakker",
    description:
      "Hold din næste fest på Fur Bryghus. Her kan du læse om de selskabspakker vi tilbyder og tilpasse lige efter din smag",
    href: "/selskaber/selskabspakker",
    buttonText: "Se selskabspakkerne",
    image: entryPointselskabspakkerImage,
  },
  Abning: {
    title: "Åbningstider",
    description:
      "Her kan du finde alle åbningstiderne for restauranten, så du kan planlægge dit besøg bedst muligt",
    href: "/restaurant/abningstider",
    buttonText: "Se åbningstiderne",
    image: entryPoinAbningImage,
  },
  Enbid: {
    title: "En bid af Fur",
    description:
      "Læs omkring hvordan vi udvælger råvarer med fokus på det lokale og bæredygtighed.",
    href: "/restaurant/en-bid-af-fur",
    buttonText: "Læs mere",
    image: entryPointEnbidImage,
  },
  Forhandler: {
    title: "Forhandlere",
    description:
      "Få et overblik over hvor du kan finde Fur øl nær dig., Vi har forhandlere over hele Danmark",
    href: "/bryggeriet/forhandlere",
    buttonText: "Find forhandler",
    image: entryPointForhandlerImage,
  },
  Arrangementer: {
    title: "Arrangementer",
    description:
      "Se alle vores arrangementer og koncerter her. Vi har de perfekte rammer til en hyggelig dage med nye oplevelser",
    href: "/arrangementer",
    buttonText: "Se vores arrangementer",
    image: entryPointArrangementerImage,
  },
  Bookselskab: {
    title: "Book dit selskab",
    description:
      "Hold din næste fest hos os. Vi kan afholde alle slags selskaber og står klar til at hjælpe dig.",
    href: "/selskaber/book-dit-selskab",
    buttonText: "Book dit selskab",
    image: entryPointBookselskabImage,
  },
  Selskabsmenuer: {
    title: "Selskabsmenuer",
    description:
      "Hos os tilpasser vi dit selskab og menuen lige efter dine behov. Her kan du se alle vores menuer og sammensætte ligesom du ønsker",
    href: "/selskaber/selskabsmenuer",
    buttonText: "Se selskabsmenuerne",
    image: entryPointSelskabmenuImage,
  },
  Kontakt: {
    title: "Kontakt os",
    description:
      "Vi står til rådighed for alle de spørgsmål du skulle have. Kontakt os via vores formular eller ring os op.",
    href: "/kontakt-os",
    buttonText: "Kontakt os",
    image: entryPointKontaktImage,
  },
};

const resolvedEntries = computed(() => {
  return props.entries.map((key) => entryData[key]);
});

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
