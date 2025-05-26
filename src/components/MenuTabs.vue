<template>
  <section class="flex flex-col md:flex-row">
    <!-- Tabs -->
    <div
  class="flex md:flex-col md:w-1/5 bg-fur-blue overflow-x-auto md:overflow-y-auto md:h-screen sticky top-0"
>

      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[ 
          'flex-shrink-0 p-4 font-anton text-[30px] text-center transition ',
          activeTab === index
            ? 'bg-fur-accent-blue text-neutral-6'
            : 'hover:bg-fur-brown text-neutral-6'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Content -->
    <div class="w-full md:w-4/5">
      <component :is="tabs[activeTab].component" />
       <div class="flex flex-col content-center items-center justify-center p-[2rem] bg-fur-accent-beige gap-[1rem]">
        <h3>Husk at booke bord</h3>
        <p>Husk at reservere bord inden jeres besøg - så kan vi garantere dig og dit selskab den bedste oplevelse.</p>
        <Button label="Book bord" to="https://book.dinnerbooking.com/dk/da-DK/book/table/pax/2837/2" openInNewTab />
    </div>
    </div>
  </section>
</template>


<script setup>
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
