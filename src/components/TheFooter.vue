<template>
  <footer
    class="bg-[#132A3B] text-white flex flex-col items-center overflow-hidden"
  >
    <div class="w-screen">
      <div class="space-y-6 md:flex">
        <div
          class="bg-neutral-6 flex flex-col content-center items-center p-[1rem] md:p-[3rem] md:w-[40vw] md:items-start"
        >
          <div class="flex justify-center pb-6">
            <img
              src="@/assets/images/fur-logo.png"
              alt="Fur Bryghus"
              class="h-12 md:h-20"
            />
          </div>
          <h3 class="text-h3 md:text-h3-md font-anton mb-2 text-neutral-1">
            Tilmeld
          </h3>
          <p class="mb-4 text-neutral-1">
            Bliv en del af vores nyhedsbrev for at holde dig opdateret
          </p>
          <form @submit="handleNewsletter" class="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email..."
              class="w-full px-3 py-2 rounded bg-white text-black border-2 border-solid border-black"
            />
            <button
              type="submit"
              class="bg-fur-blue text-neutral-6 px-4 py-2 rounded font-medium hover:bg-fur-accent-blue transition-colors w-full"
            >
              Tilmeld
            </button>
          </form>
        </div>

        <div
          class="flex flex-col items-center p-[1rem] md:w-[30%] md:p-[3rem] md:items-start"
          :style="{
            backgroundImage: `url(${footerMap})`,
            backgroundSize: '500px 500px',
            backgroundPosition: '150px 70px',
            backgroundRepeat: 'no-repeat',
          }"
        >
          <h3 class="mb-2 text-h3 md:text-h3-md font-anton">Kontakt os</h3>
          <div class="space-y-1">
            <p>Fur Bryghus A/S</p>
            <p>Knudenvej 3</p>
            <p>DK-7884 Fur</p>
            <p class="mt-2">info@furbryghus.dk</p>
            <p>+45 97 59 30 80</p>
            <p>+45 97 59 30 48</p>
          </div>
          <div class="pt-[1rem]">
            <NuxtLink
              to="https://www.tripadvisor.com/Restaurant_Review-g2479713-d1130405-Reviews-Fur_Bryghus-Fur_West_Jutland_Jutland.html?m=69573"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="../assets/images/tripadvisor.png"
                alt="Tripadvisor"
                class="h-[6rem]"
              />
            </NuxtLink>
          </div>
        </div>

        <div
          class="flex flex-col items-center md:w-[30vw] md:p-[3rem] md:items-start"
        >
          <h3 class="mb-2 text-h3 md:text-h3-md font-anton">
            Følg os på sociale medier
          </h3>
          <div class="flex gap-4 mb-4 pt-2">
            <NuxtLink
              to="https://instagram.com/furbryghus"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="~/assets/icons/instagram.svg"
                alt="Instagram"
                class="w-10 h-10 text-white fill-white"
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
                class="w-10 h-10 text-white"
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
                class="w-10 h-10 text-white"
              />
            </NuxtLink>
          </div>
          <div class="pt-5">
            <h4 class="p-medium mb-2">Se vores smileys:</h4>
            <div
              class="flex items-center justify-center gap-2 md:justify-start"
            >
              <NuxtLink
                to="https://www.findsmiley.dk/27001"
                target="_blank"
                class="hover:opacity-80 transition-opacity"
              >
                <img
                  src="../assets/images/fodevare-smiley.svg"
                  alt="Fødevaresmiley"
                />
              </NuxtLink>
              <NuxtLink
                to="https://www.findsmiley.dk/27282"
                target="_blank"
                class="hover:opacity-80 transition-opacity"
              >
                <img
                  src="../assets/images/fodevare-smiley.svg"
                  alt="Fødevaresmiley"
                />
              </NuxtLink>
            </div>
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

import footerMap from "@/assets/images/footer_map.png";
</script>
