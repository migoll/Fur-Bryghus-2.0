<template>
  <section class="grid md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto py-12">
    <div
      v-for="entry in resolvedEntries"
      :key="entry.title"
      class="bg-white shadow-md rounded-sm relative flex flex-col h-full"
    >
      <img
        :src="entry.image"
        :alt="entry.title"
        class="w-full h-64 object-cover"
      />
      <div class="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h2 class="text-2xl font-bold text-center text-black mb-2">
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
type EntryKey = "Vores-produkter" | "Bryggeprocessen" | "Vores historie";

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
    image: "/images/entry-point-menu.jpg",
  },
  Bryggeprocessen: {
    title: "Bryggeprocessen",
    description:
      "Se hvordan vores øl bliver til, og lær mere om de teknikker og råvarer vi bruger.",
    href: "/bryggeriet/olprocessen",
    buttonText: "Læs om processen",
    image: "/images/entry-point-menu.jpg",
  },
  "Vores historie": {
    title: "Vores historie",
    description:
      "Tag med på en tidsrejse og hør historien om Fur Bryghus og hvordan det hele startede.",
    href: "/bryggeriet/vores-historie",
    buttonText: "Læs historien",
    image: "/images/entry-point-menu.jpg",
  },
};

const resolvedEntries = computed(() => {
  return props.entries.map((key) => entryData[key]);
});
</script>
