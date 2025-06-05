<template>
  <div class="flex flex-wrap gap-2">
    <!-- Viser størrelse tag hvis der er en -->
    <span
      v-if="product.acf?.storrelse?.length"
      class="border border-neutral-1 px-2 py-1 text-md rounded-full font-medium"
    >
      {{ product.acf.storrelse[0].name }}
    </span>

    <!-- Viser stilart hvis der er en -->
    <span
      v-if="product.acf?.stilart?.length"
      class="border border-neutral-1 px-2 py-1 text-md rounded-full font-medium"
    >
      {{ product.acf.stilart[0].name }}
    </span>

    <!-- Viser alkoholprocent hvis showAlcoholPercentage er true og findes -->
    <span
      v-if="showAlcoholPercentage && product.acf?.alkoholprocent"
      class="border border-neutral-1 px-2 py-1 text-md rounded-full font-medium"
    >
      {{ product.acf.alkoholprocent }}% vol.
    </span>

    <!-- hvis der ikke findes størrese og stilart, men kategori, så vis kategori -->
    <span
      v-if="
        !product.acf?.storrelse?.length &&
        !product.acf?.stilart?.length &&
        product.categories?.length
      "
      class="border border-neutral-1 px-2 py-1 text-md rounded-full font-medium"
    >
      {{
        kategoriNavne[
          product.categories.find((id) => kategoriNavne[id]) ?? 0
        ] || "Ukendt kategori"
      }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Term {
  name: string;
}

interface Product {
  categories?: number[];
  acf: {
    storrelse?: Term[];
    stilart?: Term[];
    alkoholprocent?: string;
  };
}

// props med valgfri visning af alkoholprocent
defineProps<{
  product: Product;
  showAlcoholPercentage?: boolean;
}>();

const kategoriNavne: Record<number, string> = {
  3: "Beer",
  75: "Snaps",
  76: "Gaveæske",
};
</script>
