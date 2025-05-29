<template>
  <div class="google-map-container">
    <iframe
      class="google-map"
      src="https://www.google.com/maps/d/u/0/embed?mid=1do7YHD5GkTZCz3q7J0DEmsTys_Z9JqE&ehbc=2E312F&noprof=1" 
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
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
