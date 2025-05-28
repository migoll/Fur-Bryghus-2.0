<template>
  <!-- komponent til at vise en loading screen og herefter en pop up hvor man skal bekræfte sin alder -->
   <!-- Når brugeren ikke har bekræftet deres alder vises dette komponent -->
  <section v-if="showPopup" >
    <!-- her er loading skærmen som vises først med en overskrift og en lille lottie animation -->
   <div v-if="showLoading" class="fixed inset-0 z-50 bg-fur-blue text-neutral-1 flex items-center justify-center">
    <div class="flex flex-col items-center gap-[2rem] justify-center p-[2rem]">
       <h2 class="text-neutral-6 text-center">Velkommen til Fur Bryghus</h2>
       <!-- https://app.lottiefiles.com/animation/32744d94-5810-43cf-9738-ff235d2c8d1b -->
       <DotLottieVue
        style="height: 200px; width: 200px"
        autoplay
        loop
        speed="0.5"
        src="https://lottie.host/72d706ae-d7cc-4f9a-b11d-33aaf8bc8ecf/0JFGSsM0eZ.lottie"
      />
    </div>
   </div>

   <!-- når loading skærmen er færdig og false vises aldersbekræftelses popuppen -->
    <div v-else class="fixed inset-0 z-50 bg-neutral-1 text-neutral-1 bg-opacity-50 flex items-center justify-center overflow-hidden">
    <div class="bg-white text-black p-[1.5rem] rounded text-center w-[200px] md:w-[400px] shadow-lg  flex items-center justify-center flex-col">
           <img src="../assets/images/fur-logo.png" alt="Fur logo" class="w-[200px]">
      <p class="p-medium pb-[2rem]">For at du kan besøge websitet, er vi nødt til at verificere din alder.</p>
        <p>Er du over 18 år?</p>
      <div class="flex align-middle content-center items-center w-full justify-center gap-4">
        <button @click="confirmAge" class=" bg-fur-blue hover:bg-fur-accent-blue text-neutral-6 px-4 py-2">Ja</button>
        <button @click="denyAge" class=" bg-fur-blue  hover:bg-fur-accent-blue text-neutral-6 px-4 py-2">Nej</button>
      </div>
    </div>
    </div>
</section>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const showPopup = ref(false)
const showLoading = ref(true)

// Her tjekkes om brugeren har sagt ja til at de er over 18 ellers bliver komponentet vist. hvis ikke de har accepteret bliver komponentet vist og body sat på overflow hidden
onMounted(() => {
  const accepted = sessionStorage.getItem('ageConfirmed')
  if (!accepted) {
    showPopup.value = true
    document.body.style.overflow = 'hidden'

    setTimeout(() => {
      showLoading.value = false
    }, 5000)
  }
})

// hvis brugere trykker ja gemmer deres resultat i sessionstorage og popuppen bliver ikke vist igen
const confirmAge = () => {
  sessionStorage.setItem('ageConfirmed', 'true')
  showPopup.value = false
  document.body.style.overflow = ''
}

// hvis brugere trykker nej så bliver brugeren sendt ud til google og væk fra siden
const denyAge = () => {
     document.body.style.overflow = ''
  window.location.href = 'https://google.com' 
}
</script>

<style scoped>
</style>
