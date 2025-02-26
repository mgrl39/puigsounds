<template>
  <div class="champions-banner">
    <div class="banner-content">
      <img class="champions-logo">
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.champions-banner {
  width: 100%;
  /*max-width: 832px;*/
  aspect-ratio: 832/142;
  border-radius: 25px;
  border: 10px solid #38111A;
  background: url('../../assets/images/banner/banner-champions.png') lightgray 50% / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  min-width: 300px; /* Ancho mínimo para evitar que se rompa */
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan si no hay espacio */
  gap: 10px; /* Espacio entre elementos cuando se envuelven */
}

.champions-logo {
  height: clamp(30px, 12vw, 60px); /* Tamaño responsive con límites */
  width: auto;
  object-fit: contain; /* Mantiene la proporción de la imagen */
}

.date {
  color: white;
  font-family: 'Rubik', sans-serif;
  font-size: clamp(14px, 4vw, 24px); /* Texto más responsive */
  font-weight: bold;
}

.trophy-image {
  height: clamp(40px, 15vw, 80px); /* Tamaño responsive con límites */
  width: auto;
  object-fit: contain;
}
</style>