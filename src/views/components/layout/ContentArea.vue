<template>
  <div class="content-area">
    <slot></slot>
  </div>
</template>

<script setup>
// No se necesita lógica aquí ya que solo es un contenedor
</script>

<!-- Start of Selection -->
<style scoped>
.content-area {
  flex: 1;
  background: #38111a;
  border: 10px solid rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  min-height: 706px;
}
</style> 
<!-- End of Selection -->