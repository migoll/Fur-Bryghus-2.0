<template>
  <div class="text-2xl p-4">
    <h1 class="font-anton">Fur Bryghus – Nu kører det!</h1>
  </div>
  <Button label="Se menu" to="/restaurant/menukort" />
  <Button label="Se menu" />
  <FocusedEntryPoints
    :entries="['Vores-produkter', 'Bryggeprocessen', 'Vores historie']"
  />
</template>
