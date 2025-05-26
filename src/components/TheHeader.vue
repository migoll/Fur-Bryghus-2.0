<template>
  <header class="w-full bg-fur-accent-bone shadow-sm">
    <div
      class="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-4 py-4"
    >
      <NuxtLink to="/" class="w-32">
        <img
          src="@/assets/images/fur-logo.png"
          alt="Fur Bryghus"
          class="w-full h-auto"
        />
      </NuxtLink>

      <nav class="flex items-center space-x-8">
        <div
          v-for="(item, index) in navigation"
          :key="index"
          class="relative group"
        >
          <div
            v-if="item.hasDropdown"
            class="text-fur-blue hover:text-fur-accent-blue transition-colors duration-200 flex items-center cursor-pointer"
          >
            {{ item.name }}
            <span class="ml-1">▼</span>
          </div>
          <NuxtLink
            v-else
            :to="item.href!"
            class="text-fur-blue hover:text-fur-accent-blue transition-colors duration-200"
          >
            {{ item.name }}
          </NuxtLink>

          <div
            v-if="item.hasDropdown"
            class="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
          >
            <NuxtLink
              v-for="(dropdownItem, dropIndex) in item.dropdownItems"
              :key="dropIndex"
              :to="dropdownItem.href"
              class="block px-4 py-2 text-fur-blue hover:bg-neutral1 transition-colors duration-200"
            >
              {{ dropdownItem.name }}
            </NuxtLink>
          </div>
        </div>
      </nav>

      <button class="p-2">
        <span class="sr-only">Cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
    </div>

    <div class="lg:hidden flex justify-between items-center px-4 py-3">
      <NuxtLink to="/" class="w-24">
        <img
          src="@/assets/images/fur-logo.png"
          alt="Fur Bryghus"
          class="w-full h-auto"
        />
      </NuxtLink>

      <div class="flex items-center space-x-4">
        <button class="p-2">
          <span class="sr-only">Cart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>

        <button @click="isMenuOpen = !isMenuOpen" class="p-2">
          <span class="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="lg:hidden bg-white border-t border-gray-200">
      <nav class="px-4 py-2 space-y-2">
        <template v-for="(item, index) in navigation" :key="index">
          <button
            v-if="item.hasDropdown"
            class="block w-full text-left py-2 text-fur-blue hover:text-fur-accent-blue transition-colors duration-200"
            @click="toggleMobileDropdown(index)"
          >
            {{ item.name }}
            <span class="ml-1">▼</span>
          </button>
          <div
            v-if="item.hasDropdown && openMobileDropdowns[index]"
            class="pl-4 py-2 space-y-2"
          >
            <NuxtLink
              v-for="(dropdownItem, dropIndex) in item.dropdownItems"
              :key="dropIndex"
              :to="dropdownItem.href"
              class="block py-2 text-fur-blue hover:text-fur-accent-blue transition-colors duration-200"
              @click="isMenuOpen = false"
            >
              {{ dropdownItem.name }}
            </NuxtLink>
          </div>
          <NuxtLink
            v-else-if="!item.hasDropdown"
            :to="item.href!"
            class="block py-2 text-fur-blue hover:text-fur-accent-blue transition-colors duration-200"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavigationItem } from "~/types/navigation";

const isMenuOpen = ref(false);
const openMobileDropdowns = ref<Record<number, boolean>>({});

const toggleMobileDropdown = (index: number) => {
  openMobileDropdowns.value[index] = !openMobileDropdowns.value[index];
};

const navigation: NavigationItem[] = [
  {
    name: "Bryggeriet",
    hasDropdown: true,
    dropdownItems: [
      { name: "Vores historie", href: "/bryggeriet/vores-historie" },
      { name: "Ølprocessen", href: "/bryggeriet/olprocessen" },
      { name: "Vores produkter", href: "/webshop" },
      {
        name: "Ølsmagninger og rundvisning",
        href: "/bryggeriet/olsmagninger-og-rundvisninger",
      },
      { name: "Gårdbutik og ølbar", href: "/bryggeriet/gardbutik-og-olbar" },
      { name: "Forhandlere", href: "/bryggeriet/forhandlere" },
      { name: "Job hos os", href: "/bryggeriet/job-hos-os" },
    ],
  },
  {
    name: "Webshop",
    href: "/webshop",
    hasDropdown: false,
  },
  {
    name: "Arrangementer",
    href: "/arrangementer",
    hasDropdown: false,
  },
  {
    name: "Restaurant",
    hasDropdown: true,
    dropdownItems: [
      { name: "Menukort", href: "/restaurant/menukort" },
      { name: "Åbningstider", href: "/restaurant/abningstider" },
      { name: "En bid af Fur", href: "/restaurant/en-bid-af-fur" },
      { name: "Bestil bord", href: "/restaurant/bestil-bord" },
    ],
  },
  {
    name: "Selskaber",
    hasDropdown: true,
    dropdownItems: [
      { name: "Selskabspakker", href: "/selskaber/selskabspakker" },
      { name: "Selskabsmenuer", href: "/selskaber/selskabsmenuer" },
      { name: "Book dit selskab", href: "/selskaber/book-dit-selskab" },
    ],
  },
  {
    name: "Nyheder",
    href: "/nyheder",
    hasDropdown: false,
  },
  {
    name: "Kontakt os",
    href: "/kontakt-os",
    hasDropdown: false,
  },
];
</script>
