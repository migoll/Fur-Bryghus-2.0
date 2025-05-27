<template>
  <div>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup>
// denne kode viser en intersectionObserver der bruges til at holde øje med hvornår en bruger scroller ned til elementet og så starter effekten .scroll-fade
// onMounted er en composition Api lifecycle hook, som betyder at koden først køres når html findes i dom'en
onMounted(() => {
  // her oprettes observeren som holder øje med elementerne
  const observer = new IntersectionObserver((entries) => {
    // Her laves en foreach fordi der er flere elementer og for hvert entry bliver der tjekket om det er synligt i viewporten
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        // Her stoppes med at observere så fade animation kun køre en gang
        observer.unobserve(entry.target)
      }
    })
    // animationen køre først når mindst 10% af elementet er synligt
  }, { threshold: 0.1 })

  // Her findes alle elementerne med klassen scroll-fade og de bliver observeret
  document.querySelectorAll('.scroll-fade').forEach((el) => {
    observer.observe(el)
  })
})
</script>
