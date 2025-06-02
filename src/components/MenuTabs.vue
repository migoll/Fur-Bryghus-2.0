<template>
  <!-- Dette komponent indsættes på menusiden for at vise de forskellige tabs -->
  <section class="flex flex-col md:flex-row">
  <div
  class="scrollbar-custom flex md:flex-col md:w-1/5 bg-fur-blue overflow-x-auto md:overflow-y-auto md:h-screen sticky top-0"
>

<!-- Hver tab er en knap hvor der loopes igennem de forskellige tabs sektioner der er defineres i script -->
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[ 
          ' p-4 font-anton text-[30px] text-center flex-shrink-0 ',
          activeTab === index
            ? 'bg-fur-accent-blue text-neutral-6'
            : 'hover:bg-fur-brown text-neutral-6'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="w-full md:w-4/5">
      <!-- Dette komponent viser indholdet fra de forskellige tabs der hører til den aktive tab -->
       <!-- is er et indbygget vue komponent hvor man kan styre hvilket komponent der skal vises -->
      <component :is="tabs[activeTab].component" />

      <!-- booking information der vises på alle tabsene i bunden -->
       <div class="flex flex-col content-center items-center justify-center p-[2rem] bg-fur-accent-beige gap-[1rem]">
        <h3>Husk at booke bord</h3>
        <p>Husk at reservere bord inden jeres besøg - så kan vi garantere dig og dit selskab den bedste oplevelse.</p>
        <Button label="Book bord" to="https://book.dinnerbooking.com/dk/da-DK/book/table/pax/2837/2" openInNewTab />
    </div>
    </div>
  </section>
</template>


<script setup>
// Her importeres hver tab og de bruges nede i variablen tabs
import BorneMenu from './tabs/BorneMenu.vue';
import Drikkevarer from './tabs/Drikkevarer.vue';
import FrokostMenu from './tabs/FrokostMenu.vue';
import LetteRetter from './tabs/LetteRetter.vue';
import VarmeDrikke from './tabs/VarmeDrikke.vue';

const tabs = [
  { label: 'Frokostmenu', component: FrokostMenu },
  { label: 'Børnemenu', component: BorneMenu },
  { label: 'Lette retter', component: LetteRetter },
  { label: 'Drikkevarer', component: Drikkevarer },
  { label: 'Varme drikke', component: VarmeDrikke },
]

const activeTab = ref(0)
</script>

<style scoped>

/* styling til scrollbar */
.scrollbar-custom::-webkit-scrollbar {
  height: 8px; 
  width: 8px;
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: #E2D4BB;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background-color: #C89768;
}

</style>
