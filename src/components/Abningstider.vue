<template>
  <!-- Her vælges den måned man gerne vil se åbningstider for. -->
   <!-- v-model bruges til at binde værdien fra dropdownen til variablen selectedMonth  -->
    <!-- v-for bruges til at loope igennem in liste og her er de måneder som er defineret i script  -->
    <div class="max-w-[500px]">
        <select id="month-select" v-model="selectedMonth">
            <option v-for="month in months" :key="month" :value="month" class="rounded-none">
                {{ month }}
            </option>
        </select>
   
<!-- hvis en måned er valgt vises månedens åbninstider -->
    <div v-if="selectedMonth">
        <ul>
          <!-- Her hentes de arrays nede fra scriptet som passer til den valgte måned i openingshors  -->
           <!-- Template bruges for ikke at lave en div for hver li, men blot outputte listen med åbningstider -->
            <template v-for="(gruppe, gruppeIndex) in openingHours[selectedMonth]" :key="gruppeIndex">
   <!-- Her vises hver linje fra arrayet i en li. første linje i gruppen får en anden font størrelse -->
       <li
  v-for="(linje, index) in gruppe"
  :key="index"
  :class="[
    'mb-1',
    liColor,
    index === 0 ? 'p-medium' : ''
  ]"
>
  {{ linje }}
</li>
<!-- Her sættes der en streg ind efter hver åbningstid undtagen den sidste -->
 <!-- !== betyder ikke lige med -->
        <hr v-if="gruppeIndex !== openingHours[selectedMonth].length - 1" class="my-3 border-gray-300 opacity-40" />
      </template>
        </ul>
         </div>
    </div>
</template>


<script setup>

// Her laves et objekt med alle måneder og dens værdier. Inden i er der et objekt med et objekt indeni for at holde på flere værdier
const openingHours = {
  Januar: [
    [
      "Sæsonlukket",
      "Bemærk: Restauranten er åben for selskaber over 20 personer efter aftale. Kontakt restaurantchefen på 97 59 30 60."
    ]
  ],
  Februar: [
    [
      "Sæsonlukket med undtagelse af særlige events",
      "Bemærk: Restauranten er åben for selskaber over 20 personer efter aftale. Kontakt restaurantchefen på 97 59 30 60."
    ],
    [
      "7. februar",
      "Restauranten serverer i forbindelse med koncert med Rasmus Walther."
    ]
  ],
  Marts: [
    [
      "Mandag - Onsdag",
      "Lukket"
    ],
    [
      "Torsdag - Søndag",
      "Frokoståbent: 11.30 - 15.00"
    ]
  ],
   April: [
    [
      "Mandag",
      "Lukket"
    ],
    [
      "Tirsdag - Søndag",
      "Frokoståbent: 11.30 - 16.00"
    ],
    [
      "Mandag den 21. april (2. påskedag)",
      "Frokoståbent: 11.30 - 16.00"
    ]
  ],
  Maj: [
    [
      "Mandag",
      "Lukket"
    ],
    [
      "Tirsdag - Søndag",
      "Frokoståbent: 11.30 - 16.00"
    ]
  ],
   Juni: [
    [
      "Mandag",
      "Lukket"
    ],
    [
      "Tirsdag - Søndag",
      "Frokoståbent: 11.30 - 16.00"
    ],
    [
      "Mandag den 9. Juni (2. pinsedag)",
      "Frokoståbent: 11.30 - 16.00"
    ]
  ],
  Juli: [
    [
      "Mandag til Søndag ( 1.-12 Juli )",
      "Frokost åbent: 11.30 - 16.00"
    ],
    [
      "Mandag til Søndag ( 13 - 31 Juli ) ",
      "Frokoståbent: 11.30 - 17.00"
    ]
  ],
  August: [
    [
      "Mandag til Søndag ( 1. - 9 August )",
      "Frokost åbent: 11.30 - 17.00"
    ],
    [
      "Lørdag - søndag ( 10 + 11 August )",
      "Lukket pga. Fur Bryghus Sommerkoncert"
    ],
    [
      "Mandag til Søndag ( 12. - 31. August )",
      "Frokost åbent: 11.30 - 16.00"
    ]
  ],
  September: [
    [
      "Mandag - Tirsdag",
      "Lukket"
    ],
    [
      "Onsdag - Søndag ",
      "Frokoståbent: 11.30 - 15.00"
    ]
  ],
  Oktober: [
    [
      "Mandag - Tirsdag ( 1. - 12. Oktober )",
      "Lukket"
    ],
    [
      "Onsdag - Søndag ( 1. - 12. Oktober )",
      "Frokoståbent: 11.30 - 15.00"
    ],
     [
      "Mandag - Søndag ( 13. 19. Oktober Efterårsferien )",
      "Frokoståbent: 11.30 - 15.00"
    ],
     [
      "Mandag - Onsdag ( 20. 31. Oktober )",
      "Lukket"
    ],
     [
      "Torsdag - Søndag ( 20. - 31. Oktober )",
      "Frokoståbent: 11.30 - 15.00"
    ],
     [
      "Fredage",
      "Stegt flæsk Ad libitum ( husk Bordbestilling ): 18.00 - 20.30"
    ],
  ],
}

const months = Object.keys(openingHours);
// her udtrækkes alle navnene fra objektet

// her defineres alle månederne på et år som skal bruges efteer
const monthNames = [
  "Januar", "Februar", "Marts", "April", "Maj", "Juni",
  "Juli", "August", "September", "Oktober", "November", "December"
];

// Dette skal bruges til automatisk at vælge den måned som vi er i. Her kigges der efter den måned som brugerens åbner siden i.
// Dette bliver lagt i variablen currentMonthName
const currentMonthName = monthNames[new Date().getMonth()];

// denne variabel holder styr på om den aktuelle måned findes i listen. hvis den findes bliver månedens åbningstider vist. Hvis ikke bliver er ikke valgt en måned
const selectedMonth = ref(months.includes(currentMonthName) ? currentMonthName : "");

// Her laves props som brugeren kan definere der hvor komponentet bruges. her er det farven på overskriften og farven på li elementerne
const props = defineProps({
  headingColor: { type: String },
  liColor: { type: String}
})
</script>
<style scoped></style>