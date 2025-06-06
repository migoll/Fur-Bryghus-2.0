<template>
  <header
    :class="[
      'w-full bg-fur-accent-bone shadow-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-300',
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full',
    ]"
  >
    <!-- Desktop Header -->
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

      <nav class="flex items-center space-x-8 ">
        <div
          v-for="(item, index) in navigation"
          :key="index"
          class="relative group"
        >
          <div
            v-if="item.hasDropdown"
            class="text-fur-blue transition-colors duration-200 flex items-center cursor-pointer hover:text-opacity-50"
          >
            {{ item.name }}
            <img
              src="../assets/images/header-arrow.svg"
              class="mx-3 rotate-180 transition-transform duration-300 group-hover:rotate-0"
              alt="Ikon af korn"
            />
          </div>
          <NuxtLink
            v-else
            :to="item.href!"
            class="text-fur-blue hover:text-opacity-50 transition-colors duration-200"
          >
            {{ item.name }}
          </NuxtLink>

          <div
            v-if="item.hasDropdown"
            class="absolute top-full left-0 mt-8 bg-fur-accent-bone shadow-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 transform origin-top"
          >
            <div
              class="grid grid-cols-[auto_auto_auto] gap-12 transform transition-all duration-300 ease-in-out"
            >
              <div class="flex flex-col gap-4">
                <!--Kun vis 4 menu items ad gangen i hver kolonne-->
                <NuxtLink
                  v-for="(dropdownItem, dropIndex) in item.dropdownItems.slice(
                    0,
                    4
                  )"
                  :key="dropIndex"
                  :to="dropdownItem.href"
                  class="text-fur-blue hover:underline text-sm font-medium"
                >
                  {{ dropdownItem.name }}
                </NuxtLink>
              </div>

              <div class="flex flex-col gap-2">
                <!--Kun vis 4 menu items ad gangen i hver kolonne-->
                <NuxtLink
                  v-for="(dropdownItem, dropIndex) in item.dropdownItems.slice(
                    4
                  )"
                  :key="dropIndex"
                  :to="dropdownItem.href"
                  class="text-fur-blue hover:underline text-sm font-medium"
                >
                  {{ dropdownItem.name }}
                </NuxtLink>
              </div>

              <DropdownEntry
                class="self-start"
                title="Bestil vores øl her"
                href="/webshop"
                :image="entryPointMenuImage"
              />
            </div>
          </div>
        </div>
      </nav>

      <button class="p-2">
        <span class="sr-only">Cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
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

    <!-- Mobile Header -->
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
            class="h-8 w-8"
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

        <!-- https://jonsuh.com/hamburgers/ -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          :class="[
            'hamburger',
            'hamburger--collapse',
            { 'is-active': isMenuOpen },
          ]"
          type="button"
          class="scale-75"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="lg:hidden bg-white border-t border-gray-200">
      <nav class="px-4 py-2 space-y-2">
        <template v-for="(item, index) in navigation" :key="index">
          <button
            v-if="item.hasDropdown"
            class="flex w-full text-left py-2 text-fur-blue hover:text-fur-accent-blue transition-colors duration-200 font-bold items-center"
            @click="toggleMobileDropdown(index)"
          >
            {{ item.name }}
            <img
              src="../assets/images/header-arrow.svg"
              class="mx-3 rotate-180"
              alt="Ikon af korn"
            />
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
            class="block py-2 text-fur-blue hover:text-fur-accent-blue transition-colors duration-200 font-bold"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </template>
      </nav>
    </div>
  </header>
  <div class="h-[72px] lg:h-[88px]"></div>
</template>

<script setup lang="ts">
import "hamburgers/dist/hamburgers.min.css";
import DropdownEntry from "~/components/DropdownEntry.vue";
import entryPointMenuImage from "@/assets/images/mobile/Olsmagning_Hero_Mobile.png";

const isMenuOpen = ref(false);
const openMobileDropdowns = ref<Record<number, boolean>>({});
const isHeaderVisible = ref(true);
const lastScrollY = ref(0);

// inspiration til header visible on scroll https://stackoverflow.com/questions/63902512/js-show-hide-header-on-scroll-effect-but-only-after-the-header-has-scrolled
onMounted(() => {
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      isHeaderVisible.value = true;
    } else if (currentScrollY < lastScrollY.value) {
      isHeaderVisible.value = true;
    } else {
      isHeaderVisible.value = false;
    }

    lastScrollY.value = currentScrollY;
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", () => {});
});

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
      { name: "Bestil bord", href: "https://book.dinnerbooking.com/dk/da-DK/book/table/pax/2837" },
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
