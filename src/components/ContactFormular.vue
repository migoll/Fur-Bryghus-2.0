<template>
  <div class="bg-[#0F2B39] text-white px-6 py-10 max-w-md mx-auto  shadow-lg">
    <h2 class="text-3xl font-bold text-center mb-8">Kontakt os</h2>
    <form class="space-y-6">
      <div>
        <label class="block mb-1" for="navn">Navn</label>
        <input
          id="navn"
          type="text"
          placeholder="Navn"
          class="w-full p-3 text-black rounded-sm outline-none"
        />
      </div>

      <div>
        <label class="block mb-1" for="telefon">Telefon</label>
        <input
          id="telefon"
          type="text"
          placeholder="Telefon"
          class="w-full p-3 text-black rounded-sm outline-none"
        />
      </div>

      <div>
        <label class="block mb-1" for="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 text-black rounded-sm outline-none"
        />
      </div>

      <div>
        <label class="block mb-1" for="besked">Besked</label>
        <textarea
          id="besked"
          rows="5"
          placeholder="Send os en besked..."
          class="w-full p-3 text-black rounded-sm resize-none outline-none"
        ></textarea>
      </div>
      <!-- Hvordan skal den sættes op? -->
      <Button/>
    </form>
  </div>
</template>

<script setup>
import Button from './Button.vue';
</script>
