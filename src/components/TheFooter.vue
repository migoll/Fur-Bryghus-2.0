<template>
  <footer class="bg-[#132A3B] text-white">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="hidden lg:grid grid-cols-3 gap-8">
        <div>
          <h3 class="font-medium mb-2">Tilmeld</h3>
          <p class="mb-4 text-sm">
            Bliv en del af vores nyhedsbrev for at holde dig opdateret
          </p>
          <form @submit="handleNewsletter" class="flex gap-2">
            <input
              type="email"
              placeholder="Email..."
              class="flex-1 px-3 py-2 rounded bg-white text-black text-sm"
            />
            <button
              type="submit"
              class="bg-white text-[#132A3B] px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Tilmeld
            </button>
          </form>
        </div>

        <div>
          <h3 class="font-medium mb-2">Kontakt os</h3>
          <div class="space-y-1 text-sm">
            <p>Fur Bryghus A/S</p>
            <p>Knudenvej 3</p>
            <p>DK-7884 Fur</p>
            <p class="mt-2">info@furbryghus.dk</p>
            <p>+45 97 59 30 80</p>
            <p>+45 97 59 30 48</p>
          </div>
        </div>

        <div>
          <h3 class="font-medium mb-2">Følg os på sociale medier</h3>
          <div class="flex gap-4 mb-4">
            <NuxtLink
              to="https://instagram.com/furbryghus"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="~/assets/icons/instagram.svg"
                alt="Instagram"
                class="w-5 h-5 text-white"
              />
            </NuxtLink>
            <NuxtLink
              to="https://linkedin.com/company/fur-bryghus"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="~/assets/icons/linkedin.svg"
                alt="LinkedIn"
                class="w-5 h-5 text-white"
              />
            </NuxtLink>
            <NuxtLink
              to="https://facebook.com/furbryghus"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="~/assets/icons/facebook.svg"
                alt="Facebook"
                class="w-5 h-5 text-white"
              />
            </NuxtLink>
          </div>
          <div>
            <h4 class="font-medium mb-2">Se vores smileys:</h4>
          </div>
        </div>
      </div>

      <div class="lg:hidden space-y-6">
        <div>
          <div class="flex justify-center mb-6">
            <img src="/images/fur-logo.png" alt="Fur Bryghus" class="h-12" />
          </div>
          <h3 class="font-medium mb-2">Tilmeld</h3>
          <p class="mb-4 text-sm">
            Bliv en del af vores nyhedsbrev for at holde dig opdateret
          </p>
          <form @submit="handleNewsletter" class="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email..."
              class="w-full px-3 py-2 rounded bg-white text-black text-sm"
            />
            <button
              type="submit"
              class="bg-white text-[#132A3B] px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors w-full"
            >
              Tilmeld
            </button>
          </form>
        </div>

        <div>
          <h3 class="font-medium mb-2">Kontakt os</h3>
          <div class="space-y-1 text-sm">
            <p>Fur Bryghus A/S</p>
            <p>Knudenvej 3</p>
            <p>DK-7884 Fur</p>
            <p class="mt-2">info@furbryghus.dk</p>
            <p>+45 97 59 30 80</p>
            <p>+45 97 59 30 48</p>
          </div>
        </div>

        <div>
          <h3 class="font-medium mb-2">Følg os på sociale medier</h3>
          <div class="flex gap-4 mb-4">
            <NuxtLink
              to="https://instagram.com/furbryghus"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="~/assets/icons/instagram.svg"
                alt="Instagram"
                class="w-5 h-5 text-white"
              />
            </NuxtLink>
            <NuxtLink
              to="https://linkedin.com/company/fur-bryghus"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="~/assets/icons/linkedin.svg"
                alt="LinkedIn"
                class="w-5 h-5 text-white"
              />
            </NuxtLink>
            <NuxtLink
              to="https://facebook.com/furbryghus"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="~/assets/icons/facebook.svg"
                alt="Facebook"
                class="w-5 h-5 text-white"
              />
            </NuxtLink>
          </div>
          <div>
            <h4 class="font-medium mb-2">Se vores smileys:</h4>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const handleNewsletter = (e: Event) => {
  e.preventDefault();
};
</script>
