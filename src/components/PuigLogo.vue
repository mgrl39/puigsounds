<template>
  <div class="logo-container">
    <div class="logo"></div>
  </div>
</template>

<script setup>
// No se necesita lógica adicional
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.logo {
  width: 159px;
  height: 91px;
  flex-shrink: 0;
  background: url('../../assets/images/logos/puig-logo.png') 50% / cover no-repeat;
}
</style>