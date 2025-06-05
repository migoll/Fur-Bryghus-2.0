<template>
  <div class="google-map-container">
    <iframe
      class="google-map"
      :src="iframe"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
defineProps({
  iframe: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.google-map-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
}

.google-map {
  width: 100%;
  height: 480px;
  border: none;
  border-radius: 8px;
}
</style>
