<template>
  <!-- komponent til at vise en loading screen og herefter en pop up hvor man skal bekræfte sin alder -->
  <!-- Når brugeren ikke har bekræftet deres alder vises dette komponent -->
  <section v-if="showPopup">
    <!-- her er loading skærmen som vises først med en overskrift og en lille lottie animation -->
    <div
      v-if="showLoading"
      class="fixed inset-0 z-50 bg-fur-blue text-neutral-1 flex items-center justify-center flex-col overflow-hidden"
    >
      <div
        class="flex flex-col items-center gap-[2rem] justify-center p-[2rem] pt-[10rem] md:pt-[18rem]"
      >
        <h2
          class="text-neutral-6 text-center pb-[1rem] text-h2 md:text-h2-md font-anton"
        >
          Velkommen til Fur Bryghus
        </h2>
        <!-- https://app.lottiefiles.com/animation/32744d94-5810-43cf-9738-ff235d2c8d1b -->
        <!-- <DotLottieVue
        style="height: 200px; width: 200px"
        autoplay
        loop
        speed="0.5"
        src="https://lottie.host/72d706ae-d7cc-4f9a-b11d-33aaf8bc8ecf/0JFGSsM0eZ.lottie"
      /> -->
      </div>
      <div class="flex flex-row w-screen items-center justify-center">
        <img
          src="../assets/images/desktop/hvede.png"
          alt="Hvede øl"
          class="h-[350px] md:h-[600px] beer-image"
        />
        <img
          src="../assets/images/desktop/lager.png"
          alt="Lager øl"
          class="h-[350px] md:h-[600px] beer-image"
        />
        <img
          src="../assets/images/desktop/renaessance.png"
          alt="Renæssance øl"
          class="h-[350px] md:h-[600px] beer-image"
        />
        <img
          src="../assets/images/desktop/hvede.png"
          alt="Hvede øl"
          class="h-[300px] md:h-[600px] beer-image hidden lg:block"
        />
        <img
          src="../assets/images/desktop/lager.png"
          alt="Lager øl"
          class="h-[300px] md:h-[600px] beer-image hidden lg:block"
        />
        <img
          src="../assets/images/desktop/renaessance.png"
          alt="Renæssance øl"
          class="h-[300px] md:h-[600px] beer-image hidden lg:block"
        />
      </div>
    </div>

    <!-- når loading skærmen er færdig og false vises aldersbekræftelses popuppen -->
    <div
      v-else
      class="fixed inset-0 z-50 bg-neutral-1 text-neutral-1 bg-opacity-50 flex items-center justify-center overflow-hidden"
    >
      <div
        class="bg-white text-black p-[1.5rem] text-center w-[300px] md:w-[400px] shadow-lg flex items-center justify-center flex-col"
      >
        <img
          src="../assets/images/fur-logo.png"
          alt="Fur logo"
          class="w-[200px]"
        />
        <p class="p-medium pb-[2rem]">
          For at du kan besøge websitet, er vi nødt til at verificere din alder.
        </p>
        <p>Er du over 18 år?</p>
        <div
          class="flex align-middle content-center items-center w-full justify-center gap-4"
        >
          <button
            @click="confirmAge"
            class="bg-fur-blue hover:bg-fur-accent-blue text-neutral-6 px-4 py-2"
          >
            Ja
          </button>
          <button
            @click="denyAge"
            class="bg-fur-blue hover:bg-fur-accent-blue text-neutral-6 px-4 py-2"
          >
            Nej
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const showPopup = ref(false);
const showLoading = ref(true);

// Her tjekkes om brugeren har sagt ja til at de er over 18 ellers bliver komponentet vist. hvis ikke de har accepteret bliver komponentet vist og body sat på overflow hidden
onMounted(() => {
  const accepted = sessionStorage.getItem("ageConfirmed");
  if (!accepted) {
    showPopup.value = true;
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      showLoading.value = false;
    }, 5000);
  }
});

// hvis brugere trykker ja gemmer deres resultat i sessionstorage og popuppen bliver ikke vist igen
const confirmAge = () => {
  sessionStorage.setItem("ageConfirmed", "true");
  showPopup.value = false;
  document.body.style.overflow = "";
};

// hvis brugere trykker nej så bliver brugeren sendt ud til google og væk fra siden
const denyAge = () => {
  document.body.style.overflow = "";
  window.location.href = "https://google.com";
};
</script>

<style scoped>
.beer-image {
  opacity: 0;
  transform: translateY(100px);
  animation: popUp 1s ease-out forwards;
}

.beer-image:nth-child(1) {
  animation-delay: 0.4s;
}
.beer-image:nth-child(2) {
  animation-delay: 0.8s;
}
.beer-image:nth-child(3) {
  animation-delay: 1.2s;
}
.beer-image:nth-child(4) {
  animation-delay: 1.6s;
}
.beer-image:nth-child(5) {
  animation-delay: 2s;
}
.beer-image:nth-child(6) {
  animation-delay: 2.4s;
}

@keyframes popUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
