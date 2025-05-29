<template>
  <!-- Dette komponent indsættes på menusiden for at vise de forskellige tabs -->
  <section class="flex flex-col lg:flex-row">
  <div
  class="scrollbar-custom flex lg:flex-col lg:w-1/5 bg-fur-blue overflow-x-auto lg:overflow-y-auto lg:h-screen sticky top-0"
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

    <div class="w-full lg:w-4/5">
      <!-- Dette komponent viser indholdet fra de forskellige tabs der hører til den aktive tab -->
       <!-- is er et indbygget vue komponent hvor man kan styre hvilket komponent der skal vises -->
      <component :is="tabs[activeTab].component" />
    </div>
  </section>
</template>


<script setup>
// Her importeres hver tab og de bruges nede i variablen tabs
import Buffet from './tabs/Buffet.vue';
import DanskKokken from './tabs/DanskKokken.vue';
import Fodselsdagspakker from './tabs/Fodselsdagspakker.vue';
import Reception from './tabs/Reception.vue';
import SelskabsMenu from './tabs/SelskabsMenu.vue';
import UdflugtsMenu from './tabs/UdflugtsMenu.vue';

const tabs = [
  { label: 'Selskabmenu', component: SelskabsMenu },
  { label: 'Buffet', component: Buffet },
  { label: 'Reception', component: Reception },
  { label: 'Fødselsdagspakker', component: Fodselsdagspakker },
  { label: 'Dansk Køkken', component: DanskKokken },
  { label: 'Udflugtsmenu', component: UdflugtsMenu },
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
