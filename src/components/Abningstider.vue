<template>
    <div class="max-w-[500px]">
        <select id="month-select" v-model="selectedMonth">
            <option v-for="month in months" :key="month" :value="month" class="rounded-none">
                {{ month }}
            </option>
        </select>
   

    <div v-if="selectedMonth">
        <ul>
            <template v-for="(group, groupIndex) in openingHours[selectedMonth]" :key="groupIndex">
       <li
  v-for="(line, index) in group"
  :key="index"
  :class="[
    'mb-1',
    liColor,
    index === 0 ? 'p-medium' : ''
  ]"
>
  {{ line }}
</li>
        <hr v-if="groupIndex !== openingHours[selectedMonth].length - 1" class="my-3 border-gray-300 opacity-40" />
      </template>
        </ul>
         </div>
    </div>
</template>


<script setup>
import { ref } from "vue";

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
   juni: [
    [
      "Mandag",
      "Lukket"
    ],
    [
      "Tirsdag - Søndag",
      "Frokoståbent: 11.30 - 16.00"
    ]
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
const monthNames = [
  "Januar", "Februar", "Marts", "April", "Maj", "Juni",
  "Juli", "August", "September", "Oktober", "November", "December"
];

const currentMonthName = monthNames[new Date().getMonth()];
const selectedMonth = ref(months.includes(currentMonthName) ? currentMonthName : "");

const props = defineProps({
  headingColor: { type: String },
  liColor: { type: String}
})
</script>
<style scoped></style>